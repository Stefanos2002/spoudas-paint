import { getPayload } from 'payload'
import config from '@/payload.config'
import React, { Suspense } from 'react'
import Banner from './components/Banner/Banner'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import { ScrollOnArrival } from '@/lib/ScrollOnArrival'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Τραβάμε τις υπηρεσίες από τη βάση (Neon)
  // const services = await payload.find({
  //   collection: 'services',
  // })

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
