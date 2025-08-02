export type PageType = 'home' | 'invoice-factoring' | 'about' | 'contact' | 'blog' | 'faq' | 'owner-operators' | 'transparent-pricing'

export interface NavLink {
  href: string
  label: string
  isActive?: boolean
  isExternal?: boolean
}

export interface NavigationProps {
  currentPage?: PageType
}