# AutoFreightFactoring Design System

## Overview

This document outlines the design system and component library for AutoFreightFactoring. It serves as a reference for developers to maintain consistency across the application.

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Components](#components)
4. [Layout System](#layout-system)
5. [Icons](#icons)
6. [Best Practices](#best-practices)

## Color Palette

### Primary Colors

- **Primary Blue**: `#2563EB` - Main CTA color, used for primary buttons and key actions
- **Blue Hover**: `#1D4ED8` - Hover state for primary blue elements
- **Light Blue**: `#DBEAFE` - Background accents and highlights

### Status Colors

- **Success Green**: `#10B981` - Approvals, success messages, positive states
- **Error Red**: `#EF4444` - Errors, validation failures, critical alerts
- **Warning Amber**: `#F59E0B` - Warnings, pending states, caution messages

### Neutral Colors

- **Gray 900**: `#111827` - Primary text color
- **Gray 700**: `#374151` - Secondary text color
- **Gray 600**: `#4B5563` - Muted text color
- **Gray 400**: `#9CA3AF` - Disabled states
- **Gray 100**: `#F3F4F6` - Light backgrounds
- **Gray 50**: `#F9FAFB` - Very light backgrounds

## Typography

### Font Family

- **Primary**: System font stack for optimal performance
  ```css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  ```

### Type Scale

#### Headings

- **H1 Display**: `text-5xl lg:text-6xl font-extrabold` - Hero sections
- **H1**: `text-4xl font-bold` - Page titles
- **H2**: `text-3xl font-bold` - Section headers
- **H3**: `text-2xl font-bold` - Subsection headers
- **H4**: `text-xl font-semibold` - Card titles

#### Body Text

- **Lead**: `text-xl text-gray-600` - Introductory paragraphs
- **Body**: `text-base text-gray-700` - Regular content
- **Small**: `text-sm text-gray-600` - Supporting text
- **Muted**: `text-sm text-gray-500` - Less important information

### Text Utilities

```typescript
// Typography component usage
<Heading level={1}>Main Title</Heading>
<Lead>Introductory paragraph with larger text</Lead>
<Text>Regular body text for content</Text>
<Muted>Supporting or less important text</Muted>
```

## Components

### Buttons

#### Primary Button
```tsx
<Button variant="primary" size="md">
  Get Started
</Button>
```

**Variants:**
- `primary` - Blue background, white text
- `secondary` - White background, blue text
- `ghost` - Transparent background, blue text
- `danger` - Red background, white text

**Sizes:**
- `sm` - Small (padding: 8px 16px)
- `md` - Medium (padding: 12px 24px)
- `lg` - Large (padding: 16px 32px)

**States:**
- `isLoading` - Shows loading spinner
- `disabled` - Grayed out, non-interactive
- `fullWidth` - Takes full container width

### Cards

#### Basic Card
```tsx
<Card hover>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Brief description</CardDescription>
  </CardHeader>
  <CardContent>
    <Text>Card content goes here</Text>
  </CardContent>
  <CardFooter>
    <Button variant="primary" size="sm">Action</Button>
  </CardFooter>
</Card>
```

**Variants:**
- `default` - White background with subtle shadow
- `featured` - Blue border accent for emphasis
- `bordered` - Simple border without shadow

**Props:**
- `hover` - Adds hover effects (shadow, slight lift)
- `padding` - `sm`, `md`, `lg` for different padding sizes

### Badges

```tsx
<Badge variant="success" size="md">
  <Check className="w-3 h-3 mr-1" />
  Approved
</Badge>
```

**Variants:**
- `success` - Green background
- `warning` - Yellow background
- `error` - Red background
- `blue` - Blue background
- `default` - Gray background

**Sizes:**
- `sm` - Small text and padding
- `md` - Medium (default)
- `lg` - Large text and padding

### Form Components

#### Input Fields
```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input 
    id="email"
    type="email"
    placeholder="john@example.com"
    required
  />
</div>
```

#### Select Dropdowns
```tsx
<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Choose an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

## Layout System

### Section Component

```tsx
<Section size="lg" background="gray">
  <Container>
    {/* Content */}
  </Container>
</Section>
```

**Sizes:**
- `sm` - `py-12`
- `md` - `py-16`
- `lg` - `py-24`

**Backgrounds:**
- `white` - White background
- `gray` - Gray-50 background
- `dark` - Gray-900 background with white text

### Container

The container component provides consistent max-width and padding:

```tsx
<Container>
  {/* Centered content with responsive padding */}
</Container>
```

- Max width: `1280px`
- Padding: `16px` on mobile, `24px` on desktop

### Grid System

```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Grid items */}
</div>

// Feature grid
<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {/* Feature cards */}
</div>
```

## Icons

We use Lucide React icons throughout the application:

```tsx
import { Truck, Shield, Clock, Check, ChevronRight } from 'lucide-react'

// Usage
<Truck className="h-6 w-6 text-blue-600" />
```

Common icon sizes:
- Small: `h-4 w-4`
- Medium: `h-6 w-6`
- Large: `h-8 w-8`

## Best Practices

### 1. Consistency

- Always use design system colors from the palette
- Maintain consistent spacing using Tailwind's spacing scale
- Use the same border radius across similar components (`rounded-lg` for cards, `rounded-full` for badges)

### 2. Accessibility

- Ensure color contrast ratios meet WCAG AA standards
- Always include hover and focus states
- Use semantic HTML elements
- Provide proper ARIA labels where needed

### 3. Responsive Design

- Mobile-first approach
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`)
- Test all components on various screen sizes

### 4. Performance

- Use Tailwind's purge feature in production
- Optimize images with Next.js Image component
- Lazy load heavy components when appropriate

### 5. Component Usage

```tsx
// Good - Using design system components
import { Button } from '@/components/ui/custom/Button'
import { Card, CardHeader, CardTitle } from '@/components/ui/custom/Card'

// Avoid - Creating inline styles
<button style={{ backgroundColor: 'blue' }}>Click me</button>
```

### 6. Spacing Guidelines

- Use consistent spacing multipliers:
  - `space-y-2` for tight groupings
  - `space-y-4` for related content
  - `space-y-8` for section separations
  - `gap-8` for grid layouts

### 7. Animation and Transitions

- Use subtle transitions for better UX:
  ```tsx
  className="transition-all duration-300"
  className="transform hover:-translate-y-1"
  className="hover:shadow-2xl transition-shadow"
  ```

### 8. Dark Mode Considerations

While not currently implemented, the design system is structured to easily add dark mode support using Tailwind's dark mode classes.

## Component Examples

### Hero Section Pattern

```tsx
<section className="py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-indigo-800">
  <Container>
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="text-white">
        <Heading level={1} className="text-white">
          Hero Title
        </Heading>
        <Lead className="text-blue-100 mt-6">
          Supporting hero description
        </Lead>
        <div className="flex gap-4 mt-8">
          <Button variant="primary" size="lg">
            Primary CTA
          </Button>
          <Button variant="secondary" size="lg">
            Secondary CTA
          </Button>
        </div>
      </div>
      <div>
        {/* Hero image or component */}
      </div>
    </div>
  </Container>
</section>
```

### Feature Card Pattern

```tsx
<Card hover className="text-center">
  <CardContent>
    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Truck className="w-8 h-8 text-blue-600" />
    </div>
    <Heading level={3} className="mb-2">
      Feature Title
    </Heading>
    <Text color="secondary">
      Feature description that explains the benefit
    </Text>
  </CardContent>
</Card>
```

### Form Section Pattern

```tsx
<Card>
  <CardHeader>
    <CardTitle>Form Title</CardTitle>
    <CardDescription>
      Brief description of what the form does
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    {/* Form fields */}
  </CardContent>
  <CardFooter>
    <Button variant="primary" fullWidth>
      Submit
    </Button>
  </CardFooter>
</Card>
```

## Updating the Design System

When adding new components or patterns:

1. Ensure they follow existing conventions
2. Document them in this file
3. Create reusable components in `/components/ui/custom/`
4. Add usage examples
5. Test across different screen sizes and states

Remember: The design system is a living document. Update it as the product evolves to maintain consistency and help new team members understand the visual language of AutoFreightFactoring.