'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ChevronRight, Truck, DollarSign, Phone, Mail, Fuel, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { trackEvent, trackFormSubmission } from '@/lib/analytics'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits'),
  monthlyVolume: z.enum(['$0-10k', '$10-50k', '$50-100k', '$100k+'])
})

type FormData = z.infer<typeof formSchema>

export default function TruckerApplyPageClient() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      email: '',
      phone: '',
      monthlyVolume: '$10-50k'
    }
  })

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      trackEvent('form_start', {
        form_name: 'apply_trucker',
        source: 'landing_page'
      })

      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          firstName: data.companyName.split(' ')[0] || 'Business',
          lastName: 'Owner',
          companyType: 'owner-operator',
          monthlyInvoiceVolume: data.monthlyVolume,
          yearsInBusiness: '1',
          currentFactoring: 'no'
        }),
      })

      if (response.ok) {
        trackFormSubmission('apply_trucker', true)
        router.push('/apply/thank-you')
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
      trackFormSubmission('apply_trucker', false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatPhoneNumber = (value: string) => {
    return value.replace(/\D/g, '')
  }

  const benefits = [
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "CASH TODAY",
      description: "Not next week. TODAY."
    },
    {
      icon: <Fuel className="h-10 w-10" />,
      title: "CHEAP DIESEL",
      description: "65¢ off at Pilot/Flying J"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "NO CREDIT CHECK",
      description: "We don't care about your score"
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "TRUCKER OWNED",
      description: "We know your struggles"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 z-50">
          <Button 
            onClick={() => {
              form.setValue('companyName', 'ABC Trucking LLC')
              form.setValue('email', 'john.doe@example.com')
              form.setValue('phone', '5551234567')
              form.setValue('monthlyVolume', '$50-100k')
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
      <section className="bg-gradient-to-br from-blue-50 to-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Headlines and Benefits */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
                STOP WAITING 30 DAYS FOR YOUR MONEY
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 font-bold mb-8">
                Get paid TODAY. Competitive rates. No BS.
              </p>

              {/* Quick Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-gray-100 border-2 border-gray-300 hover:border-blue-600 transition-all duration-200">
                    <div className="flex-shrink-0 text-blue-600">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-lg">{benefit.title}</h3>
                      <p className="text-base font-semibold text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
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
            <div className="bg-white border-4 border-blue-600 rounded-2xl shadow-2xl p-8 lg:p-10">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">
                  GET PAID TODAY
                </h2>
                <p className="text-lg text-gray-700 font-semibold">
                  2 minutes • No BS • Real money
                </p>
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
                              placeholder="Your Trucking Company Name"
                              className="h-16 pl-14 text-lg font-semibold border-2 border-gray-300 focus:border-blue-600 focus:ring-0 rounded-lg"
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
                              placeholder="Email (where we send your money info)"
                              className="h-16 pl-14 text-lg font-semibold border-2 border-gray-300 focus:border-blue-600 focus:ring-0 rounded-lg"
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
                              placeholder="Cell Phone (we'll text you updates)"
                              className="h-16 pl-14 text-lg font-semibold border-2 border-gray-300 focus:border-blue-600 focus:ring-0 rounded-lg"
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
                    name="monthlyVolume"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <div className="relative">
                              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-blue-600 pointer-events-none z-10" />
                              <SelectTrigger className="h-16 pl-14 text-lg font-semibold border-2 border-gray-300 focus:border-blue-600 focus:ring-0 rounded-lg">
                                <SelectValue placeholder="How much you haul per month?" />
                              </SelectTrigger>
                            </div>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="$0-10k" className="text-lg py-3">Under $10K/month</SelectItem>
                            <SelectItem value="$10-50k" className="text-lg py-3">$10K - $50K/month</SelectItem>
                            <SelectItem value="$50-100k" className="text-lg py-3">$50K - $100K/month</SelectItem>
                            <SelectItem value="$100k+" className="text-lg py-3">Over $100K/month</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-sm font-semibold text-red-600" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-20 text-xl font-black bg-green-600 hover:bg-green-700 text-white shadow-xl rounded-lg transform hover:scale-105 transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-4 border-white mr-3" />
                        CHECKING...
                      </>
                    ) : (
                      <>
                        GET MY MONEY NOW
                        <ChevronRight className="ml-3 h-6 w-6" />
                      </>
                    )}
                  </Button>

                  <div className="mt-6 space-y-2 text-center">
                    <p className="text-base font-bold text-gray-700">
                      ✓ NO contracts to sign
                    </p>
                    <p className="text-base font-bold text-gray-700">
                      ✓ NO credit check BS
                    </p>
                    <p className="text-base font-bold text-gray-700">
                      ✓ Money hits YOUR account fast
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-1">Hundreds</div>
              <div className="text-blue-100">Truckers Paid</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-1">1-2 days</div>
              <div className="text-blue-100">Money in Bank</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-1">Reliable</div>
              <div className="text-blue-100">Funded</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-1">Low</div>
              <div className="text-blue-100">Flat Fee</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-black text-center text-gray-900 mb-12">
            HOW TO GET YOUR MONEY
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black">
                1
              </div>
              <h3 className="font-black text-xl mb-2">SEND YOUR INVOICE</h3>
              <p className="text-gray-700 font-semibold">Rate con + BOL = Done</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black">
                2
              </div>
              <h3 className="font-black text-xl mb-2">WE CHECK IT</h3>
              <p className="text-gray-700 font-semibold">Takes a few hours max</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black">
                3
              </div>
              <h3 className="font-black text-xl mb-2">MONEY HITS</h3>
              <p className="text-gray-700 font-semibold">1-2 business day transfer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            TIRED OF WAITING FOR YOUR MONEY?
          </h2>
          <p className="text-xl lg:text-2xl text-white font-bold mb-8">
            Join truckers getting paid faster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              size="lg"
              className="h-16 px-8 text-xl font-black bg-white text-green-600 hover:bg-gray-100"
            >
              START NOW
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
            <a href="tel:6198776746">
              <Button 
                size="lg"
                className="h-16 px-8 text-xl font-black bg-transparent border-4 border-white text-white hover:bg-white hover:text-green-600"
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