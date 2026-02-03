// lib/types.ts
export interface GalleryItem {
  id?: string
  height?: number
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
}
