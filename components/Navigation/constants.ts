import { PageType } from './types'

export const PHONE_NUMBER = '6198776746'
export const FORMATTED_PHONE = '(619) 877-6746'

export const NAV_ITEMS = {
  features: { label: 'Features', hash: 'features' },
  howItWorks: { label: 'How It Works', hash: 'how-it-works' },
  pricing: { label: 'Pricing', hash: 'pricing' },
  fuelAdvance: { label: 'Fuel Advance', hash: 'fuel-advance' },
  forOwners: { label: 'For Owners', hash: 'owner-operator' },
  invoiceFactoring: { label: 'Invoice Factoring', path: '/invoice-factoring' },
  about: { label: 'About', path: '/about' },
  contact: { label: 'Contact', path: '/contact' },
  blog: { label: 'Blog', path: '/blog' },
  faq: { label: 'FAQ', path: '/faq' },
} as const

export const SCROLL_THRESHOLD = 20

export const TRANSITION_CLASSES = {
  nav: 'sticky top-0 z-50 transition-all duration-300',
  navScrolled: 'bg-white shadow-md',
  navDefault: 'bg-white/90 backdrop-blur-sm border-b border-gray-100',
  link: 'relative px-3 py-2 text-sm transition-colors group',
  linkActive: 'text-blue-600 font-medium',
  linkInactive: 'text-gray-600 hover:text-gray-900',
  underline: 'absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 transform transition-transform duration-300',
  underlineActive: 'scale-x-100',
  underlineInactive: 'scale-x-0 group-hover:scale-x-100',
} as const