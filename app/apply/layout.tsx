import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apply for Invoice Factoring - AutoFreightFactoring',
  description: 'Apply for fast invoice factoring in minutes. Get pre-approved quickly with 100% advance rates and competitive factoring fees. No contracts or hidden fees.',
  openGraph: {
    title: 'Apply for Invoice Factoring - AutoFreightFactoring',
    description: 'Get pre-approved for fast factoring in minutes. 100% advance, competitive rates, no contracts.',
    url: 'https://autofreightfactoring.com/apply',
  },
  twitter: {
    card: 'summary',
    title: 'Apply for Factoring - AutoFreightFactoring',
    description: 'Get pre-approved for fast factoring in minutes. 100% advance, competitive rates.',
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