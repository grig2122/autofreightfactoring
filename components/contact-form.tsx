'use client'

import { useState } from 'react'
import { Send, User, Mail, Phone, Building2, MessageSquare, CheckCircle } from 'lucide-react'
import { trackFormSubmission, trackEvent } from '@/lib/analytics'
import { EnhancedInput } from '@/components/ui/enhanced-input'
import { FormGroup } from '@/components/ui/form-group'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Track form submission attempt
    trackEvent('contact_form_start', {
      subject: formData.subject || 'general'
    })

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Track successful submission
      trackFormSubmission('contact', true, {
        subject: formData.subject || 'general',
        has_phone: !!formData.phone,
        has_company: !!formData.company,
        message_length: formData.message.length
      })
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      // Track failed submission
      trackFormSubmission('contact', false, {
        error_message: error instanceof Error ? error.message : 'Unknown error'
      })
      
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormGroup title="Contact Information" variant="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Your Name *
              </Label>
              <EnhancedInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                icon={User}
                iconBgClassName="bg-gray-100"
                iconClassName="text-gray-600"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </Label>
              <EnhancedInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                icon={Mail}
                iconBgClassName="bg-blue-100"
                iconClassName="text-blue-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <EnhancedInput
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                icon={Phone}
                iconBgClassName="bg-blue-100"
                iconClassName="text-blue-600"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company Name
              </Label>
              <EnhancedInput
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="ABC Trucking LLC"
                icon={Building2}
                iconBgClassName="bg-gray-100"
                iconClassName="text-gray-600"
              />
            </div>
          </div>
        </FormGroup>

        <FormGroup title="Your Message" variant="primary">
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
              Subject
            </Label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="application">Application Help</option>
              <option value="rates">Rates & Pricing</option>
              <option value="technical">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message *
            </Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
              placeholder="Tell us how we can help..."
            />
          </div>
        </FormGroup>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="font-medium">Thank you for your message! We'll get back to you within 1-2 business days.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-xl">
            <p className="font-medium">Something went wrong. Please try again or call us directly at (619) 877-6746.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            Send Message
            <Send className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  </div>
  )
}