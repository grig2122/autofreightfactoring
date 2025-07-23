'use client'

import { useEffect } from 'react'
import { useFormTracking } from '@/hooks/use-analytics-tracking'
import { trackApplicationStep } from '@/lib/analytics-events'

interface TrackedFormProps {
  formName: string
  children: React.ReactNode
  onSubmit: (e: React.FormEvent) => void
  currentStep?: number
  totalSteps?: number
  stepName?: string
}

export function TrackedForm({ 
  formName, 
  children, 
  onSubmit,
  currentStep,
  totalSteps,
  stepName
}: TrackedFormProps) {
  const { handleFieldInteraction, handleFormSubmit } = useFormTracking(formName)

  // Track multi-step form progress
  useEffect(() => {
    if (currentStep && totalSteps && stepName) {
      trackApplicationStep(currentStep, stepName, totalSteps)
    }
  }, [currentStep, totalSteps, stepName])

  const handleSubmitWithTracking = (e: React.FormEvent) => {
    e.preventDefault()
    handleFormSubmit(true)
    onSubmit(e)
  }

  const handleFieldChange = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const fieldName = e.target.name || e.target.id
    if (fieldName) {
      handleFieldInteraction(fieldName)
    }
  }

  // Add event listeners to all form fields
  useEffect(() => {
    const form = document.querySelector(`form[data-form-name="${formName}"]`)
    if (!form) return

    const fields = form.querySelectorAll('input, select, textarea')
    fields.forEach(field => {
      field.addEventListener('focus', handleFieldChange as any)
    })

    return () => {
      fields.forEach(field => {
        field.removeEventListener('focus', handleFieldChange as any)
      })
    }
  }, [formName])

  return (
    <form 
      onSubmit={handleSubmitWithTracking}
      data-form-name={formName}
    >
      {children}
    </form>
  )
}