'use client'

import { Shield, Lock, Award, CheckCircle } from 'lucide-react'

export function FormTrustIndicators() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-4 border-t border-gray-200">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Lock className="h-4 w-4 text-green-600" />
        <span>SSL Secured</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Shield className="h-4 w-4 text-blue-600" />
        <span>Your data is safe</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Award className="h-4 w-4 text-purple-600" />
        <span>BBB Accredited</span>
      </div>
    </div>
  )
}

export function CompactTrustBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-medium">
      <CheckCircle className="h-3.5 w-3.5" />
      <span>Trusted by hundreds of truckers</span>
    </div>
  )
}

export function SecurityBadge() {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
      <Lock className="h-5 w-5 text-green-600" />
      <div className="text-sm">
        <div className="font-semibold text-gray-900">Bank-Level Security</div>
        <div className="text-gray-600">256-bit SSL encryption</div>
      </div>
    </div>
  )
}