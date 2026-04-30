export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Τα Έργα μας',
  description:
    'Δείτε τα έργα ελαιοχρωματισμού και ανακαίνισης που έχουμε ολοκληρώσει. Επαγγελματικές βαφές εσωτερικών και εξωτερικών χώρων.',
  alternates: { canonical: `${siteConfig.url}/gallery` },
  openGraph: {
    title: 'Τα Έργα μας | Σπούδας',
    description: 'Δείτε τα έργα ελαιοχρωματισμού και ανακαίνισης που έχουμε ολοκληρώσει.',
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
      <div className="text-center pt-20 pb-2">
        <h1 className="text-3xl font-bold text-blue-950 mb-2">Τα Εργα μας</h1>
        <p className="text-neutral-600 max-w-xl mx-auto">
          Επαγγελματικοί ελαιοχρωματισμοί εσωτερικών και εξωτερικών χώρων — δείτε μερικά από τα έργα
          που έχουμε ολοκληρώσει.
        </p>
      </div>
      <GalleryClient items={masonryItems} />
    </div>
  )
}
