'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// GA4 Measurement Protocol v2
const GA_MEASUREMENT_ID = 'G-V11G85PLVJ'
const GA_API_SECRET = 'YOUR_API_SECRET' // You need to get this from GA4

export function AnalyticsMeasurementProtocol() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Try the standard gtag approach first
    if (typeof window !== 'undefined') {
      // Create a simple fallback if gtag doesn't work
      const sendEvent = async (eventName: string, params: any) => {
        try {
          // Log what we're trying to send
          console.log('[GA Fallback] Attempting to send event:', eventName, params);
          
          // Try gtag first
          if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', eventName, params);
            console.log('[GA Fallback] Event sent via gtag');
          }
          
          // If we have an API secret, we could use Measurement Protocol
          // This is a backup method that sends data directly to GA4
          if (GA_API_SECRET !== 'YOUR_API_SECRET') {
            const clientId = localStorage.getItem('ga_client_id') || 
              `${Date.now()}.${Math.random().toString(36).substring(2, 9)}`;
            localStorage.setItem('ga_client_id', clientId);
            
            const payload = {
              client_id: clientId,
              events: [{
                name: eventName,
                params: {
                  ...params,
                  engagement_time_msec: '100',
                  session_id: Date.now().toString()
                }
              }]
            };
            
            // This would send directly to GA4 servers
            // Note: This requires an API secret from GA4 Admin
            /*
            await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`, {
              method: 'POST',
              body: JSON.stringify(payload)
            });
            */
          }
        } catch (error) {
          console.error('[GA Fallback] Error sending event:', error);
        }
      };
      
      // Send page view
      sendEvent('page_view', {
        page_location: window.location.href,
        page_title: document.title,
        page_path: pathname
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      {/* Traditional GA4 setup - keeping this as primary method */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            
            // Add error handling
            window.addEventListener('error', function(e) {
              if (e.filename && e.filename.includes('googletagmanager.com')) {
                console.error('[GA] Failed to load Google Tag Manager:', e.message);
                // Could implement fallback here
              }
            });
          `,
        }}
      />
    </>
  );
}