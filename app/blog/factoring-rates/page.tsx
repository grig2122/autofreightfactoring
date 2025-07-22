import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, DollarSign, Percent, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Factoring Rates: Current Costs & Fee Calculator | AutoFreightFactoring',
  description: 'Understand factoring rates and calculate your costs. Compare current factoring rates, fees, and get tips to secure the best rate for your business.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/blog/factoring-rates',
  },
  openGraph: {
    title: 'Factoring Rates: Calculate Your True Cost',
    description: 'Current factoring rates, fee calculator, and tips to get the best deal.',
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

export default function FactoringRates() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Factoring Rates: What You'll Really Pay
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Understanding factoring rates is crucial for your bottom line. This guide breaks down current rates, how they're calculated, and what affects your factoring rate.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <time dateTime="2025-01-18">January 18, 2025</time>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </header>

      {/* Quick Answer */}
      <section className="bg-blue-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Answer: Current Factoring Rates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Percent className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-3xl font-bold text-gray-900">1.5-5%</p>
            <p className="text-sm text-gray-600">Industry Average</p>
          </div>
          <div className="text-center">
            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-3xl font-bold text-gray-900">3%</p>
            <p className="text-sm text-gray-600">AutoFreightFactoring Flat Rate</p>
          </div>
          <div className="text-center">
            <Calculator className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-3xl font-bold text-gray-900">$150</p>
            <p className="text-sm text-gray-600">Cost per $5,000 invoice</p>
          </div>
        </div>
      </section>

      {/* What is a Factoring Rate */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What is a Factoring Rate?
        </h2>
        
        <p className="text-lg text-gray-700 mb-6">
          A factoring rate is the percentage fee charged by a factoring company to purchase your invoices. This rate is deducted from your invoice value when you receive your advance.
        </p>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold mb-3">Simple Example:</h3>
          <ul className="space-y-2">
            <li>• Invoice Amount: <span className="font-semibold">$5,000</span></li>
            <li>• Factoring Rate: <span className="font-semibold">3%</span></li>
            <li>• Factoring Fee: <span className="font-semibold">$150</span></li>
            <li>• You Receive: <span className="font-semibold text-green-600">$4,850</span></li>
          </ul>
        </div>
      </section>

      {/* Types of Factoring Rates */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Types of Factoring Rates
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-semibold mb-2">Flat Rate Factoring</h3>
            <p className="text-gray-700 mb-2">
              One simple rate for all invoices, regardless of payment terms. AutoFreightFactoring uses this model at 1.5%.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Best for:</strong> Simplicity and predictable costs
            </p>
          </div>
          
          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-xl font-semibold mb-2">Tiered Rate Factoring</h3>
            <p className="text-gray-700 mb-2">
              Rate increases based on how long the invoice remains unpaid. Example: 1% for 30 days, +0.5% each additional 15 days.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Best for:</strong> Quick-paying customers
            </p>
          </div>
          
          <div className="border-l-4 border-purple-600 pl-6">
            <h3 className="text-xl font-semibold mb-2">Volume-Based Rates</h3>
            <p className="text-gray-700 mb-2">
              Lower rates for higher monthly factoring volumes. Large companies can negotiate rates as low as 1.5%.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Best for:</strong> High-volume operations
            </p>
          </div>
        </div>
      </section>

      {/* Factoring Rate Calculator */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Factoring Rate Calculator
        </h2>
        
        <div className="bg-blue-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Calculate Your Factoring Costs</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Monthly Example:</h4>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="mb-2">Monthly Revenue: $50,000</p>
                <p className="mb-2">Factoring Rate: 3%</p>
                <p className="text-xl font-bold">Monthly Cost: $1,500</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Annual Example:</h4>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="mb-2">Annual Revenue: $600,000</p>
                <p className="mb-2">Factoring Rate: 3%</p>
                <p className="text-xl font-bold">Annual Cost: $18,000</p>
              </div>
            </div>
          </div>
          
          <p className="mt-6 text-sm opacity-90">
            Remember: This is not interest—you're selling invoices, not borrowing money.
          </p>
        </div>
      </section>

      {/* What Affects Your Rate */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          What Affects Your Factoring Rate?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg p-6">
            <TrendingUp className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Invoice Volume</h3>
            <p className="text-gray-600">
              Higher monthly volumes = lower rates. Factor $100K+ monthly for best rates.
            </p>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <CheckCircle className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Customer Credit</h3>
            <p className="text-gray-600">
              Better customer credit = lower rates. Fortune 500 clients get you the best rates.
            </p>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <Calculator className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Payment Terms</h3>
            <p className="text-gray-600">
              NET 30 invoices cost less to factor than NET 60 or NET 90 terms.
            </p>
          </div>
          
          <div className="bg-white border rounded-lg p-6">
            <DollarSign className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Industry Type</h3>
            <p className="text-gray-600">
              Trucking typically gets favorable rates due to established practices.
            </p>
          </div>
        </div>
      </section>

      {/* Factoring Rate Comparison */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Factoring Rate vs. Other Financing
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-4 text-left">Financing Type</th>
                <th className="border p-4 text-left">Typical Rate</th>
                <th className="border p-4 text-left">Speed</th>
                <th className="border p-4 text-left">Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4 font-medium">Factoring</td>
                <td className="border p-4 text-green-600">1.5-5% per invoice</td>
                <td className="border p-4">24 hours</td>
                <td className="border p-4">Customer credit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-4 font-medium">Bank Loan</td>
                <td className="border p-4">6-12% APR</td>
                <td className="border p-4">2-8 weeks</td>
                <td className="border p-4">Your credit + collateral</td>
              </tr>
              <tr>
                <td className="border p-4 font-medium">Line of Credit</td>
                <td className="border p-4">8-24% APR</td>
                <td className="border p-4">1-2 weeks</td>
                <td className="border p-4">Strong credit history</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-4 font-medium">Merchant Cash Advance</td>
                <td className="border p-4">20-50% of advance</td>
                <td className="border p-4">1-2 days</td>
                <td className="border p-4">Daily sales volume</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tips Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          How to Get the Best Factoring Rate
        </h2>
        
        <div className="bg-yellow-50 rounded-lg p-8">
          <ol className="space-y-4">
            <li className="flex items-start">
              <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
              <div>
                <h3 className="font-semibold mb-1">Compare Total Costs</h3>
                <p className="text-gray-700">Don't just look at the rate—include all fees in your comparison.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
              <div>
                <h3 className="font-semibold mb-1">Factor More Volume</h3>
                <p className="text-gray-700">Consolidate your factoring to qualify for volume discounts.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
              <div>
                <h3 className="font-semibold mb-1">Choose Quality Customers</h3>
                <p className="text-gray-700">Work with creditworthy brokers and shippers for better rates.</p>
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
              <div>
                <h3 className="font-semibold mb-1">Avoid Hidden Fees</h3>
                <p className="text-gray-700">Choose transparent factors like AutoFreightFactoring with no hidden costs.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          Get a Simple 1.5% Factoring Rate
        </h2>
        <p className="text-xl mb-8 opacity-90">
          No hidden fees, no complicated tiers, no surprises. Just a flat 1.5% rate with same-day funding.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/apply">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
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
          Common Questions About Factoring Rates
        </h2>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-2">What's a good factoring rate?</h3>
            <p className="text-gray-700">
              A good factoring rate ranges from 1.5% to 3.5% for trucking companies. Anything above 4% is high unless you have special circumstances.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-2">Is the factoring rate the only cost?</h3>
            <p className="text-gray-700">
              Not always. Many factors add hidden fees. At AutoFreightFactoring, our 1.5% rate includes everything—no hidden costs.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-2">How is the factoring rate calculated?</h3>
            <p className="text-gray-700">
              The rate is a percentage of your invoice value. For a $5,000 invoice at 1.5%, you pay $75 and receive $4,925.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Understanding Your True Factoring Rate
        </h2>
        <p className="text-gray-700 mb-4">
          The factoring rate is just one part of your total cost. Always consider hidden fees, contract terms, and service quality when comparing options. A transparent 1.5% rate often costs less than a "low" 1% rate with multiple fees.
        </p>
        <p className="text-gray-700">
          At AutoFreightFactoring, we keep it simple: 1.5% flat rate, no hidden fees, same-day funding. Calculate your costs easily and focus on growing your trucking business.
        </p>
      </section>

      {/* Related Articles */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/freight-factoring-rates-2025" className="group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
                Freight Factoring Rates 2025: Complete Guide
              </h3>
              <p className="text-gray-600">
                Detailed analysis of current freight factoring rates and trends.
              </p>
            </div>
          </Link>
          
          <Link href="/blog/what-is-a-factoring-company" className="group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">
                What is a Factoring Company?
              </h3>
              <p className="text-gray-600">
                Learn how factoring companies work and what they offer.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </article>
  )
}