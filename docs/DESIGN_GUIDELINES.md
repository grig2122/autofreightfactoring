# UI/UX Design Guidelines – AutoFreightFactoring.com

## 1. Brand Voice & Tone

### Voice
- **Direct, confident, supportive**
- Speak to truckers in their language, avoid corporate jargon
- Always lead with benefits, not features

### Tone
- Professional but approachable
- Trucker-focused and results-driven
- Empathetic to cash flow challenges

### Messaging Style
- Clear, benefit-first language
- Use numbers and specifics (e.g., "Get paid in 24 hours" not "Fast payment")
- Active voice, action-oriented

### Example Copy
❌ "Our innovative factoring solution leverages technology..."
✅ "Get paid same-day for your invoices. No waiting 30-90 days."

---

## 2. Core Design Principles

### Clarity First
Every page should focus on a single primary action
- Landing page: "Get Pre-Approved"
- Dashboard: "Upload Invoice"
- Settings: "Update Information"

### Speed-Oriented UX
- Minimize clicks to conversion
- Auto-save forms
- Progressive disclosure (show complexity only when needed)
- Loading states for all async operations

### Trust by Design
Visual trust signals throughout:
- ✅ Check marks for completed steps
- 🔒 Security badges near sensitive forms
- ⭐ Ratings and testimonials
- 📊 Real numbers (1000+ truckers, $50M+ factored)

### Mobile-First
- Design for thumb reach
- Minimum 44px tap targets
- Sticky CTAs on mobile
- Swipeable components where appropriate

### Consistency
- Reuse components (buttons, cards, forms)
- Predictable navigation patterns
- Consistent spacing scale

---

## 3. Color Palette

```css
/* Primary Colors */
--primary-blue: #2563EB;     /* Tailwind: blue-600 - CTAs, links */
--primary-blue-hover: #1D4ED8; /* Tailwind: blue-700 - Hover states */

/* Text Colors */
--text-primary: #111827;     /* Tailwind: gray-900 - Headlines */
--text-secondary: #6B7280;   /* Tailwind: gray-500 - Descriptions */
--text-light: #9CA3AF;       /* Tailwind: gray-400 - Hints */

/* Background Colors */
--bg-white: #FFFFFF;         /* Main background */
--bg-light: #F9FAFB;         /* Tailwind: gray-50 - Section backgrounds */
--bg-dark: #1F2937;          /* Tailwind: gray-800 - Footer, dark sections */

/* Status Colors */
--success-green: #10B981;    /* Tailwind: green-500 - Approvals */
--error-red: #EF4444;        /* Tailwind: red-500 - Errors */
--warning-yellow: #F59E0B;   /* Tailwind: amber-500 - Warnings */

/* Border Colors */
--border-light: #E5E7EB;     /* Tailwind: gray-200 */
--border-medium: #D1D5DB;    /* Tailwind: gray-300 */
```

### Usage Examples
- Primary CTA: `bg-blue-600 hover:bg-blue-700`
- Success message: `bg-green-50 text-green-800 border-green-200`
- Error state: `border-red-500 text-red-600`

---

## 4. Typography

### Font Stack
```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

### Type Scale
| Element | Mobile | Desktop | Weight | Tailwind |
|---------|--------|---------|--------|----------|
| H1 | 36px | 48px | Bold | `text-4xl md:text-5xl font-bold` |
| H2 | 24px | 36px | Bold | `text-2xl md:text-3xl font-bold` |
| H3 | 20px | 24px | Semibold | `text-xl md:text-2xl font-semibold` |
| Body | 16px | 18px | Normal | `text-base md:text-lg` |
| Small | 14px | 14px | Normal | `text-sm` |
| Button | 14px | 16px | Semibold | `text-sm md:text-base font-semibold` |

### Line Height
- Headlines: `leading-tight` (1.25)
- Body text: `leading-relaxed` (1.625)
- Compact UI: `leading-normal` (1.5)

---

## 5. Component Guidelines

### Buttons

#### Primary Button (CTA)
```jsx
className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold 
          hover:bg-blue-700 transition-all duration-200 hover:scale-105 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
```

#### Secondary Button
```jsx
className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold 
          border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
```

#### Ghost Button
```jsx
className="text-gray-600 px-4 py-2 hover:text-gray-900 hover:bg-gray-100 
          rounded-md transition-all duration-200"
```

### Cards

#### Standard Card
```jsx
className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow 
          duration-200 p-6 border border-gray-100"
```

#### Featured Card
```jsx
className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-500 
          relative overflow-hidden"
// Add badge: <span className="absolute top-4 right-4 bg-blue-600 text-white 
//                    text-xs px-3 py-1 rounded-full">POPULAR</span>
```

### Forms

#### Input Field
```jsx
<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700">
    Label Text
  </label>
  <input 
    className="w-full px-4 py-2 border border-gray-300 rounded-md 
               focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
               transition-colors duration-200"
  />
  <p className="text-sm text-gray-500">Helper text here</p>
