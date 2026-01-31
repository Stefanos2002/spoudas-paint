import Masonry from '../components/Masonry/Masonry'
import { getGallery } from '@/lib/getGallery'
import { mapGalleryImages } from '@/lib/mapGalleryItems'

export default async function Gallery() {
  // ✅ Fetch gallery images from Payload (server-side)
  const images = await getGallery()

  // ✅ Map Payload data to Masonry format
  const masonryItems = mapGalleryImages(images)

  return (
    <Masonry
      items={masonryItems}
      ease="power3.out"
      duration={0.6}
      stagger={0.05}
      animateFrom="bottom"
      scaleOnHover
      hoverScale={0.95}
      blurToFocus
      colorShiftOnHover={false}
    />
  )
}
