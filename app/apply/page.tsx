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
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Truck className="h-10 w-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">AutoFreightFactoring</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Get Pre-Approved in 60 Seconds</h2>
          <p className="text-gray-600 mt-2">No credit check required • Instant decision</p>
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
                  {step === 1 && 'We need some basic information to get started'}
                  {step === 2 && 'This helps us determine your pre-approval amount'}
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

        {/* Trust Indicators */}
        <div className="max-w-2xl mx-auto mt-8 text-center text-sm text-gray-600">
          <p>🔒 Your information is secure and encrypted</p>
          <p className="mt-2">Already have an account? <a href="/login" className="text-blue-600 hover:underline">Sign in</a></p>
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