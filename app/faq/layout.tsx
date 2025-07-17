import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freight Factoring FAQ - Common Questions Answered',
  description: 'Get answers to frequently asked questions about invoice factoring for truckers. Learn about costs, requirements, and how factoring works.',
  alternates: {
    canonical: 'https://autofreightfactoring.com/faq',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}