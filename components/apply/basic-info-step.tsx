'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChevronRight } from 'lucide-react'
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="John"
            {...register('firstName')}
            className={`h-12 ${errors.firstName ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Doe"
            {...register('lastName')}
            className={`h-12 ${errors.lastName ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@trucking.com"
          {...register('email')}
          className={`h-12 ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="5551234567"
          {...register('phone')}
          onChange={formatPhoneNumber}
          className={`h-12 ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
        <p className="text-xs text-gray-500">Enter 10 digits without spaces or dashes</p>
      </div>

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