// lib/getGallery.ts
import type { GalleryItem } from './types'

interface GalleryResponse {
  docs: Array<{
    images: GalleryItem[]
  }>
}

export async function getGallery(): Promise<GalleryItem[]> {
  const res = await fetch(`${process.env.PAYLOAD_URL}/api/gallery?limit=1&depth=2`, {
    cache: 'no-store',
  })

  const data: GalleryResponse = await res.json()

  if (!data.docs?.length) return []

  return data.docs[0].images
}
