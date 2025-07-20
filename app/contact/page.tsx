import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Auto Freight Factoring',
  description: 'Get in touch with Auto Freight Factoring. Call us at (619) 877-6746 or email support@autofreightfactoring.com. We\'re here to help 24/7.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Contact Auto Freight Factoring</h1>
          <p className="text-xl max-w-3xl mb-6">
            Have questions about freight factoring? Need help with your application? Looking for a better factoring rate? 
            We're here to help truckers and fleet owners get the financial solutions they need to grow their business.
          </p>
          <p className="text-lg max-w-3xl">
            Our team of freight factoring specialists has over 15 years of experience helping owner-operators and fleet managers 
            improve their cash flow. Whether you're new to factoring or looking to switch from another company, we'll provide 
            honest advice and transparent pricing to help you make the best decision for your trucking business.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch with Our Factoring Experts</h2>
              <p className="text-gray-600 mb-6">
                Whether you're ready to start factoring or just exploring your options, 
                our team is standing by to help. We pride ourselves on providing 
                fast, friendly, and knowledgeable support to truckers across America.
              </p>
              <p className="text-gray-600 mb-8">
                Every member of our support team has extensive experience in both trucking and freight factoring. 
                We understand the challenges you face on the road and in managing cash flow. That's why we've 
                designed our factoring service to be simple, transparent, and trucker-friendly. No confusing contracts, 
                no hidden fees, just straightforward financial solutions that help you get paid faster.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone Support</h3>
                    <p className="text-gray-600 mb-2">Available 24/7 for your convenience</p>
                    <a href="tel:+16198776746" className="text-blue-600 font-semibold hover:underline">
                      (619) 877-6746
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Support</h3>
                    <p className="text-gray-600 mb-2">We respond within 1 business hour</p>
                    <a href="mailto:support@autofreightfactoring.com" className="text-blue-600 font-semibold hover:underline">
                      support@autofreightfactoring.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
                    <p className="text-gray-600">
                      Auto Freight Factoring<br />
                      Los Angeles, CA 91602<br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: 9:00 AM - 5:00 PM PST<br />
                      <span className="text-green-600 font-semibold">24/7 Phone Support Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you within 1 business hour. 
                For immediate assistance, please call us at (619) 877-6746. All fields marked 
                with an asterisk (*) are required.
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ABC Trucking Inc."
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="application">Application Question</option>
                    <option value="rates">Rates & Fees</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Truckers Choose AutoFreightFactoring</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-12">
              <p className="mb-6">
                When you contact AutoFreightFactoring, you're not just reaching out to another factoring company. 
                You're connecting with a team that truly understands the trucking industry. We've helped thousands 
                of owner-operators and fleet managers overcome cash flow challenges and grow their businesses.
              </p>
              <p className="mb-6">
                Our commitment to transparency means you'll always know exactly what you're paying and why. 
                Unlike many factoring companies that hide fees in the fine print, we believe in straightforward 
                pricing. Our flat 3% rate includes everything - no application fees, no monthly minimums, 
                no ACH fees, and no termination penalties.
              </p>
              <p className="mb-6">
                We also understand that every trucking business is unique. Whether you're hauling dry van, 
                flatbed, refrigerated, or specialized freight, we have experience with your sector. Our team 
                can provide insights not just on factoring, but on improving your overall business operations, 
                finding better freight rates, and managing growth effectively.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For New Owner-Operators</h3>
                <p className="text-gray-700 mb-4">
                  Just got your authority? We specialize in helping new owner-operators establish 
                  healthy cash flow from day one. Our team will guide you through:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Understanding factoring basics and how it works</li>
                  <li>• Setting up your account and documentation</li>
                  <li>• Choosing between recourse and non-recourse options</li>
                  <li>• Best practices for invoice submission</li>
                  <li>• Tips for finding profitable loads and reliable brokers</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">For Established Fleets</h3>
                <p className="text-gray-700 mb-4">
                  Managing multiple trucks? We offer volume discounts and dedicated support for fleets. 
                  Our fleet services include:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Rates as low as 2.5% for high-volume clients</li>
                  <li>• Dedicated account manager for personalized service</li>
                  <li>• Bulk invoice processing capabilities</li>
                  <li>• Custom reporting and analytics tools</li>
                  <li>• Flexible funding options for different business needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact & Support FAQs</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here are answers to common questions about contacting us and getting support. 
            For more detailed information about freight factoring, visit our <a href="/faq" className="text-blue-600 hover:underline">comprehensive FAQ page</a>.
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">What are your business hours?</h3>
              <p className="text-gray-600">
                Our office hours are Monday-Friday 8 AM - 6 PM PST, and weekends 9 AM - 5 PM PST. 
                However, our phone support is available 24/7 for urgent matters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">How quickly do you respond to inquiries?</h3>
              <p className="text-gray-600">
                We aim to respond to all email inquiries within 1 business hour during office hours. 
                Phone calls are answered immediately 24/7.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Do you have a physical office I can visit?</h3>
              <p className="text-gray-600">
                Yes, our headquarters is located in Los Angeles, CA. Please call ahead to schedule 
                an appointment if you'd like to meet in person.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">What's the best way to reach you?</h3>
              <p className="text-gray-600">
                For immediate assistance, call us at (619) 877-6746. For non-urgent inquiries, 
                email us at support@autofreightfactoring.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Improve Your Cash Flow?</h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            Don't let slow-paying customers hold your business back. With AutoFreightFactoring, 
            you can get paid in 24 hours instead of waiting 30-90 days. Our simple application 
            process takes just 2 minutes, and most truckers get approved instantly.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Join thousands of truckers who use factoring to maintain steady cash flow, 
            take on more loads, and grow their business without worrying about payment delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/apply" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now - Get Instant Approval
            </a>
            <a 
              href="tel:6198776746" 
              className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500"
            >
              <Phone className="inline-block w-5 h-5 mr-2" />
              Call (619) 877-6746
            </a>
          </div>
          <p className="text-sm text-blue-100 mt-6">
            No credit check required • No long-term contracts • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}