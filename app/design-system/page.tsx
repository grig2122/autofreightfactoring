'use client'

import { Truck, Check, Star, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/custom/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/custom/Card'
import { Section, Container } from '@/components/ui/custom/Section'
import { Badge } from '@/components/ui/custom/Badge'
import { Heading, Text, Lead, Muted } from '@/components/ui/custom/Typography'

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Section size="md" background="gray">
        <div className="text-center">
          <Heading level={1} size="display">AutoFreightFactoring</Heading>
          <Lead className="mt-4 max-w-3xl mx-auto">
            Complete design system and component library following our brand guidelines
          </Lead>
        </div>
      </Section>

      {/* Typography Section */}
      <Section size="md">
        <Heading level={2} className="mb-8">Typography</Heading>
        <div className="space-y-6">
          <div>
            <Heading level={1}>H1 Heading - Primary Headlines</Heading>
            <Heading level={2} className="mt-4">H2 Heading - Section Titles</Heading>
            <Heading level={3} className="mt-4">H3 Heading - Subsections</Heading>
          </div>
          <div>
            <Lead>Lead paragraph text for introductory content and important descriptions.</Lead>
            <Text className="mt-4">
              Regular body text that maintains readability and follows our line-height guidelines. 
              Perfect for longer content sections and detailed explanations.
            </Text>
            <Muted className="mt-2">Muted text for less important information and helper text.</Muted>
          </div>
        </div>
      </Section>

      {/* Buttons Section */}
      <Section size="md" background="gray">
        <Heading level={2} className="mb-8">Buttons</Heading>
        <div className="space-y-8">
          <div>
            <Text className="mb-4" weight="semibold">Primary Buttons</Text>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="sm">Small Primary</Button>
              <Button variant="primary" size="md">Medium Primary</Button>
              <Button variant="primary" size="lg">Large Primary</Button>
              <Button variant="primary" isLoading>Loading...</Button>
            </div>
          </div>
          <div>
            <Text className="mb-4" weight="semibold">Secondary Buttons</Text>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" size="sm">Small Secondary</Button>
              <Button variant="secondary" size="md">Medium Secondary</Button>
              <Button variant="secondary" size="lg">Large Secondary</Button>
            </div>
          </div>
          <div>
            <Text className="mb-4" weight="semibold">Other Variants</Text>
            <div className="flex flex-wrap gap-4">
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="danger">Danger Button</Button>
              <Button fullWidth>Full Width Button</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Cards Section */}
      <Section size="md">
        <Heading level={2} className="mb-8">Cards</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Default Card */}
          <Card hover>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Standard card with hover effects</CardDescription>
            </CardHeader>
            <CardContent>
              <Text>This is the default card style with subtle shadows and hover interactions.</Text>
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="sm">Learn More</Button>
            </CardFooter>
          </Card>

          {/* Featured Card */}
          <Card variant="featured" padding="lg">
            <Badge variant="blue" className="absolute top-6 right-6">POPULAR</Badge>
            <CardHeader>
              <CardTitle>Featured Card</CardTitle>
              <CardDescription>Highlighted card with border accent</CardDescription>
            </CardHeader>
            <CardContent>
              <Text>Featured cards draw attention to important content with enhanced styling.</Text>
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="sm">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Bordered Card */}
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Bordered Card</CardTitle>
              <CardDescription>Simple card with border styling</CardDescription>
            </CardHeader>
            <CardContent>
              <Text>Clean bordered card for when you need definition without shadows.</Text>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Badges Section */}
      <Section size="md" background="gray">
        <Heading level={2} className="mb-8">Badges & Status</Heading>
        <div className="space-y-6">
          <div>
            <Text className="mb-4" weight="semibold">Status Badges</Text>
            <div className="flex flex-wrap gap-3">
              <Badge variant="success">
                <Check className="w-3 h-3 mr-1" />
                Approved
              </Badge>
              <Badge variant="warning">Pending Review</Badge>
              <Badge variant="error">Rejected</Badge>
              <Badge variant="blue">In Progress</Badge>
              <Badge variant="default">Default</Badge>
            </div>
          </div>
          <div>
            <Text className="mb-4" weight="semibold">Different Sizes</Text>
            <div className="flex flex-wrap items-center gap-3">
              <Badge size="sm" variant="success">Small</Badge>
              <Badge size="md" variant="success">Medium</Badge>
              <Badge size="lg" variant="success">Large</Badge>
            </div>
          </div>
        </div>
      </Section>

      {/* Feature Cards Demo */}
      <Section size="lg">
        <div className="text-center mb-12">
          <Heading level={2}>Why Choose AutoFreightFactoring?</Heading>
          <Lead className="mt-4">Real benefits that matter to your business</Lead>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover className="text-center">
            <CardContent>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <Heading level={3} className="mb-2">Same-Day Funding</Heading>
              <Text color="secondary">Get paid within hours, not weeks. Upload your invoice and receive funds the same day.</Text>
            </CardContent>
          </Card>

          <Card hover className="text-center">
            <CardContent>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <Heading level={3} className="mb-2">Best Rates</Heading>
              <Text color="secondary">Competitive rates starting at 1.5%. No hidden fees, transparent pricing always.</Text>
            </CardContent>
          </Card>

          <Card hover className="text-center">
            <CardContent>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-amber-600" />
              </div>
              <Heading level={3} className="mb-2">24/7 Support</Heading>
              <Text color="secondary">Real people when you need help. Our team understands trucking and is here for you.</Text>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Color Palette Demo */}
      <Section size="md" background="gray">
        <Heading level={2} className="mb-8">Color Palette</Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <Text weight="semibold" className="mb-3">Primary Blue</Text>
            <div className="space-y-2">
              <div className="h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Text color="primary" className="text-white text-sm">#2563EB</Text>
              </div>
              <Text size="sm" color="muted">Main CTA color</Text>
            </div>
          </div>
          <div>
            <Text weight="semibold" className="mb-3">Success Green</Text>
            <div className="space-y-2">
              <div className="h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Text color="primary" className="text-white text-sm">#10B981</Text>
              </div>
              <Text size="sm" color="muted">Approvals, success</Text>
            </div>
          </div>
          <div>
            <Text weight="semibold" className="mb-3">Error Red</Text>
            <div className="space-y-2">
              <div className="h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <Text color="primary" className="text-white text-sm">#EF4444</Text>
              </div>
              <Text size="sm" color="muted">Errors, validation</Text>
            </div>
          </div>
          <div>
            <Text weight="semibold" className="mb-3">Warning Amber</Text>
            <div className="space-y-2">
              <div className="h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                <Text color="primary" className="text-white text-sm">#F59E0B</Text>
              </div>
              <Text size="sm" color="muted">Warnings, pending</Text>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section Demo */}
      <Section size="lg" background="dark">
        <div className="text-center">
          <Heading level={2} className="text-white mb-4">Ready to Get Started?</Heading>
          <Lead className="text-gray-300 mb-8">Join 1000+ truckers who get paid faster with AutoFreightFactoring</Lead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">Get Pre-Approved</Button>
            <Button variant="secondary" size="lg" className="bg-white" asChild>
              <a href="tel:+16198776746">
                <Phone className="w-4 h-4 mr-2" />
                Call (619) 877-6746
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}