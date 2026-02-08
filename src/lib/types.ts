// lib/types.ts
export interface GalleryDoc {
  id: number
  images: GalleryItem[]
}

export interface GalleryItem {
  id?: string
  height?: number
  image: {
    id: number
    title: string
    description: string
    url: string
    alt: string
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
