import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, X, Calculator, Shield, DollarSign, Eye, AlertCircle, ChevronRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ComplianceFooter } from '@/components/compliance-footer'
import { Navigation } from '@/components/Navigation'
import FundingCalculator from '@/components/FundingCalculator'

export const metadata: Metadata = {
  title: 'Transparent Factoring Pricing | No Hidden Fees | Competitive Rate Factoring',
  description: 'Simple, transparent freight factoring with no hidden fees. Competitive rates, no contracts, no minimums. See exactly what you pay - no surprises.',
  keywords: 'transparent factoring pricing, no hidden fees factoring, flat rate factoring, freight factoring rates, trucking factoring costs',
  alternates: {
    canonical: 'https://autofreightfactoring.com/transparent-pricing',
  },
}

export default function TransparentPricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation currentPage="transparent-pricing" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Eye className="h-4 w-4 mr-2" />
              100% Transparent Pricing - No Surprises
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Competitive Rate Factoring
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              No hidden fees. No fine print. No surprises. Just simple, honest freight factoring 
              that helps you grow your trucking business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
                  Get Started - No Contracts <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:6198776746">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <DollarSign className="w-12 h-12 mx-auto mb-3 text-green-300" />
              <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
              <p className="text-green-100">Industry-leading rates for all carriers</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-3 text-green-300" />
              <h3 className="text-xl font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-green-100">What you see is what you pay</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 text-green-300" />
              <h3 className="text-xl font-semibold mb-2">No Contracts</h3>
              <p className="text-green-100">Cancel anytime, no questions asked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Compare Our Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            See how our simple, flat-rate pricing compares to traditional factoring companies 
            with their hidden fees and complex rate structures.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Our Pricing */}
            <Card className="border-green-500 border-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-semibold">
                RECOMMENDED
              </div>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-600" />
                  AutoFreightFactoring
                </CardTitle>
                <CardDescription>Simple, transparent pricing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-green-600">Competitive Rates</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>100% advance rate available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>No application fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>No monthly minimums</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>No setup fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>No ACH fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>No credit check fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>Free broker credit checks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span>1-2 business day funding</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Typical Competitor */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Typical Factoring Company</CardTitle>
                <CardDescription>Hidden fees add up quickly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-gray-600">Higher Rates + Fees</div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-600">Lower advance rates only</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-600">$100-500 application fee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-600">High monthly minimums</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-600">$300-500 setup fee</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-600">$15-25 per ACH transfer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-600">$50-100 credit check fees</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-600">Long-term contracts required</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-600">3-5 day funding typical</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Calculator Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6">
              Calculate Your Savings with Transparent Pricing
            </h3>
            <FundingCalculator />
          </div>
        </div>
      </section>

      {/* Fee Breakdown */}
      <section className="py-20 px-4 bg-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Every Fee, Explained Simply
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-green-600" />
                  Factoring Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">Low</div>
                <p className="text-gray-600">
                  Competitive rates on every invoice. Volume-based pricing available. 
                  That's it. No sliding scales or complicated tiers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Application Fee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">$0</div>
                <p className="text-gray-600">
                  Apply for free. We don't charge you to see if we're a good fit 
                  for your trucking business.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Monthly Minimum
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">None</div>
                <p className="text-gray-600">
                  Factor when you need to. Skip when you don't. No penalties, 
                  no minimum volume requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-green-600" />
                  ACH Transfer Fee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">$0</div>
                <p className="text-gray-600">
                  Get your money without extra charges. We cover ACH fees so 
                  you get exactly what you're owed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-green-600" />
                  Credit Check Fee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">$0</div>
                <p className="text-gray-600">
                  We check broker credit for free. Know who you're working with 
                  before you haul their freight.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <X className="h-5 w-5 text-green-600" />
                  Cancellation Fee
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">$0</div>
                <p className="text-gray-600">
                  No contracts, no cancellation fees. If we're not the right fit, 
                  you can leave anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-8">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "After years of hidden fees with other factoring companies, finding AutoFreightFactoring 
                was a breath of fresh air. The competitive rates are exactly what I pay - no surprises, 
                no fine print. It's helped me budget better and grow my fleet."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JR
                </div>
                <div>
                  <div className="font-semibold">Jake Rodriguez</div>
                  <div className="text-gray-600">Owner-Operator, Rodriguez Trucking LLC</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Honest, Transparent Factoring?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of truckers who've switched to simple, flat-rate factoring. 
            Apply in minutes, most qualified carriers approved quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
                Apply Now - 100% Free <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:6198776746">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ComplianceFooter />
    </div>
  )
}