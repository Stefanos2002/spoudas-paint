import { getPayload } from 'payload'
import config from '@/payload.config'
import React from 'react'
import Banner from './components/Banner/Banner'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Τραβάμε τις υπηρεσίες από τη βάση (Neon)
  // const services = await payload.find({
  //   collection: 'services',
  // })

  return <Banner />
}
