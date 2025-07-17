import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'How Invoice Factoring Works for Truckers: Complete Guide (2024)',
  description: 'Learn how freight factoring works, who qualifies, costs involved, and how to get started. Essential guide for owner-operators and small fleets.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/blog/how-invoice-factoring-works-for-truckers',
  },
  openGraph: {
    title: 'How Invoice Factoring Works for Truckers: Complete Guide',
    description: 'Everything truckers need to know about freight factoring - qualification, costs, benefits, and how to get started.',
    type: 'article',
    publishedTime: '2024-01-15T08:00:00.000Z',
    authors: ['AutoFreight Team'],
  },
}

export default function BlogPost() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Invoice Factoring Works for Truckers: Complete Guide",
    "description": "Learn how freight factoring works, who qualifies, costs involved, and how to get started.",
    "author": {
      "@type": "Organization",
      "name": "AutoFreightFactoring"
    },
    "datePublished": "2024-01-15T08:00:00.000Z",
    "dateModified": "2024-01-15T08:00:00.000Z",
    "publisher": {
      "@type": "Organization",
      "name": "AutoFreightFactoring",
      "logo": {
        "@type": "ImageObject",
        "url": "https://autofreightfactoring.com/icon.png"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900">How Invoice Factoring Works</li>
            </ol>
          </nav>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Invoice Factoring Works for Truckers: Complete Guide
            </h1>
            <div className="flex items-center gap-4 text-gray-500 mb-6">
              <span>By AutoFreight Team</span>
              <span>•</span>
              <time dateTime="2024-01-15">January 15, 2024</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Waiting 30-90 days for payment can cripple your trucking business. Invoice factoring 
              provides immediate cash flow by converting your unpaid invoices into working capital. 
              Here's everything you need to know about freight factoring.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mt-12 mb-6">What is Freight Invoice Factoring?</h2>
            <p className="mb-6">
              Freight factoring is a financial service where trucking companies sell their unpaid 
              invoices to a factoring company at a discount. Instead of waiting weeks or months for 
              payment, you get cash within 24 hours.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-blue-600" />
                How It Works in 4 Simple Steps:
              </h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">1.</span>
                  <span>You deliver the load and submit the invoice to your factor</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">2.</span>
                  <span>The factor verifies the delivery and invoice details</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">3.</span>
                  <span>You receive 90-100% of the invoice value within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-2">4.</span>
                  <span>The factor collects payment from your customer</span>
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Who Qualifies for Freight Factoring?</h2>
            <p className="mb-6">
              Unlike traditional bank loans, factoring approval is based on your customers' credit, 
              not yours. This makes it accessible to:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>New owner-operators with limited credit history</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Small fleets looking to grow without debt</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Truckers with past credit issues</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Companies hauling for creditworthy shippers</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">How Much Does Freight Factoring Cost?</h2>
            <p className="mb-6">
              Factoring fees typically range from 1.5% to 5% of the invoice value. The rate depends on:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Your customer's creditworthiness</li>
              <li>Invoice volume</li>
              <li>Payment terms (recourse vs non-recourse)</li>
              <li>How quickly your customers typically pay</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                Cost Example:
              </h3>
              <p className="mb-2">Invoice Amount: $2,000</p>
              <p className="mb-2">Factoring Fee: 3%</p>
              <p className="mb-2">Fee Cost: $60</p>
              <p className="font-semibold">You Receive: $1,940 within 24 hours</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Benefits of Freight Factoring</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border rounded-lg p-6">
                <Clock className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Immediate Cash Flow</h3>
                <p className="text-gray-600">Get paid in 24 hours instead of waiting 30-90 days</p>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">No Debt Added</h3>
                <p className="text-gray-600">It's not a loan - you're selling an asset</p>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Grow Your Business</h3>
                <p className="text-gray-600">Take on more loads without cash flow concerns</p>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <DollarSign className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold mb-2">Credit Protection</h3>
                <p className="text-gray-600">Non-recourse factoring protects against non-payment</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Is Freight Factoring Right for You?</h2>
            <p className="mb-6">
              Factoring is ideal if you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Need consistent cash flow to cover operating expenses</li>
              <li>Want to take on more loads but lack working capital</li>
              <li>Haul for customers with good credit but slow payment</li>
              <li>Prefer to focus on driving rather than collections</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">How to Get Started with Freight Factoring</h2>
            <ol className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">1</span>
                <div>
                  <h3 className="font-semibold mb-1">Choose a Factoring Company</h3>
                  <p className="text-gray-600">Look for competitive rates, no hidden fees, and good customer service</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">2</span>
                <div>
                  <h3 className="font-semibold mb-1">Submit Your Application</h3>
                  <p className="text-gray-600">Provide basic business information and customer details</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">3</span>
                <div>
                  <h3 className="font-semibold mb-1">Get Approved</h3>
                  <p className="text-gray-600">Most approvals happen within 24-48 hours</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">4</span>
                <div>
                  <h3 className="font-semibold mb-1">Start Factoring</h3>
                  <p className="text-gray-600">Submit your first invoice and get paid</p>
                </div>
              </li>
            </ol>

            <div className="bg-blue-600 text-white p-8 rounded-2xl my-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Cash Flow?</h2>
              <p className="mb-6">
                AutoFreightFactoring offers same-day funding with competitive rates and no hidden fees. 
                Get approved in minutes and start factoring today.
              </p>
              <Link href="/apply">
                <Button size="lg" variant="secondary">
                  Apply Now <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can I factor if I'm a new owner-operator?</h3>
                <p className="text-gray-600">
                  Yes! Factoring approval is based on your customer's credit, not yours. Even brand new 
                  owner-operators can qualify.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do I have to factor all my invoices?</h3>
                <p className="text-gray-600">
                  No. With spot factoring, you can choose which invoices to factor based on your cash flow needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How quickly can I get paid?</h3>
                <p className="text-gray-600">
                  Most factoring companies fund within 24 hours. Some, like AutoFreightFactoring, offer 
                  same-day funding for invoices submitted before 2 PM.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}