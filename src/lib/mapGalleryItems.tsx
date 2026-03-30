import type { GalleryItem, MappedGalleryItem } from './types'
export function mapGalleryImages(images: GalleryItem[]): MappedGalleryItem[] {
  return images
    .map((item, index) => {
      const masonrySize = item.image.sizes?.masonry

      const src = masonrySize?.url || item.image.url
      const width = masonrySize?.width || item.image.width
      const height = masonrySize?.height || item.image.height

      if (!src || !width || !height) {
        console.warn('Gallery image missing dimensions:', item)
        return null
      }

      return {
        id: item.id ?? String(index),
        img: src,
        altText: item.image.alt ?? `Gallery image ${index + 1}`,
        width: width,
        height: item.height ?? height,
      }
    })
    .filter(Boolean) as MappedGalleryItem[]
}
