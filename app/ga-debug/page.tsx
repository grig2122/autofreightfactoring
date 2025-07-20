'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function GADebugPage() {
  const [gaStatus, setGaStatus] = useState<any>({})
  const [logs, setLogs] = useState<string[]>([])
  
  useEffect(() => {
    // Capture console logs
    const originalLog = console.log
    const originalError = console.error
    const capturedLogs: string[] = []
    
    console.log = (...args) => {
      const message = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
      ).join(' ')
      
      if (message.includes('[GA Debug]')) {
        capturedLogs.push(`[LOG] ${new Date().toLocaleTimeString()}: ${message}`)
        setLogs(prev => [...prev, `[LOG] ${new Date().toLocaleTimeString()}: ${message}`])
      }
      originalLog.apply(console, args)
    }
    
    console.error = (...args) => {
      const message = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
      ).join(' ')
      
      if (message.includes('[GA Debug]')) {
        capturedLogs.push(`[ERROR] ${new Date().toLocaleTimeString()}: ${message}`)
        setLogs(prev => [...prev, `[ERROR] ${new Date().toLocaleTimeString()}: ${message}`])
      }
      originalError.apply(console, args)
    }
    
    const checkGA = () => {
      const win = window as any
      const status = {
        gtag: typeof win.gtag === 'function',
        dataLayer: Array.isArray(win.dataLayer),
        dataLayerLength: win.dataLayer?.length || 0,
        cookies: document.cookie.split(';').filter(c => 
          c.includes('_ga') || c.includes('_gid') || c.includes('_gat')
        ).map(c => c.trim()),
        
        // Check for GA objects
        googleTagManager: !!win.google_tag_manager,
        googleTagData: !!win.google_tag_data,
        gaGlobal: !!win.ga,
        
        // Check network requests
        gaRequests: performance.getEntries()
          .filter(e => 
            e.name.includes('google-analytics.com') || 
            e.name.includes('google.com/g/collect') ||
            e.name.includes('googletagmanager.com')
          )
          .map(e => ({
            url: e.name.substring(0, 100),
            type: (e as any).initiatorType,
            duration: (e as any).duration
          })),
          
        // Last few dataLayer items
        lastDataLayer: win.dataLayer?.slice(-10) || [],
        
        // Check if scripts are in DOM
        gaScriptsInDOM: Array.from(document.scripts).filter(s => 
          s.src.includes('googletagmanager.com')
        ).map(s => ({
          src: s.src,
          async: s.async,
          defer: s.defer
        }))
      }
      setGaStatus(status)
    }
    
    // Check immediately and after delays
    checkGA()
    const timer1 = setTimeout(checkGA, 2000)
    const timer2 = setTimeout(checkGA, 5000)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      console.log = originalLog
      console.error = originalError
    }
  }, [])
  
  const sendTestEvent = () => {
    if ((window as any).gtag) {
      (window as any).gtag('event', 'debug_test_click', {
        event_category: 'debug',
        event_label: 'test_button'
      })
      alert('Test event sent!')
    }
  }
  
  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Google Analytics Debug Information</CardTitle>
          <CardDescription>
            This page helps diagnose Google Analytics issues
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Console Logs (GA Debug):</h3>
              <div className="bg-black text-green-400 p-4 rounded font-mono text-xs max-h-64 overflow-auto">
                {logs.length > 0 ? logs.map((log, i) => (
                  <div key={i}>{log}</div>
                )) : (
                  <div className="text-gray-500">No GA debug logs captured yet...</div>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">GA Status:</h3>
              <pre className="bg-gray-100 p-4 rounded overflow-auto text-sm">
                {JSON.stringify(gaStatus, null, 2)}
              </pre>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Common Issues:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Ad blockers can prevent GA from loading</li>
                <li>Browser privacy settings may block tracking</li>
                <li>GA4 properties need to be properly configured in Google Analytics</li>
                <li>Content Security Policy (CSP) might block GA</li>
                <li>Check browser console for errors (F12)</li>
              </ul>
            </div>
            
            <button 
              onClick={sendTestEvent}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Test Event
            </button>
            
            <button 
              onClick={() => window.location.reload()}
              className="ml-2 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Refresh Page
            </button>
            
            <div className="mt-4 p-4 bg-yellow-50 rounded">
              <p className="text-sm">
                <strong>To verify in Google Analytics:</strong><br />
                1. Go to your GA4 property (G-V11G85PLVJ)<br />
                2. Navigate to Reports → Realtime<br />
                3. You should see activity when visiting pages or clicking the test button<br />
                4. Also check Configure → DebugView for detailed event debugging
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}