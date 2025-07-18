import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, DollarSign, Shield, Clock, CheckCircle, AlertCircle, ArrowRight, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'What is a Factoring Company? Complete Guide for Businesses',
  description: 'Learn what a factoring company is, how factoring companies work, and why businesses use them. Discover the benefits of invoice factoring for cash flow.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/blog/what-is-a-factoring-company',
  },
  openGraph: {
    title: 'What is a Factoring Company? Complete Guide',
    description: 'Everything you need to know about factoring companies and how they help businesses improve cash flow.',
    images: [
      {
        url: 'https://autofreightfactoring.com/icon.png',
        width: 1024,
        height: 1024,
        alt: 'AutoFreightFactoring Logo',
      }
    ],
  },
}

export default function WhatIsAFactoringCompany() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          What is a Factoring Company? A Complete Guide
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover how factoring companies work, what services they provide, and why thousands of businesses use them to improve cash flow and grow faster.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <time dateTime="2024-01-18">January 18, 2024</time>
          <span>•</span>
          <span>8 min read</span>
        </div>
      </header>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none mb-12">
        <p className="lead text-xl text-gray-700">
          A factoring company is a financial services provider that purchases unpaid invoices from businesses, providing immediate cash in exchange. This practice, known as invoice factoring or accounts receivable factoring, helps businesses bridge the gap between delivering services and getting paid.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
          <p className="font-semibold text-blue-900 mb-2">Key Point:</p>
          <p className="text-blue-800">
            Factoring is not a loan—it's the sale of your invoices. This means no debt on your balance sheet and no impact on your credit score.
          </p>
        </div>
      </section>

      {/* What is a Factoring Company */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Understanding Factoring Companies
        </h2>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Factoring Company Definition:</h3>
          <p className="text-gray-700 mb-4">
            A factoring company is a specialized financial institution that provides working capital to businesses by purchasing their accounts receivable (unpaid invoices) at a discount. The factoring company then collects payment directly from the business's customers.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="font-semibold">Immediate Cash</p>
              <p className="text-sm text-gray-600">80-100% advance</p>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold">Fast Funding</p>
              <p className="text-sm text-gray-600">Same-day available</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-semibold">Risk Transfer</p>
              <p className="text-sm text-gray-600">They handle collections</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4">How Do Factoring Companies Work?</h3>
        
        <div className="space-y-6 mb-8">
          <div className="flex items-start">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">You Submit Invoices</h4>
              <p className="text-gray-600">After delivering goods or services, you submit unpaid invoices to the factoring company along with proof of delivery.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Verification Process</h4>
              <p className="text-gray-600">The factoring company verifies the invoice validity and checks your customer's creditworthiness (not yours).</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Immediate Advance</h4>
              <p className="text-gray-600">You receive 80-100% of the invoice value immediately, typically within 24 hours.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Collection & Settlement</h4>
              <p className="text-gray-600">The factoring company collects from your customer. Once paid, they send you any remaining balance minus their fee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Factoring Companies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Types of Factoring Companies
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border rounded-lg p-6">
            <Building2 className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Industry-Specific Factors</h3>
            <p className="text-gray-600 mb-3">
              Specialize in particular industries like trucking, staffing, or manufacturing. They understand unique industry challenges.
            </p>
            <p className="text-sm text-gray-500">
              Example: AutoFreightFactoring specializes in trucking and transportation.
            </p>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <TrendingUp className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">General Factoring Companies</h3>
            <p className="text-gray-600 mb-3">
              Work with businesses across various industries. May offer broader services but less specialized knowledge.
            </p>
            <p className="text-sm text-gray-500">
              Best for: Diverse businesses with varied client bases.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Factoring Service Types</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-6">
            <h4 className="font-semibold mb-1">Recourse Factoring</h4>
            <p className="text-gray-700">You remain liable if your customer doesn't pay. Lower fees but more risk.</p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h4 className="font-semibold mb-1">Non-Recourse Factoring</h4>
            <p className="text-gray-700">The factoring company assumes the credit risk. Higher fees but protects you from bad debt.</p>
          </div>
          
          <div className="border-l-4 border-purple-600 pl-6">
            <h4 className="font-semibold mb-1">Spot Factoring</h4>
            <p className="text-gray-700">Factor individual invoices as needed. No contracts or minimums required.</p>
          </div>
          
          <div className="border-l-4 border-yellow-600 pl-6">
            <h4 className="font-semibold mb-1">Full-Service Factoring</h4>
            <p className="text-gray-700">Includes credit checks, collections, and complete accounts receivable management.</p>
          </div>
        </div>
      </section>

      {/* What Services Do Factoring Companies Provide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What Services Do Factoring Companies Provide?
        </h2>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Core Services:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Invoice purchasing & immediate funding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Credit verification of your customers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Professional collections management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Accounts receivable administration</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Additional Services:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Online account management portals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Fuel advance programs (trucking)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Financial reporting tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Benefits of Using a Factoring Company
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg p-6">
            <DollarSign className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Immediate Cash Flow</h3>
            <p className="text-gray-600">
              Convert 30-90 day payment terms into immediate cash. Keep operations running smoothly without waiting.
            </p>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <Shield className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">No Debt Created</h3>
            <p className="text-gray-600">
              Unlike loans, factoring doesn't add debt to your balance sheet or require personal guarantees.
            </p>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <Clock className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Outsourced Collections</h3>
            <p className="text-gray-600">
              Save time and resources by letting professionals handle invoice collections and follow-ups.
            </p>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <TrendingUp className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Growth Enabler</h3>
            <p className="text-gray-600">
              Take on more business without worrying about cash flow. Factoring scales with your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Who Uses Factoring Companies */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Who Uses Factoring Companies?
        </h2>
        
        <div className="bg-blue-50 rounded-lg p-8 mb-6">
          <p className="text-lg text-gray-700 mb-4">
            Factoring companies serve businesses across many industries, particularly those with:
          </p>
          <ul className="grid md:grid-cols-2 gap-3">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span>B2B sales models</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span>Net 30-90 payment terms</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span>Seasonal businesses</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
              <span>Rapid growth phases</span>
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold mb-4">Common Industries Using Factoring:</h3>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Transportation</p>
            <p className="text-sm text-gray-600">Trucking, freight, logistics</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Staffing</p>
            <p className="text-sm text-gray-600">Temp agencies, recruiters</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Manufacturing</p>
            <p className="text-sm text-gray-600">Suppliers, distributors</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Construction</p>
            <p className="text-sm text-gray-600">Contractors, subcontractors</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Healthcare</p>
            <p className="text-sm text-gray-600">Medical suppliers, services</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Oil & Gas</p>
            <p className="text-sm text-gray-600">Service providers, suppliers</p>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How to Choose a Factoring Company
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Industry Experience</h3>
              <p className="text-gray-700">
                Choose a factor that understands your industry. Specialized factors like AutoFreightFactoring for trucking offer tailored solutions.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-700">
                Look for clear, upfront pricing with no hidden fees. Rates typically range from 1-5% of invoice value.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Funding Speed</h3>
              <p className="text-gray-700">
                Ensure they offer true same-day or 24-hour funding. Many claim "fast" but take days.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-2">Contract Flexibility</h3>
              <p className="text-gray-700">
                Avoid long-term contracts or minimum volume requirements unless they benefit your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Factoring vs Other Financing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Factoring Companies vs. Other Financing Options
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-4 text-left">Aspect</th>
                <th className="border p-4 text-left">Factoring Company</th>
                <th className="border p-4 text-left">Bank Loan</th>
                <th className="border p-4 text-left">Line of Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4 font-medium">Speed</td>
                <td className="border p-4 text-green-600">24 hours</td>
                <td className="border p-4 text-red-600">2-8 weeks</td>
                <td className="border p-4 text-yellow-600">1-2 weeks</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-4 font-medium">Credit Required</td>
                <td className="border p-4 text-green-600">Customer's only</td>
                <td className="border p-4 text-red-600">Your credit</td>
                <td className="border p-4 text-red-600">Your credit</td>
              </tr>
              <tr>
                <td className="border p-4 font-medium">Collateral</td>
                <td className="border p-4 text-green-600">Invoices only</td>
                <td className="border p-4 text-red-600">Assets required</td>
                <td className="border p-4 text-yellow-600">May require</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-4 font-medium">Debt Created</td>
                <td className="border p-4 text-green-600">No</td>
                <td className="border p-4 text-red-600">Yes</td>
                <td className="border p-4 text-red-600">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Experience the AutoFreightFactoring Difference
        </h2>
        <p className="text-xl mb-8 opacity-90">
          As a specialized trucking factoring company, we understand your unique needs. Get same-day funding with transparent pricing and no hidden fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/apply">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Apply for Factoring <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/faq">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Common Questions About Factoring Companies
        </h2>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-2">What does a factoring company do?</h3>
            <p className="text-gray-700">
              A factoring company purchases your unpaid invoices and advances you immediate cash, then collects payment from your customers.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-2">How much do factoring companies charge?</h3>
            <p className="text-gray-700">
              Fees typically range from 1-5% of invoice value. AutoFreightFactoring charges a flat 3% with no hidden fees.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Is a factoring company a collection agency?</h3>
            <p className="text-gray-700">
              No. Factoring companies purchase invoices and professionally manage collections. They maintain positive customer relationships while collecting payments.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Can startups use factoring companies?</h3>
            <p className="text-gray-700">
              Yes! Factoring is based on your customer's credit, not yours. It's ideal for new businesses that don't qualify for traditional financing.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Conclusion: Factoring Companies Enable Business Growth
        </h2>
        <p className="text-gray-700 mb-4">
          Factoring companies provide a vital service for businesses facing cash flow challenges due to slow-paying customers. By converting invoices into immediate cash, they enable businesses to operate smoothly, take on new opportunities, and grow without taking on debt.
        </p>
        <p className="text-gray-700">
          Whether you're a trucking company waiting on broker payments or any B2B business with net terms, a factoring company can transform your cash flow. Choose a reputable factor that understands your industry, offers transparent pricing, and provides the speed and flexibility your business needs.
        </p>
      </section>

      {/* Related Articles */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/how-invoice-factoring-works-for-truckers" className="group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
                How Invoice Factoring Works for Truckers
              </h3>
              <p className="text-gray-600">
                Step-by-step guide to the freight factoring process.
              </p>
            </div>
          </Link>
          
          <Link href="/blog/complete-guide-same-day-freight-factoring" className="group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
                Complete Guide to Same Day Freight Factoring
              </h3>
              <p className="text-gray-600">
                Everything about getting paid in hours, not weeks.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  )
}