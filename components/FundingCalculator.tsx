'use client'

import { useState, useEffect } from 'react'
import { DollarSign, TrendingUp, Clock, ArrowRight } from 'lucide-react'
import { trackEvent, trackButtonClick } from '@/lib/analytics'

export default function FundingCalculator() {
  const [invoiceAmount, setInvoiceAmount] = useState('5000')
  const [fundingAmount, setFundingAmount] = useState(0)
  const [factorFee, setFactorFee] = useState(0)
  const [isCalculating, setIsCalculating] = useState(false)

  // Calculate funding whenever invoice amount changes
  useEffect(() => {
    setIsCalculating(true)
    const timer = setTimeout(() => {
      const amount = parseFloat(invoiceAmount) || 0
      const factorRate = 0.03 // 3% factor fee
      
      const fee = amount * factorRate
      const funding = amount - fee // 100% advance minus fee
      
      setFundingAmount(funding)
      setFactorFee(fee)
      setIsCalculating(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [invoiceAmount])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '')
    setInvoiceAmount(value)
    
    // Track calculator interaction
    if (value && parseFloat(value) > 0) {
      trackEvent('calculator_interaction', {
        invoice_amount: parseFloat(value),
        location: 'funding_calculator'
      })
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-30" />
      
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Funding Calculator</h3>
          <p className="text-gray-600">See your potential cash advance</p>
        </div>

        {/* Invoice Amount Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Invoice Amount
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={invoiceAmount}
              onChange={handleInputChange}
              className="pl-10 w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-xl font-semibold"
              placeholder="5,000"
            />
          </div>
        </div>

        {/* Results */}
        <div className={`space-y-4 transition-opacity duration-300 ${isCalculating ? 'opacity-50' : 'opacity-100'}`}>
          {/* You Receive */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">You receive:</span>
              </div>
              <span className="text-2xl font-bold text-blue-600">
                {formatCurrency(fundingAmount)}
              </span>
            </div>
          </div>

          {/* Factor Fee */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-gray-700 font-medium">Factor fee (3%):</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                {formatCurrency(factorFee)}
              </span>
            </div>
          </div>

          {/* Time to Fund */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Time to fund:</span>
              </div>
              <span className="text-xl font-bold text-green-600">
                2-4 hours
              </span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
              <span>Same-day funding</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
              <span>No credit check</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
              <span>Free to apply</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a 
          href="/apply" 
          onClick={() => {
            trackButtonClick('start_application', 'funding_calculator', {
              invoice_amount: parseFloat(invoiceAmount) || 0,
              funding_amount: fundingAmount,
              factor_fee: factorFee
            })
          }}
          className="mt-8 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
        >
          <span>Start Your Application</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Trust Badge */}
        <p className="text-center text-sm text-gray-500 mt-4">
          No personal guarantee • 5-minute approval
        </p>
      </div>
    </div>
  )
}