import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Trucking Industry Blog - Invoice Factoring Tips & Insights',
  description: 'Expert advice on freight factoring, cash flow management, and growing your trucking business. Learn from industry professionals.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/blog',
  },
}

const blogPosts = [
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
            Trucking Business Insights
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Expert advice on freight factoring, cash flow, and growing your trucking business
          </p>

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

          <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Paid Faster?</h2>
            <p className="text-gray-600 mb-6">
              Apply for same-day invoice factoring and get your cash in 24 hours.
            </p>
            <Link href="/apply">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}