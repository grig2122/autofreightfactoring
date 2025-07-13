# Sign-up Strategy: Lead Capture vs Account Creation

## Two-Stage Approach

### Stage 1: Lead Capture (Marketing Site)
**Purpose**: Collect interested truckers' info for sales follow-up

```
Landing Page → "Get Started" → Lead Form
                                    ↓
                            Collected Info:
                            - Name
                            - Email
                            - Phone
                            - Fleet size
                            - Monthly invoice volume
                                    ↓
                            Goes to CRM/Sales Team
```

**Features**:
- Low friction (3-5 fields max)
- No password required
- Triggers sales outreach
- Marketing automation
- Lead scoring

### Stage 2: Full Account Creation (App)
**Purpose**: Onboard approved truckers to start factoring

```
Approved Lead → "Create Account" → Full Registration
                                         ↓
                                  Collected Info:
                                  - Email/Password
                                  - Company details
                                  - MC#/DOT#
                                  - Tax ID
                                  - Bank info
                                         ↓
                                  Active Account
```

**Features**:
- Secure authentication
- Document verification
- Compliance checks
- Full platform access

## Recommended Approach for AutoFreightFactoring

### Option A: Lead-First (Traditional B2B)
```
Marketing Site → Lead Form → Sales Call → Approval → Account Creation
```
**Pros**:
- Higher quality customers
- Better risk management
- Personal touch builds trust

**Cons**:
- Slower onboarding
- Higher acquisition cost
- May lose impatient truckers

### Option B: Self-Service (SaaS Model)
```
Marketing Site → Sign Up → Instant Account → Start Factoring
```
**Pros**:
- Instant gratification
- Lower acquisition cost
- Scalable

**Cons**:
- Higher risk
- Need robust verification
- Less personal

### Option C: Hybrid (Recommended)
```
Marketing Site → Quick Apply → Instant Pre-Approval → Full Account Setup
                      ↓
                (If not pre-approved)
                      ↓
                Lead to Sales Team
```

## Implementation Plan

### Phase 1: Quick Apply Form
On landing page, replace "Get Started" with "Get Pre-Approved":

```jsx
// Quick Apply Form Fields
- Email
- Phone
- Company Name
- Monthly Invoice Volume
- "Apply in 60 Seconds" button
```

### Phase 2: Instant Decision Engine
```jsx
// Backend Logic
if (invoiceVolume > $10k && validEmail && validPhone) {
  → "Congratulations! You're pre-approved"
  → Redirect to full account creation
} else {
  → "Thanks! A specialist will contact you"
  → Send to CRM for follow-up
}
```

### Phase 3: Full Account Creation
For pre-approved users only:
```jsx
// Account Setup Steps
1. Create password
2. Verify company (MC#, DOT#)
3. Upload documents
4. Connect bank account
5. Submit first invoice
```

## Benefits of Hybrid Approach

1. **Fast for Good Leads**: High-volume truckers get instant access
2. **Sales Touch for Complex Cases**: Smaller operators get help
3. **Risk Management**: Can verify before giving full access
4. **Better Conversion**: Instant pre-approval creates momentum

## Technical Implementation

### Lead Capture Form
```typescript
// Simple Firestore collection
interface Lead {
  email: string
  phone: string
  companyName: string
  monthlyVolume: number
  preApproved: boolean
  createdAt: Timestamp
  source: string
  status: 'new' | 'contacted' | 'converted' | 'rejected'
}
```

### Full User Account
```typescript
// Complete user profile after approval
interface User {
  uid: string // Firebase Auth ID
  email: string
  companyInfo: {
    name: string
    mcNumber: string
    dotNumber: string
    taxId: string
  }
  bankAccount: {
    // Encrypted bank details
  }
  verified: boolean
  role: 'trucker' | 'admin'
  createdAt: Timestamp
}
```