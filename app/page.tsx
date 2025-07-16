'use client'

import { ChevronRight, Clock, DollarSign, Shield, Phone, Mail, MapPin, Star, Check, Menu, X, TrendingUp, Upload, Zap, Users, HeadphonesIcon, Building2, TruckIcon } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import FundingCalculator from '../components/FundingCalculator'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image src="/assets/logo.png" alt="AutoFreightFactoring Logo" width={40} height={40} className="h-10 w-10" />
              <span className="text-xl font-bold text-gray-900">AutoFreightFactoring</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a 
                href="#features" 
                onClick={handleSmoothScroll}
                className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                Features
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a 
                href="#how-it-works" 
                onClick={handleSmoothScroll}
                className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                How It Works
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a 
                href="#pricing" 
                onClick={handleSmoothScroll}
                className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                Pricing
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a 
                href="#contact" 
                onClick={handleSmoothScroll}
                className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors group"
              >
                Contact
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a 
                href="/apply" 
                className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                Get Pre-Approved
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
        }`}>
          <div className="container mx-auto px-4 py-4 bg-white">
            <a 
              href="#features" 
              onClick={handleSmoothScroll}
              className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={handleSmoothScroll}
              className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              onClick={handleSmoothScroll}
              className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              onClick={handleSmoothScroll}
              className="block py-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
            <a 
              href="/apply" 
              className="block mt-4 bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Pre-Approved
            </a>
          </div>
        </div>
      </nav>

      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative text-white">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 mb-8">
                <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Trusted by Auto Freight Factoring</span>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Get Paid Today for<br />
                Freight Delivered
              </h1>
              
              <p className="text-xl text-blue-100 mt-6 leading-relaxed max-w-xl">
                Skip the 30-90 day wait. Convert your invoices to cash in 24 hours with competitive rates and no hidden fees.
              </p>

              {/* Key Benefits List */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Same-day funding available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">100% advance rate - you get the full amount</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">No long-term contracts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white">Free credit checks on brokers</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a href="/apply" className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                  <span>Get Your Quote</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:+16198776746" className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg font-semibold backdrop-blur-sm bg-white bg-opacity-10 flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>(619) 877-6746</span>
                </a>
              </div>
            </div>
            <div className="relative lg:pl-8 pt-4">
              <FundingCalculator />
              
              {/* Background decoration */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full blur-2xl opacity-30" />
              <div className="absolute -top-6 -left-6 h-32 w-32 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-full blur-2xl opacity-30" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2" />
              Trusted by 1,000+ Owner-Operators
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Truckers Choose <span className="text-blue-600">AutoFreightFactoring</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the challenges you face on the road. That's why we built a factoring service that actually works for truckers.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Same-Day Funding Card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="h-14 w-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-7 w-7 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning-Fast Funding</h3>
                
                <p className="text-gray-600 mb-6">
                  Get paid in hours, not weeks. Our automated system approves invoices in minutes and transfers funds the same day.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Average approval: 5 minutes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Same-day ACH available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">24/7 submission portal</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-blue-500 border-2 border-white"></div>
                      <div className="h-8 w-8 rounded-full bg-green-500 border-2 border-white"></div>
                      <div className="h-8 w-8 rounded-full bg-purple-500 border-2 border-white"></div>
                    </div>
                    <span className="text-sm text-gray-600">347 invoices funded today</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* No Personal Credit Check Card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="h-14 w-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-7 w-7 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No Personal Credit Check</h3>
                
                <p className="text-gray-600 mb-6">
                  Your credit history doesn't matter. We evaluate your customer's creditworthiness, not yours. Perfect for owner-operators.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">No personal guarantees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Bad credit accepted</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Customer verification only</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    98% approval rate
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transparent Pricing Card */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="h-14 w-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-7 w-7 text-purple-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
                
                <p className="text-gray-600 mb-6">
                  No surprises, no hidden fees. Our simple rate structure means you always know exactly what you'll pay.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Rates from 1.5% - 3%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">No setup or monthly fees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Volume discounts available</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                    <Star className="h-4 w-4 mr-1" />
                    Save $2,400/month vs. competitors
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Join thousands of truckers who've improved their cash flow</p>
            <a href="/apply" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              See How Much You'll Save
              <ChevronRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4 mr-2" />
              Average Time: 4 Hours from Invoice to Payment
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How <span className="text-blue-600">AutoFreightFactoring</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process gets you from invoice to cash in record time. No paperwork, no waiting.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Process Timeline */}
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-green-400 transform -translate-y-1/2" />
              
              <div className="grid md:grid-cols-3 gap-8 relative">
                {/* Step 1 */}
                <div className="relative group">
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        1
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="h-16 w-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                      <Upload className="h-8 w-8 text-blue-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Upload Invoice</h3>
                    <p className="text-gray-600 text-center mb-6">
                      Simply upload your freight invoice or BOL. Our OCR technology extracts details automatically.
                    </p>
                    
                    {/* Feature List */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>Drag & drop upload</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>Auto-fill from BOL</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>Mobile-friendly</span>
                      </div>
                    </div>
                    
                    {/* Time Badge */}
                    <div className="mt-6 inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      30 seconds
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="relative group">
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="h-16 w-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Instant Approval</h3>
                    <p className="text-gray-600 text-center mb-6">
                      Our AI verifies your customer and approves funding instantly. No credit check on you.
                    </p>
                    
                    {/* Feature List */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>Customer verification</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>Load confirmation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>Instant decision</span>
                      </div>
                    </div>
                    
                    {/* Time Badge */}
                    <div className="mt-6 inline-flex items-center bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      5 minutes
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="relative group">
                  {/* Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative">
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        3
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="h-16 w-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="h-8 w-8 text-purple-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Get Paid Fast</h3>
                    <p className="text-gray-600 text-center mb-6">
                      Funds hit your bank account via ACH. Same-day available for approved carriers.
                    </p>
                    
                    {/* Feature List */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>Direct ACH deposit</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>Real-time tracking</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span>Instant notification</span>
                      </div>
                    </div>
                    
                    {/* Time Badge */}
                    <div className="mt-6 inline-flex items-center bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      2-4 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4 hrs</div>
                <p className="text-sm text-gray-600 mt-1">Average Time to Fund</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <p className="text-sm text-gray-600 mt-1">Approval Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <p className="text-sm text-gray-600 mt-1">Submit Anytime</p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Ready to experience the fastest factoring in trucking?</p>
              <a href="/apply" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Start Your Application
                <ChevronRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-10" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <DollarSign className="h-4 w-4 mr-2" />
              Save $2,400+ Monthly vs. Competitors
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple, <span className="text-blue-600">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No hidden fees. No setup costs. No long-term contracts. Just honest pricing that scales with your business.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Starter Plan */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Starter</h3>
                  <TruckIcon className="h-8 w-8 text-gray-400" />
                </div>
                
                <p className="text-gray-600 mb-6">Perfect for owner-operators just getting started</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">3%</span>
                  <span className="text-gray-600 ml-2">per invoice</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Same-day funding available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">No minimum volume required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Basic reporting dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Email & chat support</span>
                  </li>
                </ul>
                
                <a href="/apply" className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center">
                  Get Started
                </a>
                
                <p className="text-center text-sm text-gray-500 mt-4">No credit card required</p>
              </div>
            </div>
            
            {/* Professional Plan - Most Popular */}
            <div className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:-mt-4">
              {/* Popular Badge */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                  <Zap className="h-3 w-3" />
                  Most Popular
                </div>
              </div>
              
              <div className="p-8 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <Users className="h-8 w-8 text-blue-300" />
                </div>
                
                <p className="text-blue-100 mb-6">For growing fleets with regular invoicing needs</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold">2%</span>
                  <span className="text-blue-100 ml-2">per invoice</span>
                  <div className="mt-2">
                    <span className="inline-flex items-center bg-blue-500 bg-opacity-50 px-3 py-1 rounded-full text-sm">
                      Save $1,000+/month
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white">Everything in Starter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white">Priority 24/7 phone support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white">Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-white">Fuel card discounts</span>
                  </li>
                </ul>
                
                <a href="/apply" className="block w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center shadow-lg">
                  Start Free Trial
                </a>
                
                <p className="text-center text-sm text-blue-100 mt-4">30-day money-back guarantee</p>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
                  <Building2 className="h-8 w-8 text-gray-400" />
                </div>
                
                <p className="text-gray-600 mb-6">For large fleets with custom requirements</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-gray-900">1.5%</span>
                  <span className="text-gray-600 ml-2">per invoice</span>
                  <div className="mt-2">
                    <span className="inline-flex items-center bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      Volume pricing available
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Custom API integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">White-label options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Dedicated success team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Custom payment terms</span>
                  </li>
                </ul>
                
                <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Contact Sales
                </button>
                
                <p className="text-center text-sm text-gray-500 mt-4">Custom quote required</p>
              </div>
            </div>
          </div>
          
          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Compare Features</h3>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-50 py-4 px-6 font-semibold text-sm">
                <div>Features</div>
                <div className="text-center">Starter</div>
                <div className="text-center">Professional</div>
                <div className="text-center">Enterprise</div>
              </div>
              {[
                { feature: 'Invoice Processing Time', starter: '5-10 min', pro: '5 min', enterprise: 'Priority' },
                { feature: 'Advance Rate', starter: '92%', pro: '95%', enterprise: '97%+' },
                { feature: 'Monthly Volume Limit', starter: '$100K', pro: '$500K', enterprise: 'Unlimited' },
                { feature: 'Support Response Time', starter: '24 hours', pro: '1 hour', enterprise: '15 min' },
                { feature: 'Fuel Card Discounts', starter: false, pro: true, enterprise: true },
                { feature: 'Custom Reporting', starter: false, pro: true, enterprise: true },
                { feature: 'API Access', starter: false, pro: false, enterprise: true },
              ].map((row, index) => (
                <div key={index} className="grid grid-cols-4 py-4 px-6 border-t border-gray-100 text-sm">
                  <div className="font-medium text-gray-700">{row.feature}</div>
                  <div className="text-center">
                    {typeof row.starter === 'boolean' ? (
                      row.starter ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{row.starter}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {typeof row.pro === 'boolean' ? (
                      row.pro ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{row.pro}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {typeof row.enterprise === 'boolean' ? (
                      row.enterprise ? (
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-600">{row.enterprise}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center gap-8 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Bank-Level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 font-medium">No Setup Time</span>
              </div>
              <div className="flex items-center gap-2">
                <HeadphonesIcon className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          {/* Trust indicator */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <TrendingUp className="h-4 w-4 mr-2" />
            347 Truckers Got Funded Today
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Paid <span className="text-yellow-400">Faster?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of truckers who've transformed their cash flow. Get approved in minutes, paid in hours. No credit check, no hassle.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div>
              <div className="text-3xl font-bold text-white">$50M+</div>
              <p className="text-blue-200 text-sm mt-1">Funded This Month</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">4 hrs</div>
              <p className="text-blue-200 text-sm mt-1">Average to Payment</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <p className="text-blue-200 text-sm mt-1">Approval Rate</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/apply" className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
              <span>Start Factoring Now</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+16198776746" className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg font-semibold backdrop-blur-sm bg-white bg-opacity-10 flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              <span>Call (619) 877-6746</span>
            </a>
          </div>
          
          <p className="text-blue-200 text-sm mt-8">
            No setup fees • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/assets/logo.png" alt="AutoFreightFactoring Logo" width={40} height={40} className="h-10 w-10" />
                <span className="text-2xl font-bold">AutoFreightFactoring</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The fastest, most reliable invoice factoring service built by truckers, for truckers. Get paid today, keep rolling tomorrow.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-green-900 bg-opacity-50 text-green-400 px-3 py-1 rounded-full text-sm">
                  <div className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Live Support 24/7
                </div>
              </div>
            </div>
            
            {/* Services Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Invoice Factoring
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Fuel Advances
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Load Board Access
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Credit Monitoring
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Company Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
              <div className="space-y-4">
                <a href="tel:+16198776746" className="flex items-center text-gray-400 hover:text-white transition-colors group">
                  <div className="h-10 w-10 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-opacity-100 transition-all">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold">(619) 877-6746</p>
                    <p className="text-sm">24/7 Support Line</p>
                  </div>
                </a>
                
                <a href="mailto:support@autofreightfactoring.com" className="flex items-center text-gray-400 hover:text-white transition-colors group">
                  <div className="h-10 w-10 bg-green-900 bg-opacity-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-opacity-100 transition-all">
                    <Mail className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Support</p>
                    <p className="text-sm">support@autofreightfactoring.com</p>
                  </div>
                </a>
                
                <div className="flex items-center text-gray-400">
                  <div className="h-10 w-10 bg-purple-900 bg-opacity-50 rounded-lg flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Headquarters</p>
                    <p className="text-sm">Dallas, TX 75201</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <p>&copy; 2024 AutoFreightFactoring. All rights reserved.</p>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="h-4 w-4" />
                  <span>Bank-Level Security</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>SOC 2 Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}