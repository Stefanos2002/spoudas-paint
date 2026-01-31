// lib/mapGalleryImages.ts

interface GalleryItem {
  id?: string
  image: {
    url: string
    alt?: string
    height?: number
    sizes?: {
      masonry?: {
        url: string
        width?: number
        height?: number
      }
    }
  }
  height?: number
}

interface MappedGalleryItem {
  id: string
  img: string
  altText: string
  height: number
}

export function mapGalleryImages(images: GalleryItem[]): MappedGalleryItem[] {
  return images
    .map((item, index) => {
      const imagePath = item.image.sizes?.masonry?.url || item.image.url || null // use null instead of empty string

      if (!imagePath) {
        console.warn('Gallery image missing URL:', item)
        return null // skip broken image
      }

      return {
        id: item.id ?? String(index),
        img: `${process.env.PAYLOAD_URL}${imagePath}`,
        altText: item.image.alt ?? `Gallery image ${index + 1}`,
        height: item.height ?? item.image.height ?? 500,
      }
    })
    .filter(Boolean) as MappedGalleryItem[]
}
