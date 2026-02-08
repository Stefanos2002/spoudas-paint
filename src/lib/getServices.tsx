// lib/getGallery.ts
import type { ServicesDoc } from './types'

interface GalleryResponse {
  docs: ServicesDoc[]
}

export async function getServices(): Promise<ServicesDoc[]> {
  const res = await fetch(`${process.env.PAYLOAD_URL}/api/services?depth=2`, {
    cache: 'no-store',
  })

  const data: GalleryResponse = await res.json()

  if (!data.docs?.length) return []

  // flatmap για να επιστρψει ολα τα galleries
  return data.docs
}
