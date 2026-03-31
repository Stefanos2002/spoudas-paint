import { siteConfig } from '@/lib/seo'

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Σπουδάς Χρώμα & Διακόσμηση',
    alternateName: 'Spoudas Paint',
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,  // array → Google shows both numbers
    image: `${siteConfig.url}/images/Banner.jpg`,
    logo: `${siteConfig.url}/images/logo-splash.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Greece',
    },
    serviceType: [
      'Ελαιοχρωματισμός',
      'Ανακαίνιση χώρων',
      'Βαφή εξωτερικών χώρων',
      'Βαφή εσωτερικών χώρων',
      'Διακόσμηση',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Υπηρεσίες Χρωματισμού',
    },
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Bank Transfer',
    knowsLanguage: 'el',
    foundingDate: '1980', // TODO: update with real founding year
    sameAs: [], // TODO: add social media URLs e.g. Facebook, Instagram
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
