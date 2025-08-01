import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { IntercomProvider } from '@/components/IntercomProvider'
import { IntercomWidget } from '@/components/IntercomWidget'
import { FloatingSupportButton } from '@/components/SupportButton'
import { StructuredData } from '@/components/StructuredData'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import { Analytics } from '@vercel/analytics/react'
import { GoogleTagManager, GoogleTagManagerNoscript } from '@/components/GoogleTagManager'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Freight Factoring for Truckers | Same-Day Funding Available',
  description: 'Get 100% advances with freight factoring. No hidden fees, funds in hours. AutoFreightFactoring helps owner-operators maintain cash flow. Apply in minutes.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Invoice Factoring for Truckers',
    description: 'Get paid today with no-contract invoice factoring. 100% advance minus 1.5% fee. No contracts, no hidden fees.',
    url: 'https://autofreightfactoring.com',
    siteName: 'AutoFreightFactoring',
    type: 'website',
    images: [
      {
        url: 'https://autofreightfactoring.com/icon.png',
        width: 512,
        height: 512,
        alt: 'AutoFreightFactoring Logo',
      }
    ],
  },
  twitter: {
    card: 'summary',
    title: 'AutoFreightFactoring - Same-Day Invoice Factoring',
    description: 'Get paid today with no-contract invoice factoring. 100% advance minus 1.5% fee.',
    images: ['https://autofreightfactoring.com/icon.png'],
  },
  metadataBase: new URL('https://autofreightfactoring.com'),
  alternates: {
    canonical: 'https://autofreightfactoring.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <GoogleTagManager gtmId="GTM-PQGZWBW6" />
      </head>
      <body className={inter.className}>
        <GoogleTagManagerNoscript gtmId="GTM-PQGZWBW6" />
        <AnalyticsProvider>
          <IntercomProvider>
            {children}
            <IntercomWidget />
            <FloatingSupportButton />
          </IntercomProvider>
        </AnalyticsProvider>
        <Analytics />
      </body>
    </html>
  )
}