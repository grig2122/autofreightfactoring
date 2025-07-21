import Link from 'next/link'

export function ComplianceFooter() {
  return (
    <div className="bg-gray-100 border-t border-gray-200 py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-2">
          <p className="text-xs text-gray-600">
            * Factoring rates from 1.5% to 3.5%. Same-day funding available for approved applications submitted before 2PM EST. 
            Approval based on your customer's creditworthiness, not personal credit. Fuel card savings vary by location and volume.
          </p>
          <p className="text-xs text-gray-600">
            ** No long-term contracts required. Cancel anytime. Some services may require minimum volume. 
            Fuel advances subject to 1-2% transaction fee. All rates and terms subject to change.
          </p>
          <div className="text-xs text-gray-500 pt-2">
            Auto Freight Factoring LLC | 1234 Commerce Way, San Diego, CA 92101 | NMLS #123456
          </div>
          <div className="text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-blue-600 underline">Privacy Policy</Link>
            {' | '}
            <Link href="/terms-of-service" className="hover:text-blue-600 underline">Terms of Service</Link>
            {' | '}
            <Link href="/rates-and-fees" className="hover:text-blue-600 underline">Rates & Fees</Link>
            {' | '}
            <span>© {new Date().getFullYear()} All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  )
}