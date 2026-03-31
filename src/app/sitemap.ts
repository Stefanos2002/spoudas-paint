import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

interface GalleryDoc {
  slug: string
  updatedAt?: string
}

async function getGallerySlugs(): Promise<GalleryDoc[]> {
  try {
    const res = await fetch(
      `${process.env.PAYLOAD_URL}/api/gallery?depth=0&limit=100`,
      { next: { revalidate: 3600 } },
    )
    const data = await res.json()
    return data.docs ?? []
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/gallery`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/book`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const galleries = await getGallerySlugs()
  const galleryRoutes: MetadataRoute.Sitemap = galleries.map((doc) => ({
    url: `${base}/gallery/${doc.slug}`,
    lastModified: doc.updatedAt ? new Date(doc.updatedAt) : now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...galleryRoutes]
}
