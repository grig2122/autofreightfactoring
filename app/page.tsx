import { Metadata } from 'next'
import HomeClient from './page-client'

export const metadata: Metadata = {
  title: 'Freight Factoring for Truckers | Same-Day Funding | AutoFreightFactoring',
  description: 'Get same-day funding with freight factoring designed for truckers. No credit check, 100% advance rates, transparent pricing. Turn invoices into cash in 24 hours.',
  keywords: 'freight factoring, trucking factoring, invoice factoring, same day funding, trucking cash flow, freight bill factoring',
  openGraph: {
    title: 'Freight Factoring for Truckers | Same-Day Funding',
    description: 'Get same-day funding with freight factoring designed for truckers. No credit check, 100% advance rates, transparent pricing.',
    url: 'https://autofreightfactoring.com',
    siteName: 'AutoFreightFactoring',
    type: 'website',
    images: [
      {
        url: 'https://autofreightfactoring.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AutoFreightFactoring - Fast Freight Factoring for Truckers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Freight Factoring for Truckers | Same-Day Funding',
    description: 'Get same-day funding with freight factoring designed for truckers. No credit check, 100% advance rates.',
    images: ['https://autofreightfactoring.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://autofreightfactoring.com',
  },
}

export default function Home() {
  return <HomeClient />
}