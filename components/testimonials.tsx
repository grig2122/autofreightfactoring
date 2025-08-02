'use client'

import { Star, Shield, TrendingUp, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    id: 1,
    name: 'Jake Rodriguez',
    company: 'Rodriguez Trucking LLC',
    role: 'Owner-Operator',
    content: 'After years of hidden fees with other factoring companies, finding AutoFreightFactoring was a breath of fresh air. The 1.5% rate is exactly what I pay - no surprises, no fine print.',
    rating: 5,
    yearsWithAFF: '2 years',
    avatar: 'JR'
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    company: 'Thompson Transport',
    role: 'Fleet Owner (5 trucks)',
    content: 'Started with them as an owner-operator. Now running 5 trucks and they\'ve grown with me. The fuel advances have saved my business more than once.',
    rating: 5,
    yearsWithAFF: '4 years',
    avatar: 'ST'
  },
  {
    id: 3,
    name: 'Carlos Williams',
    company: 'CW Logistics',
    role: 'Regional Driver',
    content: 'Simple and straightforward. Upload my paperwork, get paid. Their team actually understands trucking. That matters when you need help at 2 AM.',
    rating: 5,
    yearsWithAFF: '1 year',
    avatar: 'CW'
  },
  {
    id: 4,
    name: 'Mike Johnson',
    company: 'Johnson Freight Services',
    role: 'Owner-Operator',
    content: 'No minimum volume was huge for me. Some weeks I run hard, others I take time off. They never hassle me about volume like other factors did.',
    rating: 5,
    yearsWithAFF: '3 years',
    avatar: 'MJ'
  }
]

const trustBadges = [
  {
    icon: Shield,
    title: '5,000+',
    subtitle: 'Active Truckers'
  },
  {
    icon: TrendingUp,
    title: '$50M+',
    subtitle: 'Funded Monthly'
  },
  {
    icon: Clock,
    title: '24 Hour',
    subtitle: 'Average Funding'
  },
  {
    icon: Star,
    title: '4.9/5',
    subtitle: 'Customer Rating'
  }
]

interface TestimonialsProps {
  limit?: number
  showTrustBadges?: boolean
}

export function Testimonials({ limit = 3, showTrustBadges = true }: TestimonialsProps) {
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section className="py-16">
      {showTrustBadges && (
        <div className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                <badge.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{badge.title}</div>
                <div className="text-sm text-gray-600">{badge.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-xs text-gray-500">{testimonial.yearsWithAFF} with AFF</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {trustBadges.map((badge, index) => (
        <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <badge.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{badge.title}</div>
          <div className="text-sm text-gray-600">{badge.subtitle}</div>
        </div>
      ))}
    </div>
  )
}