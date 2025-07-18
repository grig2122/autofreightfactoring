'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Clock, Phone, Mail, ArrowRight, Truck } from 'lucide-react'
import type { PreApprovalResult as Result } from '@/lib/types'

interface PreApprovalResultProps {
  result: Result
}

export function PreApprovalResult({ result }: PreApprovalResultProps) {
  const router = useRouter()

  if (result.approved) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-3xl text-green-600">
                Congratulations! You're Pre-Approved
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                {result.message}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-sm text-blue-600 font-medium">Your Benefits</p>
                <p className="text-2xl font-bold text-blue-700 mt-2">Same-Day Payment</p>
                <p className="text-sm text-gray-600 mt-2">No hidden fees • Competitive rates • 24/7 support</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">What happens next?</h3>
                <p className="text-green-800">
                  A truck factoring specialist will contact you within 30 minutes during business hours to:
                </p>
                <ul className="space-y-2 ml-6 mt-3">
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Verify your business information</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Set up your account and explain the process</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Help you submit your first invoice for same-day payment</span>
                  </li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4">Need immediate assistance?</h3>
                <div className="space-y-3">
                  <a href="tel:+16198776746" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                    <Phone className="h-5 w-5" />
                    <span className="font-medium">(619) 877-6746</span>
                  </a>
                  <a href="mailto:support@autofreightfactoring.com" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                    <Mail className="h-5 w-5" />
                    <span className="font-medium">support@autofreightfactoring.com</span>
                  </a>
                </div>
              </div>

              <Button 
                onClick={() => router.push('/resources')}
                variant="outline"
                className="w-full"
                size="lg"
              >
                Learn More About Truck Factoring
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Not approved - lead capture successful
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <div className="relative">
                <Clock className="h-16 w-16 text-blue-500" />
                <Truck className="h-8 w-8 text-blue-600 absolute -bottom-2 -right-2" />
              </div>
            </div>
            <CardTitle className="text-3xl">
              Application Received!
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              {result.message}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">What happens next?</h3>
              <p className="text-yellow-800">
                A factoring specialist will review your application and contact you {result.followUpTime} to discuss your needs and help you get started.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Why the manual review?</h3>
              <p className="text-gray-700">
                We want to ensure you get the best possible rate and terms. Our specialists will:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Review your specific business needs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Explain our factoring process in detail</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-700">Help you get approved with the best terms</span>
                </li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-4">Need to speak with someone now?</h3>
              <div className="space-y-3">
                <a href="tel:+16198776746" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">(619) 877-6746</span>
                </a>
                <a href="mailto:support@autofreightfactoring.com" className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">support@autofreightfactoring.com</span>
                </a>
              </div>
            </div>

            <Button 
              onClick={() => router.push('/resources')}
              variant="outline"
              className="w-full"
              size="lg"
            >
              Learn More About Factoring
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}