'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function GADebugPage() {
  const [gaStatus, setGaStatus] = useState<any>({})
  
  useEffect(() => {
    const checkGA = () => {
      const status = {
        gtag: typeof (window as any).gtag === 'function',
        dataLayer: Array.isArray((window as any).dataLayer),
        dataLayerLength: (window as any).dataLayer?.length || 0,
        cookies: document.cookie.split(';').filter(c => 
          c.includes('_ga') || c.includes('_gid')
        ),
        // Check network requests
        gaRequests: performance.getEntries()
          .filter(e => e.name.includes('google-analytics.com') || e.name.includes('google.com'))
          .map(e => e.name),
        // Last few dataLayer items
        lastDataLayer: (window as any).dataLayer?.slice(-5) || []
      }
      setGaStatus(status)
    }
    
    // Check immediately and after a delay
    checkGA()
    const timer = setTimeout(checkGA, 3000)
    
    return () => clearTimeout(timer)
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
                <li>It can take 24-48 hours for data to appear in GA reports</li>
              </ul>
            </div>
            
            <button 
              onClick={sendTestEvent}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Test Event
            </button>
            
            <div className="mt-4 p-4 bg-yellow-50 rounded">
              <p className="text-sm">
                <strong>To verify in Google Analytics:</strong><br />
                1. Go to your GA4 property (G-V11G85PLVJ)<br />
                2. Navigate to Reports → Realtime<br />
                3. You should see activity when visiting pages or clicking the test button
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}