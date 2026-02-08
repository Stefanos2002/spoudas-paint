// lib/getGallery.ts
import type { GalleryItem, GalleryDoc } from './types'

interface GalleryResponse {
  docs: GalleryDoc[]
}

export async function getGallery(): Promise<GalleryDoc[]> {
  const res = await fetch(`${process.env.PAYLOAD_URL}/api/gallery?depth=2`, {
    cache: 'no-store',
  })

  const data: GalleryResponse = await res.json()

  if (!data.docs?.length) return []

  // flatmap για να επιστρψει ολα τα galleries
  return data.docs
}
