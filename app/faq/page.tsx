'use client'

import Link from 'next/link'
import { ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

// Note: Metadata will be in layout.tsx for client components

const faqs = [
  {
    question: "What is freight factoring?",
    answer: "Freight factoring, also known as freight bill factoring, is a financial service where trucking companies sell their unpaid invoices to a factoring company for immediate cash. Instead of waiting 30-90 days for payment, you get paid within 24 hours, minus a small factoring fee."
  },
  {
    question: "How much does freight factoring cost?",
    answer: "Factoring fees typically range from 1.5% to 5% of the invoice value. At AutoFreightFactoring, we charge a flat 3% fee with no hidden costs. For example, on a $2,000 invoice, you'd receive $1,940 immediately."
  },
  {
    question: "Do I need good credit to qualify for factoring?",
    answer: "No! Factoring approval is based on your customer's credit, not yours. As long as you're hauling for creditworthy shippers, you can qualify even with poor personal credit or as a new business."
  },
  {
    question: "How quickly can I get paid?",
    answer: "We offer same-day funding for invoices submitted before 2 PM EST. Most invoices are funded within 2-4 hours of submission. You'll have cash in your account the same business day."
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
    answer: "You'll need: proof of delivery (BOL), the freight invoice, your MC/DOT authority, and basic business information. The application process takes just minutes."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No. We believe in transparent pricing. Our 3% factoring fee is all you pay. No application fees, no monthly minimums, no ACH fees, and no termination fees."
  },
  {
    question: "How does the factoring process work?",
    answer: "It's simple: 1) Deliver your load, 2) Submit the invoice and BOL to us, 3) We verify the delivery, 4) You get paid the same day. We then collect payment from your customer."
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
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Everything you need to know about freight factoring for truckers
            </p>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-12">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">
                Our team is here to help. Contact us anytime for personalized assistance.
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
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="mb-6">
                Apply for freight factoring in minutes and get approved today.
              </p>
              <Link href="/apply">
                <Button size="lg" variant="secondary">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}