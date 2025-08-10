'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ChevronRight, Truck, DollarSign, Phone, Mail, Fuel, Shield, User, Hash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  trackFormStart, 
  trackFormSubmit
} from '@/lib/analytics-events'
import { 
  trackApplyClick,
  trackApplicationStart,
  trackApplicationComplete 
} from '@/lib/analytics-ecommerce'
import { useFormTracking } from '@/hooks/use-analytics-tracking'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { FormTrustIndicators, CompactTrustBadge } from '@/components/trust-indicators'
import { trackEnhancedFormSubmission, trackApplicationError } from '@/lib/enhanced-analytics'
import { trackFormAbandoner, trackPurchaseIntent, trackCartAbandonment } from '@/lib/remarketing'
import './mobile-styles.css'

const formSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactName: z.string().min(2, 'Contact name is required'),
  mcNumber: z.string()
    .transform(val => val.replace(/\D/g, '')) // Remove non-digits
    .refine(val => val.length >= 6 && val.length <= 8, 'MC/DOT number must be 6-8 digits'),
  email: z.string().email('Invalid email address'),
  phone: z.string()
    .transform(val => val.replace(/\D/g, '')) // Remove non-digits
    .refine(val => val.length === 10, 'Phone number must be 10 digits'),
  factoringStatus: z.enum(['none', 'current', 'previous']).refine((val) => val !== undefined, {
    message: 'Please select factoring status'
  })
})

type FormData = z.infer<typeof formSchema>

