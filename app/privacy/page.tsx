import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Auto Freight Factoring',
  description: 'Privacy Policy for Auto Freight Factoring. Learn how we collect, use, and protect your personal and business information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Auto Freight Factoring ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our freight factoring services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
          <p>We may collect personal information that you provide to us, including but not limited to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Name and contact information (email, phone number, address)</li>
            <li>Business information (company name, MC number, DOT number, EIN)</li>
            <li>Financial information (bank account details, tax documents)</li>
            <li>Driver's license and CDL information</li>
            <li>Invoice and load documentation</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>IP address and browser type</li>
            <li>Device information</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website addresses</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Process your freight factoring applications and transactions</li>
            <li>Verify your identity and business credentials</li>
            <li>Communicate with you about your account and our services</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Improve our services and customer experience</li>
            <li>Protect against fraud and unauthorized transactions</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business</li>
            <li><strong>Financial Partners:</strong> Banks and financial institutions involved in processing transactions</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>Your Consent:</strong> With your explicit permission</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure data storage with access controls</li>
            <li>Regular security assessments and updates</li>
            <li>Employee training on data protection</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Access and request a copy of your personal information</li>
            <li>Update or correct inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Restrict or object to certain processing of your information</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided below.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. For more information, please see our Cookie Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>Auto Freight Factoring</strong></p>
            <p>Email: privacy@autofreightfactoring.com</p>
            <p>Phone: 1-800-XXX-XXXX</p>
            <p>Address: [Your Business Address]</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. State-Specific Rights</h2>
          <h3 className="text-xl font-semibold mb-3">California Residents</h3>
          <p>
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of personal information.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 mt-4">Other State Rights</h3>
          <p>
            Residents of other states may have additional privacy rights. Please contact us for more information about your specific rights.
          </p>
        </section>
      </div>
    </div>
  )
}