import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock, DollarSign, FileText, Zap, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ComplianceFooter } from '@/components/compliance-footer'

export const metadata: Metadata = {
  title: 'Invoice Factoring for Trucking | Turn Invoices Into Cash Fast',
  description: 'Invoice factoring company for truckers. Get paid same day for your freight invoices. Fast invoice funding with no credit checks. Apply in minutes.',
  keywords: 'invoice factoring for trucking, invoice factoring company, factoring invoices for truckers, invoice factoring, trucking invoice finance, fast invoice funding',
  alternates: {
    canonical: 'https://autofreightfactoring.com/invoice-factoring',
  },
}

export default function InvoiceFactoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section - Optimized for Keywords */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 mr-2" />
              Fast Invoice Funding for Truckers
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Invoice Factoring for Trucking
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Turn invoices into cash same day. Leading invoice factoring company for truckers 
              with fast approval and transparent rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                  Apply in Minutes <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:6198776746">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
                  <Phone className="mr-2 h-5 w-5" />
                  (619) 877-6746
                </Button>
              </a>
            </div>
            <p className="mt-6 text-sm opacity-75">
              No contracts • No hidden fees • Get paid same day
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold">24hr</div>
              <div className="text-sm opacity-75">Fast Invoice Funding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="text-sm opacity-75">Approval Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1.5%</div>
              <div className="text-sm opacity-75">Starting Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5min</div>
              <div className="text-sm opacity-75">Application Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Invoice Factoring - Keyword Rich */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Invoice Factoring: Turn Invoices Into Cash Fast
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6 text-xl">
              <strong>Invoice factoring for trucking</strong> is a financial solution that allows truckers 
              and freight carriers to sell their unpaid invoices to an <strong>invoice factoring company</strong> for 
              immediate cash. Instead of waiting 30-90 days for payment, you get funded within 24 hours.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How Invoice Factoring Works:</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">1.</span>
                  <span>Submit your freight invoice and BOL</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">2.</span>
                  <span>Get approved in minutes (no credit check on you)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">3.</span>
                  <span>Receive 97-98.5% of invoice value same day</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-3">4.</span>
                  <span>We collect payment from your customer</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Targeting Keywords */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose Our Invoice Factoring Company?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We specialize in <strong>factoring invoices for truckers</strong> with the fastest funding 
            and most transparent rates in the industry.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Fast Invoice Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get paid in 24 hours or less. Our streamlined invoice factoring process 
                  ensures you never wait for payment again.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Same-day ACH available
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Weekend processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24/7 online portal
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">Best Rates for Truckers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Transparent invoice factoring rates starting at 1.5%. No hidden fees, 
                  no surprises - just honest trucking invoice finance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Rates from 1.5-3%
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    No setup fees
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Volume discounts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl">No Credit Checks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Your personal credit doesn't matter. We evaluate your customers' 
                  creditworthiness, not yours.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Bad credit OK
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    New businesses welcome
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    98% approval rate
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Invoice Factoring Calculator */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Invoice Factoring Calculator for Trucking
          </h2>
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl">Calculate Your Invoice Advance</CardTitle>
              <CardDescription>See how much cash you'll get for your trucking invoices</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Example Invoice Factoring Amounts:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>$2,500 invoice</span>
                      <span className="font-bold text-green-600">= $2,425 cash today</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>$5,000 invoice</span>
                      <span className="font-bold text-green-600">= $4,850 cash today</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>$10,000 invoice</span>
                      <span className="font-bold text-green-600">= $9,700 cash today</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    * Based on 3% factoring rate. Your rate may be lower.
                  </p>
                </div>
                <div className="text-center">
                  <Link href="/apply">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Get Your Custom Quote Now
                    </Button>
                  </Link>
                  <p className="text-sm text-gray-600 mt-2">
                    Takes only 5 minutes • No obligation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Types of Invoice Factoring */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Invoice Factoring Options for Trucking Companies
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <FileText className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle className="text-xl">Recourse Invoice Factoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Most affordable option for factoring invoices for truckers. You guarantee 
                  payment if customer doesn't pay.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold">Best for:</p>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>• Established trucking companies</li>
                    <li>• Working with reliable shippers</li>
                    <li>• Lowest factoring rates (1.5-2%)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle className="text-xl">Non-Recourse Invoice Factoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete protection for your trucking invoice finance. We assume all 
                  credit risk on approved loads.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold">Best for:</p>
                  <ul className="text-sm space-y-1 mt-2">
                    <li>• New trucking businesses</li>
                    <li>• Working with new customers</li>
                    <li>• Peace of mind (2.5-3% rates)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Keyword Optimized */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Invoice Factoring for Trucking FAQs
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>What is invoice factoring for trucking?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Invoice factoring for trucking is a financial service where truckers sell their 
                  unpaid freight invoices to a factoring company for immediate cash. This provides 
                  fast invoice funding without waiting 30-90 days for payment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How fast is invoice funding?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our fast invoice funding process typically takes 24 hours or less. Submit your 
                  invoice before 2 PM EST and receive funds the same day via ACH transfer.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What makes you the best invoice factoring company for truckers?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We specialize exclusively in trucking invoice finance with the lowest rates (1.5-3%), 
                  fastest funding, no contracts, and a 98% approval rate. Our team includes former 
                  truckers who understand your business.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you require credit checks for invoice factoring?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No personal credit checks required. We evaluate your customers' creditworthiness, 
                  not yours. This makes our invoice factoring perfect for new trucking companies 
                  or those rebuilding credit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Paid Same Day with Invoice Factoring
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of truckers using our invoice factoring company for fast funding. 
            Turn invoices into cash in 24 hours or less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/apply">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                Apply in Minutes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:6198776746">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
                <Phone className="mr-2 h-5 w-5" />
                Call (619) 877-6746
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-sm opacity-75">
            <div>✓ No contracts</div>
            <div>✓ No hidden fees</div>
            <div>✓ 5-min application</div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">5,000+</div>
              <div className="text-gray-600">Invoices Factored</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">$50M+</div>
              <div className="text-gray-600">Funded This Year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">24hr</div>
              <div className="text-gray-600">Average Funding Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">4.9★</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      <ComplianceFooter />
    </div>
  )
}