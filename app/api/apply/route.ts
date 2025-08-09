import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import type { Lead, PreApprovalResult } from '@/lib/types'
import { sendApplicationNotification } from '@/lib/email'
import { getConversionConfig } from '@/lib/google-ads-config'

// Pre-approval scoring logic
function calculatePreApprovalScore(data: any): number {
  let score = 0

  // Monthly invoice volume scoring
  switch (data.monthlyInvoiceVolume) {
    case '$0-10k':
      score += 10
      break
    case '$10-50k':
      score += 30
      break
    case '$50-100k':
      score += 40
      break
    case '$100k+':
      score += 50
      break
  }

  // Years in business
  const years = parseInt(data.yearsInBusiness) || 0
  if (years >= 5) {
    score += 30
  } else if (years >= 2) {
    score += 20
  } else if (years >= 1) {
    score += 10
  }

  // Company type
  if (data.companyType === 'fleet') {
    score += 10
  } else if (data.companyType === 'owner-operator') {
    score += 5
  }

  // Not currently factoring (growth opportunity)
  if (data.currentFactoring === 'no') {
    score += 10
  }

  // Has DOT number (shows legitimacy)
  if (data.dotNumber) {
    score += 5
  }

  return score
}

// Calculate estimated rate based on score
function calculateEstimatedRate(score: number): string {
  if (score >= 80) return '1.5%'
  if (score >= 60) return '1.8%'
  if (score >= 50) return '2.0%'
  if (score >= 40) return '2.3%'
  return '2.5%'
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Calculate pre-approval score
    const score = calculatePreApprovalScore(data)
    console.log('Pre-approval calculation:', { data, score })
    const isApproved = score >= 50
    const estimatedRate = calculateEstimatedRate(score)

    // Prepare lead data for Firestore
    const leadData: Omit<Lead, 'id'> = {
      ...data,
      preApprovalScore: score,
      preApproved: isApproved,
      status: isApproved ? 'pre-approved' : 'new',
      createdAt: new Date(),
      source: request.headers.get('referer') || 'direct'
    }

    // Save to Firestore (skip if not configured)
    try {
      // Only try to save if Firebase is properly configured and db is available
      if (db && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== 'your-project-id') {
        const docRef = await addDoc(collection(db, 'leads'), {
          ...leadData,
          createdAt: serverTimestamp()
        })
        console.log('Lead saved with ID:', docRef.id)
      } else {
        console.log('Firebase not configured - skipping database save')
        console.log('Lead data:', leadData)
      }
    } catch (error) {
      console.error('Error saving lead:', error)
      // Continue even if save fails - don't block user experience
    }

    // Send email notification
    try {
      await sendApplicationNotification({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        companyName: data.companyName,
        companyType: data.companyType,
        dotNumber: data.dotNumber,
        monthlyInvoiceVolume: data.monthlyInvoiceVolume,
        yearsInBusiness: data.yearsInBusiness,
        currentFactoring: data.currentFactoring,
        isApproved,
        score,
        estimatedRate
      })
      console.log('Email notification sent successfully')
    } catch (error) {
      console.error('Error sending email notification:', error)
      // Continue even if email fails - don't block user experience
    }

    // Track Google Ads conversion server-side using Measurement Protocol
    try {
      const conversionConfig = getConversionConfig('applicationSubmit')
      const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-17368459818'
      
      // Log conversion tracking attempt for debugging
      console.log('Tracking Google Ads conversion:', {
        conversionLabel: conversionConfig.label,
        value: conversionConfig.defaultValue,
        companyName: data.companyName
      })
      
      // Note: Server-side conversion tracking requires additional setup with Google Ads API
      // For now, we'll ensure the client-side tracking works properly
    } catch (error) {
      console.error('Error tracking conversion:', error)
    }

    // Always return the same thank you message
    const result: PreApprovalResult = {
      approved: true, // Set to true so it shows success UI
      message: 'Thank you for your application! We\'ll contact you within 24 hours.',
      nextStep: 'sales-contact',
      followUpTime: 'within 24 hours'
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error processing application:', error)
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
}