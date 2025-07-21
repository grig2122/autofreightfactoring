'use client'

import { useEffect } from 'react'

export function GATestPlain() {
  useEffect(() => {
    console.log('[GA Plain Test] Starting GA test with plain script tag')
    
    // Method 1: Create script element dynamically
    const script = document.createElement('script')
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-V11G85PLVJ'
    script.async = true
    
    script.onload = () => {
      console.log('[GA Plain Test] Script loaded successfully')
      
      // Initialize gtag
      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }
      window.gtag = gtag
      
      gtag('js', new Date())
      gtag('config', 'G-V11G85PLVJ')
      
      console.log('[GA Plain Test] gtag initialized, dataLayer:', window.dataLayer)
    }
    
    script.onerror = (error) => {
      console.error('[GA Plain Test] Script failed to load:', error)
      
      // Try alternative approach - direct fetch
      fetch('https://www.googletagmanager.com/gtag/js?id=G-V11G85PLVJ')
        .then(response => {
          console.log('[GA Plain Test] Fetch response:', response.status, response.statusText)
          return response.text()
        })
        .then(scriptContent => {
          console.log('[GA Plain Test] Script content length:', scriptContent.length)
          // Could eval the script here if needed
        })
        .catch(fetchError => {
          console.error('[GA Plain Test] Fetch failed:', fetchError)
        })
    }
    
    document.head.appendChild(script)
    
    // Method 2: Check if it's a CSP issue
    const testCSP = () => {
      const meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]')
      if (meta) {
        console.log('[GA Plain Test] CSP meta tag found:', meta.getAttribute('content'))
      } else {
        console.log('[GA Plain Test] No CSP meta tag found')
      }
      
      // Check if we can load any external script
      const testScript = document.createElement('script')
      testScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js'
      testScript.onload = () => console.log('[GA Plain Test] Test script (lodash) loaded successfully')
      testScript.onerror = () => console.error('[GA Plain Test] Test script (lodash) failed to load')
      document.head.appendChild(testScript)
    }
    
    testCSP()
    
    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])
  
  return null
}

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}