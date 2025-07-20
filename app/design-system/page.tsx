import { Metadata } from 'next'
import DesignSystemPageClient from './page-client'

export const metadata: Metadata = {
  title: 'Design System | AutoFreightFactoring',
  description: 'Internal design system and component library for AutoFreightFactoring.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
  },
}

export default function DesignSystemPage() {
  return <DesignSystemPageClient />
}