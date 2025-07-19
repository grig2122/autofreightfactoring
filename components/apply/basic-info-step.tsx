'use client'

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
    formState: { errors }
  } = useForm<BasicInfo>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phone: data.phone || ''
    }
  })

  const onSubmit = (formData: BasicInfo) => {
    onUpdate(formData)
    onNext()
  }

  const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    e.target.value = value
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-900">
          <strong>Quick Tip:</strong> Make sure to use the email address you check regularly. 
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
            className={errors.firstName ? 'border-red-500' : ''}
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
            className={errors.lastName ? 'border-red-500' : ''}
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
          className={errors.email ? 'border-red-500' : ''}
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
          className={errors.phone ? 'border-red-500' : ''}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}
        <p className="text-xs text-gray-500">Enter 10 digits without spaces or dashes</p>
      </div>

      <div className="border-t pt-6 mt-8">
        <h4 className="font-semibold text-gray-900 mb-3">What happens next?</h4>
        <p className="text-sm text-gray-600 mb-4">
          After you provide your basic information, we'll ask a few questions about your trucking business. 
          This includes your DOT number, how long you've been in business, and your typical invoice volume. 
          The entire process takes less than 2 minutes, and you'll receive an instant decision.
        </p>
        <p className="text-sm text-gray-600 mb-6">
          <strong>Privacy Promise:</strong> We will never sell your information or send you spam. 
          Your data is used solely to process your factoring application and provide you with our services.
        </p>
      </div>

      <Button type="submit" className="w-full" size="lg">
        Continue to Company Information
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  )
}