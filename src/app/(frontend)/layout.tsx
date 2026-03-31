import React from 'react'
import './styles.css'
import Navbar from './components/Navbar/Navbar'
import { Manrope } from 'next/font/google'
import StickyCTA from './components/StickyCTA/StickyCTA'
import Footer from './components/Footer/Footer'
import { ClientWrapper } from './components/ClientWrapper/ClientWrapper'
import JsonLd from './components/JsonLd'
import { siteConfig } from '@/lib/seo'
import type { Metadata } from 'next'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'greek'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | Σπουδάς`,
  },
  description: siteConfig.description,
  keywords: [
    'ελαιοχρωματιστής',
    'βαφή χώρων',
    'ανακαίνιση',
    'χρωματισμός',
    'βαφή σπιτιού',
    'βαφή εξωτερικού',
    'βαφή εσωτερικού',
    'διακόσμηση χώρων',
    'μαστόρος βαφής',
    'Βάρδα',
    'Ηλείας',
  ],
  authors: [{ name: 'Σπουδάς' }],
  creator: 'Σπουδάς Χρώμα & Διακόσμηση',
  publisher: 'Σπουδάς',
  alternates: {
    canonical: siteConfig.url,
    languages: { 'el-GR': siteConfig.url },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: '/images/Banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Σπουδάς Χρώμα & Διακόσμηση',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/images/Banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Geo meta tags for local SEO
  other: {
    'geo.region': 'GR-I', // Attica — update if different region
    'geo.placename': siteConfig.address.city || 'Αθήνα',
    'geo.position': `${siteConfig.geo.lat};${siteConfig.geo.lng}`,
    ICBM: `${siteConfig.geo.lat}, ${siteConfig.geo.lng}`,
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="el">
      <head>
        <JsonLd />
      </head>
      <body className={`${manrope.variable} antialiased flex flex-col min-h-screen`}>
        <ClientWrapper>
          <Navbar />
          <StickyCTA />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  )
}
