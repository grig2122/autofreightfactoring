'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/custom/Badge'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { 
  Truck, Shield, Clock, Check, ChevronRight, AlertCircle, 
  Info, CheckCircle, XCircle, Zap, DollarSign, TrendingUp,
  Phone, Mail, MapPin, Star, ArrowRight, Loader2, Users, Building2, X
} from 'lucide-react'

export default function DesignSystemClient() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">AutoFreightFactoring Design System</h1>
            <Badge variant="default">Development Only</Badge>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            <a href="#navigation" className="py-3 px-1 border-b-2 border-blue-500 text-blue-600 whitespace-nowrap">Navigation</a>
            <a href="#hero-patterns" className="py-3 px-1 border-b-2 border-transparent hover:text-gray-700 whitespace-nowrap">Hero</a>
            <a href="#colors" className="py-3 px-1 border-b-2 border-transparent hover:text-gray-700 whitespace-nowrap">Colors</a>
            <a href="#typography" className="py-3 px-1 border-b-2 border-transparent hover:text-gray-700 whitespace-nowrap">Typography</a>
            <a href="#buttons" className="py-3 px-1 border-b-2 border-transparent hover:text-gray-700 whitespace-nowrap">Buttons</a>
            <a href="#cards" className="py-3 px-1 border-b-2 border-transparent hover:text-gray-700 whitespace-nowrap">Cards</a>
            <a href="#forms" className="py-3 px-1 border-b-2 border-transparent hover:text-gray-700 whitespace-nowrap">Forms</a>
            <a href="#badges" className="py-3 px-1 border-b-2 border-transparent hover:text-gray-700 whitespace-nowrap">Badges</a>
            <a href="#alerts" className="py-3 px-1 border-b-2 border-transparent hover:text-gray-700 whitespace-nowrap">Alerts</a>
            <a href="#sections" className="py-3 px-1 border-b-2 border-transparent hover:text-gray-700 whitespace-nowrap">Sections</a>
            <a href="#pricing" className="py-3 px-1 border-b-2 border-transparent hover:text-gray-700 whitespace-nowrap">Pricing</a>
            <a href="#footer" className="py-3 px-1 border-b-2 border-transparent hover:text-gray-700 whitespace-nowrap">Footer</a>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Patterns Section */}
        <section id="navigation" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Navigation Patterns</h2>
          
          {/* Sticky Navigation Example */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="bg-gray-100 p-4">
              <p className="text-sm text-gray-600 mb-2">Sticky Navigation with Blur Effect</p>
            </div>
            <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-100">
              <div className="px-6">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 bg-blue-600 rounded-lg"></div>
                    <span className="text-xl font-bold text-gray-900">AutoFreightFactoring</span>
                  </div>
                  
                  <div className="hidden md:flex items-center space-x-1">
                    <a href="#" className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors group">
                      Features
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                    <a href="#" className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors group">
                      Pricing
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                    <a href="#" className="relative px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors group">
                      About
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                    <a href="#" className="ml-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md">
                      Get Pre-Approved
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Mobile Navigation Pattern */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-4">
              <p className="text-sm text-gray-600 mb-2">Mobile Navigation Menu</p>
            </div>
            <div className="p-4 bg-white border-t border-gray-100">
              <a href="#" className="block py-3 text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#" className="block py-3 text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#" className="block py-3 text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#" className="block mt-4 bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Pre-Approved
              </a>
            </div>
          </div>
        </section>

        {/* Hero Patterns Section */}
        <section id="hero-patterns" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Hero Section Patterns</h2>
          
          {/* Main Hero Pattern */}
          <div className="rounded-lg overflow-hidden mb-8">
            <div className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
              <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20" />
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20" />
              
              <div className="relative px-8">
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 mb-8">
                  <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                    <Shield className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Trusted by 1,000+ Truckers</span>
                  </div>
                </div>

                <h1 className="text-5xl font-extrabold text-white mb-6 max-w-3xl">
                  Get Your Invoices <span className="text-yellow-400">Funded Today</span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                  Stop waiting 30-90 days for payment. Get instant cash flow with our freight factoring service.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-yellow-400 hover:text-gray-900 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Get Your Quote
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm bg-white bg-opacity-10"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    (619) 877-6746
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Alternative Hero with Stats */}
          <div className="rounded-lg overflow-hidden">
            <div className="bg-gradient-to-br from-green-600 to-teal-700 text-white p-12">
              <div className="max-w-4xl">
                <Badge className="bg-white bg-opacity-20 text-white mb-6">
                  <Zap className="h-3 w-3 mr-1" />
                  Instant Approval
                </Badge>
                <h2 className="text-4xl font-bold mb-4">Simple Hero with Stats</h2>
                <p className="text-lg text-green-100 mb-8">
                  A cleaner hero pattern for secondary pages
                </p>
                
                <div className="grid grid-cols-3 gap-8 mt-12">
                  <div>
                    <div className="text-3xl font-bold">$50M+</div>
                    <p className="text-green-100 text-sm mt-1">Funded Monthly</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">4 hrs</div>
                    <p className="text-green-100 text-sm mt-1">Average to Payment</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <p className="text-green-100 text-sm mt-1">Approval Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient Backgrounds Section */}
        <section id="gradients" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Gradient Backgrounds & Decorative Elements</h2>
          
          {/* Gradient Examples */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-500 rounded-full blur-3xl opacity-20" />
                <div className="relative p-6 text-white">
                  <h3 className="font-semibold">Primary Hero Gradient</h3>
                  <p className="text-sm text-blue-100">from-blue-600 via-blue-700 to-indigo-800</p>
                  <p className="text-xs text-blue-200 mt-2">With blur circles and grid pattern</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-b from-gray-50 to-white">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.01]" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-10" />
                <div className="relative p-6">
                  <h3 className="font-semibold text-gray-900">Section Gradient</h3>
                  <p className="text-sm text-gray-600">from-gray-50 to-white</p>
                  <p className="text-xs text-gray-500 mt-2">Subtle gradient for sections</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-600 to-teal-700 p-6 text-white">
                <h3 className="font-semibold">Success Gradient</h3>
                <p className="text-sm text-green-100">from-green-600 to-teal-700</p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-50 to-green-50 p-6">
                <h3 className="font-semibold text-gray-900">Subtle Feature Gradient</h3>
                <p className="text-sm text-gray-600">from-blue-50 to-green-50</p>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Decorative Blur Circles</h3>
            <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute top-5 left-5 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-20" />
              <div className="absolute bottom-5 right-5 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600 text-sm">
                Blur circles add depth
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <code className="block text-sm bg-gray-100 p-2 rounded">
                w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20
              </code>
              <code className="block text-sm bg-gray-100 p-2 rounded">
                w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20
              </code>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section id="colors" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Color Palette</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Primary Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Primary</p>
                    <p className="text-sm text-gray-500">#2563EB</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-700 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Primary Hover</p>
                    <p className="text-sm text-gray-500">#1D4ED8</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Light Blue</p>
                    <p className="text-sm text-gray-500">#DBEAFE</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Status Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-500 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Success</p>
                    <p className="text-sm text-gray-500">#10B981</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-500 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Error</p>
                    <p className="text-sm text-gray-500">#EF4444</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Warning</p>
                    <p className="text-sm text-gray-500">#F59E0B</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Neutral Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Gray 900</p>
                    <p className="text-sm text-gray-500">#111827</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Gray 700</p>
                    <p className="text-sm text-gray-500">#374151</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg mr-3 border"></div>
                  <div>
                    <p className="font-medium">Gray 100</p>
                    <p className="text-sm text-gray-500">#F3F4F6</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Accent Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Purple</p>
                    <p className="text-sm text-gray-500">#9333EA</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Indigo</p>
                    <p className="text-sm text-gray-500">#4F46E5</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-lg mr-3"></div>
                  <div>
                    <p className="font-medium">Orange</p>
                    <p className="text-sm text-gray-500">#F97316</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section id="typography" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Typography</h2>
          
          <div className="bg-white rounded-lg p-8 space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-2">text-5xl lg:text-6xl font-extrabold</p>
              <h1 className="text-5xl lg:text-6xl font-extrabold">Display Heading</h1>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">text-4xl font-bold</p>
              <h1 className="text-4xl font-bold">Page Title (H1)</h1>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">text-3xl font-bold</p>
              <h2 className="text-3xl font-bold">Section Header (H2)</h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">text-2xl font-bold</p>
              <h3 className="text-2xl font-bold">Subsection Header (H3)</h3>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">text-xl font-semibold</p>
              <h4 className="text-xl font-semibold">Card Title (H4)</h4>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">text-xl text-gray-600</p>
              <p className="text-xl text-gray-600">Lead paragraph text for introductions</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">text-base text-gray-700</p>
              <p className="text-base text-gray-700">Regular body text for main content. This is the default text style used throughout the application for paragraphs and general content.</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">text-sm text-gray-600</p>
              <p className="text-sm text-gray-600">Supporting text and descriptions</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">text-sm text-gray-500</p>
              <p className="text-sm text-gray-500">Muted text for less important information</p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section id="buttons" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Buttons</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link Button</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Button States</h3>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button onClick={() => setIsLoading(!isLoading)} disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isLoading ? 'Loading...' : 'Click to Load'}
                </Button>
                <Button className="w-full max-w-xs">Full Width</Button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Button with Icons</h3>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </Button>
                <Button variant="secondary">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Homepage CTA Buttons</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Large Blue CTA with Arrow</p>
                  <a href="#" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    See How Much You'll Save
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </a>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">Hero Section Primary CTA (with yellow hover)</p>
                  <a href="#" className="group bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300 inline-flex items-center gap-2 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                    <span>Get Your Quote</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Hero Section Secondary CTA</p>
                  <a href="#" className="group border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg font-semibold backdrop-blur-sm bg-white bg-opacity-10 inline-flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    <span>(619) 877-6746</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section id="cards" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Cards</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Card</CardTitle>
                <CardDescription>This is a basic card with a description</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Card content goes here. This is where you put your main information.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Action</Button>
              </CardFooter>
            </Card>

            <Card className="border-blue-500 border-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Featured Card</CardTitle>
                  <Badge>Popular</Badge>
                </div>
                <CardDescription>This card has a blue border accent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Use this style to highlight important cards or featured content.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Icon Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Cards with icons help users quickly identify content types.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
                <CardDescription>Subtle gradient background</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Metric 1</span>
                    <span className="font-semibold">$5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Metric 2</span>
                    <span className="font-semibold">98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-full md:col-span-2">
              <CardHeader>
                <CardTitle>Wide Card</CardTitle>
                <CardDescription>This card spans multiple columns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Left Content</h4>
                    <p className="text-gray-600">Use wide cards for content that needs more horizontal space.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Right Content</h4>
                    <p className="text-gray-600">Perfect for comparison layouts or detailed information.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Forms Section */}
        <section id="forms" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Form Components</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Enhanced Form Design */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application Form</h3>
              <p className="text-gray-600 mb-6">Enhanced form with proper styling and visual hierarchy</p>
              
              <form className="space-y-6">
                {/* Contact Information Group */}
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    Contact Information
                  </h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
                    />
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      We'll never share your email with anyone else.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company Name
                    </Label>
                    <Input 
                      id="company" 
                      placeholder="ABC Trucking Inc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
                    />
                  </div>
                </div>

                {/* Financial Information Group */}
                <div className="bg-blue-50 rounded-xl p-6 space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-4 w-4 text-blue-600" />
                    </div>
                    Financial Details
                  </h4>

                  <div className="space-y-2">
                    <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
                      Invoice Amount
                    </Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-green-700" />
                      </div>
                      <Input 
                        id="amount" 
                        type="number" 
                        placeholder="5,000" 
                        className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                      Service Type
                    </Label>
                    <Select value={selectedValue} onValueChange={setSelectedValue}>
                      <SelectTrigger 
                        id="service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="factoring">Invoice Factoring</SelectItem>
                        <SelectItem value="fuel">Fuel Advances</SelectItem>
                        <SelectItem value="same-day">Same Day Funding</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button - Homepage Style */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg"
                  >
                    Submit Application
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Get approved in as little as 5 minutes
                  </p>
                </div>
              </form>
            </div>

            {/* Form States with Enhanced Styling */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Form States</h3>
              <p className="text-gray-600 mb-6">Various input states with enhanced visual feedback</p>
              
              <div className="space-y-6">
                {/* Valid State */}
                <div className="space-y-2">
                  <Label htmlFor="valid" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    Valid Input
                    <Badge className="bg-green-100 text-green-700">Success</Badge>
                  </Label>
                  <div className="relative">
                    <Input 
                      id="valid" 
                      defaultValue="Valid input" 
                      className="w-full px-4 py-3 border-2 border-green-500 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-green-50 pr-12"
                    />
                    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <Check className="h-3 w-3" />
                    Looks good!
                  </p>
                </div>

                {/* Error State */}
                <div className="space-y-2">
                  <Label htmlFor="error" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    Error State
                    <Badge variant="destructive">Error</Badge>
                  </Label>
                  <div className="relative">
                    <Input 
                      id="error" 
                      defaultValue="Invalid input" 
                      className="w-full px-4 py-3 border-2 border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-red-50 pr-12"
                    />
                    <XCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-600" />
                  </div>
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Please enter a valid value
                  </p>
                </div>

                {/* Focus State Example */}
                <div className="space-y-2">
                  <Label htmlFor="focus" className="text-sm font-medium text-gray-700">
                    Focus State (click to see)
                  </Label>
                  <Input 
                    id="focus" 
                    placeholder="Click me to see focus state"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
                  />
                  <p className="text-sm text-gray-500">Blue ring appears on focus</p>
                </div>

                {/* Disabled State */}
                <div className="space-y-2">
                  <Label htmlFor="disabled" className="text-sm font-medium text-gray-400">
                    Disabled Input
                  </Label>
                  <Input 
                    id="disabled" 
                    disabled 
                    placeholder="Cannot edit this field"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-100 cursor-not-allowed opacity-60"
                  />
                </div>

                {/* Loading State */}
                <div className="space-y-2">
                  <Label htmlFor="loading" className="text-sm font-medium text-gray-700">
                    Loading State
                  </Label>
                  <div className="relative">
                    <Input 
                      id="loading" 
                      placeholder="Processing..." 
                      disabled
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 pr-12"
                    />
                    <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 animate-spin text-blue-600" />
                  </div>
                  <p className="text-sm text-blue-600 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Validating your information...
                  </p>
                </div>

                {/* Input with Icon */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="(555) 123-4567"
                      className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
                    />
                  </div>
                </div>

                {/* Currency Input Example */}
                <div className="space-y-2">
                  <Label htmlFor="currency" className="text-sm font-medium text-gray-700">
                    Invoice Amount (Enhanced)
                  </Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-green-700" />
                    </div>
                    <Input 
                      id="currency" 
                      type="text" 
                      placeholder="5,000.00"
                      defaultValue="5,000.00"
                      className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400 font-semibold text-lg"
                    />
                  </div>
                  <p className="text-sm text-gray-500">Enhanced styling with larger text</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section id="badges" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Badges</h2>
          
          <div className="bg-white rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Default Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Status Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Approved
                  </Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Pending
                  </Badge>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                    <XCircle className="w-3 h-3 mr-1" />
                    Rejected
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    <Info className="w-3 h-3 mr-1" />
                    Processing
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Feature Badges</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    NEW
                  </Badge>
                  <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
                    POPULAR
                  </Badge>
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    HOT
                  </Badge>
                  <Badge className="animate-pulse bg-blue-600 text-white">
                    LIVE
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alerts Section */}
        <section id="alerts" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Alerts</h2>
          
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a default alert with neutral styling for general information.
              </AlertDescription>
            </Alert>

            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle>Success Alert</AlertTitle>
              <AlertDescription>
                Your application has been submitted successfully. We'll contact you within 24 hours.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertTitle>Warning Alert</AlertTitle>
              <AlertDescription>
                Your session will expire in 5 minutes. Please save your work.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Error Alert</AlertTitle>
              <AlertDescription>
                There was an error processing your request. Please try again later.
              </AlertDescription>
            </Alert>

            <Alert className="border-blue-200 bg-blue-50">
              <Zap className="h-4 w-4 text-blue-600" />
              <AlertTitle>Promotional Alert</AlertTitle>
              <AlertDescription>
                Limited time offer: Get 50% off your first month of factoring. No hidden fees!
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Section Patterns */}
        <section id="sections" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Section Patterns</h2>
          
          <div className="space-y-8">
            {/* Hero Pattern */}
            <div className="rounded-lg overflow-hidden">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Hero Section Pattern</h1>
                  <p className="text-xl text-blue-100 mb-8">
                    This is how hero sections should look with gradient backgrounds and centered content.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" variant="secondary">
                      Primary CTA
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                      Secondary CTA
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Grid Pattern */}
            <Card>
              <CardHeader>
                <CardTitle>Feature Grid Pattern</CardTitle>
                <CardDescription>3-column grid for features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Feature One</h3>
                    <p className="text-sm text-gray-600">Brief description of the feature</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Feature Two</h3>
                    <p className="text-sm text-gray-600">Brief description of the feature</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Feature Three</h3>
                    <p className="text-sm text-gray-600">Brief description of the feature</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Pattern */}
            <Card className="bg-blue-600 text-white">
              <CardContent className="py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-blue-100">Active Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">24hr</div>
                    <div className="text-blue-100">Average Funding</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-blue-100">Approval Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">A+</div>
                    <div className="text-blue-100">BBB Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Spacing Guide</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Spacing Scale</CardTitle>
              <CardDescription>Consistent spacing using Tailwind classes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center">
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded mr-4 w-32">space-y-2</code>
                  <div className="flex-1">
                    <div className="space-y-2">
                      <div className="h-8 bg-gray-200 rounded"></div>
                      <div className="h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <span className="ml-4 text-sm text-gray-500">8px - Within components</span>
                </div>

                <div className="flex items-center">
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded mr-4 w-32">space-y-4</code>
                  <div className="flex-1">
                    <div className="space-y-4">
                      <div className="h-8 bg-gray-200 rounded"></div>
                      <div className="h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <span className="ml-4 text-sm text-gray-500">16px - Related elements</span>
                </div>

                <div className="flex items-center">
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded mr-4 w-32">space-y-6</code>
                  <div className="flex-1">
                    <div className="space-y-6">
                      <div className="h-8 bg-gray-200 rounded"></div>
                      <div className="h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <span className="ml-4 text-sm text-gray-500">24px - Form fields</span>
                </div>

                <div className="flex items-center">
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded mr-4 w-32">space-y-8</code>
                  <div className="flex-1">
                    <div className="space-y-8">
                      <div className="h-8 bg-gray-200 rounded"></div>
                      <div className="h-8 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <span className="ml-4 text-sm text-gray-500">32px - Section content</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Icons Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Icon Library</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Lucide Icons</CardTitle>
              <CardDescription>Commonly used icons in the application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <Truck className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Truck</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <Shield className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Shield</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <Clock className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Clock</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <Check className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Check</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <DollarSign className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Dollar</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Trending</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <Phone className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Phone</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <Mail className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Mail</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <Star className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Star</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <Info className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Info</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <AlertCircle className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Alert</p>
                </div>
                <div className="text-center p-4 hover:bg-gray-50 rounded">
                  <ArrowRight className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs">Arrow</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Pricing Section Pattern */}
        <section id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Pricing Cards & Tables</h2>
          
          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Basic Plan */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <Truck className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600">Perfect for owner-operators</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-5xl font-bold">3%</span>
                  <span className="text-gray-600 ml-2">per invoice</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Same-day funding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No minimum volume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            {/* Popular Plan */}
            <Card className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 lg:-mt-4">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  <Zap className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <Users className="h-8 w-8 text-blue-300" />
                </div>
                <p className="text-blue-100">For growing fleets</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-5xl font-bold">2%</span>
                  <span className="text-blue-100 ml-2">per invoice</span>
                  <Badge className="bg-blue-500 bg-opacity-50 mt-2">Save $1,000+/month</Badge>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Everything in Starter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <span>Dedicated manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <span>24/7 phone support</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Start Free Trial</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <Building2 className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-600">Custom solutions</p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-5xl font-bold">1.5%</span>
                  <span className="text-gray-600 ml-2">per invoice</span>
                  <Badge variant="secondary" className="mt-2">Volume pricing</Badge>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">API integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">White-label options</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <Card>
            <CardHeader>
              <CardTitle>Feature Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Features</th>
                      <th className="text-center py-3 px-4">Starter</th>
                      <th className="text-center py-3 px-4">Professional</th>
                      <th className="text-center py-3 px-4">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Processing Time</td>
                      <td className="text-center text-gray-600">5-10 min</td>
                      <td className="text-center text-gray-600">5 min</td>
                      <td className="text-center text-gray-600">Priority</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Advance Rate</td>
                      <td className="text-center text-gray-600">92%</td>
                      <td className="text-center text-gray-600">95%</td>
                      <td className="text-center text-gray-600">97%+</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">API Access</td>
                      <td className="text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                      <td className="text-center"><X className="h-5 w-5 text-gray-400 mx-auto" /></td>
                      <td className="text-center"><Check className="h-5 w-5 text-green-600 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer Pattern */}
        <section id="footer" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Footer Pattern</h2>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
              <div className="px-8">
                <div className="grid lg:grid-cols-4 gap-8 mb-8">
                  {/* Brand Column */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="h-10 w-10 bg-blue-600 rounded-lg"></div>
                      <span className="text-xl font-bold">AutoFreightFactoring</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      The fastest invoice factoring service built for truckers.
                    </p>
                    <Badge className="bg-green-900 bg-opacity-50 text-green-400 mt-4">
                      <div className="h-2 w-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                      Live Support 24/7
                    </Badge>
                  </div>
                  
                  {/* Links Columns */}
                  <div>
                    <h4 className="font-semibold mb-4">Services</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                        <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        Invoice Factoring
                      </a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                        <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        Fuel Advances
                      </a></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Company</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                        <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        About Us
                      </a></li>
                      <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                        <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        Contact
                      </a></li>
                    </ul>
                  </div>
                  
                  {/* Contact Info */}
                  <div>
                    <h4 className="font-semibold mb-4">Get In Touch</h4>
                    <div className="space-y-3">
                      <a href="tel:+16198776746" className="flex items-center text-gray-400 hover:text-white transition-colors group">
                        <div className="h-10 w-10 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-opacity-100 transition-all">
                          <Phone className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="font-semibold">(619) 877-6746</p>
                          <p className="text-xs">24/7 Support</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-6">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">&copy; 2024 AutoFreightFactoring. All rights reserved.</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <Shield className="h-4 w-4" />
                      <span>Bank-Level Security</span>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </div>
  )
}