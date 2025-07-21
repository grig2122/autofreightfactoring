import { Metadata } from 'next'
import DesignSystemClient from './design-system-client'

export const metadata: Metadata = {
  title: 'Design System - AutoFreightFactoring',
  description: 'Component library and design system showcase',
  robots: 'noindex, nofollow',
}

export default function DesignSystemPage() {
  return <DesignSystemClient />
}