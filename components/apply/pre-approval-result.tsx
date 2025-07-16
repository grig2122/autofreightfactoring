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
                <p className="text-sm text-blue-600 font-medium">Estimated Factoring Rate</p>
                <p className="text-4xl font-bold text-blue-700 mt-2">{result.estimatedRate}</p>
                <p className="text-sm text-gray-600 mt-2">No hidden fees • Same-day payment</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">What happens next?</h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                    <span className="text-gray-700">Create your account with a secure password</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                    <span className="text-gray-700">Verify your business information (MC#, DOT#)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                    <span className="text-gray-700">Upload your first invoice and get paid today!</span>
                  </li>
                </ol>
              </div>

              <Button 
                onClick={() => router.push('/account-setup')}
                className="w-full"
                size="lg"
              >
                Continue to Account Setup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-center text-sm text-gray-600">
                Setup takes less than 5 minutes • No credit check required
              </p>
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