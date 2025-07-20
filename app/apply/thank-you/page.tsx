import { Metadata } from 'next'
import ThankYouPageClient from './page-client'

export const metadata: Metadata = {
  title: 'Thank You - Application Received | AutoFreightFactoring',
  description: 'Thank you for applying for freight factoring with AutoFreightFactoring. We will review your application and contact you shortly.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
}

export default function ThankYouPage() {
  return <ThankYouPageClient />
}