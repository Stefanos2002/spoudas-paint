import Masonry from '../components/Masonry/Masonry'
import { getGallery } from '@/lib/getGallery'
import { mapGalleryImages } from '@/lib/mapGalleryItems'
import Sort from '../components/Sort/Sort'

export default async function Gallery() {
  // Fetch galleries from Payload CMS
  const docs = await getGallery()
  //get the images
  const images = docs.flatMap((doc) => doc.images)
  // Map Payload data to Masonry format
  const masonryItems = mapGalleryImages(images)

  return (
    <div className="flex flex-col p-4">
      <Sort />
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
    </div>
  )
}