export default function ApplyPageClient() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStartTime, setFormStartTime] = useState<number>(0)
  const [currentFieldsFilled, setCurrentFieldsFilled] = useState(0)
  const { handleFieldInteraction } = useFormTracking('freight_factoring_application')
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      mcNumber: '',
      email: '',
      phone: '',
      factoringStatus: 'none'
    }
  })

  // Track form progress
  useEffect(() => {
    const values = form.getValues()
    let filledCount = 0
    if (values.companyName) filledCount++
    if (values.contactName) filledCount++
    if (values.mcNumber) filledCount++
    if (values.email) filledCount++
    if (values.phone) filledCount++
    if (values.factoringStatus && values.factoringStatus !== 'none') filledCount++
    setCurrentFieldsFilled(filledCount)
    
    // Track purchase intent if user fills more than 2 fields
    if (filledCount >= 2) {
      trackPurchaseIntent({
        clickedApply: true,
        scrolledToForm: true,
        formInteraction: filledCount
      })
    }
    
    // Track cart abandonment for partial form fills
    if (filledCount > 0 && filledCount < 6) {
      trackCartAbandonment({
        formData: values,
        step: `field_${filledCount}`,
        value: filledCount / 6
      })
    }
  }, [form.watch()])
  
  // Track form abandonment on unmount
  useEffect(() => {
    return () => {
      const filledCount = currentFieldsFilled
      if (filledCount > 0 && filledCount < 6) {
        trackFormAbandoner('freight_factoring_application', filledCount, 6)
      }
    }
  }, [currentFieldsFilled])

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Track application completion with timing
    const timeToComplete = formStartTime ? Math.round((Date.now() - formStartTime) / 1000) : undefined
    
    try {
      // Track application start (if not already tracked)
      trackApplicationStart({
        companyType: 'owner-operator',
        factoringStatus: data.factoringStatus
      })

      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          firstName: data.contactName.split(' ')[0] || data.contactName,
          lastName: data.contactName.split(' ').slice(1).join(' ') || '',
          companyType: 'owner-operator',
          monthlyInvoiceVolume: '$50-100k',
          yearsInBusiness: '2+',
          currentFactoring: data.factoringStatus === 'current' ? 'yes' : 'no',
          dotNumber: data.mcNumber
        }),
      })

      if (response.ok) {
        // Track successful form submission
        trackFormSubmit('freight_factoring_application', undefined, true)
        
        // Track enhanced form submission
        trackEnhancedFormSubmission('freight_factoring_application', data, true)
        
        // Track application completion with enhanced ecommerce
        trackApplicationComplete({
          companyName: data.companyName,
          factoringStatus: data.factoringStatus,
          mcNumber: data.mcNumber,
          timeToComplete: timeToComplete
        })
        
        router.push('/apply/thank-you')
      } else {
        const errorText = await response.text()
        throw new Error(`Submission failed: ${errorText}`)
      }
    } catch (error) {
      console.error('Error:', error)
      
      // Track the error with enhanced analytics
      trackApplicationError(error as Error, 'form_submission')
      trackFormSubmit('freight_factoring_application', undefined, false)
      trackEnhancedFormSubmission('freight_factoring_application', data, false, (error as Error).message)
      
      // Show user-friendly error message
      alert('There was an error submitting your application. Please try again or call us')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '')
    
    // Format as (XXX) XXX-XXXX
    if (digits.length <= 3) {
      return digits
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    } else if (digits.length <= 10) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    }
    // Don't allow more than 10 digits
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }

  const scrollToForm = () => {
    const formElement = document.getElementById('application-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Focus first input after scrolling
      setTimeout(() => {
        const firstInput = formElement.querySelector('input')
        if (firstInput) {
          (firstInput as HTMLInputElement).focus()
        }
      }, 500)
    }
  }

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Fast Pay",
      description: "Get paid in 1-2 business days"
    },
    {
      icon: <Fuel className="h-8 w-8" />,
      title: "Fuel Discounts",
      description: "Save on diesel nationwide"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "No Credit Check",
      description: "Approval based on invoices"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Built for Truckers",
      description: "By truckers, for truckers"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 z-50">
          <Button 
            onClick={() => {
              form.setValue('companyName', 'ABC Trucking LLC')
              form.setValue('contactName', 'John Doe')
              form.setValue('mcNumber', '123456')
              form.setValue('email', 'john.doe@example.com')
              form.setValue('phone', '5551234567')
              form.setValue('factoringStatus', 'none')
            }}
            variant="outline"
            size="sm"
            className="bg-white"
          >
            Fill Test Data
          </Button>
        </div>
      )}
      
      {/* Hero Section with Form */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Headlines and Benefits */}
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Get Paid Fast for Your Freight
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 mb-8">
                Stop waiting 30+ days. Get your money in 1-2 business days with our simple factoring service.
              </p>

              {/* Quick Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <button
                    key={index}
                    onClick={scrollToForm}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-white border border-gray-200 hover:shadow-md hover:border-blue-400 transition-all duration-200 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <div className="flex-shrink-0 text-blue-600">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Phone CTA for Mobile */}
              <div className="lg:hidden mb-8">
                <a href="tel:6198776746" className="flex items-center justify-center space-x-2 bg-green-600 text-white p-4 rounded-lg font-bold text-lg">
                  <Phone className="h-6 w-6" />
                  <span>CALL US NOW</span>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div id="application-form" className="bg-white border border-gray-200 rounded-xl shadow-xl p-6 lg:p-8 scroll-mt-4">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Quick Application
                </h2>
                <p className="text-base text-gray-600">
                  Get approved in minutes
                </p>
                <div className="mt-3">
                  <CompactTrustBadge />
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Truck className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-600" />
                            <Input
                              placeholder="Company Name"
                              className="h-14 pl-12 text-base border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg"
                              {...field}
                              onFocus={(e) => {
                                if (!formStartTime) {
                                  setFormStartTime(Date.now())
                                  trackFormStart('freight_factoring_application')
                                }
                                handleFieldInteraction('companyName')
                              }}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-sm font-semibold text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-600" />
                            <Input
                              placeholder="Contact Name"
                              className="h-14 pl-12 text-base border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-sm font-semibold text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mcNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Hash className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-600" />
                            <Input
                              placeholder="MC or DOT Number (e.g., 123456)"
                              className="h-14 pl-12 text-base border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-sm font-semibold text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-600" />
                            <Input
                              type="email"
                              placeholder="Email Address"
                              className="h-14 pl-12 text-base border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-sm font-semibold text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-600" />
                            <Input
                              type="tel"
                              placeholder="Phone Number (e.g., (555) 123-4567)"
                              className="h-14 pl-12 text-base border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg"
                              {...field}
                              onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-sm font-semibold text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="factoringStatus"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <div className="relative">
                              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-600 pointer-events-none z-10" />
                              <SelectTrigger className="h-14 pl-12 text-base bg-white border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 rounded-lg">
                                <SelectValue placeholder="Current Factoring Status" />
                              </SelectTrigger>
                            </div>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem value="none" className="text-base py-2">Not currently factoring</SelectItem>
                            <SelectItem value="current" className="text-base py-2">Currently factoring</SelectItem>
                            <SelectItem value="previous" className="text-base py-2">Previously factored</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-sm font-semibold text-red-600" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 md:h-14 min-h-[56px] text-lg font-semibold bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg transition-all duration-200 touch-manipulation"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-4 border-white mr-3" />
                        CHECKING...
                      </>
                    ) : (
                      <>
                        Get Started
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <FormTrustIndicators />
                  
                  <div className="mt-4 space-y-1 text-center">
                    <p className="text-sm text-gray-600">
                      ✓ No long-term contracts
                    </p>
                    <p className="text-sm text-gray-600">
                      ✓ No credit check required
                    </p>
                    <p className="text-sm text-gray-600">
                      ✓ 1-2 business day funding
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <div className="text-gray-600">
                <p className="font-semibold">SSL Secured</p>
                <p className="text-sm">Your data is safe</p>
              </div>
              <div className="text-gray-600">
                <p className="font-semibold">Quick Approval</p>
                <p className="text-sm">Most qualified carriers</p>
              </div>
              <div className="text-gray-600">
                <p className="font-semibold">No Hidden Fees</p>
                <p className="text-sm">Transparent pricing</p>
              </div>
              <div className="text-gray-600">
                <p className="font-semibold">Fast Funding</p>
                <p className="text-sm">1-2 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-1">Growing</div>
              <div className="text-blue-100">Client Base</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-1">1-2 days</div>
              <div className="text-blue-100">Money in Bank</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-1">Reliable</div>
              <div className="text-blue-100">Funding Partner</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-1">Competitive</div>
              <div className="text-blue-100">Rates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Why Truckers Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">Fast Funding</h3>
              <p className="text-gray-600 mb-4">
                Unlike traditional factoring companies that take 3-5 days, we fund most invoices within 1-2 business days. 
                Get your money when you need it most.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Next business day ACH available</li>
                <li>✓ Weekend processing</li>
                <li>✓ No hidden delays</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">Simple Terms</h3>
              <p className="text-gray-600 mb-4">
                No complicated contracts or hidden fees. Our competitive rates mean transparent pricing with 
                no monthly minimums, no long-term commitments.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Cancel anytime</li>
                <li>✓ No volume requirements</li>
                <li>✓ Transparent pricing</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">Trucker Support</h3>
              <p className="text-gray-600 mb-4">
                Our team understands trucking because we've been there. Get real support from people who know the road.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Business hours phone support</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Mobile app access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            What Truckers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★★★★★".split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <span className="ml-2 text-sm text-gray-600">Owner-Operator</span>
              </div>
              <p className="text-gray-700 mb-3">
                "Finally, a factoring company that gets it. Money hits my account within 1-2 business days. 
                No more waiting around for weeks to get paid."
              </p>
              <p className="font-semibold text-gray-900">- Mike R., Texas</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★★★★★".split('').map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <span className="ml-2 text-sm text-gray-600">Small Fleet Owner</span>
              </div>
              <p className="text-gray-700 mb-3">
                "The fuel discount alone saves me $500+ per month. Combined with quick pay, 
                it's been a game changer for my cash flow."
              </p>
              <p className="font-semibold text-gray-900">- Sarah L., Ohio</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">SEND YOUR INVOICE</h3>
              <p className="text-gray-700 font-semibold">Rate con + BOL = Done</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">WE CHECK IT</h3>
              <p className="text-gray-700 font-semibold">Takes 1-2 business days</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">MONEY HITS</h3>
              <p className="text-gray-700 font-semibold">Next business day ACH transfer</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What documents do I need?</h3>
              <p className="text-gray-600">
                Just your rate confirmation and signed BOL. We handle the rest. No lengthy applications or financial statements required.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">How fast do I get paid?</h3>
              <p className="text-gray-600">
                Most loads are funded within 1-2 business days. Submit during business hours for next business day ACH. Wire transfers available for urgent needs.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">What if I have bad credit?</h3>
              <p className="text-gray-600">
                No problem. We don't run credit checks. We care about your loads and your brokers' credit, not yours.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Are there any hidden fees?</h3>
              <p className="text-gray-600">
                None. Our competitive rates include everything. No application fees, monthly minimums, or termination fees. What you see is what you get.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Join hundreds of truckers who get paid faster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="lg"
              className="h-12 px-6 text-base font-semibold bg-white text-blue-600 hover:bg-gray-50"
            >
              START NOW
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
            <a href="tel:6198776746">
              <Button 
                size="lg"
                className="h-12 px-6 text-base font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Phone className="mr-2 h-6 w-6" />
                CALL US
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}