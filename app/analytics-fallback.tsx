'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function AnalyticsFallback() {
  const pathname = usePathname()
  
  useEffect(() => {
    // Generate or retrieve client ID
    let clientId = localStorage.getItem('ga_client_id')
    if (!clientId) {
      clientId = `${Date.now()}.${Math.random().toString(36).substring(2, 9)}`
      localStorage.setItem('ga_client_id', clientId)
    }
    
    // Track page view through our server endpoint
    const trackEvent = async (eventName: string, eventParams: any) => {
      try {
        const response = await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            clientId,
            eventName,
            eventParams
          })
        })
        
        if (response.ok) {
          console.log('[GA Fallback] Event tracked via server:', eventName)
        }
      } catch (error) {
        console.error('[GA Fallback] Failed to track event:', error)
      }
    }
    
    // Track page view
    trackEvent('page_view', {
      page_location: window.location.href,
      page_title: document.title,
      page_path: pathname
    })
    
    // Also try the standard gtag approach
    if (typeof window !== 'undefined') {
      // Re-define gtag to ensure it exists
      window.dataLayer = window.dataLayer || []
      window.gtag = function() {
        window.dataLayer.push(arguments)
      }
      
      // Try to send via gtag
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_location: window.location.href,
          page_title: document.title,
          page_path: pathname
        })
      }
    }
  }, [pathname])
  
  return null
}

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}