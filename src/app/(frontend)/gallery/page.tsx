export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Τα Έργα μας',
  description:
    'Δείτε τα έργα ελαιοχρωματισμού και ανακαίνισης που έχουμε ολοκληρώσει. Επαγγελματικές βαφές εσωτερικών και εξωτερικών χώρων.',
  alternates: { canonical: `${siteConfig.url}/gallery` },
  openGraph: {
    title: 'Τα Έργα μας | Σπουδάς',
    description:
      'Δείτε τα έργα ελαιοχρωματισμού και ανακαίνισης που έχουμε ολοκληρώσει.',
    url: `${siteConfig.url}/gallery`,
    type: 'website',
  },
}

import { getGallery } from '@/lib/getGallery'
import { mapGalleryImages } from '@/lib/mapGalleryItems'
import GalleryClient from '../components/Lightbox/GalleryClient'

export default async function Gallery() {
  const docs = await getGallery()

  const images = docs.flatMap((doc) => doc.images)
  const masonryItems = mapGalleryImages(images)

  return (
    <div className="flex flex-col p-4">
      <GalleryClient items={masonryItems} />
    </div>
  )
}
