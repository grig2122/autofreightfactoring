import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import crypto from 'crypto';

// Google Ads Offline Conversion Import
const GOOGLE_ADS_CONVERSION_ACTION_ID = process.env.GOOGLE_ADS_CONVERSION_ACTION_ID;
const GOOGLE_ADS_API_KEY = process.env.GOOGLE_ADS_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { conversions } = body;
    
    if (!conversions || !Array.isArray(conversions)) {
      return NextResponse.json(
        { error: 'Invalid conversion data' },
        { status: 400 }
      );
    }

    // Get user IP and user agent for server-side tracking
    const headersList = await headers();
    const userAgent = headersList.get('user-agent') || '';
    const forwardedFor = headersList.get('x-forwarded-for');
    const userIp = forwardedFor ? forwardedFor.split(',')[0] : 
                   headersList.get('x-real-ip') || 
                   'unknown';

    // Process each conversion
    const results = await Promise.all(
      conversions.map(async (conversion) => {
        try {
          // Send to Google Analytics 4 Measurement Protocol
          await sendToGA4(conversion, userAgent, userIp);
          
          // Send to Google Ads if configured
          if (GOOGLE_ADS_CONVERSION_ACTION_ID && GOOGLE_ADS_API_KEY) {
            await sendToGoogleAds(conversion);
          }

          // Log conversion for monitoring
          console.log('Conversion tracked:', {
            formId: conversion.form_id,
            sessionId: conversion.session_id,
            timestamp: conversion.conversion_time,
            device: conversion.device_type
          });

          return { success: true, id: conversion.session_id };
        } catch (error) {
          console.error('Failed to track conversion:', error);
          return { success: false, id: conversion.session_id, error: String(error) };
        }
      })
    );

    // Check if any conversions failed
    const failures = results.filter(r => !r.success);
    if (failures.length > 0) {
      return NextResponse.json(
        { 
          message: 'Some conversions failed to track',
          results,
          failures 
        },
        { status: 207 } // Multi-status
      );
    }

    return NextResponse.json({ 
      message: 'Conversions tracked successfully',
      results 
    });

  } catch (error) {
    console.error('Conversion tracking error:', error);
    return NextResponse.json(
      { error: 'Failed to track conversions' },
      { status: 500 }
    );
  }
}

async function sendToGA4(conversion: any, userAgent: string, userIp: string) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-YOUR_ID';
  const apiSecret = process.env.GA_API_SECRET || '';

  if (!apiSecret) {
    console.warn('GA4 API secret not configured');
    return;
  }

  const payload = {
    client_id: conversion.session_id || generateClientId(),
    user_id: conversion.user_data?.email_hash,
    timestamp_micros: Date.now() * 1000,
    user_properties: {
      device_type: { value: conversion.device_type },
      form_source: { value: conversion.form_id }
    },
    events: [{
      name: 'conversion',
      params: {
        currency: 'USD',
        value: 1.0,
        session_id: conversion.session_id,
        engagement_time_msec: 100,
        form_id: conversion.form_id,
        attribution_source: conversion.attribution?.campaign?.source || 'direct',
        attribution_medium: conversion.attribution?.campaign?.medium || 'none',
        attribution_campaign: conversion.attribution?.campaign?.campaign || '',
        page_referrer: conversion.attribution?.referrer || ''
      }
    }]
  };

  try {
    const response = await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': userAgent
        },
        body: JSON.stringify(payload)
      }
    );

    if (!response.ok) {
      throw new Error(`GA4 tracking failed: ${response.status}`);
    }
  } catch (error) {
    console.error('GA4 Measurement Protocol error:', error);
    throw error;
  }
}

async function sendToGoogleAds(conversion: any) {
  // Google Ads Offline Conversion API
  // This requires OAuth2 setup and Google Ads API client library
  // For now, we'll use the conversion tracking pixel approach
  
  const conversionLabel = getConversionLabel(conversion.form_id);
  const gclid = conversion.attribution?.gclid || extractGclid(conversion);

  if (!gclid) {
    console.log('No GCLID found for Google Ads conversion');
    return;
  }

  // In production, you would use the Google Ads API client
  // For demonstration, we're showing the structure
  const conversionData = {
    conversionAction: `customers/${process.env.GOOGLE_ADS_CUSTOMER_ID}/conversionActions/${GOOGLE_ADS_CONVERSION_ACTION_ID}`,
    gclid: gclid,
    conversionDateTime: conversion.conversion_time,
    conversionValue: 1.0,
    currencyCode: 'USD',
    orderId: conversion.session_id
  };

  console.log('Google Ads conversion data prepared:', conversionData);
  // Actual API call would go here
}

function getConversionLabel(formId: string): string {
  const labels: Record<string, string> = {
    'contact-form': 'CONTACT_FORM_SUBMIT',
    'apply-form': 'APPLICATION_SUBMIT',
    'quote-form': 'QUOTE_REQUEST',
    'fuel-card-form': 'FUEL_CARD_APPLICATION'
  };
  
  return labels[formId] || 'GENERIC_CONVERSION';
}

function extractGclid(conversion: any): string | null {
  // Try to extract GCLID from various sources
  if (conversion.attribution?.campaign?.gclid) {
    return conversion.attribution.campaign.gclid;
  }
  
  // Parse from landing page URL if available
  if (conversion.attribution?.landing_page) {
    const url = new URL(conversion.attribution.landing_page);
    const gclid = url.searchParams.get('gclid');
    if (gclid) return gclid;
  }
  
  return null;
}

function generateClientId(): string {
  return crypto.randomBytes(16).toString('hex');
}

// GET endpoint for testing
export async function GET() {
  return NextResponse.json({ 
    status: 'Conversion tracking endpoint is active',
    timestamp: new Date().toISOString()
  });
}