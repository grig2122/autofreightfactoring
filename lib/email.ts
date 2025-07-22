import { Resend } from 'resend'

// Initialize Resend with API key lazily
let resend: Resend | null = null

function getResendClient() {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

interface ApplicationEmailData {
  firstName: string
  lastName: string
  email: string
  phone: string
  companyName: string
  companyType: string
  dotNumber?: string
  monthlyInvoiceVolume: string
  yearsInBusiness: string
  currentFactoring: string
  isApproved: boolean
  score: number
  estimatedRate?: string
}

export async function sendApplicationNotification(data: ApplicationEmailData) {
  try {
    const subject = data.isApproved 
      ? `🎉 New Pre-Approved Application: ${data.companyName || 'Unknown Company'}`
      : `New Application: ${data.companyName || 'Unknown Company'}`

    const htmlContent = `
      <h2>New Freight Factoring Application</h2>
      
      <h3>Status: ${data.isApproved ? '✅ PRE-APPROVED' : '⏳ Needs Review'}</h3>
      <p><strong>Pre-Approval Score:</strong> ${data.score}/100</p>
      ${data.estimatedRate ? `<p><strong>Estimated Rate:</strong> ${data.estimatedRate}</p>` : ''}
      
      <hr />
      
      <h3>Contact Information</h3>
      <ul>
        <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
        <li><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></li>
        <li><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></li>
      </ul>
      
      <h3>Company Details</h3>
      <ul>
        <li><strong>Company:</strong> ${data.companyName || 'Not provided'}</li>
        <li><strong>Type:</strong> ${data.companyType || 'Not provided'}</li>
        ${data.dotNumber ? `<li><strong>DOT Number:</strong> ${data.dotNumber}</li>` : ''}
        <li><strong>Years in Business:</strong> ${data.yearsInBusiness || 'Not provided'}</li>
      </ul>
      
      <h3>Financial Information</h3>
      <ul>
        <li><strong>Monthly Invoice Volume:</strong> ${data.monthlyInvoiceVolume || 'Not provided'}</li>
        <li><strong>Currently Factoring:</strong> ${data.currentFactoring || 'Not provided'}</li>
      </ul>
      
      <hr />
      
      <p><small>This application was submitted on ${new Date().toLocaleString()}</small></p>
    `

    const result = await getResendClient().emails.send({
      from: 'AutoFreightFactoring <onboarding@resend.dev>',
      to: 'grigori@autofreightfactoring.com',
      subject,
      html: htmlContent,
    })

    console.log('Email sent successfully:', result)
    return result
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}