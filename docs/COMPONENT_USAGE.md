# Component Usage Guide

This guide shows how to use the AutoFreightFactoring design system components in your code.

## Quick Reference

### Import Components
```tsx
import { Button, Card, Section, Badge, Heading, Text } from '@/components/ui/custom'
```

### Documentation
Refer to `/docs/design-system.md` for complete design system documentation.

---

## Common Patterns

### Page Structure
```tsx
<Section background="white" size="lg">
  <div className="text-center">
    <Heading level={1}>Page Title</Heading>
    <Text size="lg" color="secondary" className="mt-4">
      Subtitle or description
    </Text>
  </div>
</Section>
```

### Feature Grid
```tsx
<Section background="gray" size="md">
  <Heading level={2} className="text-center mb-12">
    Why Choose Us?
  </Heading>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <Card hover className="text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <Heading level={3} className="mb-2">Feature Title</Heading>
      <Text color="secondary">Feature description</Text>
    </Card>
    {/* Repeat for other features */}
  </div>
</Section>
```

### CTA Section
```tsx
<Section background="dark" size="lg">
  <div className="text-center">
    <Heading level={2} className="text-white mb-4">
      Ready to Get Started?
    </Heading>
    <Text size="lg" className="text-gray-300 mb-8">
      Join thousands of truckers getting paid faster
    </Text>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="primary" size="lg">Get Pre-Approved</Button>
      <Button variant="secondary" size="lg">Learn More</Button>
    </div>
  </div>
</Section>
```

### Form Layout
```tsx
<div className="max-w-2xl mx-auto">
  <Card padding="lg">
    <div className="space-y-6">
      <Heading level={2}>Form Title</Heading>
      <div className="space-y-4">
        {/* Form fields */}
      </div>
      <Button variant="primary" fullWidth>
        Submit
      </Button>
    </div>
  </Card>
</div>
```

---

## Component Examples

### Buttons with Different States
```tsx
// Primary CTA
<Button variant="primary" size="lg">
  Get Pre-Approved
</Button>

// Loading state
<Button variant="primary" isLoading>
  Processing...
</Button>

// Full width mobile
<Button variant="primary" fullWidth>
  Continue
</Button>

// Icon button
<Button variant="secondary">
  <Phone className="w-4 h-4 mr-2" />
  Call Now
</Button>
```

### Cards with Status
```tsx
// Featured pricing card
<Card variant="featured" padding="lg">
  <Badge variant="blue" className="absolute top-6 right-6">
    POPULAR
  </Badge>
  <Heading level={3}>Pro Plan</Heading>
  <Text size="lg" weight="bold" className="mt-2">
    $99/month
  </Text>
  <Button variant="primary" className="mt-6">
    Choose Plan
  </Button>
</Card>

// Status card
<Card hover>
  <div className="flex items-center justify-between">
    <div>
      <Heading level={3} className="mb-1">Invoice #1234</Heading>
      <Text color="secondary">$5,000.00</Text>
    </div>
    <Badge variant="success">Approved</Badge>
  </div>
</Card>
```

### Typography Hierarchy
```tsx
<div className="space-y-6">
  <Heading level={1}>Main Page Title</Heading>
  <Text size="lg" color="secondary">
    Lead paragraph with important information
  </Text>
  
  <div className="space-y-4">
    <Heading level={2}>Section Title</Heading>
    <Text>Regular body text with good readability.</Text>
    <Text size="sm" color="muted">
      Helper text or additional notes
    </Text>
  </div>
</div>
```

### Status Indicators
```tsx
// Application status
<div className="flex items-center space-x-2">
  <Badge variant="success">
    <Check className="w-3 h-3 mr-1" />
    Approved
  </Badge>
  <Text size="sm" color="muted">2 hours ago</Text>
</div>

// Invoice status
<div className="space-y-2">
  <Badge variant="warning">Pending Review</Badge>
  <Badge variant="blue">In Progress</Badge>
  <Badge variant="error">Rejected</Badge>
</div>
```

---

## Responsive Patterns

### Mobile-First Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards stack on mobile, 2 cols on tablet, 3 on desktop */}
</div>
```

### Responsive Text
```tsx
<Heading level={1} className="text-3xl md:text-4xl lg:text-5xl">
  Responsive Heading
</Heading>
```

### Mobile Navigation
```tsx
// Sticky mobile CTA
<div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden">
  <Button variant="primary" fullWidth size="lg">
    Get Started
  </Button>
</div>
```

---

## Accessibility Notes

### Focus Management
All interactive components include proper focus states:
```tsx
<Button variant="primary">
  {/* Includes focus:ring-2 focus:ring-blue-500 */}
  Accessible Button
</Button>
```

### Semantic Structure
```tsx
<Section as="main">
  <Heading level={1}>Page Title</Heading>
  <Section as="section">
    <Heading level={2}>Section Title</Heading>
    {/* Content */}
  </Section>
</Section>
```

### Screen Reader Support
```tsx
<Button aria-label="Close modal">
  <X className="w-4 h-4" />
</Button>

<Badge variant="success" aria-label="Application approved">
  ✓ Approved
</Badge>
```

---

## Performance Tips

### Component Loading
```tsx
// Import only what you need
import { Button } from '@/components/ui/custom/Button'

// Or use the index for multiple components
import { Button, Card, Section } from '@/components/ui/custom'
```

### Image Optimization
```tsx
<Card hover>
  <Image
    src="/images/feature.jpg"
    alt="Feature description"
    width={400}
    height={300}
    className="rounded-lg"
  />
</Card>
```

---

## Animation Guidelines

### Hover Effects
```tsx
// Cards with hover animation
<Card hover className="transition-all duration-200">
  {/* Content */}
</Card>

// Buttons with scale effect
<Button variant="primary" className="hover:scale-105">
  Interactive Button
</Button>
```

### Loading States
```tsx
// Skeleton loader
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
</div>

// Spinner
<Button isLoading>
  {/* Shows spinner + "Loading..." */}
  Submit
</Button>
```

---

## Testing Components

### Component Testing
```tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/custom'

test('button renders with correct variant', () => {
  render(<Button variant="primary">Click me</Button>)
  expect(screen.getByRole('button')).toHaveClass('bg-blue-600')
})
```

### Component Reference
See `/docs/design-system.md` for:
- Complete component examples
- Design patterns and best practices
- Color palette and typography guidelines
- Accessibility requirements

---

## Migration Guide

### From Standard HTML
```tsx
// Before
<button className="bg-blue-600 text-white px-4 py-2 rounded">
  Click me
</button>

// After
<Button variant="primary">
  Click me
</Button>
```

### From Other UI Libraries
```tsx
// Most UI library patterns map directly
<Button variant="primary" size="lg" fullWidth>
  {/* Standardized props across components */}
</Button>
```

---

## Best Practices

### ✅ Do
- Use semantic HTML structure
- Follow the responsive patterns
- Test on mobile devices
- Use proper focus management
- Include alt text for images

### ❌ Don't
- Override component styles with !important
- Use arbitrary colors outside the palette
- Skip accessibility attributes
- Create custom components for standard patterns
- Ignore loading states

---

## Support

- Design System: `/docs/design-system.md`
- Guidelines: `/docs/DESIGN_GUIDELINES.md`
- Component Source: `/components/ui/custom/`
- Examples: This file

For questions or improvements, refer to the design guidelines or create new components following the established patterns.