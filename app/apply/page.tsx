import { Metadata } from 'next'
import ApplyPageClient from './page-client'

export const metadata: Metadata = {
  title: 'Apply for Freight Factoring | Get Pre-Approved in Minutes | AutoFreightFactoring',
  description: 'Apply for freight factoring in just 2 minutes. No credit check required. Get pre-approved instantly with same-day funding available. Start your application now.',
  keywords: 'apply freight factoring, trucking application, instant approval, no credit check factoring, quick factoring application',
  openGraph: {
    title: 'Apply for Freight Factoring | Instant Pre-Approval',
    description: 'Quick 2-minute application for freight factoring. No credit check, instant decision, same-day funding available.',
    url: 'https://autofreightfactoring.com/apply',
    siteName: 'AutoFreightFactoring',
    type: 'website',
  },
  alternates: {
    canonical: 'https://autofreightfactoring.com/apply',
  },
}

export default function ApplyPage() {
  return <ApplyPageClient />
}