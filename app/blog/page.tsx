import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Freight Factoring Blog | Trucking Business Tips & Guides',
  description: 'Expert freight factoring guides, trucking cash flow tips, and industry insights. Learn how to maximize profits and grow your trucking business in 2025.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/blog',
  },
}

const blogPosts = [
  {
    slug: 'freight-factoring-rates-2025',
    title: 'Freight Factoring Rates 2025: Complete Cost Guide & Comparison',
    excerpt: 'Current freight factoring rates for 2025. Compare costs, fees, and rates from top factoring companies. Learn what affects your rate.',
    author: 'AutoFreight Team',
    date: '2024-01-22',
    readTime: '8 min read',
    category: 'Rates & Pricing',
  },
  {
    slug: 'what-is-freight-factoring',
    title: 'What is Freight Factoring? The Ultimate Guide for Truckers',
    excerpt: 'Complete guide to freight factoring for truckers. Learn how invoice factoring works, costs, benefits, and how to get started.',
    author: 'AutoFreight Team',
    date: '2024-01-20',
    readTime: '12 min read',
    category: 'Factoring Basics',
  },
  {
    slug: 'how-invoice-factoring-works-for-truckers',
    title: 'How Invoice Factoring Works for Truckers: Complete Guide',
    excerpt: 'Learn everything about freight factoring - from application to getting paid. Perfect for owner-operators new to factoring.',
    author: 'AutoFreight Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Factoring Basics',
  },
  {
    slug: 'improve-cash-flow-trucking-business',
    title: '7 Ways to Improve Cash Flow in Your Trucking Business',
    excerpt: 'Discover proven strategies to maintain healthy cash flow, reduce payment delays, and grow your trucking operation.',
    author: 'AutoFreight Team',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Business Tips',
  },
  {
    slug: 'factoring-vs-bank-loans-truckers',
    title: 'Freight Factoring vs Bank Loans: Which is Better for Truckers?',
    excerpt: 'Compare the pros and cons of factoring and traditional loans. Find out which financing option suits your trucking business.',
    author: 'AutoFreight Team',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Financing Options',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Freight Factoring Blog & Trucking Business Resources
          </h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Expert advice on freight factoring, cash flow management, and growing your trucking business in 2025
          </p>
          
          <div className="bg-white rounded-xl p-8 mb-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to the AutoFreightFactoring Knowledge Center</h2>
            <p className="text-gray-700 mb-4">
              Whether you're an owner-operator looking to improve cash flow or a fleet manager seeking better financial solutions, 
              our blog provides actionable insights from industry experts. We cover everything from the basics of freight factoring 
              to advanced strategies for maximizing profitability in the trucking industry.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of factoring specialists and trucking industry veterans share real-world advice based on helping thousands 
              of truckers get paid faster and grow their businesses. Each article is designed to give you practical information 
              you can implement immediately.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+ Years</div>
                <div className="text-gray-600">Industry Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                <div className="text-gray-600">Truckers Helped</div>
              </div>
            </div>
            
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Popular Topics We Cover:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <h4 className="font-medium mb-2">Freight Factoring Basics</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• How invoice factoring works for truckers</li>
                    <li>• Understanding factoring rates and fees</li>
                    <li>• Choosing the right factoring company</li>
                    <li>• Recourse vs non-recourse factoring</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Business Growth Strategies</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Managing cash flow in trucking</li>
                    <li>• Scaling from owner-operator to fleet</li>
                    <li>• Finding profitable freight lanes</li>
                    <li>• Building broker relationships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles & Guides</h2>
            <p className="text-gray-600">
              Stay up-to-date with the latest trends in freight factoring and trucking finance. 
              Our articles are updated regularly to reflect current market conditions and rates.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-gray-100 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-700 mb-6">
                Get weekly tips on improving cash flow, finding better loads, and growing your trucking business. 
                Join over 10,000 truckers who receive our free industry insights.
              </p>
              <div className="max-w-md mx-auto">
                <form className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-600 mt-2 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Cash Flow?</h2>
              <p className="text-xl mb-3">
                Stop waiting 30-90 days for payment. Get your money in 24 hours with freight factoring.
              </p>
              <p className="text-blue-100 mb-8">
                Join thousands of truckers who use AutoFreightFactoring to maintain steady cash flow. 
                Our simple application takes just 2 minutes, with instant approval and no credit checks. 
                Most truckers receive their first payment within 24 hours of approval.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply">
                  <Button size="lg" variant="secondary">
                    Apply Now - Get Instant Approval <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/same-day-factoring">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Learn About Same-Day Funding
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-blue-100 mt-6">
                Questions? Call (619) 877-6746 for immediate assistance from our factoring specialists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}