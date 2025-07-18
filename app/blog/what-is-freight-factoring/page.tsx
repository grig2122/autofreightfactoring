import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calculator, CheckCircle, Clock, DollarSign, FileText, HelpCircle, Shield, TrendingUp, Truck, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'What is Freight Factoring? The Ultimate Guide for Truckers (2025)',
  description: 'Complete guide to freight factoring for truckers. Learn how invoice factoring works, costs, benefits, and how to get started. Everything you need to know in one place.',
  openGraph: {
    title: 'What is Freight Factoring? The Ultimate Guide for Truckers',
    description: 'Everything truckers need to know about freight factoring in 2025. How it works, costs, benefits, and getting started.',
    type: 'article',
    publishedTime: '2024-01-20T00:00:00.000Z',
    authors: ['AutoFreight Team'],
  },
  alternates: {
    canonical: 'https://autofreightfactoring.com/blog/what-is-freight-factoring',
  },
}

export default function FreightFactoringGuidePage() {
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
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              Factoring Basics
            </span>
            <time dateTime="2024-01-20">January 20, 2024</time>
            <span>12 min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is Freight Factoring? The Ultimate Guide for Truckers
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            If you're tired of waiting 30-90 days to get paid for delivered loads, freight 
            factoring could be your solution. This comprehensive guide explains everything 
            you need to know about factoring in the trucking industry.
          </p>
        </header>

        <nav className="mb-12 p-6 bg-gray-50 rounded-lg">
          <h2 className="font-semibold mb-4">Table of Contents</h2>
          <ol className="space-y-2 text-blue-600">
            <li><a href="#what-is-factoring" className="hover:underline">1. What is Freight Factoring?</a></li>
            <li><a href="#how-it-works" className="hover:underline">2. How Does Freight Factoring Work?</a></li>
            <li><a href="#types" className="hover:underline">3. Types of Freight Factoring</a></li>
            <li><a href="#costs" className="hover:underline">4. How Much Does Factoring Cost?</a></li>
            <li><a href="#benefits" className="hover:underline">5. Benefits of Freight Factoring</a></li>
            <li><a href="#drawbacks" className="hover:underline">6. Potential Drawbacks</a></li>
            <li><a href="#who-should-use" className="hover:underline">7. Who Should Use Freight Factoring?</a></li>
            <li><a href="#getting-started" className="hover:underline">8. How to Get Started</a></li>
            <li><a href="#choosing-company" className="hover:underline">9. Choosing a Factoring Company</a></li>
            <li><a href="#faq" className="hover:underline">10. Frequently Asked Questions</a></li>
          </ol>
        </nav>

        <div className="prose prose-lg max-w-none">
          <section id="what-is-factoring" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <HelpCircle className="w-8 h-8 mr-3 text-blue-600" />
              What is Freight Factoring?
            </h2>
            
            <p>
              <strong>Freight factoring</strong> (also called invoice factoring or accounts 
              receivable factoring) is a financial service where trucking companies sell their 
              unpaid invoices to a factoring company for immediate cash.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-3">Simple Definition:</h3>
              <p>
                Instead of waiting 30-90 days for brokers or shippers to pay you, a factoring 
                company pays you within 24 hours. They then collect the payment from your 
                customer when it's due.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Real-World Example</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">Let's say you're an owner-operator who just delivered a load:</p>
              <ul className="space-y-2">
                <li>• <strong>Without Factoring:</strong> You submit a $2,000 invoice to the broker and wait 45 days for payment</li>
                <li>• <strong>With Factoring:</strong> You submit the invoice to your factor and receive $1,940 the next day (97% advance minus 3% fee)</li>
              </ul>
              <p className="mt-4">
                The factoring company handles collecting the full $2,000 from the broker when it's due.
              </p>
            </div>
          </section>

          <section id="how-it-works" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Truck className="w-8 h-8 mr-3 text-green-600" />
              How Does Freight Factoring Work?
            </h2>
            
            <p>
              The freight factoring process is straightforward and designed to be fast. 
              Here's the step-by-step breakdown:
            </p>

            <div className="space-y-6 my-8">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Deliver the Load</h4>
                  <p className="text-gray-600">
                    Complete your delivery and get a signed Bill of Lading (BOL) or Proof 
                    of Delivery (POD) from the receiver.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Submit Documents</h4>
                  <p className="text-gray-600">
                    Send your invoice, rate confirmation, and signed BOL to your factoring 
                    company. Most accept documents via mobile app, email, or online portal.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Verification</h4>
                  <p className="text-gray-600">
                    The factor verifies the load was delivered and the invoice is valid. 
                    This usually takes 30 minutes to 2 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Get Paid</h4>
                  <p className="text-gray-600">
                    Receive 80-100% of the invoice value (minus fees) via ACH or wire 
                    transfer, typically within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Collection</h4>
                  <p className="text-gray-600">
                    The factoring company collects payment from your customer when the 
                    invoice is due. You're done!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Pro Tip:</h3>
              <p>
                Many factoring companies offer fuel cards, allowing you to get fuel advances 
                immediately after booking a load - before you even pick it up!
              </p>
            </div>
          </section>

          <section id="types" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <FileText className="w-8 h-8 mr-3 text-purple-600" />
              Types of Freight Factoring
            </h2>
            
            <p>
              Not all factoring arrangements are the same. Understanding the different types 
              helps you choose the best option for your business:
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. Recourse vs. Non-Recourse Factoring</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Recourse Factoring</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• You're responsible if customer doesn't pay</li>
                  <li>• Lower fees (1-3%)</li>
                  <li>• Most common type</li>
                  <li>• Factor may charge back unpaid invoices</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Non-Recourse Factoring</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Factor assumes credit risk</li>
                  <li>• Higher fees (3-5%)</li>
                  <li>• Protection if customer goes bankrupt</li>
                  <li>• Stricter customer approval</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Spot Factoring vs. Contract Factoring</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Spot Factoring</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Factor individual invoices as needed</li>
                  <li>• No long-term commitment</li>
                  <li>• Higher rates per invoice</li>
                  <li>• Maximum flexibility</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">Contract Factoring</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Factor all or most invoices</li>
                  <li>• Long-term contract required</li>
                  <li>• Lower rates</li>
                  <li>• Volume commitments</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Advance Rates</h3>
            <p>
              Different factoring companies offer different advance rates:
            </p>
            <ul className="space-y-2 my-4">
              <li>• <strong>Standard Advance:</strong> 80-90% of invoice value</li>
              <li>• <strong>High Advance:</strong> 95-100% of invoice value</li>
              <li>• <strong>Reserve Hold:</strong> 10-20% held until customer pays</li>
            </ul>
          </section>

          <section id="costs" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Calculator className="w-8 h-8 mr-3 text-orange-600" />
              How Much Does Freight Factoring Cost?
            </h2>
            
            <p>
              Factoring fees vary based on several factors. Here's what you can expect:
            </p>

            <div className="bg-orange-50 p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-3">Typical Fee Ranges:</h3>
              <ul className="space-y-2">
                <li>• <strong>Standard Rate:</strong> 2-3.5% of invoice value</li>
                <li>• <strong>High-Volume Customers:</strong> 1.5-2.5%</li>
                <li>• <strong>Non-Recourse:</strong> 3-5%</li>
                <li>• <strong>Spot Factoring:</strong> 3-5%</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Factors That Affect Your Rate</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>Invoice Volume:</strong> Higher volume typically means lower rates
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>Customer Creditworthiness:</strong> Better customer credit = lower rates
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>Payment Terms:</strong> Shorter terms (NET 30) cost less than longer terms
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong>Industry Experience:</strong> Established companies may get better rates
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Cost Example</h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold mb-4">$5,000 Invoice with 3% Factoring Fee:</p>
              <ul className="space-y-2">
                <li>Invoice Amount: $5,000</li>
                <li>Factoring Fee (3%): -$150</li>
                <li>You Receive: $4,850</li>
                <li className="font-semibold text-green-600">Time to Payment: 24 hours</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Compare this to waiting 45 days for payment and potentially missing out on 
                other profitable loads due to cash flow constraints.
              </p>
            </div>
          </section>

          <section id="benefits" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-green-600" />
              Benefits of Freight Factoring
            </h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  1. Immediate Cash Flow
                </h3>
                <p>
                  Get paid in 24 hours instead of 30-90 days. This allows you to take on 
                  more loads, pay drivers, and cover operating expenses without waiting.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  2. No Debt Added
                </h3>
                <p>
                  Factoring isn't a loan - you're selling an asset (your invoice). This 
                  means no debt on your balance sheet and no monthly loan payments.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  3. Credit Management
                </h3>
                <p>
                  Factoring companies check your customers' credit before approving invoices, 
                  helping you avoid working with slow-paying or high-risk brokers.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  4. Collections Handled
                </h3>
                <p>
                  The factoring company handles invoice collections, saving you time and the 
                  awkwardness of chasing payments from customers.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  5. Business Growth
                </h3>
                <p>
                  With consistent cash flow, you can accept more loads, expand your fleet, 
                  and grow your business faster than waiting for traditional payment cycles.
                </p>
              </div>
            </div>
          </section>

          <section id="drawbacks" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Shield className="w-8 h-8 mr-3 text-red-600" />
              Potential Drawbacks to Consider
            </h2>
            
            <p>
              While factoring offers many benefits, it's important to understand the 
              potential downsides:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">1. Cost</h4>
                <p className="text-gray-700">
                  Factoring fees (1-5%) can add up, especially compared to waiting for 
                  payment at no cost. Calculate whether the improved cash flow justifies 
                  the expense.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">2. Customer Relationships</h4>
                <p className="text-gray-700">
                  Your customers will know you use factoring, as they'll pay the factoring 
                  company instead of you. Some may view this negatively.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">3. Contracts and Commitments</h4>
                <p className="text-gray-700">
                  Some factors require long-term contracts or minimum volume commitments. 
                  Read the fine print carefully.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">4. Limited Customer Choice</h4>
                <p className="text-gray-700">
                  Factors may reject invoices from customers with poor credit, limiting 
                  which loads you can accept.
                </p>
              </div>
            </div>
          </section>

          <section id="who-should-use" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Users className="w-8 h-8 mr-3 text-blue-600" />
              Who Should Use Freight Factoring?
            </h2>
            
            <p>
              Freight factoring isn't for everyone. It works best for:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-green-700">Good Candidates</h3>
                <ul className="space-y-2">
                  <li>✓ New owner-operators needing cash flow</li>
                  <li>✓ Growing fleets requiring working capital</li>
                  <li>✓ Companies with creditworthy customers</li>
                  <li>✓ Businesses wanting to outsource collections</li>
                  <li>✓ Truckers with limited business credit</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3 text-red-700">May Not Benefit</h3>
                <ul className="space-y-2">
                  <li>✗ Companies with strong cash reserves</li>
                  <li>✗ Businesses with very low profit margins</li>
                  <li>✗ Those who only work with quick-pay shippers</li>
                  <li>✗ Companies wanting total control over collections</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-3">Bottom Line:</h3>
              <p>
                If waiting for payment prevents you from taking profitable loads or causes 
                financial stress, factoring is likely worth the cost. The ability to grow 
                your business often outweighs the fees.
              </p>
            </div>
          </section>

          <section id="getting-started" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <ArrowRight className="w-8 h-8 mr-3 text-green-600" />
              How to Get Started with Freight Factoring
            </h2>
            
            <p>
              Getting started with factoring is easier than you might think. Here's your 
              roadmap:
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white border-l-4 border-blue-600 p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">Step 1: Gather Your Documents</h3>
                <p className="mb-3">Most factoring companies require:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Copy of your MC/DOT authority</li>
                  <li>• Business formation documents (LLC, Corp, etc.)</li>
                  <li>• List of your current customers</li>
                  <li>• Sample invoices and BOLs</li>
                  <li>• Bank account information</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-green-600 p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">Step 2: Apply Online</h3>
                <p>
                  Most applications take 10-15 minutes. You'll provide basic business 
                  information and upload your documents. Many factors approve applications 
                  within 24 hours.
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">Step 3: Review the Agreement</h3>
                <p className="mb-3">Pay special attention to:</p>
                <ul className="space-y-1 text-gray-600">
                  <li>• Fee structure and rates</li>
                  <li>• Advance rates and reserves</li>
                  <li>• Contract length and termination terms</li>
                  <li>• Recourse vs. non-recourse terms</li>
                  <li>• Any hidden fees or charges</li>
                </ul>
              </div>

              <div className="bg-white border-l-4 border-orange-600 p-6 shadow-md">
                <h3 className="font-semibold text-lg mb-2">Step 4: Start Factoring</h3>
                <p>
                  Once approved, you can start submitting invoices immediately. Most 
                  factors provide training on their system and ongoing support.
                </p>
              </div>
            </div>
          </section>

          <section id="choosing-company" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <DollarSign className="w-8 h-8 mr-3 text-purple-600" />
              How to Choose a Factoring Company
            </h2>
            
            <p>
              Not all factoring companies are created equal. Here's what to look for:
            </p>

            <div className="bg-purple-50 p-6 rounded-lg my-6">
              <h3 className="font-semibold mb-4">Key Questions to Ask:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>✓ What are your factoring rates?</li>
                  <li>✓ Are there any hidden fees?</li>
                  <li>✓ What's the advance rate?</li>
                  <li>✓ Is it recourse or non-recourse?</li>
                  <li>✓ Are there minimum volume requirements?</li>
                </ul>
                <ul className="space-y-2">
                  <li>✓ How long are contract terms?</li>
                  <li>✓ What's the application process?</li>
                  <li>✓ Do you offer fuel advances?</li>
                  <li>✓ How do you handle collections?</li>
                  <li>✓ Can I factor spot loads?</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Red Flags to Avoid</h3>
            <div className="bg-red-50 p-6 rounded-lg">
              <ul className="space-y-2">
                <li>⚠️ Long-term contracts with high termination fees</li>
                <li>⚠️ Hidden fees not disclosed upfront</li>
                <li>⚠️ Very low advance rates (under 80%)</li>
                <li>⚠️ Poor customer service or slow response times</li>
                <li>⚠️ Requiring personal guarantees on non-recourse factoring</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Green Flags to Look For</h3>
            <div className="bg-green-50 p-6 rounded-lg">
              <ul className="space-y-2">
                <li>✅ Transparent, simple fee structure</li>
                <li>✅ Same-day or next-day funding</li>
                <li>✅ No long-term contracts required</li>
                <li>✅ Fuel card programs available</li>
                <li>✅ Good online reviews from truckers</li>
                <li>✅ Quick application and approval process</li>
              </ul>
            </div>
          </section>

          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <HelpCircle className="w-8 h-8 mr-3 text-indigo-600" />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Q: Can I factor if I have bad credit?
                </h3>
                <p className="text-gray-700">
                  Yes! Factoring approval is based on your customers' credit, not yours. 
                  As long as you work with creditworthy brokers and shippers, your personal 
                  credit usually isn't a major factor.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Q: Do I have to factor all my invoices?
                </h3>
                <p className="text-gray-700">
                  It depends on the factoring company. Some require you to factor all 
                  invoices (contract factoring), while others allow you to choose which 
                  invoices to factor (spot factoring). Spot factoring offers more flexibility 
                  but typically costs more.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Q: How quickly can I get approved?
                </h3>
                <p className="text-gray-700">
                  Many factoring companies approve applications within 24-48 hours. Some 
                  offer instant pre-approval online. Once approved, you can typically start 
                  factoring invoices immediately.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Q: What if my customer doesn't pay?
                </h3>
                <p className="text-gray-700">
                  With recourse factoring, you're responsible for buying back the invoice 
                  if your customer doesn't pay within a certain timeframe (usually 60-90 days). 
                  With non-recourse factoring, the factor assumes the credit risk if the 
                  customer goes bankrupt.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Q: Can I switch factoring companies?
                </h3>
                <p className="text-gray-700">
                  Yes, but check your contract terms first. Some companies have termination 
                  fees or notice requirements. Look for factors that don't require long-term 
                  contracts if you want flexibility to switch.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Q: Is freight factoring worth it?
                </h3>
                <p className="text-gray-700">
                  For most truckers, yes. The cost of factoring (1-5% of invoice value) is 
                  often worth the improved cash flow, ability to take more loads, and peace 
                  of mind. Calculate your potential revenue increase against the factoring 
                  fees to make the best decision for your business.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Final Thoughts</h2>
            <p className="mb-4">
              Freight factoring has helped thousands of trucking companies maintain healthy 
              cash flow and grow their businesses. While it's not free, the benefits often 
              far outweigh the costs - especially for growing companies and owner-operators.
            </p>
            <p>
              The key is choosing the right factoring partner with transparent pricing, 
              good customer service, and terms that fit your business needs. Take time to 
              compare options and read the fine print before committing.
            </p>
          </section>

          <section className="mb-12">
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Get Started with Freight Factoring?
              </h3>
              <p className="mb-6">
                Stop waiting 30-90 days for payment. Get the cash flow you need to grow 
                your trucking business with our simple, transparent factoring services.
              </p>
              <ul className="mb-6 space-y-2">
                <li>✓ Same-day funding available</li>
                <li>✓ No hidden fees or long-term contracts</li>
                <li>✓ Competitive rates starting at 3%</li>
                <li>✓ Fuel advances and fuel card included</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/apply">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Apply Now - 10 Minute Application
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Talk to a Factoring Expert
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <p className="text-gray-600 mb-4">
              <strong>About the Author:</strong> The AutoFreight Team consists of trucking 
              industry veterans and financial experts dedicated to helping owner-operators 
              and fleet owners succeed. We've helped hundreds of truckers improve their 
              cash flow through transparent, affordable factoring services.
            </p>
            <div className="flex gap-4">
              <Link href="/blog" className="text-blue-600 hover:underline">
                ← Back to Blog
              </Link>
              <Link href="/blog/how-invoice-factoring-works-for-truckers" className="text-blue-600 hover:underline">
                How Factoring Works →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}