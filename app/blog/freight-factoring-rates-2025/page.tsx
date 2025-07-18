import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calculator, ChartBar, DollarSign, FileText, Percent, Shield, TrendingDown, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Freight Factoring Rates 2025: Complete Cost Guide & Comparison',
  description: 'Current freight factoring rates for 2025. Compare costs, fees, and rates from top factoring companies. Learn what affects your rate and how to get the best deal.',
  openGraph: {
    title: 'Freight Factoring Rates 2025: Complete Cost Guide',
    description: 'Everything you need to know about freight factoring rates and fees in 2025.',
    type: 'article',
    publishedTime: '2024-01-22T00:00:00.000Z',
    authors: ['AutoFreight Team'],
  },
  alternates: {
    canonical: 'https://autofreightfactoring.com/blog/freight-factoring-rates-2025',
  },
}

export default function FactoringRatesPage() {
  return (
    <article className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Button>
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              Rates & Pricing
            </span>
            <time dateTime="2024-01-22">January 22, 2024</time>
            <span>8 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Freight Factoring Rates 2025: Complete Cost Guide & Comparison
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding freight factoring rates is crucial for your bottom line. This guide 
            breaks down current industry rates, hidden fees to watch for, and strategies to 
            get the best deal on your factoring agreement.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <ChartBar className="w-8 h-8 mr-3 text-blue-600" />
              Current Freight Factoring Rates for 2025
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Industry Average Rates:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Standard Factoring:</p>
                  <p className="text-2xl font-bold text-blue-600">2% - 3.5%</p>
                  <p className="text-sm text-gray-600">Per invoice factored</p>
                </div>
                <div>
                  <p className="font-semibold">Volume Factoring:</p>
                  <p className="text-2xl font-bold text-green-600">1.5% - 2.5%</p>
                  <p className="text-sm text-gray-600">For high-volume clients</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Rate Breakdown by Factoring Type</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Factoring Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Typical Rate Range</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Recourse Factoring</td>
                    <td className="border border-gray-300 px-4 py-2">1.5% - 3%</td>
                    <td className="border border-gray-300 px-4 py-2">Most trucking companies</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Non-Recourse Factoring</td>
                    <td className="border border-gray-300 px-4 py-2">2.5% - 5%</td>
                    <td className="border border-gray-300 px-4 py-2">Risk-averse companies</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Spot Factoring</td>
                    <td className="border border-gray-300 px-4 py-2">3% - 5%</td>
                    <td className="border border-gray-300 px-4 py-2">Occasional cash needs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Flat-Rate Factoring</td>
                    <td className="border border-gray-300 px-4 py-2">2.5% - 3.5%</td>
                    <td className="border border-gray-300 px-4 py-2">Predictable costs</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">Quick-Pay Programs</td>
                    <td className="border border-gray-300 px-4 py-2">1% - 2%</td>
                    <td className="border border-gray-300 px-4 py-2">Direct shipper programs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Calculator className="w-8 h-8 mr-3 text-green-600" />
              What Affects Your Factoring Rate?
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border-l-4 border-green-600 p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">1. Invoice Volume</h3>
                <p className="text-gray-600 mb-3">
                  Higher monthly factoring volume typically means lower rates:
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Under $50K/month: 3-4%</li>
                  <li>• $50K-$200K/month: 2-3%</li>
                  <li>• Over $200K/month: 1.5-2.5%</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">2. Customer Credit Quality</h3>
                <p className="text-gray-600">
                  Factoring invoices from creditworthy customers (large brokers, Fortune 500 
                  shippers) results in lower rates. High-risk customers mean higher rates or 
                  rejection.
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">3. Payment Terms</h3>
                <p className="text-gray-600 mb-3">
                  Shorter payment terms get better rates:
                </p>
                <ul className="space-y-1 text-gray-600">
                  <li>• NET 15-30: Standard rates</li>
                  <li>• NET 45-60: +0.5% additional</li>
                  <li>• NET 60+: +1% or more</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-orange-600 p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">4. Industry Experience</h3>
                <p className="text-gray-600">
                  New trucking companies (under 6 months) often pay 0.5-1% more than 
                  established businesses with proven track records.
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">5. Contract Terms</h3>
                <p className="text-gray-600">
                  Long-term contracts with minimum volume commitments get better rates than 
                  month-to-month or spot factoring arrangements.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <DollarSign className="w-8 h-8 mr-3 text-red-600" />
              Hidden Fees to Watch For
            </h2>
            
            <p className="mb-6">
              The advertised factoring rate isn't always the full story. Watch out for these 
              additional fees that can significantly increase your costs:
            </p>

            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Common Hidden Fees:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>
                    <strong>Application/Setup Fee:</strong>
                    <span className="text-gray-600"> $100-$500</span>
                  </li>
                  <li>
                    <strong>Monthly Minimum Fee:</strong>
                    <span className="text-gray-600"> $300-$500</span>
                  </li>
                  <li>
                    <strong>ACH/Wire Fee:</strong>
                    <span className="text-gray-600"> $15-$25 per transfer</span>
                  </li>
                  <li>
                    <strong>Credit Check Fee:</strong>
                    <span className="text-gray-600"> $10-$25 per check</span>
                  </li>
                  <li>
                    <strong>Monthly Service Fee:</strong>
                    <span className="text-gray-600"> $100-$250</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <strong>Same-Day Funding Fee:</strong>
                    <span className="text-gray-600"> 0.5-1% extra</span>
                  </li>
                  <li>
                    <strong>Termination Fee:</strong>
                    <span className="text-gray-600"> $500-$5,000</span>
                  </li>
                  <li>
                    <strong>Reserve Hold:</strong>
                    <span className="text-gray-600"> 10-20% of invoice</span>
                  </li>
                  <li>
                    <strong>Misdirected Payment Fee:</strong>
                    <span className="text-gray-600"> $35-$100</span>
                  </li>
                  <li>
                    <strong>Invoice Processing Fee:</strong>
                    <span className="text-gray-600"> $5-$15 per invoice</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h3 className="font-semibold mb-3">Pro Tip:</h3>
              <p>
                Always ask for a complete fee schedule before signing. Calculate your total 
                cost including all fees, not just the factoring rate. A 2% rate with high 
                fees can cost more than a 3% flat rate with no additional charges.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Percent className="w-8 h-8 mr-3 text-purple-600" />
              Real Cost Examples: What You'll Actually Pay
            </h2>
            
            <p className="mb-6">
              Let's look at real-world examples to understand the true cost of factoring:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Example 1: Small Owner-Operator</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Monthly Details:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Monthly Revenue: $20,000</li>
                      <li>• Factoring Rate: 3%</li>
                      <li>• ACH Fees: $25 × 4 = $100</li>
                      <li>• Monthly Service Fee: $0</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Cost Breakdown:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Factoring Fees: $600</li>
                      <li>• ACH Fees: $100</li>
                      <li>• <strong>Total Cost: $700</strong></li>
                      <li className="text-red-600">• Effective Rate: 3.5%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Example 2: Small Fleet (5 Trucks)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Monthly Details:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Monthly Revenue: $100,000</li>
                      <li>• Factoring Rate: 2.5%</li>
                      <li>• ACH Fees: $25 × 20 = $500</li>
                      <li>• Monthly Service Fee: $150</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Cost Breakdown:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Factoring Fees: $2,500</li>
                      <li>• ACH Fees: $500</li>
                      <li>• Service Fee: $150</li>
                      <li>• <strong>Total Cost: $3,150</strong></li>
                      <li className="text-orange-600">• Effective Rate: 3.15%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Example 3: Large Fleet (20+ Trucks)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2">Monthly Details:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Monthly Revenue: $500,000</li>
                      <li>• Factoring Rate: 1.75%</li>
                      <li>• Wire Fees: Waived</li>
                      <li>• All fees included</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Cost Breakdown:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Factoring Fees: $8,750</li>
                      <li>• Additional Fees: $0</li>
                      <li>• <strong>Total Cost: $8,750</strong></li>
                      <li className="text-green-600">• Effective Rate: 1.75%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <TrendingDown className="w-8 h-8 mr-3 text-green-600" />
              How to Get the Best Factoring Rates
            </h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">1. Increase Your Volume</h3>
                <p>
                  Consolidate all your factoring with one company. The more you factor, the 
                  better your rate. Consider factoring all invoices rather than cherry-picking.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">2. Work with Quality Customers</h3>
                <p>
                  Focus on hauling for creditworthy brokers and shippers. Avoid customers with 
                  poor payment history or credit issues.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">3. Negotiate Terms</h3>
                <p>
                  Don't accept the first offer. Compare multiple factoring companies and use 
                  competing offers to negotiate better rates.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">4. Maintain Clean Documentation</h3>
                <p>
                  Submit complete, accurate paperwork quickly. Factors reward efficiency with 
                  better rates and fewer fees.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">5. Build a Relationship</h3>
                <p>
                  Long-term clients get better rates. After 6-12 months of good history, ask 
                  for a rate reduction.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <ChartBar className="w-8 h-8 mr-3 text-indigo-600" />
              Factoring Rate Comparison: Top Companies
            </h2>
            
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <p className="text-sm">
                <strong>Note:</strong> Rates vary based on individual circumstances. These are 
                typical ranges for established trucking companies with good credit customers.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left">Company Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Typical Rates</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Advance Rate</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Contract Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Large National Factors</td>
                    <td className="border border-gray-300 px-4 py-2">1.5-3%</td>
                    <td className="border border-gray-300 px-4 py-2">90-95%</td>
                    <td className="border border-gray-300 px-4 py-2">Usually</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Regional Factors</td>
                    <td className="border border-gray-300 px-4 py-2">2-3.5%</td>
                    <td className="border border-gray-300 px-4 py-2">85-95%</td>
                    <td className="border border-gray-300 px-4 py-2">Sometimes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Online-Only Factors</td>
                    <td className="border border-gray-300 px-4 py-2">2.5-4%</td>
                    <td className="border border-gray-300 px-4 py-2">90-100%</td>
                    <td className="border border-gray-300 px-4 py-2">Rarely</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Spot Factoring</td>
                    <td className="border border-gray-300 px-4 py-2">3-5%</td>
                    <td className="border border-gray-300 px-4 py-2">80-90%</td>
                    <td className="border border-gray-300 px-4 py-2">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-blue-600" />
              Rate Trends for 2025
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold mb-3">Current Market Trends:</h3>
              <ul className="space-y-2">
                <li>• <strong>Increased Competition:</strong> More factoring companies entering the market is driving rates down</li>
                <li>• <strong>Technology Impact:</strong> Automated processing is reducing operational costs and rates</li>
                <li>• <strong>Flexible Terms:</strong> More companies offering no-contract options</li>
                <li>• <strong>Specialized Programs:</strong> Industry-specific rates for different trucking sectors</li>
              </ul>
            </div>

            <p>
              The good news for truckers: factoring rates have been trending downward as 
              competition increases and technology improves efficiency. We expect this trend 
              to continue through 2025.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-red-600" />
              Red Flags: When Rates Are Too Good to Be True
            </h2>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="mb-4">
                Be cautious of factoring companies offering rates significantly below market 
                average. Watch out for:
              </p>
              <ul className="space-y-2">
                <li>⚠️ Rates under 1% (usually have massive hidden fees)</li>
                <li>⚠️ "Teaser rates" that increase after 30-90 days</li>
                <li>⚠️ Companies that won't provide written fee schedules</li>
                <li>⚠️ Factors requiring large upfront deposits</li>
                <li>⚠️ Unclear contract terms or automatic renewal clauses</li>
              </ul>
            </div>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Making the Right Choice</h2>
            <p className="mb-4">
              When evaluating factoring rates, remember that the lowest rate isn't always the 
              best deal. Consider:
            </p>
            <ul className="space-y-2 mb-6">
              <li>✓ Total cost including all fees</li>
              <li>✓ Quality of customer service</li>
              <li>✓ Speed of funding</li>
              <li>✓ Contract flexibility</li>
              <li>✓ Additional services (fuel cards, credit checks)</li>
            </ul>
            <p>
              A slightly higher rate from a reputable company with excellent service often 
              provides better value than rock-bottom rates with poor support and hidden fees.
            </p>
          </section>

          <section className="mb-12">
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Get Transparent Factoring Rates
              </h3>
              <p className="mb-6">
                At Auto Freight Factoring, we believe in simple, transparent pricing. No hidden 
                fees, no surprises - just straightforward factoring to keep you rolling.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Our Simple Pricing:</h4>
                  <ul className="space-y-1">
                    <li>✓ Flat 3% factoring fee</li>
                    <li>✓ 100% advance available</li>
                    <li>✓ No hidden fees</li>
                    <li>✓ No contracts required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Included Free:</h4>
                  <ul className="space-y-1">
                    <li>✓ Same-day funding</li>
                    <li>✓ Fuel card program</li>
                    <li>✓ Credit checks</li>
                    <li>✓ Online portal access</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/apply">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Get Your Custom Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Compare Our Rates
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <p className="text-gray-600 mb-4">
              <strong>About the Author:</strong> The AutoFreight Team has analyzed thousands 
              of factoring agreements and helped truckers save millions in fees. We're committed 
              to transparency in freight factoring pricing.
            </p>
            <div className="flex gap-4">
              <Link href="/blog" className="text-blue-600 hover:underline">
                ← Back to Blog
              </Link>
              <Link href="/blog/what-is-freight-factoring" className="text-blue-600 hover:underline">
                What is Freight Factoring? →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}