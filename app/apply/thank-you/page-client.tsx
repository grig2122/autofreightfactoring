'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircle, ArrowRight, Phone, FileText, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const firstName = searchParams.get('name') || 'there'
  const approved = searchParams.get('approved') === 'true'
  const amount = searchParams.get('amount')

  useEffect(() => {
    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17368459818/CONVERSION_LABEL', // Replace CONVERSION_LABEL with your actual label
        'value': amount ? parseInt(amount) : 0,
        'currency': 'USD'
      });
    }
  }, [amount])

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-3xl">
              {approved ? 'Congratulations! You\'re Pre-Approved!' : 'Thank You for Applying!'}
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              {approved 
                ? `Great news, ${firstName}! You're pre-approved for up to $${amount || '50,000'} in funding.`
                : `Thank you for your application, ${firstName}. We're reviewing your information.`
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {approved && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">Pre-Approval Details:</h3>
                <ul className="space-y-1 text-green-700">
                  <li>• Funding Amount: Up to ${amount || '50,000'}</li>
                  <li>• Same-day funding available</li>
                  <li>• No hidden fees</li>
                  <li>• Dedicated account manager</li>
                </ul>
              </div>
            )}

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">What happens next?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Expect our call within 30 minutes</p>
                    <p className="text-sm text-gray-600">Our factoring specialist will contact you to discuss your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Simple documentation</p>
                    <p className="text-sm text-gray-600">We'll guide you through the quick setup process</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Get funded today</p>
                    <p className="text-sm text-gray-600">Once approved, receive funds the same day</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => router.push('/dashboard')}
                className="flex-1"
              >
                Access Your Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => router.push('/')}
                className="flex-1"
              >
                Return to Home
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600 pt-4 border-t">
              <p>Need immediate assistance?</p>
              <p className="font-semibold text-blue-600">Call us at 1-800-FACTOR-1</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ThankYouPageClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}