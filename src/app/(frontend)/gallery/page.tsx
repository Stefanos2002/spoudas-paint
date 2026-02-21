import { getGallery } from '@/lib/getGallery'
import { mapGalleryImages } from '@/lib/mapGalleryItems'
import GalleryClient from '../components/Lightbox/GalleryClient'

export default async function Gallery() {
  const docs = await getGallery()

  const images = docs.flatMap((doc) => doc.images)
  // Map Payload data to Masonry format
  const masonryItems = mapGalleryImages(images)

  return (
    <div className="flex flex-col p-4 min-h-[415vh]">
      <GalleryClient items={masonryItems} />
    </div>
  )
}
