'use client'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ChevronLeft, Loader2 } from 'lucide-react'
import type { QuickApplyForm } from '@/lib/types'

const companyInfoSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  companyType: z.enum(['owner-operator', 'fleet', 'freight-broker']),
  monthlyInvoiceVolume: z.enum(['$0-10k', '$10-50k', '$50-100k', '$100k+']),
  yearsInBusiness: z.string().min(1, 'Years in business is required'),
  currentFactoring: z.enum(['yes', 'no']),
  dotNumber: z.string().optional()
})

type CompanyInfo = z.infer<typeof companyInfoSchema>

interface CompanyInfoStepProps {
  data: Partial<QuickApplyForm>
  onUpdate: (data: Partial<QuickApplyForm>) => void
  onBack: () => void
  onSubmit: () => void
  isSubmitting: boolean
}

export function CompanyInfoStep({ data, onUpdate, onBack, onSubmit, isSubmitting }: CompanyInfoStepProps) {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(onFormSubmit)(e);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<CompanyInfo>({
    resolver: zodResolver(companyInfoSchema),
    defaultValues: {
      companyName: data.companyName || '',
      companyType: data.companyType || 'owner-operator',
      monthlyInvoiceVolume: data.monthlyInvoiceVolume || '$0-10k',
      yearsInBusiness: data.yearsInBusiness || '',
      currentFactoring: data.currentFactoring || 'no',
      dotNumber: data.dotNumber || ''
    }
  })

  useEffect(() => {
    reset({
      companyName: data.companyName || '',
      companyType: data.companyType || 'owner-operator',
      monthlyInvoiceVolume: data.monthlyInvoiceVolume || '$0-10k',
      yearsInBusiness: data.yearsInBusiness || '',
      currentFactoring: data.currentFactoring || 'no',
      dotNumber: data.dotNumber || ''
    })
  }, [data.companyName, data.companyType, data.monthlyInvoiceVolume, data.yearsInBusiness, data.currentFactoring, data.dotNumber, reset])

  const onFormSubmit = (formData: CompanyInfo) => {
    // Only update the company info fields, preserving any other data
    onUpdate({
      companyName: formData.companyName,
      companyType: formData.companyType,
      monthlyInvoiceVolume: formData.monthlyInvoiceVolume,
      yearsInBusiness: formData.yearsInBusiness,
      currentFactoring: formData.currentFactoring,
      dotNumber: formData.dotNumber
    })
    onSubmit()
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6 mb-6">
        <h4 className="font-semibold text-green-900 mb-2 flex items-center">
          <span className="text-green-600 mr-2">ℹ️</span>
          Why We Ask These Questions
        </h4>
        <p className="text-sm text-green-800 mb-2">
          Your company information helps us determine your factoring rate and funding capacity. 
          Established businesses with higher invoice volumes typically qualify for better rates.
        </p>
        <p className="text-sm text-green-800">
          <strong className="text-green-900">Good news:</strong> We approve 98% of applications, including new businesses and those with credit challenges. 
          We focus on your customers' creditworthiness, not yours.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="companyName">Company Name</Label>
        <Input
          id="companyName"
          placeholder="ABC Trucking LLC"
          {...register('companyName')}
          className={`h-12 ${errors.companyName ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
        />
        {errors.companyName && (
          <p className="text-sm text-red-500">{errors.companyName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Company Type</Label>
        <RadioGroup
          defaultValue={watch('companyType')}
          onValueChange={(value) => setValue('companyType', value as any)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="owner-operator" id="owner-operator" />
            <Label htmlFor="owner-operator" className="font-normal cursor-pointer">
              Owner Operator
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fleet" id="fleet" />
            <Label htmlFor="fleet" className="font-normal cursor-pointer">
              Fleet (2+ trucks)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="freight-broker" id="freight-broker" />
            <Label htmlFor="freight-broker" className="font-normal cursor-pointer">
              Freight Broker
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="monthlyInvoiceVolume">Monthly Invoice Volume</Label>
        <Select
          defaultValue={watch('monthlyInvoiceVolume')}
          onValueChange={(value) => setValue('monthlyInvoiceVolume', value as any)}
        >
          <SelectTrigger id="monthlyInvoiceVolume" className="h-12 border-gray-300 focus:border-blue-500">
            <SelectValue placeholder="Select volume" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200">
            <SelectItem value="$0-10k">$0 - $10,000</SelectItem>
            <SelectItem value="$10-50k">$10,000 - $50,000</SelectItem>
            <SelectItem value="$50-100k">$50,000 - $100,000</SelectItem>
            <SelectItem value="$100k+">$100,000+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="yearsInBusiness">Years in Business</Label>
          <Input
            id="yearsInBusiness"
            type="number"
            min="0"
            placeholder="5"
            {...register('yearsInBusiness')}
            className={`h-12 ${errors.yearsInBusiness ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
          />
          {errors.yearsInBusiness && (
            <p className="text-sm text-red-500">{errors.yearsInBusiness.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="dotNumber">DOT Number (Optional)</Label>
          <Input
            id="dotNumber"
            placeholder="1234567"
            {...register('dotNumber')}
            className="h-12 border-gray-300 focus:border-blue-500"
          />
          <p className="text-xs text-gray-600 mt-1">
            Providing your DOT number helps us verify your business faster and may qualify you for better rates. 
            You can find this on your cab or FMCSA registration.
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Are you currently using factoring?</Label>
        <RadioGroup
          defaultValue={watch('currentFactoring')}
          onValueChange={(value) => setValue('currentFactoring', value as any)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="factoring-yes" />
            <Label htmlFor="factoring-yes" className="font-normal cursor-pointer">
              Yes - I want to switch to better terms
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="factoring-no" />
            <Label htmlFor="factoring-no" className="font-normal cursor-pointer">
              No - This is my first time factoring
            </Label>
          </div>
        </RadioGroup>
        <p className="text-sm text-gray-700 mt-3 bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200">
          If you're currently factoring, we'll help you switch seamlessly with no interruption to your cash flow. 
          Many clients save thousands per year by switching to our lower rates.
        </p>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
          <span className="text-blue-600 mr-2">🚀</span>
          What Happens After Approval?
        </h4>
        <ul className="text-sm text-gray-700 space-y-3">
          <li className="flex items-start">
            <span className="text-green-600 mr-2 mt-0.5">✓</span>
            <span>You'll receive your approval amount and rate immediately</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2 mt-0.5">✓</span>
            <span>Our team will call you within 1 business hour to set up your account</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2 mt-0.5">✓</span>
            <span>You can start submitting invoices for same-day payment right away</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-2 mt-0.5">✓</span>
            <span>No contracts or long-term commitments - cancel anytime</span>
          </li>
        </ul>
      </div>

      {/* Navigation buttons removed - handled by parent component */}
    </form>
  )
}