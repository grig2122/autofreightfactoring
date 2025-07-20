'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function GATestPage() {
  useEffect(() => {
    // Send page view on mount
    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log('Sending GA test page view');
      (window as any).gtag('event', 'page_view', {
        page_title: 'GA Test Page',
        page_location: window.location.href,
        page_path: '/ga-test'
      });
    }
  }, []);

  const sendTestEvent = (eventName: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      console.log(`Sending test event: ${eventName}`);
      (window as any).gtag('event', eventName, {
        event_category: 'GA_Test',
        event_label: 'Test Button Click',
        value: 1
      });
      alert(`Event sent: ${eventName}`);
    } else {
      alert('Google Analytics not loaded!');
    }
  };

  const checkGAStatus = () => {
    const status = {
      gtag: typeof (window as any).gtag === 'function',
      dataLayer: !!(window as any).dataLayer,
      dataLayerLength: (window as any).dataLayer ? (window as any).dataLayer.length : 0,
      lastEvents: (window as any).dataLayer ? (window as any).dataLayer.slice(-5) : []
    };
    console.log('GA Status:', status);
    alert(JSON.stringify(status, null, 2));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Google Analytics Test Page</CardTitle>
            <CardDescription>
              Use this page to test if Google Analytics is working properly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">How to verify GA is working:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Open Google Analytics 4 dashboard</li>
                <li>Go to Reports → Realtime</li>
                <li>Click the buttons below and check if events appear</li>
                <li>Check the browser console for any errors</li>
              </ol>
            </div>

            <div className="space-y-2">
              <Button 
                onClick={() => sendTestEvent('test_button_click')}
                className="w-full"
              >
                Send Test Click Event
              </Button>

              <Button 
                onClick={() => sendTestEvent('test_conversion')}
                variant="outline"
                className="w-full"
              >
                Send Test Conversion Event
              </Button>

              <Button 
                onClick={checkGAStatus}
                variant="secondary"
                className="w-full"
              >
                Check GA Status
              </Button>
            </div>

            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h4 className="font-semibold mb-2">GA Configuration:</h4>
              <ul className="text-sm space-y-1">
                <li>GA4 ID: G-V11G85PLVJ</li>
                <li>Google Ads ID: AW-17368459818</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}