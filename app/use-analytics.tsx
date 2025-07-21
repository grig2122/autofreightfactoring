'use client'

import { useEffect } from 'react'

export function useAnalytics() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return
    
    console.log('[useAnalytics] Initializing Google Analytics')
    
    // Method 1: Try standard implementation
    const loadGA = () => {
      // Create gtag function first
      window.dataLayer = window.dataLayer || []
      window.gtag = function() {
        window.dataLayer.push(arguments)
      }
      
      // Create and append script
      const existingScript = document.querySelector('script[src*="googletagmanager.com/gtag"]')
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-V11G85PLVJ'
        script.async = true
        
        script.onload = () => {
          console.log('[useAnalytics] GA script loaded')
          window.gtag('js', new Date())
          window.gtag('config', 'G-V11G85PLVJ', {
            page_path: window.location.pathname,
          })
        }
        
        script.onerror = (e) => {
          console.error('[useAnalytics] GA script failed to load:', e)
          // Try inline implementation
          tryInlineImplementation()
        }
        
        document.head.appendChild(script)
      } else {
        console.log('[useAnalytics] GA script already exists')
        // Initialize if not already done
        window.gtag('js', new Date())
        window.gtag('config', 'G-V11G85PLVJ', {
          page_path: window.location.pathname,
        })
      }
    }
    
    // Method 2: Inline implementation fallback
    const tryInlineImplementation = () => {
      console.log('[useAnalytics] Trying inline GA implementation')
      
      // This is a minimal gtag implementation
      window.dataLayer = window.dataLayer || []
      window.gtag = function() {
        window.dataLayer.push(arguments)
        
        // Log events for debugging
        if (arguments[0] === 'event') {
          console.log('[useAnalytics] Event:', arguments[1], arguments[2])
        }
      }
      
      // Send page view
      window.gtag('js', new Date())
      window.gtag('config', 'G-V11G85PLVJ', {
        page_path: window.location.pathname,
        debug_mode: true
      })
      
      // Try to send a beacon directly (experimental)
      const sendBeacon = () => {
        const data = {
          v: '2',
          tid: 'G-V11G85PLVJ',
          cid: localStorage.getItem('ga_cid') || Math.random().toString(36).substring(2),
          t: 'pageview',
          dl: window.location.href,
          dt: document.title,
          dr: document.referrer
        }
        
        localStorage.setItem('ga_cid', data.cid)
        
        // This would send to GA collect endpoint (if not blocked)
        const params = new URLSearchParams(data)
        const url = `https://www.google-analytics.com/g/collect?${params}`
        
        // Try sending via fetch
        fetch(url, { method: 'POST', mode: 'no-cors' })
          .then(() => console.log('[useAnalytics] Beacon sent'))
          .catch(e => console.error('[useAnalytics] Beacon failed:', e))
      }
      
      // Uncomment to try beacon approach
      // sendBeacon()
    }
    
    // Start loading GA
    loadGA()
    
    // Listen for route changes
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: window.location.pathname,
          page_location: window.location.href,
          page_title: document.title
        })
      }
    }
    
    // Simple route change detection
    let lastPath = window.location.pathname
    const checkForRouteChange = () => {
      if (window.location.pathname !== lastPath) {
        lastPath = window.location.pathname
        handleRouteChange()
      }
    }
    
    const interval = setInterval(checkForRouteChange, 1000)
    
    return () => {
      clearInterval(interval)
    }
  }, [])
}

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}