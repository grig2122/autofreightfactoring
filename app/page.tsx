import { ChevronRight, Clock, DollarSign, Shield, Phone, Mail, MapPin, Star, Check } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Image src="/assets/logo.png" alt="AutoFreightFactoring Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">AutoFreightFactoring</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How It Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
              <a href="/apply" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition inline-block">
                Get Pre-Approved
              </a>
            </div>
            <button className="md:hidden p-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Get Paid <span className="text-blue-600">Today</span> for Your Freight Invoices
              </h1>
              
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Same-day invoice factoring designed exclusively for truckers. Upload your invoice, get instant approval, and receive funds within hours.
              </p>

              {/* Single Key Benefit */}
              <div className="inline-flex items-center bg-green-50 text-green-700 px-6 py-3 rounded-full mt-6">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-semibold">Funds in your account within 5 minutes</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a href="/apply" className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Get Pre-Approved 
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-lg font-semibold">
                  Watch Demo
                </button>
              </div>

              {/* Clean Social Proof */}
              <div className="flex items-center gap-8 mt-12">
                <div className="flex -space-x-2">
                  {[
                    { bg: 'bg-blue-500', initials: 'MJ' },
                    { bg: 'bg-green-500', initials: 'RT' },
                    { bg: 'bg-purple-500', initials: 'LS' },
                    { bg: 'bg-orange-500', initials: 'DK' }
                  ].map((trucker, i) => (
                    <div key={i} className={`h-10 w-10 rounded-full ${trucker.bg} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                      {trucker.initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Trusted by 1,000+ truckers</p>
                </div>
              </div>
            </div>
            <div className="relative lg:pl-16">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Live Processing Demo</h3>
                  <p className="text-sm text-gray-600">See how fast your invoice gets processed</p>
                </div>
                
                <div className="space-y-8">
                  {/* Step 1: Invoice Submitted */}
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-300">
                        <Check className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="w-px h-8 bg-gray-200 mt-2" />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="font-semibold text-gray-900">Invoice Submitted</p>
                      <p className="text-sm text-gray-600 mb-2">BOL #12345 uploaded successfully</p>
                      <p className="text-xs text-gray-500">2:47 PM • Completed</p>
                    </div>
                  </div>

                  {/* Step 2: Invoice Approved */}
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-200 shadow-sm">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="w-px h-8 bg-gray-200 mt-2" />
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="font-semibold text-gray-900">Invoice Approved</p>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-gray-600">Invoice Value: $3,500.00</p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Approved
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">2:49 PM • Processed in 2 minutes</p>
                    </div>
                  </div>

                  {/* Step 3: Funds Transferred */}
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-200 shadow-sm">
                        <DollarSign className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="font-semibold text-gray-900">Funds Transferred</p>
                      <div className="bg-gray-50 rounded-lg p-3 mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Invoice Amount:</span>
                          <span className="font-medium">$3,500.00</span>
                        </div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Factoring Fee (5%):</span>
                          <span className="font-medium text-red-600">-$175.00</span>
                        </div>
                        <div className="border-t border-gray-200 pt-1 mt-2">
                          <div className="flex justify-between text-sm font-semibold">
                            <span className="text-gray-900">Net Amount:</span>
                            <span className="text-green-600">$3,325.00</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 font-medium mb-1">Transferred to your account</p>
                      <p className="text-xs text-gray-500">2:52 PM • Same-day transfer</p>
                    </div>
                  </div>
                </div>

                {/* Summary Stats */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">5 min</p>
                      <p className="text-xs text-gray-600">Total Processing Time</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">95%</p>
                      <p className="text-xs text-gray-600">Amount Received</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 -right-8 h-72 w-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose AutoFreightFactoring</h2>
            <p className="text-xl text-gray-600 mt-4">Built by truckers, for truckers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Same-Day Funding</h3>
              <p className="text-gray-600">Get your funds deposited in your bank account within hours, not weeks.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">No Credit Checks</h3>
              <p className="text-gray-600">We factor based on your customer's credit, not yours. Bad credit? No problem.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Competitive Rates</h3>
              <p className="text-gray-600">Starting at 1.5% with transparent pricing. No hidden fees, ever.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 mt-4">Get funded in 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Upload Invoice</h3>
              <p className="text-gray-600">Upload your freight invoice or bill of lading through our secure platform.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Get Approved</h3>
              <p className="text-gray-600">We verify your load and approve your invoice in minutes, not days.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Get Paid</h3>
              <p className="text-gray-600">Receive your funds via ACH transfer, usually within the same business day.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 mt-4">No hidden fees. No long-term contracts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">3%<span className="text-lg text-gray-600">/invoice</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  Same-day funding
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  No minimum volume
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  24/7 support
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">2%<span className="text-lg text-gray-600">/invoice</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  Same-day funding
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  Dedicated account manager
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  Advanced reporting
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">1.5%<span className="text-lg text-gray-600">/invoice</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  Same-day funding
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  White-label options
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 mr-2" />
                  Volume discounts
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Paid Faster?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of truckers who have improved their cash flow with AutoFreightFactoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/apply" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition text-lg font-semibold">
              Start Factoring Now
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition text-lg font-semibold">
              Call 1-800-FACTOR-1
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/assets/logo.png" alt="AutoFreightFactoring Logo" width={32} height={32} className="h-8 w-8" />
                <span className="text-xl font-bold">AutoFreightFactoring</span>
              </div>
              <p className="text-gray-400 mb-4">
                Fast, reliable invoice factoring services designed specifically for the trucking industry.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Invoice Factoring</li>
                <li>Fuel Advances</li>
                <li>Load Board Access</li>
                <li>Credit Monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  1-800-FACTOR-1
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  support@autofreightfactoring.com
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Dallas, TX
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoFreightFactoring. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}