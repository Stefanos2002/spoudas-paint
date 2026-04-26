// lib/getGallery.ts
import { unstable_cache } from 'next/cache'
import type { GalleryDoc } from './types'

interface GalleryResponse {
  docs: GalleryDoc[]
}

export const getGallery = unstable_cache(
  async (slug?: string): Promise<GalleryDoc[]> => {
    const url = new URL(`${process.env.PAYLOAD_URL}/api/gallery?depth=1`)
    if (slug) url.searchParams.set('where[slug][equals]', slug)

    const res = await fetch(url.toString())
    const data: GalleryResponse = await res.json()

    if (!data.docs?.length) return []

    return data.docs
  },
  ['gallery'],
  { revalidate: 60, tags: ['gallery'] },
)