</div>
```

#### Form Group
```jsx
className="space-y-6" // Between form fields
className="space-y-4" // Within compound fields
```

### Navigation

#### Desktop Nav
```jsx
className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
```

#### Mobile Nav
```jsx
className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 
          px-4 py-3 md:hidden"
```

### Sections

#### Standard Section
```jsx
className="py-16 md:py-24"
```

#### Alternating Background
```jsx
className="py-16 md:py-24 bg-gray-50" // Every other section
```

---

## 6. Layout & Grid

### Container
```jsx
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

### Grid Systems

#### Feature Grid (3 columns)
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
```

#### Content Grid (2 columns)
```jsx
className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
```

#### Form Layout
```jsx
className="max-w-2xl mx-auto" // Centers form content
```

### Spacing Scale
- `space-y-2`: Within components (8px)
- `space-y-4`: Between related elements (16px)
- `space-y-6`: Between form fields (24px)
- `space-y-8`: Between sections within a card (32px)
- `space-y-12`: Between major sections (48px)

---

## 7. UX Interactions & Behavior

### Hover States
- Buttons: `hover:scale-105` with color change
- Cards: `hover:shadow-md`
- Links: `hover:text-blue-600 hover:underline`

### Focus States
- All interactive elements: `focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`
- Remove default outline: `focus:outline-none`

### Loading States
```jsx
// Spinner component
<div className="animate-spin rounded-full h-5 w-5 border-2 
                border-gray-300 border-t-blue-600" />

// Skeleton loader
<div className="animate-pulse bg-gray-200 rounded-md h-4 w-full" />
```

### Transitions
- Default: `transition-all duration-200`
- Modals/Overlays: `transition-all duration-300`
- Page transitions: `transition-all duration-500`

### Form Validation
- Real-time validation after blur
- Success: Green check icon + `border-green-500`
- Error: Red X icon + `border-red-500` + error message below

---

## 8. Responsive Breakpoints

### Tailwind Breakpoints
- `sm`: 640px (Large phones)
- `md`: 768px (Tablets)
- `lg`: 1024px (Small laptops)
- `xl`: 1280px (Desktops)
- `2xl`: 1536px (Large screens)

### Mobile-First Patterns
```jsx
// Text sizing
className="text-base md:text-lg lg:text-xl"

// Padding
className="p-4 md:p-6 lg:p-8"

// Grid columns
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

### Responsive Navigation
- Mobile: Hamburger menu + bottom sticky CTA
- Tablet+: Full nav with CTA button in header

---

## 9. Accessibility Guidelines

### Color Contrast
- Text on white: Minimum gray-600 (#4B5563)
- Text on blue-600: Always white
- WCAG AA compliance required

### Interactive Elements
- Minimum size: 44x44px touch target
- Clear focus indicators
- Descriptive button text (not just "Click here")

### Form Accessibility
- All inputs must have labels
- Error messages linked to inputs with `aria-describedby`
- Required fields marked with `aria-required="true"`

### Screen Reader Support
- Semantic HTML (`nav`, `main`, `section`, `article`)
- Descriptive alt text for images
- `aria-label` for icon-only buttons

---

## 10. Component Library Structure

```
/components
  /ui
    - Button.tsx
    - Card.tsx
    - Input.tsx
    - Select.tsx
    - Badge.tsx
    - Alert.tsx
    - Spinner.tsx
  /layout
    - Navigation.tsx
    - Footer.tsx
    - Section.tsx
    - Container.tsx
  /features
    - PreApprovalForm.tsx
    - InvoiceUpload.tsx
    - DashboardStats.tsx
```

---

## 11. Animation Guidelines

### Micro-animations
- Button hover: `scale-105` (50ms)
- Card hover: Shadow transition (200ms)
- Form field focus: Border color (200ms)

### Page Transitions
- Fade in content: `animate-fadeIn` (500ms)
- Slide up cards: `animate-slideUp` (600ms staggered)

### Loading Animations
- Spinner: `animate-spin` (continuous)
- Progress bar: Smooth width transition
- Skeleton: `animate-pulse`

---

## 12. Dark Mode Considerations

While not currently implemented, design with dark mode in mind:
- Use semantic color names (e.g., `bg-surface` not `bg-white`)
- Ensure sufficient contrast ratios
- Test component visibility in both modes

---

## Implementation Checklist

- [ ] Create base Button component with all variants
- [ ] Create Card component with shadow/border options
- [ ] Create Form components (Input, Select, Textarea)
- [ ] Update Navigation to match guidelines
- [ ] Create Section wrapper component
- [ ] Add loading states to all async operations
- [ ] Implement consistent spacing scale
- [ ] Add hover/focus states to all interactive elements
- [ ] Test on mobile devices for touch targets
- [ ] Validate color contrast ratios