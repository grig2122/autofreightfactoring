'use client'

import Link from 'next/link'
import { ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Navigation } from '@/components/Navigation'

// Note: Metadata will be in layout.tsx for client components

const faqs = [
  {
    question: "What is freight factoring?",
    answer: "Freight factoring, also known as freight bill factoring or trucking factoring, is a financial service specifically designed for the transportation industry. When you deliver a load, instead of waiting 30-90 days for your customer to pay, you sell that invoice to a factoring company (like AutoFreightFactoring) for immediate cash. You typically receive 97-98% of the invoice value within 24 hours, and the factoring company handles collecting payment from your customer. This service is essential for maintaining healthy cash flow in the trucking business, where operating expenses like fuel, maintenance, and driver pay can't wait for slow-paying shippers."
  },
  {
    question: "How much does freight factoring cost?",
    answer: "Freight factoring fees typically range from 1.5% to 5% of the invoice value, depending on various factors including invoice volume, customer creditworthiness, and payment terms. At AutoFreightFactoring, we keep it simple with a flat 1.5% fee and absolutely no hidden costs. For example, on a $2,000 invoice, you'd receive $1,970 immediately deposited into your account. Unlike many competitors, we don't charge application fees, monthly minimums, ACH transfer fees, or termination penalties. The 1.5% fee covers everything - invoice processing, credit checks on your customers, collections, and same-day funding. For high-volume clients (over $100,000/month), we offer discounted rates as low as 1.5%."
  },
  {
    question: "Do I need good credit to qualify for factoring?",
    answer: "No, you don't need good credit to qualify for freight factoring! This is one of the biggest advantages of factoring over traditional bank loans. Factoring approval is based on your customer's creditworthiness, not yours. We're essentially buying your customer's promise to pay, so we care about their financial stability, not your personal credit score. This makes factoring perfect for owner-operators with past credit issues, new trucking companies without established credit, or anyone who's been turned down for traditional financing. As long as you're hauling for reputable shippers and brokers who pay their bills, you can qualify for factoring. We run free credit checks on all your customers to ensure they're creditworthy before funding your invoices."
  },
  {
    question: "How quickly can I get paid?",
    answer: "Speed is crucial in trucking, and we've designed our funding process to be the fastest in the industry. We offer true same-day funding for invoices submitted before 2 PM EST, with most invoices funded within 2-4 hours of submission. Here's our typical timeline: Submit your invoice and proof of delivery through our mobile app or online portal, we verify the delivery (usually within 30 minutes), and funds are wired directly to your bank account. You'll have cash available the same business day. For repeat customers with good payment history, we often fund in under an hour. We also offer 24/7 invoice submission, so even loads delivered on weekends can be submitted immediately and funded the next business day."
  },
  {
    question: "Do I have to factor all my invoices?",
    answer: "No. We offer spot factoring, which means you can choose which invoices to factor based on your cash flow needs. There's no minimum volume requirement and no long-term contracts."
  },
  {
    question: "What's the difference between recourse and non-recourse factoring?",
    answer: "With recourse factoring, you're responsible if your customer doesn't pay. Non-recourse factoring protects you from customer non-payment due to bankruptcy or closure. We offer both options to fit your needs."
  },
  {
    question: "Can new owner-operators use factoring?",
    answer: "Yes! Factoring is perfect for new owner-operators who need cash flow but don't qualify for traditional financing. We can approve you even if you just got your authority."
  },
  {
    question: "What documents do I need to start factoring?",
    answer: "Getting started with freight factoring is straightforward. You'll need: 1) Proof of delivery (signed BOL or POD) - this confirms the load was delivered successfully, 2) Your freight invoice showing the amount owed, 3) Your MC/DOT authority to verify you're a legitimate carrier, 4) Basic business information including your EIN and bank account details for funding. That's it! Unlike bank loans, we don't require tax returns, financial statements, or business plans. The entire application process takes just 5-10 minutes online. Once approved, submitting future invoices requires only the BOL and invoice - you can even snap photos with your phone and upload through our mobile app. We've streamlined the process so you can focus on driving, not paperwork."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No. We believe in transparent pricing. Our 1.5% factoring fee is all you pay. No application fees, no monthly minimums, no ACH fees, and no termination fees."
  },
  {
    question: "How does the factoring process work?",
    answer: "The freight factoring process is designed to be simple and fast. Here's exactly how it works: Step 1 - You haul and deliver your load as normal, getting a signed BOL or proof of delivery. Step 2 - Submit your invoice and BOL to us through our online portal, mobile app, or even by email (most drivers use our app for convenience). Step 3 - We verify the delivery with your customer, which typically takes 30-60 minutes. Step 4 - Once verified, we wire 98.5% of the invoice value directly to your bank account (1.5% factoring fee). Step 5 - We handle all the collections, following up with your customer for payment over the next 30-90 days. You're completely out of the collections process - no more calling customers, sending reminder emails, or waiting for checks. The entire process from submission to funding typically takes 2-4 hours."
  },
  {
    question: "Can I factor loads from load boards?",
    answer: "Yes! We factor loads from all major load boards including DAT, Truckstop.com, and others. We can also factor direct shipper loads."
  },
  {
    question: "What if my customer pays late?",
    answer: "That's our problem, not yours. Once we've paid you for the invoice, we handle all collections. You don't have to chase payments or deal with slow-paying customers."
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 px-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-6">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation currentPage="faq" />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Freight Factoring FAQ for Truckers
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-center">
              Everything you need to know about freight factoring, invoice factoring, and getting paid faster
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <h2 className="text-lg font-semibold text-blue-900 mb-3">Quick Navigation</h2>
              <p className="text-blue-800 mb-4">
                Find answers to the most common questions about freight factoring for owner-operators and trucking companies. 
                Click any question below to jump directly to the answer, or browse through all FAQs to learn everything about 
                how factoring can improve your cash flow and grow your trucking business.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="space-y-2">
                  <p className="font-semibold text-blue-900">Getting Started:</p>
                  <ul className="space-y-1 text-blue-700">
                    <li>• What is freight factoring and how does it work?</li>
                    <li>• How much does factoring cost?</li>
                    <li>• Do I need good credit to qualify?</li>
                    <li>• How fast can I get paid?</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-blue-900">Advanced Topics:</p>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Recourse vs non-recourse factoring</li>
                    <li>• Requirements for new owner-operators</li>
                    <li>• Load board compatibility</li>
                    <li>• Collection and payment terms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-12">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-3">
                Our experienced team understands the unique challenges of the trucking industry. 
                Whether you're an owner-operator just starting out or managing a growing fleet, 
                we're here to help you understand how factoring can work for your specific situation.
              </p>
              <p className="text-gray-600 mb-6">
                Contact us anytime - we typically respond within 1 business hour during normal business hours 
                (8 AM - 6 PM EST, Monday-Friday). For urgent funding needs, our expedited service is available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:6198776746" className="inline-flex items-center justify-center">
                  <Button variant="outline" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    (619) 877-6746
                  </Button>
                </a>
                <a href="mailto:support@autofreightfactoring.com" className="inline-flex items-center justify-center">
                  <Button variant="outline" size="lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Support
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-12 bg-blue-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started with Freight Factoring?</h2>
              <p className="mb-3">
                Join over 5,000 truckers who use AutoFreightFactoring to maintain steady cash flow and grow their business.
              </p>
              <p className="mb-6 text-blue-100">
                Our simple 2-minute application gets you pre-approved instantly. No credit check, no obligation, 
                and you can start factoring invoices as soon as today. Most owner-operators see their first 
                payment within 24 hours of signing up.
              </p>
              <Link href="/apply">
                <Button size="lg" variant="secondary" className="mb-4">
                  Apply Now - Get Instant Approval
                </Button>
              </Link>
              <p className="text-sm text-blue-100">
                Or call us at (619) 877-6746 to speak with a factoring specialist
              </p>
            </div>
            
            <div className="mt-8 bg-gray-100 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Related Resources for Truckers</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link href="/blog/how-invoice-factoring-works-for-truckers" className="text-blue-600 hover:underline">
                    Complete Guide: How Invoice Factoring Works for Truckers
                  </Link>
                  <p className="text-sm text-gray-600">Learn the ins and outs of factoring with real examples</p>
                </li>
                <li>
                  <Link href="/blog/factoring-vs-bank-loans-truckers" className="text-blue-600 hover:underline">
                    Freight Factoring vs Bank Loans: Which is Better?
                  </Link>
                  <p className="text-sm text-gray-600">Compare financing options for your trucking business</p>
                </li>
                <li>
                  <Link href="/blog/freight-factoring-rates-2025" className="text-blue-600 hover:underline">
                    2025 Freight Factoring Rates Guide
                  </Link>
                  <p className="text-sm text-gray-600">Current market rates and how to get the best deals</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}