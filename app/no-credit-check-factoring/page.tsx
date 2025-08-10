import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle, Shield, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ComplianceFooter } from '@/components/compliance-footer'

export const metadata: Metadata = {
  title: 'No Credit Check Freight Factoring | Bad Credit OK',
  description: 'No credit check factoring for truckers. Get approved based on your customer\'s credit, not yours. Bad credit, bankruptcies, and new businesses welcome.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/no-credit-check-factoring',
  },
}

export default function NoCreditCheckFactoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              No Credit Check Factoring for Trucking Companies
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get freight factoring with no personal credit check required. We approve based on your customer's creditworthiness, not yours. Perfect for truckers with bad credit, bankruptcies, or new businesses seeking cash flow solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                  Apply Now - No Credit Check <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:6198776746">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Call Call Us
                </Button>
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-4 gap-4 mt-16">
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <p className="font-semibold">No Personal Credit Check</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold">Bad Credit OK</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-2" />
              <p className="font-semibold">New Business Welcome</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-orange-600 mx-auto mb-2" />
              <p className="font-semibold">Bankruptcies Accepted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Traditional Loans vs. No Credit Check Factoring
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-700">Traditional Bank Loans</CardTitle>
                <CardDescription>What banks require</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Personal credit score 680+</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>2+ years in business</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Collateral required</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Weeks of paperwork</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Personal guarantees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-700">Our Freight Factoring</CardTitle>
                <CardDescription>What we actually require</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>NO personal credit check</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>New businesses welcome</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>No collateral needed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Apply in 5 minutes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Based on customer credit</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Approve Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            We Approve Truckers Others Reject
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <p className="text-lg text-gray-700 mb-8">
              Your personal credit history doesn't define your business potential. We've helped 
              thousands of truckers get the cash flow they need, regardless of their credit situation:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">✅ We Approve:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Credit scores under 600</li>
                  <li>• Recent bankruptcies</li>
                  <li>• Tax liens or judgments</li>
                  <li>• Brand new owner-operators</li>
                  <li>• Past business failures</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">📋 All We Need:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Active MC/DOT authority</li>
                  <li>• Completed deliveries</li>
                  <li>• Creditworthy customers</li>
                  <li>• Valid invoices & BOLs</li>
                  <li>• That's it!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Without Credit Checks */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How No Credit Check Factoring Works
          </h2>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">We Check Your Customer's Credit</h3>
                <p className="text-gray-600">
                  Instead of checking your personal credit, we verify that your customer 
                  (broker or shipper) has good credit and will pay the invoice.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Your Credit Doesn't Matter</h3>
                <p className="text-gray-600">
                  Whether you have a 400 or 800 credit score, it doesn't affect your approval. 
                  We're buying your invoice, not lending you money.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Approval Decision</h3>
                <p className="text-gray-600">
                  Since we don't run personal credit checks, approval is fast. Most truckers 
                  get approved within minutes of applying.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Start Factoring Immediately</h3>
                <p className="text-gray-600">
                  Once approved, you can start submitting invoices right away. No waiting 
                  period, no additional requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Real Truckers, Real Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>New Owner-Operator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Just got my authority 2 weeks ago. Banks laughed at me, but 
                  AutoFreight approved me instantly. Now I'm running 5 loads a week!"
                </p>
                <p className="font-semibold">- James T., Texas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Post-Bankruptcy Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Filed Chapter 7 last year after my previous business failed. 
                  AutoFreight gave me a second chance. Back to $15K/month revenue!"
                </p>
                <p className="font-semibold">- Maria S., California</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bad Credit Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "520 credit score didn't matter. They looked at my customers, 
                  not me. Best decision for my trucking business."
                </p>
                <p className="font-semibold">- Robert K., Georgia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Credit Score Doesn't Define Your Business
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of truckers who got approved despite their credit. 
            Apply now and get funding based on your hard work, not your past.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Apply Now - 5 Minute Application
              </Button>
            </Link>
            <Link href="/faq">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-green-600">
                Learn More About Our Process
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-lg opacity-90">
            Or call us at <a href="tel:6198776746" className="underline font-semibold">Call Us</a>
          </p>
        </div>
      </section>
      <ComplianceFooter />
    </div>
  )
}