'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, DollarSign, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

export function MobileHero() {
  useEffect(() => {
    // Track mobile page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Mobile Landing Page',
        page_location: window.location.href,
        device_category: 'mobile'
      })
    }
  }, [])

  const handlePhoneClick = () => {
    // Track phone click conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-16810321472/phone_click',
        value: 500,
        currency: 'USD'
      })
    }
  }

  const handleApplyClick = () => {
    // Track apply click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-16810321472/apply_click_mobile',
        value: 100,
        currency: 'USD'
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Simplified Mobile Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="font-bold text-xl text-blue-600">AutoFreight</div>
          <a 
            href="tel:6198776746" 
            onClick={handlePhoneClick}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>
      </header>

      {/* Mobile-Optimized Hero */}
      <section className="px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Get Paid Same Day for Your Freight
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Stop waiting 30+ days. Get cash in 24 hours.
        </p>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <DollarSign className="h-6 w-6 text-blue-600 mb-2" />
            <div className="font-semibold text-sm">Same Day Pay</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <Clock className="h-6 w-6 text-blue-600 mb-2" />
            <div className="font-semibold text-sm">Quick Approval</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <Shield className="h-6 w-6 text-blue-600 mb-2" />
            <div className="font-semibold text-sm">No Credit Check</div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <Phone className="h-6 w-6 text-blue-600 mb-2" />
            <div className="font-semibold text-sm">24/7 Support</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Link href="/apply" onClick={handleApplyClick}>
            <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold">
              Apply Now - 2 Minute Form
            </Button>
          </Link>
          
          <a href="tel:6198776746" onClick={handlePhoneClick}>
            <Button variant="outline" className="w-full h-14 border-2 border-green-600 text-green-600 text-lg font-bold">
              <Phone className="h-5 w-5 mr-2" />
              Call: (619) 877-6746
            </Button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span>Licensed</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">500+</span>
              <span>Truckers</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">4.9</span>
              <span>Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Simple FAQ Section */}
      <section className="px-4 py-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Facts</h2>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-lg">
            <div className="font-semibold mb-1">How fast do I get paid?</div>
            <div className="text-sm text-gray-600">Same day for invoices submitted before 2 PM EST</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-semibold mb-1">What's the fee?</div>
            <div className="text-sm text-gray-600">Just 1.5% flat rate - no hidden fees</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-semibold mb-1">Any contracts?</div>
            <div className="text-sm text-gray-600">No contracts - factor when you need to</div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
        <Link href="/apply" onClick={handleApplyClick}>
          <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold">
            Start Application
          </Button>
        </Link>
      </div>
    </div>
  )
}