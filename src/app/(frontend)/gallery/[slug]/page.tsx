export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'
import { getGallery } from '@/lib/getGallery'
import { mapGalleryImages } from '@/lib/mapGalleryItems'
import GalleryClient from '../../components/Lightbox/GalleryClient'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const docs = await getGallery(slug)
  const title = (docs[0] as { title?: string })?.title ?? slug
  const description = `Έργα ${title} — επαγγελματικός ελαιοχρωματισμός και ανακαίνιση χώρων.`

  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.url}/gallery/${slug}` },
    openGraph: {
      title: `${title} | Σπούδας`,
      description,
      url: `${siteConfig.url}/gallery/${slug}`,
      type: 'website',
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const docs = await getGallery(slug)
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
