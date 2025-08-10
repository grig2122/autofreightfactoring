'use client'

import { useState, useEffect } from 'react'
import { Check, Clock, DollarSign, Upload, Loader2, RefreshCw, TrendingUp, Shield } from 'lucide-react'
import { EnhancedInput } from '@/components/ui/enhanced-input'

type DemoStep = 'calculator' | 'processing' | 'approved'

export default function LiveDemo() {
  const [step, setStep] = useState<DemoStep>('calculator')
  const [invoiceAmount, setInvoiceAmount] = useState('')
  const [processingStep, setProcessingStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Calculate fees and net amount
  const amount = parseFloat(invoiceAmount) || 0
  const feeRate = amount > 10000 ? 0.015 : amount > 5000 ? 0.02 : 0.025 // Dynamic rate
  const fee = amount * feeRate
  const netAmount = amount - fee

  // Format currency
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(num)
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (amount > 0) {
      setStep('processing')
      setIsAnimating(true)
      simulateProcessing()
    }
  }

  // Simulate processing steps
  const simulateProcessing = () => {
    const steps = [
      { delay: 800, step: 1 },
      { delay: 1600, step: 2 },
      { delay: 2400, step: 3 },
      { delay: 3200, step: 4 },
    ]

    steps.forEach(({ delay, step }) => {
      setTimeout(() => setProcessingStep(step), delay)
    })

    setTimeout(() => {
      setStep('approved')
      setIsAnimating(false)
    }, 4000)
  }

  // Reset demo
  const resetDemo = () => {
    setStep('calculator')
    setInvoiceAmount('')
    setProcessingStep(0)
    setIsAnimating(false)
  }

  return (
    <div className="relative">
      {/* Live Demo Badge */}
      <div className="absolute -top-2 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-50 animate-pulse transform -translate-y-1/2">
        Live Demo
      </div>

      <div className="relative">
        {/* Card container */}
        <div className="relative bg-white rounded-2xl shadow-2xl">
          {/* Header with explicit rounded top corners for Safari */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-t-2xl">
            <h3 className="text-xl font-bold text-white mb-1">
              {step === 'calculator' && 'Calculate Your Advance'}
              {step === 'processing' && 'Processing Your Invoice'}
              {step === 'approved' && 'Invoice Approved!'}
            </h3>
            <p className="text-blue-100 text-sm">
              {step === 'calculator' && 'Enter your invoice amount to see instant results'}
              {step === 'processing' && 'Verifying and approving your invoice'}
              {step === 'approved' && 'Funds are on the way to your account'}
            </p>
          </div>

        {/* Content with rounded bottom corners */}
        <div className="p-8 rounded-b-2xl bg-white">
          {/* Calculator Step */}
          {step === 'calculator' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Invoice Amount
                </label>
                <EnhancedInput
                  type="number"
                  value={invoiceAmount}
                  onChange={(e) => setInvoiceAmount(e.target.value)}
                  placeholder="5,000"
                  min="100"
                  max="100000"
                  step="100"
                  required
                  icon={DollarSign}
                  iconBgClassName="bg-green-100"
                  iconClassName="text-green-700"
                  className="text-lg font-semibold"
                />
              </div>

              {amount > 0 && (
                <div className="bg-gray-50 rounded-lg p-4 space-y-3 animate-fadeIn">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Invoice Amount:</span>
                    <span className="font-medium">{formatCurrency(amount)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Factoring Fee ({(feeRate * 100).toFixed(1)}%):</span>
                    <span className="font-medium text-red-600">-{formatCurrency(fee)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">You Receive:</span>
                      <span className="font-bold text-green-600 text-lg">{formatCurrency(netAmount)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <TrendingUp className="h-4 w-4" />
                    <span>Rate decreases with higher amounts</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={amount <= 0}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Upload className="h-5 w-5" />
                Process Invoice
              </button>
            </form>
          )}

          {/* Processing Step */}
          {step === 'processing' && (
            <div className="space-y-6">
              <div className="space-y-4">
                {[
                  { icon: Upload, label: 'Uploading Invoice', desc: 'Securely transmitting data' },
                  { icon: Check, label: 'Verifying Details', desc: 'Checking BOL and amounts' },
                  { icon: Shield, label: 'Customer Verification', desc: "Checking your customer's creditworthiness" },
                  { icon: DollarSign, label: 'Approving Funds', desc: 'Preparing transfer' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`
                      h-12 w-12 rounded-full flex items-center justify-center transition-all duration-500
                      ${processingStep > index 
                        ? 'bg-green-100 border-2 border-green-500' 
                        : processingStep === index 
                          ? 'bg-blue-100 border-2 border-blue-500' 
                          : 'bg-gray-100 border-2 border-gray-300'
                      }
                    `}>
                      {processingStep > index ? (
                        <Check className="h-6 w-6 text-green-600" />
                      ) : processingStep === index ? (
                        <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />
                      ) : (
                        <item.icon className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold ${processingStep >= index ? 'text-gray-900' : 'text-gray-400'}`}>
                        {item.label}
                      </p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-blue-700 font-medium">Processing your {formatCurrency(amount)} invoice...</p>
              </div>
            </div>
          )}

          {/* Approved Step */}
          {step === 'approved' && (
            <div className="space-y-6 text-center">
              <div className="animate-scaleIn">
                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Invoice Approved!</h4>
                <p className="text-gray-600">Your funds are being transferred</p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Amount Approved</p>
                  <p className="text-3xl font-bold text-gray-900">{formatCurrency(amount)}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-green-200">
                  <div>
                    <p className="text-sm text-gray-600">You Receive</p>
                    <p className="text-xl font-bold text-green-600">{formatCurrency(netAmount)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Transfer Time</p>
                    <p className="text-xl font-bold text-blue-600">1-2 days</p>
                  </div>
                </div>
              </div>

              <button
                onClick={resetDemo}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="h-5 w-5" />
                Try Another Amount
              </button>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  )
}