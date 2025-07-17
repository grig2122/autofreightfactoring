import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply for Invoice Factoring - AutoFreightFactoring',
  description: 'Apply for same-day invoice factoring in minutes. Get pre-approved instantly with 100% advance rates and only 3% factoring fee. No contracts or hidden fees.',
  openGraph: {
    title: 'Apply for Invoice Factoring - AutoFreightFactoring',
    description: 'Get pre-approved for same-day factoring in minutes. 100% advance, 3% fee, no contracts.',
    url: 'https://autofreightfactoring.com/apply',
  },
  twitter: {
    card: 'summary',
    title: 'Apply for Factoring - AutoFreightFactoring',
    description: 'Get pre-approved for same-day factoring in minutes. 100% advance, 3% fee.',
  },
  alternates: {
    canonical: 'https://autofreightfactoring.com/apply',
  },
}

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}