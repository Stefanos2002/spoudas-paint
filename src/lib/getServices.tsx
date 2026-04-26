// lib/getServices.ts
import { unstable_cache } from 'next/cache'
import type { ServicesDoc } from './types'

interface ServicesResponse {
  docs: ServicesDoc[]
}

export const getServices = unstable_cache(
  async (): Promise<ServicesDoc[]> => {
    const res = await fetch(`${process.env.PAYLOAD_URL}/api/services?depth=2`)
    const data: ServicesResponse = await res.json()

    if (!data.docs?.length) return []

    return data.docs
  },
  ['services'],
  { revalidate: 60, tags: ['services'] },
)
