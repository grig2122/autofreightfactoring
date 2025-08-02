import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Truck, DollarSign, Clock, Shield, CheckCircle, User, Phone, Zap, TrendingUp, HandshakeIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ComplianceFooter } from '@/components/compliance-footer'
import { Navigation } from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Freight Factoring for Owner-Operators | Start With Just One Truck',
  description: 'Freight factoring designed for owner-operators. No minimum volume, same-day funding, fuel advances included. Perfect for single truck operations.',
  keywords: 'owner operator factoring, single truck factoring, small carrier factoring, owner operator freight factoring, factoring for truckers',
  alternates: {
    canonical: 'https://autofreightfactoring.com/owner-operators',
  },
}

export default function OwnerOperatorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation currentPage="owner-operators" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Truck className="h-4 w-4 mr-2" />
                Built for Owner-Operators Since Day One
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Freight Factoring for Owner-Operators
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Running your own truck is hard enough without cash flow problems. 
                Get paid same-day for your loads with factoring designed specifically 
                for single truck operations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-300 flex-shrink-0" />
                  <span>No minimum volume - factor one load or one hundred</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-300 flex-shrink-0" />
                  <span>100% advance rate - get the full invoice amount</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-300 flex-shrink-0" />
                  <span>Fuel advances included - keep rolling between loads</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-300 flex-shrink-0" />
                  <span>No contracts - stay independent, leave anytime</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/apply">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 w-full sm:w-auto">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:6198776746">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    (619) 877-6746
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Why Owner-Operators Choose Us</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-300">1.5%</div>
                  <div className="text-sm opacity-80">Flat rate factoring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300">24hrs</div>
                  <div className="text-sm opacity-80">Same-day funding</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300">$0</div>
                  <div className="text-sm opacity-80">Setup & hidden fees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-300">100%</div>
                  <div className="text-sm opacity-80">Advance rate</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-sm opacity-80 mb-2">Trusted by owner-operators nationwide</div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm mt-1">4.9/5 from 500+ owner-operators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            We Know the Challenges You Face
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            As an owner-operator, you wear every hat in your business. We're here to make 
            the financial side simple so you can focus on driving.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Unpredictable Cash Flow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Brokers pay in 30-90 days, but your bills come every week.
                </p>
                <p className="text-green-600 font-semibold">
                  ✓ We pay you within 24 hours of delivery
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                  <Truck className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>High Operating Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Fuel, maintenance, insurance - expenses never stop.
                </p>
                <p className="text-green-600 font-semibold">
                  ✓ Fuel advances & steady cash flow included
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Broker Credit Risk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  One bad broker can ruin your month or worse.
                </p>
                <p className="text-green-600 font-semibold">
                  ✓ Free broker credit checks protect you
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>No Time for Paperwork</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  You're driving 11 hours a day, not pushing paper.
                </p>
                <p className="text-green-600 font-semibold">
                  ✓ Simple upload process, we handle the rest
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Growth Capital Needed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Can't take good loads without upfront fuel money.
                </p>
                <p className="text-green-600 font-semibold">
                  ✓ Take any profitable load with our backing
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                  <HandshakeIcon className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Complex Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Other factors lock you in with confusing terms.
                </p>
                <p className="text-green-600 font-semibold">
                  ✓ No contracts, simple terms, leave anytime
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Simple Process Built for Your Schedule
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Application</h3>
              <p className="text-gray-600">
                5-minute application. No credit check. Approval in hours, not days.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">Haul Your Load</h3>
              <p className="text-gray-600">
                Pick up and deliver as normal. We check broker credit for free.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Upload BOL</h3>
              <p className="text-gray-600">
                Snap a photo of your signed BOL. Upload from your phone in seconds.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Paid Today</h3>
              <p className="text-gray-600">
                Money hits your account same day. Keep rolling to your next load.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/apply">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Hear From Fellow Owner-Operators
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Started with them when I bought my first truck. The fuel advances 
                  saved me more than once when starting out. Now I'm running three trucks 
                  and still use them."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    MJ
                  </div>
                  <div>
                    <div className="font-semibold">Mike Johnson</div>
                    <div className="text-sm text-gray-600">3 years with AFF</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "No minimum volume was huge for me. Some weeks I run hard, others 
                  I take time off. They never hassle me about volume like other 
                  factors did."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    ST
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Thompson</div>
                    <div className="text-sm text-gray-600">Owner-operator since 2019</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Simple and straightforward. Upload my paperwork, get paid. 
                  Their team actually understands trucking. That matters when 
                  you need help at 2 AM."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    CW
                  </div>
                  <div>
                    <div className="font-semibold">Carlos Williams</div>
                    <div className="text-sm text-gray-600">Regional flatbed driver</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything an Owner-Operator Needs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Zap className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Same-Day Funding</h3>
              <p className="text-gray-600">
                Upload your BOL before 5 PM EST, get paid the same day. 
                No waiting for broker payments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <DollarSign className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Fuel Advances</h3>
              <p className="text-gray-600">
                Get up to 50% advance on your load for fuel. 
                Plus save up to 50¢/gallon with our fuel card.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Shield className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Credit Protection</h3>
              <p className="text-gray-600">
                We check every broker's credit for free. Know you'll 
                get paid before you haul their freight.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <User className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">No Personal Guarantees</h3>
              <p className="text-gray-600">
                Your business stands on its own. No personal credit 
                checks or guarantees required.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Clock className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">24/7 Upload</h3>
              <p className="text-gray-600">
                Upload paperwork anytime from your phone. Our system 
                works around your schedule.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <HandshakeIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">No Contracts</h3>
              <p className="text-gray-600">
                Stay independent. Use us when you need to, skip when 
                you don't. No penalties ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join 5,000+ Owner-Operators Getting Paid Faster
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop waiting 30-90 days for your money. Get the cash flow you need 
            to keep your truck rolling and your business growing.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold">5 min</div>
              <div className="text-sm opacity-80">Application time</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$0</div>
              <div className="text-sm opacity-80">Setup fees</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24 hrs</div>
              <div className="text-sm opacity-80">To get paid</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:6198776746">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600">
                <Phone className="mr-2 h-5 w-5" />
                Talk to a Specialist
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ComplianceFooter />
    </div>
  )
}