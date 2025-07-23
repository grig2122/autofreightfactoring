'use client'

import { useState } from 'react'
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

const formSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactName: z.string().min(2, 'Contact name is required'),
  mcNumber: z.string().regex(/^\d{6,7}$/, 'MC number must be 6-7 digits'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits'),
  factoringStatus: z.enum(['none', 'current', 'previous']).refine((val) => val !== undefined, {
    message: 'Please select factoring status'
  })
})

type FormData = z.infer<typeof formSchema>

export default function ApplyPageClient() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStartTime, setFormStartTime] = useState<number>(0)
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
        
        // Track application completion with enhanced ecommerce
        trackApplicationComplete({
          companyName: data.companyName,
          factoringStatus: data.factoringStatus,
          mcNumber: data.mcNumber,
          timeToComplete: timeToComplete
        })
        
        router.push('/apply/thank-you')
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Error:', error)
      trackFormSubmit('freight_factoring_application', undefined, false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatPhoneNumber = (value: string) => {
    return value.replace(/\D/g, '')
  }

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Same Day Pay",
      description: "Get paid in 24 hours"
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
                Get Paid Same Day for Your Freight
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 mb-8">
                Stop waiting 30+ days. Get your money in 24 hours with our simple factoring service.
              </p>

              {/* Quick Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-white border border-gray-200 hover:shadow-md transition-all duration-200">
                    <div className="flex-shrink-0 text-blue-600">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Phone CTA for Mobile */}
              <div className="lg:hidden mb-8">
                <a href="tel:6198776746" className="flex items-center justify-center space-x-2 bg-green-600 text-white p-4 rounded-lg font-bold text-lg">
                  <Phone className="h-6 w-6" />
                  <span>CALL NOW: (619) 877-6746</span>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-xl p-6 lg:p-8">
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
                              placeholder="MC Number"
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
                              placeholder="Phone Number"
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
                    className="w-full h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200"
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

                  <div className="mt-4 space-y-1 text-center">
                    <p className="text-sm text-gray-600">
                      ✓ No long-term contracts
                    </p>
                    <p className="text-sm text-gray-600">
                      ✓ No credit check required
                    </p>
                    <p className="text-sm text-gray-600">
                      ✓ Same-day funding available
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
                <p className="font-semibold">BBB Accredited</p>
                <p className="text-sm">A+ Rating</p>
              </div>
              <div className="text-gray-600">
                <p className="font-semibold">$50M+ Funded</p>
                <p className="text-sm">Since 2020</p>
              </div>
              <div className="text-gray-600">
                <p className="font-semibold">500+ Active Clients</p>
                <p className="text-sm">Nationwide</p>
              </div>
              <div className="text-gray-600">
                <p className="font-semibold">4.8/5 Stars</p>
                <p className="text-sm">Google Reviews</p>
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
              <div className="text-3xl lg:text-4xl font-bold mb-1">500+</div>
              <div className="text-blue-100">Truckers Paid</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-1">24hr</div>
              <div className="text-blue-100">Money in Bank</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-1">$50M+</div>
              <div className="text-blue-100">Funded</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-1">3%</div>
              <div className="text-blue-100">Flat Fee</div>
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
                Unlike traditional factoring companies that take 3-5 days, we fund most invoices within 24 hours. 
                Get your money when you need it most.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Same-day ACH available</li>
                <li>✓ Weekend processing</li>
                <li>✓ No hidden delays</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">Simple Terms</h3>
              <p className="text-gray-600 mb-4">
                No complicated contracts or hidden fees. Our flat 3% rate is all you pay. 
                No monthly minimums, no long-term commitments.
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
                <li>✓ 24/7 phone support</li>
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
                "Finally, a factoring company that gets it. Money hits my account the same day I submit. 
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
              <p className="text-gray-700 font-semibold">Takes a few hours max</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-black">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">MONEY HITS</h3>
              <p className="text-gray-700 font-semibold">Same day ACH transfer</p>
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
                Most loads are funded within 24 hours. Submit before 2 PM ET for same-day ACH. Wire transfers available for urgent needs.
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
                None. Our 3% flat rate is all you pay. No application fees, monthly minimums, or termination fees. What you see is what you get.
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
            Join 500+ truckers who get paid faster
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
                CALL: (619) 877-6746
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}