import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, CheckCircle, Zap, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ComplianceFooter } from '@/components/compliance-footer'

export const metadata: Metadata = {
  title: 'Fast Freight Factoring | Get Paid in 1-2 Business Days, Not Weeks',
  description: 'Fast freight factoring with quick approval. Submit invoices during business hours, get paid in 1-2 business days. Fast funding for truckers with no contracts or hidden fees.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/same-day-factoring',
  },
}

export default function FastFactoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fast Freight Factoring: Get Paid in 1-2 Business Days
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Turn your freight invoices into cash within 1-2 business days with our fast freight factoring service. Submit during business hours for next business day funding - no contracts, no minimums, just fast payment for truckers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  Get Paid Fast <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>1-2 Business Day Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Submit during business hours, get paid the next day</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Quick Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get approved quickly, not in days</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <CardTitle>100% Advance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Full invoice value minus competitive fee</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Fast Funding in 4 Simple Steps
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Deliver Your Load</h3>
                <p className="text-gray-600">Complete your delivery and get your signed BOL</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Submit Your Invoice</h3>
                <p className="text-gray-600">Upload your invoice and BOL through our online portal</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quick Verification</h3>
                <p className="text-gray-600">We verify your documents during business hours</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Get Paid Fast</h3>
                <p className="text-gray-600">Receive funds within 1-2 business days to your bank account</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Fast Factoring?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">No Waiting for Payment</h3>
              <p className="text-gray-600">
                Stop waiting 30-90 days for brokers and shippers to pay. Get your money 
                within 1-2 business days of delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Improve Cash Flow</h3>
              <p className="text-gray-600">
                Keep your trucks rolling with consistent cash flow. Pay for fuel, 
                maintenance, and drivers without delays.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Take More Loads</h3>
              <p className="text-gray-600">
                Don't turn down profitable loads due to cash constraints. Factor and 
                grow your business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
              <h3 className="text-xl font-semibold mb-2">No Credit Requirements</h3>
              <p className="text-gray-600">
                Approval based on your customer's credit, not yours. Perfect for new 
                businesses and owner-operators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Who Qualifies for Fast Factoring?
          </h2>
          <div className="bg-blue-50 p-8 rounded-2xl">
            <p className="text-lg text-gray-700 mb-6">
              Fast factoring is available to all trucking companies that meet these simple requirements:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>Active MC or DOT authority</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>Hauling for creditworthy customers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>Completed deliveries with signed BOLs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>Invoices submitted during business hours for next-day funding</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Getting Paid Fast
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of truckers who never wait for payment. Apply quickly, 
            get approved fast, and receive funds within 1-2 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Apply Now - Get Paid Fast
              </Button>
            </Link>
            <a href="tel:6198776746">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
                Call Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions About Fast Factoring
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                When do I need to submit invoices for next-day payment?
              </h3>
              <p className="text-gray-600">
                Submit your invoices during business hours (9 AM - 5 PM EST) to receive payment the next business day. 
                Invoices submitted after hours will be processed the following business day.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                How much does fast factoring cost?
              </h3>
              <p className="text-gray-600">
                We charge competitive factoring rates. On a $2,000 invoice, you receive up to $2,000 
                within 1-2 business days. No hidden fees, no surprises.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                Do I need to factor all my invoices?
              </h3>
              <p className="text-gray-600">
                No! We offer spot factoring with no minimums. Factor only when you need 
                quick cash - you're in complete control.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="outline" size="lg">
                View All FAQs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Compliance Footer */}
      <ComplianceFooter />
    </div>
  )
}