'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EnhancedInput } from '@/components/ui/enhanced-input'
import { FormGroup } from '@/components/ui/form-group'
import { ChevronRight, Mail, Phone, User, Shield, CheckCircle } from 'lucide-react'
import type { QuickApplyForm } from '@/lib/types'

const basicInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits')
})

type BasicInfo = z.infer<typeof basicInfoSchema>

interface BasicInfoStepProps {
  data: Partial<QuickApplyForm>
  onUpdate: (data: Partial<QuickApplyForm>) => void
  onNext: () => void
}

export function BasicInfoStep({ data, onUpdate, onNext }: BasicInfoStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BasicInfo>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phone: data.phone || ''
    }
  })

  useEffect(() => {
    reset({
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phone: data.phone || ''
    })
  }, [data.firstName, data.lastName, data.email, data.phone, reset])

  const onSubmit = (formData: BasicInfo) => {
    // Only update the basic info fields, preserving any other data
    onUpdate({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone
    })
    onNext()
  }

  const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    e.target.value = value
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 mb-6">
        <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
          <span className="text-blue-600 mr-2">💡</span>
          Quick Tip
        </h4>
        <p className="text-sm text-blue-800">
          Make sure to use the email address you check regularly. 
          We'll send your approval decision and important account information to this email. 
          Your phone number will only be used if we need to verify information or if you request a callback.
        </p>
      </div>
      
      <FormGroup title="Personal Information" variant="default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              First Name
            </Label>
            <EnhancedInput
              id="firstName"
              placeholder="John"
              {...register('firstName')}
              error={!!errors.firstName}
            />
            {errors.firstName && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <span className="text-xs">⚠️</span>
                {errors.firstName.message}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
              Last Name
            </Label>
            <EnhancedInput
              id="lastName"
              placeholder="Doe"
              {...register('lastName')}
              error={!!errors.lastName}
            />
            {errors.lastName && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <span className="text-xs">⚠️</span>
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
      </FormGroup>

      <FormGroup title="Contact Information" variant="primary">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </Label>
            <EnhancedInput
              id="email"
              type="email"
              placeholder="john@trucking.com"
              icon={Mail}
              iconBgClassName="bg-blue-100"
              iconClassName="text-blue-600"
              {...register('email')}
              error={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <span className="text-xs">⚠️</span>
                {errors.email.message}
              </p>
            )}
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <Shield className="h-3 w-3" />
              We'll never share your email with anyone else.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </Label>
            <EnhancedInput
              id="phone"
              type="tel"
              placeholder="(555) 123-4567"
              icon={Phone}
              iconBgClassName="bg-blue-100"
              iconClassName="text-blue-600"
              {...register('phone')}
              onChange={formatPhoneNumber}
              error={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <span className="text-xs">⚠️</span>
                {errors.phone.message}
              </p>
            )}
            <p className="text-xs text-gray-500">Enter 10 digits without spaces or dashes</p>
          </div>
        </div>
      </FormGroup>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mt-8 border border-green-200">
        <h4 className="font-semibold text-green-900 mb-3 flex items-center">
          <span className="text-green-600 mr-2">✅</span>
          What happens next?
        </h4>
        <p className="text-sm text-gray-700 mb-4">
          After you provide your basic information, we'll ask a few questions about your trucking business. 
          This includes your DOT number, how long you've been in business, and your typical invoice volume. 
          The entire process takes less than 2 minutes, and you'll receive an instant decision.
        </p>
        <div className="bg-white/60 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong className="text-gray-900">🔒 Privacy Promise:</strong> We will never sell your information or send you spam. 
            Your data is used solely to process your factoring application and provide you with our services.
          </p>
        </div>
      </div>

    </form>
  )
}