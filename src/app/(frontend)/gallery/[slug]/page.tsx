import { getGallery } from '@/lib/getGallery'
import { mapGalleryImages } from '@/lib/mapGalleryItems'
import GalleryClient from '../../components/Lightbox/GalleryClient'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const docs = await getGallery(slug)
  // console.log(docs)
  const images = docs.flatMap((doc) => doc.images)
  // Map Payload data to Masonry format
  const masonryItems = mapGalleryImages(images)
  return (
    <div className="flex flex-col p-4">
      <GalleryClient items={masonryItems} />
    </div>
  )
}
