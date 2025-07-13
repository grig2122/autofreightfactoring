'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, ArrowRight, Truck, DollarSign } from 'lucide-react'

interface InstantApprovalProps {
  companyName: string
  estimatedRate: string
}

export function InstantApproval({ companyName, estimatedRate }: InstantApprovalProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Success Animation */}
          <div className="text-center mb-8">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4 animate-pulse" />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Congratulations, {companyName}!</h1>
            <p className="text-xl text-gray-600">You're Pre-Approved for Factoring</p>
          </div>

          {/* Approval Details */}
          <Card className="mb-8 border-green-200 shadow-lg">
            <CardHeader className="bg-green-50 border-b border-green-100">
              <CardTitle className="text-2xl text-green-800">Your Pre-Approval Details</CardTitle>
              <CardDescription className="text-green-700">Based on your business profile</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">Estimated Rate</p>
                      <p className="text-2xl font-bold text-gray-900">{estimatedRate}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Per invoice</p>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Truck className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Funding Speed</p>
                      <p className="text-2xl font-bold text-gray-900">Same Day</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">After verification</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Complete Your Setup in 3 Easy Steps</CardTitle>
              <CardDescription>Get funded as early as today!</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">1</span>
                  <div>
                    <p className="font-semibold">Create Your Account</p>
                    <p className="text-sm text-gray-600">5 minutes to set up your secure dashboard</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">2</span>
                  <div>
                    <p className="font-semibold">Upload Your Documents</p>
                    <p className="text-sm text-gray-600">MC Authority, Insurance, and Bank Info</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 h-8 w-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">3</span>
                  <div>
                    <p className="font-semibold">Submit Your First Invoice</p>
                    <p className="text-sm text-gray-600">Get paid the same day!</p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={() => router.push('/signup')}
            >
              Create My Account <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="flex-1"
              onClick={() => window.location.href = 'tel:1-800-FACTOR-1'}
            >
              Speak to a Specialist
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="text-center mt-8 text-sm text-gray-600">
            <p>🔒 Your pre-approval is secured for 30 days</p>
            <p className="mt-2">No obligations • No credit check • Cancel anytime</p>
          </div>
        </div>
      </div>
    </div>
  )
}