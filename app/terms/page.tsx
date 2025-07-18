import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Auto Freight Factoring',
  description: 'Terms of Service for Auto Freight Factoring. Read our terms and conditions for using our freight factoring services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using Auto Freight Factoring's services, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
          <p>
            Auto Freight Factoring provides freight invoice factoring services to qualified trucking companies, owner-operators, and freight brokers. Our services include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Same-day funding on approved invoices</li>
            <li>No credit check factoring options</li>
            <li>Online account management</li>
            <li>Collection services</li>
            <li>Credit checks on brokers and shippers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Eligibility Requirements</h2>
          <p>To use our services, you must:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Be at least 18 years of age</li>
            <li>Have a valid MC or DOT number</li>
            <li>Operate a legitimate trucking or freight business</li>
            <li>Provide accurate and complete information</li>
            <li>Have the legal authority to enter into this agreement</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Account Registration</h2>
          <p>
            To access our factoring services, you must create an account and provide certain information about yourself and your business. You agree to:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Keep your password secure and confidential</li>
            <li>Notify us immediately of any unauthorized use</li>
            <li>Be responsible for all activities under your account</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Factoring Agreement</h2>
          <p>
            The specific terms of your factoring arrangement will be outlined in a separate Factoring Agreement, which includes:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Factoring rates and fees</li>
            <li>Advance rates</li>
            <li>Reserve requirements</li>
            <li>Recourse or non-recourse terms</li>
            <li>Invoice submission procedures</li>
            <li>Payment terms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Invoice Submission and Verification</h2>
          <p>When submitting invoices for factoring, you represent and warrant that:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>All invoices are valid and accurate</li>
            <li>Services have been completed as described</li>
            <li>You have the right to assign the invoices</li>
            <li>Invoices are free from liens and encumbrances</li>
            <li>No other party has a claim to the invoices</li>
            <li>All documentation provided is authentic</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Fees and Payment Terms</h2>
          <p>
            You agree to pay all fees associated with our services as outlined in your Factoring Agreement, including:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Factoring fees (discount rates)</li>
            <li>ACH or wire transfer fees</li>
            <li>Credit check fees</li>
            <li>Monthly minimum fees (if applicable)</li>
            <li>Collection fees (if applicable)</li>
            <li>Any other agreed-upon fees</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Prohibited Uses</h2>
          <p>You may not use our services to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Submit fraudulent or fictitious invoices</li>
            <li>Violate any laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Transmit harmful code or malware</li>
            <li>Attempt to gain unauthorized access</li>
            <li>Interfere with service operations</li>
            <li>Engage in money laundering or illegal activities</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
          <p>
            All content on our website and platform, including text, graphics, logos, and software, is the property of Auto Freight Factoring or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, AUTO FREIGHT FACTORING SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Auto Freight Factoring, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising from your use of our services or violation of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
          <p>
            We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use our services will cease immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Dispute Resolution</h2>
          <p>
            Any disputes arising from these Terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in [Your State], and judgment on the award may be entered in any court having jurisdiction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Your State], without regard to its conflict of law principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date." Your continued use of our services after any modifications indicates your acceptance of the updated Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">16. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">17. Entire Agreement</h2>
          <p>
            These Terms, together with your Factoring Agreement and our Privacy Policy, constitute the entire agreement between you and Auto Freight Factoring regarding the use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">18. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>Auto Freight Factoring</strong></p>
            <p>Email: legal@autofreightfactoring.com</p>
            <p>Phone: 1-800-XXX-XXXX</p>
            <p>Address: [Your Business Address]</p>
          </div>
        </section>
      </div>
    </div>
  )
}