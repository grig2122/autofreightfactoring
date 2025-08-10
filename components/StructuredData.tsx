export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "AutoFreightFactoring",
    "alternateName": "Auto Freight Factoring",
    "url": "https://autofreightfactoring.com",
    "logo": "https://autofreightfactoring.com/icon.png",
    "description": "Fast invoice factoring for truckers. Get paid in 1-2 business days with no-contract factoring for owner-operators and small fleets.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "telephone": "(619) 877-6746",
    "email": "support@autofreightfactoring.com",
    "areaServed": "United States",
    "priceRange": "Competitive factoring rates",
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [],
    "knowsAbout": [
      "Invoice Factoring",
      "Freight Factoring",
      "Transportation Factoring",
      "Fast Funding",
      "Trucking Industry",
      "Cash Flow Management"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Factoring Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fast Invoice Factoring",
            "description": "Competitive advance rates on your invoices. Get paid in 1-2 business days."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "100"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}