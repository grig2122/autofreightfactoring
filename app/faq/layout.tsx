import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freight Factoring FAQ | Common Questions for Truckers',
  description: 'FAQ about freight factoring for truckers. Learn factoring costs, requirements, 1-2 business day funding process, and how to get started with no credit check.',
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