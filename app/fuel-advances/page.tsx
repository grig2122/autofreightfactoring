import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Fuel, CreditCard, DollarSign, TrendingDown, CheckCircle, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ComplianceFooter } from '@/components/compliance-footer'

export const metadata: Metadata = {
  title: 'Fuel Advances & Fuel Cards for Truckers | Save on Every Gallon',
  description: 'Get fuel advances and save up to 50¢ per gallon with our fuel card program. No credit checks, fast approval, nationwide acceptance.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/fuel-advances',
  },
}

export default function FuelAdvancesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fuel Advances & Discounts for Truckers
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get fuel advances on your loads and save money per gallon with our fuel card. 
              Keep your trucks moving without cash flow worries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
                  Get Your Fuel Card <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#savings">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Calculate Savings
                </Button>
              </Link>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="text-center">
              <CardHeader>
                <Fuel className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle>Great Per Gallon Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Major discounts at 14,000+ locations nationwide</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Fast Advances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get 40-50% advance on any load immediately</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <CardTitle>No Credit Check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Approval based on your loads, not credit score</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fuel Card Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Fuel Card Advantage
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Save Money at Every Fill-Up</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Nationwide Acceptance:</strong> 14,000+ truck stops including 
                    Pilot/Flying J, Love's, TA/Petro, and more
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Real-Time Tracking:</strong> Monitor fuel purchases and driver 
                    spending through our mobile app
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>IFTA Reports:</strong> Automated quarterly fuel tax reporting 
                    saves hours of paperwork
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>No Annual Fees:</strong> Free fuel card with no hidden charges 
                    or maintenance fees
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Average Annual Savings</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Owner-Operator (100k miles/year)</span>
                    <span className="text-2xl font-bold text-green-600">$8,000+</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Small Fleet (5 trucks)</span>
                    <span className="text-2xl font-bold text-green-600">$40,000+</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Large Fleet (20+ trucks)</span>
                    <span className="text-2xl font-bold text-green-600">$160,000+</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * Based on 40¢/gal average discount and 6 MPG fuel efficiency
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Advances */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Fast Fuel Advances on Your Loads
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">How Fuel Advances Work</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Book Your Load</h4>
                      <p className="text-gray-600 text-sm">Get your rate confirmation from broker or shipper</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Submit for Advance</h4>
                      <p className="text-gray-600 text-sm">Upload rate confirmation to our portal</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Get Funded Quickly</h4>
                      <p className="text-gray-600 text-sm">Receive 40-50% of load value on your fuel card</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Deliver & Get Balance</h4>
                      <p className="text-gray-600 text-sm">Complete delivery and factor remaining invoice</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">Never Run Out of Fuel Money</h3>
              <p className="text-gray-600 mb-6">
                Our fuel advance program ensures you always have money for fuel, even before 
                you pick up the load. Get up to 50% of your rate confirmation value loaded 
                quickly onto your fuel card.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Available during business hours through our app</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No waiting for broker quick-pay</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Works with any broker or shipper</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automatic deduction from final payment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section id="savings" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Calculate Your Fuel Savings
          </h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Annual Fuel Savings Calculator</CardTitle>
              <CardDescription>See how much you could save with our fuel card</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Miles per Year</label>
                    <div className="text-3xl font-bold text-gray-900">100,000</div>
                    <p className="text-sm text-gray-500">Average for owner-operator</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Fuel Efficiency (MPG)</label>
                    <div className="text-3xl font-bold text-gray-900">6.5</div>
                    <p className="text-sm text-gray-500">Industry average</p>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="text-center">
                      <p className="text-lg mb-2">Estimated Annual Savings</p>
                      <p className="text-4xl font-bold text-green-600">$6,150</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Based on 40¢/gallon average discount
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/apply">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Start Saving Today
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partner Locations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            14,000+ Locations Nationwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-3">
                <img src="/api/placeholder/120/60" alt="Pilot Flying J" className="mx-auto" />
              </div>
              <p className="font-semibold">Pilot Flying J</p>
              <p className="text-sm text-gray-600">750+ locations</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-3">
                <img src="/api/placeholder/120/60" alt="Love's" className="mx-auto" />
              </div>
              <p className="font-semibold">Love's Travel Stops</p>
              <p className="text-sm text-gray-600">600+ locations</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-3">
                <img src="/api/placeholder/120/60" alt="TA Petro" className="mx-auto" />
              </div>
              <p className="font-semibold">TA/Petro</p>
              <p className="text-sm text-gray-600">280+ locations</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-3">
                <img src="/api/placeholder/120/60" alt="More" className="mx-auto" />
              </div>
              <p className="font-semibold">Independent Stops</p>
              <p className="text-sm text-gray-600">12,000+ locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            More Than Just Fuel Savings
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <TrendingDown className="w-10 h-10 text-blue-600 mb-2" />
                <CardTitle>Maintenance Discounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Save on tires, PM services, and repairs at participating locations
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <DollarSign className="w-10 h-10 text-green-600 mb-2" />
                <CardTitle>Cash Advances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get cash for scales, tolls, and other road expenses
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CreditCard className="w-10 h-10 text-purple-600 mb-2" />
                <CardTitle>Fleet Cards Available</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Manage multiple drivers with individual spending limits
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions About Fuel Advances
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How quickly can I get a fuel advance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fuel advances are available once your rate confirmation is verified during business hours. 
                  Most advances are loaded to your card within 1-2 business days.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What percentage of my load can I advance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We typically advance 40-50% of your rate confirmation value. The exact percentage 
                  depends on factors like customer creditworthiness and your history with us.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Are there fees for fuel advances?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, fuel advances have a small fee (typically 1-2%) that's deducted from your 
                  final settlement. However, the fuel savings often exceed this cost.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I use the card for other expenses?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! Our fuel card works for maintenance, tires, scales, parking, and more at 
                  participating truck stops. Some locations also allow cash advances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Saving on Fuel Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of truckers saving money on every gallon. Get your fuel card 
            approved today with no credit check required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Apply for Fuel Card
              </Button>
            </Link>
            <a href="tel:6198776746">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-green-600">
                Call Call Us
              </Button>
            </a>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Fast approval • No annual fees • Start saving quickly
          </p>
        </div>
      </section>
      <ComplianceFooter />
    </div>
  )
}