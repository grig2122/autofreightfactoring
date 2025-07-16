import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AutoFreightFactoring - Same-Day Invoice Factoring for Truckers',
  description: 'Get paid today with no-contract invoice factoring for owner-operators and small fleets. Fast, fair, and built for truckers.',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'AutoFreightFactoring - Same-Day Invoice Factoring for Truckers',
    description: 'Get paid today with no-contract invoice factoring. 100% advance minus 3% fee. No contracts, no hidden fees.',
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
    description: 'Get paid today with no-contract invoice factoring. 100% advance minus 3% fee.',
    images: ['https://autofreightfactoring.com/icon.png'],
  },
  metadataBase: new URL('https://autofreightfactoring.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}