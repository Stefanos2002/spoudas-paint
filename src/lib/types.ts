// lib/types.ts
export interface GalleryDoc {
  id: number
  images: GalleryItem[]
}
export interface ServicesDoc {
  id: number
  title: string
  slug: string
  description: string
  image: ServicesItem
}

export interface ServicesItem {
  id: number
  alt: string
  url: string
  height?: number
}

export interface GalleryItem {
  id?: string
  height?: number
  width?: number
  image: {
    id: number
    url: string
    alt: string
    height?: number
    width?: number
    sizes?: {
      masonry?: {
        url: string
        width?: number
        height?: number
      }
    }
  }
}

export interface MappedGalleryItem {
  id: string
  img: string
  altText: string
  width: number
  height: number
}
