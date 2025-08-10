import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ComplianceFooter } from '@/components/compliance-footer'

export const metadata: Metadata = {
  title: 'Freight Factoring Services | Get Cash Fast for Your Invoices',
  description: 'Freight factoring services for truckers and carriers. Turn unpaid invoices into immediate cash flow. Fast approval, competitive rates, no hidden fees.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/factoring',
  },
}

export default function FactoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Freight Factoring That Works for You
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Turn your unpaid freight invoices into immediate cash. Get funded in 24 hours with transparent rates and no long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#calculator">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Calculate Your Advance
                </Button>
              </Link>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>24-Hour Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get paid in 24 hours, not 30-90 days</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Grow Your Fleet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Take more loads with improved cash flow</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <CardTitle>No Credit Checks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Approval based on your customers' credit</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Calculator className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                <CardTitle>Transparent Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Competitive rates, no hidden costs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What is Freight Factoring */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What is Freight Factoring?
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Freight factoring is a financial service that allows trucking companies to sell their 
              unpaid invoices to a factoring company for immediate cash. Instead of waiting 30-90 
              days for payment, you get paid within 24 hours.
            </p>
            <p className="mb-6">
              This service is perfect for:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Owner-operators needing consistent cash flow</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Small fleets looking to grow their business</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>New trucking companies building credit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Carriers working with slow-paying shippers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How Freight Factoring Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deliver Your Load</h3>
                  <p className="text-gray-600">Complete your delivery and get your signed Bill of Lading (BOL)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Submit Invoice</h3>
                  <p className="text-gray-600">Upload your invoice and BOL through our secure portal</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get Funded</h3>
                  <p className="text-gray-600">Receive 97% of invoice value within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">We Collect</h3>
                  <p className="text-gray-600">We handle collections from your customers</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Quick Example:</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Invoice Amount:</span>
                  <span className="font-semibold">$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Factoring Fee:</span>
                  <span className="font-semibold">Competitive rate</span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="text-gray-600">You Receive:</span>
                  <span className="text-2xl font-bold text-green-600">$4,900</span>
                </div>
                <div className="text-sm text-gray-500 mt-4">
                  * Within 24 hours of invoice submission
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Factoring */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Flexible Factoring Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Recourse Factoring</CardTitle>
                <CardDescription>Most common and affordable option</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Best rates available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">You guarantee payment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Best for reliable customers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Non-Recourse Factoring</CardTitle>
                <CardDescription>Complete payment protection</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">We assume credit risk</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Competitive rates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Peace of mind included</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Spot Factoring</CardTitle>
                <CardDescription>Factor only when you need</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">No minimums or contracts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Choose which loads to factor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Perfect for occasional needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Calculate Your Factoring Advance
          </h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Quick Calculator</CardTitle>
              <CardDescription>See how much cash you'll receive for your invoice</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <p className="text-lg mb-4">For personalized calculations:</p>
                  <Link href="/apply">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Get Your Custom Quote
                    </Button>
                  </Link>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold mb-2">Typical advance amounts:</p>
                  <ul className="space-y-1">
                    <li>• $1,000 invoice = competitive advance rates</li>
                    <li>• $5,000 invoice = competitive advance rates</li>
                    <li>• $10,000 invoice = competitive advance rates</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚛</span>
              </div>
              <h3 className="font-semibold mb-2">Long Haul Trucking</h3>
              <p className="text-gray-600 text-sm">OTR drivers and fleet owners</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-semibold mb-2">Local Delivery</h3>
              <p className="text-gray-600 text-sm">Last-mile and regional carriers</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="font-semibold mb-2">Flatbed & Heavy Haul</h3>
              <p className="text-gray-600 text-sm">Specialized equipment transport</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❄️</span>
              </div>
              <h3 className="font-semibold mb-2">Refrigerated Transport</h3>
              <p className="text-gray-600 text-sm">Temperature-controlled logistics</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Expedited Freight</h3>
              <p className="text-gray-600 text-sm">Time-sensitive shipments</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚐</span>
              </div>
              <h3 className="font-semibold mb-2">Box Trucks & Vans</h3>
              <p className="text-gray-600 text-sm">Small to medium cargo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Cash Flow?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of truckers who've taken control of their finances with freight factoring. 
            Apply today and get funded tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Your Application
              </Button>
            </Link>
            <a href="tel:6198776746">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
                Call Call Us
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm opacity-75">
            No obligation • Free quote • 5-minute application
          </p>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Truckers Trust Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Active Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24hr</div>
                <div className="text-gray-600">Average Funding</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">High</div>
                <div className="text-gray-600">Approval Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">A+</div>
                <div className="text-gray-600">BBB Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ComplianceFooter />
    </div>
  )
}