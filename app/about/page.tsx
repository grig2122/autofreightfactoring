import { Metadata } from 'next'
import { Users, TrendingUp, Shield, Clock, Star, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Auto Freight Factoring',
  description: 'Learn about Auto Freight Factoring - your trusted partner in freight invoice factoring. Helping truckers get paid faster since 2024.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">About Auto Freight Factoring</h1>
          <p className="text-xl max-w-3xl">
            We're on a mission to revolutionize cash flow for truckers and freight companies 
            with fast, transparent, and affordable factoring services.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto">
              <p className="mb-6">
                Auto Freight Factoring was founded in 2024 by a team of transportation and finance 
                professionals who saw firsthand the cash flow challenges facing truckers and small 
                freight companies. We witnessed how traditional factoring companies were taking 
                advantage of hardworking owner-operators with hidden fees, long contracts, and 
                slow funding times.
              </p>
              <p className="mb-6">
                We knew there had to be a better way. That's why we built Auto Freight Factoring 
                from the ground up with transparency, speed, and fairness at its core. Our technology-driven 
                approach allows us to offer same-day funding with no hidden fees and no long-term contracts.
              </p>
              <p>
                Today, we're proud to serve hundreds of trucking companies across the United States, 
                helping them maintain steady cash flow and grow their businesses without the burden 
                of waiting 30-90 days for payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                No hidden fees, no surprises. We believe in clear, upfront pricing and honest 
                communication with every client.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Clock className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Speed</h3>
              <p className="text-gray-600">
                Time is money in trucking. We process applications quickly and fund approved 
                invoices the same day.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-gray-600">
                We're more than a factoring company - we're your financial partner, invested 
                in your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Advance Rate Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24hr</div>
              <p className="text-gray-600">Average Funding Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1.5%</div>
              <p className="text-gray-600">Simple Flat Fee</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-1">John Smith</h3>
              <p className="text-gray-600 mb-3">CEO & Co-Founder</p>
              <p className="text-sm text-gray-500">
                20+ years in transportation finance and technology
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-gray-600 mb-3">COO & Co-Founder</p>
              <p className="text-sm text-gray-500">
                Former trucking company owner with 15+ years experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
              <p className="text-gray-600 mb-3">CTO & Co-Founder</p>
              <p className="text-sm text-gray-500">
                Tech innovator specializing in fintech solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Awards & Certifications</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Award className="h-16 w-16 text-gold-500 mb-2" />
              <p className="text-sm font-semibold">BBB Accredited</p>
              <p className="text-xs text-gray-600">A+ Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-16 w-16 text-blue-600 mb-2" />
              <p className="text-sm font-semibold">SOC 2 Certified</p>
              <p className="text-xs text-gray-600">Type II Compliant</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-16 w-16 text-yellow-500 mb-2" />
              <p className="text-sm font-semibold">Top Rated</p>
              <p className="text-xs text-gray-600">4.9/5 Stars</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of truckers who trust Auto Freight Factoring for their cash flow needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/apply" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </a>
            <a 
              href="/contact" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}