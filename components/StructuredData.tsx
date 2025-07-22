export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "AutoFreightFactoring",
    "alternateName": "Auto Freight Factoring",
    "url": "https://autofreightfactoring.com",
    "logo": "https://autofreightfactoring.com/icon.png",
    "description": "Same-day invoice factoring for truckers. Get paid today with no-contract factoring for owner-operators and small fleets.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "telephone": "(619) 877-6746",
    "email": "support@autofreightfactoring.com",
    "areaServed": "United States",
    "priceRange": "1.5% factoring fee",
    "openingHours": "Mo-Fr 08:00-18:00",
    "sameAs": [],
    "knowsAbout": [
      "Invoice Factoring",
      "Freight Factoring",
      "Transportation Factoring",
      "Same-Day Funding",
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
            "name": "Same-Day Invoice Factoring",
            "description": "100% advance on your invoices minus 1.5% fee. Get paid the same day."
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