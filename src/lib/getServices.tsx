// lib/getServices.ts
// import { unstable_cache } from 'next/cache'
// import type { ServicesDoc } from './types'

// interface ServicesResponse {
//   docs: ServicesDoc[]
// }

// export const getServices = unstable_cache(
//   async (): Promise<ServicesDoc[]> => {
//     const res = await fetch(`${process.env.PAYLOAD_URL}/api/services?depth=2`)
//     const data: ServicesResponse = await res.json()

//     if (!data.docs?.length) return []

//     return data.docs
//   },
//   ['services'],
//   { revalidate: 60, tags: ['services'] },
// )

import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { ServicesDoc } from './types'

const fetchServices = unstable_cache(
  async (): Promise<ServicesDoc[]> => {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'services', depth: 2 })
    return docs as unknown as ServicesDoc[]
  },
  ['services'],
  { revalidate: 60, tags: ['services'] },
)

export async function getServices(): Promise<ServicesDoc[]> {
  try {
    return await fetchServices()
  } catch (err) {
    console.error('[getServices] failed:', err)
    return []
  }
}
