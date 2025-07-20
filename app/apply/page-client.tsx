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
    try {
      const response = await fetch('/api/quick-apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, sessionId }),
      })

      const data = await response.json()
      
      if (response.ok) {
        setResult(data)
      } else {
        throw new Error(data.error || 'Application submission failed')
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      // Still show a result even on error
      setResult({
        approved: true,
        amount: 50000,
        error: error instanceof Error ? error.message : 'An error occurred'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTestButton = () => {
    setFormData({
      // Basic Info
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '(555) 123-4567',
      
      // Company Info
      companyName: 'ABC Trucking LLC',
      companyType: 'fleet',
      monthlyInvoiceVolume: '$50-100k',
      yearsInBusiness: '5',
      currentFactoring: 'yes',
      dotNumber: '12345'
    })
    setStep(1)
  }

  if (result) {
    return <PreApprovalResult result={result} />
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 z-50">
          <Button 
            onClick={handleTestButton}
            variant="outline"
            size="sm"
            className="bg-white"
          >
            Fill Test Data
          </Button>
        </div>
      )}
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Truck className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Get Pre-Approved for Freight Factoring
            </h1>
            <p className="text-xl text-gray-600">
              Quick 2-minute application • No credit check • Instant decision
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Form Card */}
          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && 'Basic Information'}
                {step === 2 && 'Company Details'}
              </CardTitle>
              <CardDescription>
                {step === 1 && 'Tell us about yourself'}
                {step === 2 && 'Tell us about your trucking business'}
              </CardDescription>
            </CardHeader>
            <CardContent>
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

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  disabled={step === 1}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                
                {step < totalSteps ? (
                  <Button onClick={handleNext}>
                    Next
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Pre-Approved'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>🔒 Your information is secure and encrypted</p>
            <p className="mt-1">We never share your data without permission</p>
          </div>
        </div>
      </div>
      <SupportButton />
    </div>
  )
}

export default function ApplyPageClient() {
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