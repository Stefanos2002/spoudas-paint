export const revalidate = 60

import type { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: 'website',
  },
}

import React, { Suspense } from 'react'
import Banner from './components/Banner/Banner'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import { ScrollOnArrival } from '@/lib/ScrollOnArrival'

export default async function HomePage() {
  return (
    <>
      <Suspense>
        <ScrollOnArrival />
      </Suspense>
      <Banner />
      <Services />
      <Team />
    </>
  )
}
