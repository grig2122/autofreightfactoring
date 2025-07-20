'use client'

import Script from 'next/script'
import { useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-V11G85PLVJ'
const GOOGLE_ADS_ID = 'AW-17368459818'

export function AnalyticsScriptDebug() {
  useEffect(() => {
    // Log when component mounts
    console.log('[GA Debug] AnalyticsScriptDebug component mounted');
    
    // Check if gtag exists after a delay
    const checkGtag = setInterval(() => {
      if (typeof window !== 'undefined') {
        console.log('[GA Debug] Checking gtag status...', {
          hasGtag: typeof (window as any).gtag === 'function',
          hasDataLayer: Array.isArray((window as any).dataLayer),
          dataLayerLength: (window as any).dataLayer?.length || 0
        });
        
        if (typeof (window as any).gtag === 'function') {
          console.log('[GA Debug] gtag function is available!');
          clearInterval(checkGtag);
        }
      }
    }, 1000);
    
    // Cleanup
    return () => clearInterval(checkGtag);
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onLoad={() => {
          console.log('[GA Debug] Google Analytics script loaded successfully');
        }}
        onError={(e) => {
          console.error('[GA Debug] Failed to load Google Analytics script:', e);
        }}
      />
      <Script 
        id="google-analytics-debug" 
        strategy="afterInteractive"
        onReady={() => {
          console.log('[GA Debug] Inline GA script ready to execute');
        }}
      >
        {`
          console.log('[GA Debug] Starting GA initialization...');
          
          window.dataLayer = window.dataLayer || [];
          console.log('[GA Debug] dataLayer initialized');
          
          function gtag(){
            console.log('[GA Debug] gtag called with args:', arguments);
            dataLayer.push(arguments);
          }
          
          window.gtag = gtag;
          console.log('[GA Debug] gtag function defined');
          
          gtag('js', new Date());
          console.log('[GA Debug] gtag js command sent');
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
            debug_mode: true,
            send_page_view: true
          });
          console.log('[GA Debug] GA4 config sent for ${GA_MEASUREMENT_ID}');
          
          gtag('config', '${GOOGLE_ADS_ID}');
          console.log('[GA Debug] Google Ads config sent for ${GOOGLE_ADS_ID}');
          
          // Send a test event
          setTimeout(() => {
            console.log('[GA Debug] Sending test event...');
            gtag('event', 'page_view_debug', {
              page_title: document.title,
              page_location: window.location.href,
              debug_mode: true
            });
          }, 2000);
          
          // Log network requests
          if (window.PerformanceObserver) {
            const observer = new PerformanceObserver((list) => {
              for (const entry of list.getEntries()) {
                if (entry.name.includes('google-analytics.com') || 
                    entry.name.includes('google.com/g/collect') ||
                    entry.name.includes('googletagmanager.com')) {
                  console.log('[GA Debug] GA Network Request:', entry.name);
                }
              }
            });
            observer.observe({ entryTypes: ['resource'] });
          }
        `}
      </Script>
    </>
  )
}