// lib/getGallery.ts
import type { GalleryDoc } from './types'

interface GalleryResponse {
  docs: GalleryDoc[]
}

export async function getGallery(slug?: string): Promise<GalleryDoc[]> {
  const url = new URL(`${process.env.PAYLOAD_URL}/api/gallery?depth=1`)
  if (slug) url.searchParams.set('where[slug][equals]', slug)

  const res = await fetch(url.toString(), { next: { revalidate: 60 } })
  const data: GalleryResponse = await res.json()

  if (!data.docs?.length) return []

  return data.docs
}
