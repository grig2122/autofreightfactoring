export interface QuickApplyForm {
  // Basic Info
  firstName: string
  lastName: string
  email: string
  phone: string
  
  // Company Info
  companyName: string
  companyType: 'owner-operator' | 'fleet' | 'freight-broker'
  monthlyInvoiceVolume: '$0-10k' | '$10-50k' | '$50-100k' | '$100k+'
  yearsInBusiness: string
  currentFactoring: 'yes' | 'no'
  dotNumber?: string
}

export interface PreApprovalResult {
  approved: boolean
  message: string
  nextStep: string
  estimatedRate?: string
  followUpTime?: string
}

export interface Lead {
  id?: string
  firstName: string
  lastName: string
  email: string
  phone: string
  companyName: string
  companyType: string
  monthlyInvoiceVolume: string
  yearsInBusiness: string
  currentFactoring: string
  dotNumber?: string
  
  // Tracking
  preApprovalScore?: number
  preApproved: boolean
  status: 'new' | 'pre-approved' | 'in-onboarding' | 'active' | 'rejected'
  source?: string
  createdAt: Date
  
  // Sales
  assignedTo?: string
  lastContactedAt?: Date
  notes?: string[]
}