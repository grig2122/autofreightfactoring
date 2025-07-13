'use client'

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
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

  const onFormSubmit = (formData: CompanyInfo) => {
    onUpdate(formData)
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="companyName">Company Name</Label>
        <Input
          id="companyName"
          placeholder="ABC Trucking LLC"
          {...register('companyName')}
          className={errors.companyName ? 'border-red-500' : ''}
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
          <SelectTrigger id="monthlyInvoiceVolume">
            <SelectValue placeholder="Select volume" />
          </SelectTrigger>
          <SelectContent>
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
            className={errors.yearsInBusiness ? 'border-red-500' : ''}
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
          />
          <p className="text-xs text-gray-500">Helps speed up approval</p>
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
              Yes
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="factoring-no" />
            <Label htmlFor="factoring-no" className="font-normal cursor-pointer">
              No
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="w-full"
          size="lg"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button 
          type="submit" 
          className="w-full" 
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Checking Eligibility...
            </>
          ) : (
            'Get Pre-Approved'
          )}
        </Button>
      </div>
    </form>
  )
}