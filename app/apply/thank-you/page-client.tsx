'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { CheckCircle, ArrowRight, Phone, FileText, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { trackConversion } from '@/components/GoogleAnalytics'
import { getConversionConfig } from '@/lib/google-ads-config'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const firstName = searchParams.get('name') || 'there'
  const approved = searchParams.get('approved') === 'true'
  const amount = searchParams.get('amount')

  useEffect(() => {
    // Track Google Ads conversion for application submission
    const conversionConfig = getConversionConfig('applicationSubmit')
    const conversionValue = amount ? parseInt(amount) : conversionConfig.defaultValue
    
    trackConversion(conversionConfig.label, conversionValue);
    
    // Also track approved vs pending applications separately
    if (approved) {
      // Additional tracking for pre-approved applications can be added here
    }
  }, [amount, approved])

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
                  <li>• Fast funding available</li>
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
                    <p className="font-semibold text-gray-900">We'll call you within 30 minutes</p>
                    <p className="text-sm text-gray-600">No BS, just straight talk about getting you paid faster</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Super simple setup</p>
                    <p className="text-sm text-gray-600">Rate con + BOL = you're good to go</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Money hits FAST</p>
                    <p className="text-sm text-gray-600">Approved loads get paid within 1-2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => router.push('/')}
                className="flex-1 h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Return to Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="tel:6198776746" className="flex-1">
                <Button 
                  variant="outline"
                  className="w-full h-14 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Button>
              </a>
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