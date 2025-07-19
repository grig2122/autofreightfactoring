'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronRight, ChevronLeft, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { BasicInfoStep } from '@/components/apply/basic-info-step'
import { CompanyInfoStep } from '@/components/apply/company-info-step'
import { PreApprovalResult } from '@/components/apply/pre-approval-result'
import { SupportButton } from '@/components/SupportButton'
import type { QuickApplyForm } from '@/lib/types'

function ApplyForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [formData, setFormData] = useState<Partial<QuickApplyForm>>({})
  const [sessionId, setSessionId] = useState<string | null>(null)

  useEffect(() => {
    const session = searchParams.get('session')
    if (session) {
      setSessionId(session)
    }
  }, [searchParams])

  const totalSteps = 2
  const progress = (step / totalSteps) * 100

  const updateFormData = (data: Partial<QuickApplyForm>) => {
    setFormData(prev => ({ ...prev, ...data }))
  }

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    console.log('Submitting form data:', formData)
    
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, sessionId })
      })
      
      const data = await response.json()
      
      // Redirect to thank you page with parameters
      const params = new URLSearchParams({
        name: formData.firstName || '',
        approved: data.approved ? 'true' : 'false',
        amount: data.amount || '0'
      })
      router.push(`/apply/thank-you?${params.toString()}`)
    } catch (error) {
      console.error('Error submitting application:', error)
      // Handle error
    } finally {
      setIsSubmitting(false)
    }
  }

  // If showing result
  if (step === 3 && result) {
    return <PreApprovalResult result={result} />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header with more content */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Truck className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">AutoFreightFactoring Application</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Pre-Approved for Freight Factoring in 60 Seconds</h2>
          <p className="text-gray-600 mb-4">Join thousands of truckers who get paid within 24 hours instead of waiting 30-90 days. Our quick application process takes less than 2 minutes with no credit check required and instant approval decisions.</p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold text-blue-900 mb-2">Why Choose AutoFreightFactoring?</h3>
            <ul className="text-blue-800 space-y-1">
              <li>• Same-day funding available - get paid in hours, not months</li>
              <li>• No hidden fees - transparent flat-rate pricing starting at 2.5%</li>
              <li>• Bad credit or no credit? No problem - we approve based on your customers</li>
              <li>• Free credit checks on your customers to ensure you get paid</li>
              <li>• Dedicated account manager to support your business growth</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-center mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600">$2M+</div>
              <div className="text-gray-600">Funded Daily</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600">5,000+</div>
              <div className="text-gray-600">Happy Truckers</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600">Approval Rate</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span className={step >= 1 ? 'text-blue-600 font-medium' : ''}>Basic Info</span>
            <span className={step >= 2 ? 'text-blue-600 font-medium' : ''}>Company Details</span>
          </div>
        </div>

        {/* Form Card */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>
                  {step === 1 && 'Tell us about yourself'}
                  {step === 2 && 'Tell us about your business'}
                </CardTitle>
                <CardDescription>
                  {step === 1 && (
                    <span>
                      We need some basic information to create your account and contact you about your application. 
                      All information is kept strictly confidential and is protected by bank-level encryption. 
                      This step typically takes less than 30 seconds to complete.
                    </span>
                  )}
                  {step === 2 && (
                    <span>
                      Tell us about your trucking business so we can determine your pre-approval amount and factoring rate. 
                      The more information you provide, the better rate we can offer. Companies with established histories 
                      and higher invoice volumes typically qualify for our best rates starting at 2.5%.
                    </span>
                  )}
                  {sessionId && (
                    <span className="block mt-2 text-green-600">
                      ✓ Invoice uploaded - complete your application to get funded
                    </span>
                  )}
                </CardDescription>
              </div>
              <SupportButton variant="contextual" className="ml-4 flex-shrink-0" />
            </div>
          </CardHeader>
          <CardContent>
            {/* Form Steps */}
            {step === 1 && (
              <BasicInfoStep 
                data={formData}
                onUpdate={updateFormData}
                onNext={handleNext}
              />
            )}
            
            {step === 2 && (
              <CompanyInfoStep
                data={formData}
                onUpdate={updateFormData}
                onBack={handleBack}
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            )}
          </CardContent>
        </Card>

        {/* Enhanced Trust Indicators and Information */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gray-100 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Application Process Overview</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</span>
                  <h4 className="font-semibold">Basic Information</h4>
                </div>
                <p className="text-gray-600 text-sm ml-11">Provide your contact details and basic personal information. This helps us create your account and stay in touch about your application status.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</span>
                  <h4 className="font-semibold">Company Details</h4>
                </div>
                <p className="text-gray-600 text-sm ml-11">Tell us about your trucking business, including your DOT number, business type, and invoice volume. This information determines your funding capacity.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</span>
                  <h4 className="font-semibold">Instant Decision</h4>
                </div>
                <p className="text-gray-600 text-sm ml-11">Get your pre-approval decision immediately. If approved, you can start submitting invoices for same-day payment right away.</p>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h4 className="font-semibold mb-3">What You'll Need:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Your DOT number or MC number (for verification purposes)</li>
                <li>• Basic company information (years in business, company type)</li>
                <li>• Estimate of your monthly invoice volume</li>
                <li>• Contact information for your business</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-4 text-sm text-gray-600 bg-white px-6 py-3 rounded-full shadow-sm">
              <span>🔒 Bank-level encryption</span>
              <span>•</span>
              <span>✓ SOC 2 Type II Certified</span>
              <span>•</span>
              <span>📞 24/7 Support</span>
            </div>
          </div>
          
          <div className="text-center text-gray-600">
            <p className="mb-4">Already have an account? <a href="/login" className="text-blue-600 hover:underline font-semibold">Sign in here</a></p>
            <p className="text-sm">Questions about the application? Call us at <a href="tel:1-888-555-0123" className="text-blue-600 hover:underline font-semibold">1-888-555-0123</a> or <a href="/contact" className="text-blue-600 hover:underline font-semibold">contact our team</a></p>
          </div>
        </div>
          {/* Test Mode Button - Remove in production */}
          <button 
            onClick={async () => {
              // Fill with test data that will get pre-approved
              const testData = {
                firstName: 'Sarah',
                lastName: 'Williams',
                email: 'sarah@megafleet.com',
                phone: '5559876543',
                companyName: 'Mega Fleet LLC',
                companyType: 'fleet' as const,
                monthlyInvoiceVolume: '$100k+' as const,
                yearsInBusiness: '5',
                dotNumber: '2345678',
                currentFactoring: 'no' as const // High score: $100k+ (50) + 5 years (30) + fleet (10) + no factoring (10) + DOT (5) = 105 points
              }
              setFormData(testData)
              setStep(2)
              
              // Wait for state to update then submit
              setTimeout(async () => {
                console.log('Test button submitting with data:', testData)
                setIsSubmitting(true)
                try {
                  const response = await fetch('/api/apply', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(testData)
                  })
                  const data = await response.json()
                  setResult(data)
                  setStep(3)
                } catch (error) {
                  console.error('Test submission error:', error)
                } finally {
                  setIsSubmitting(false)
                }
              }, 500)
            }}
            className="mt-4 text-xs text-gray-500 underline"
          >
            [Test: Skip to Pre-Approval]
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading application...</p>
        </div>
      </div>
    }>
      <ApplyForm />
    </Suspense>
  )
}