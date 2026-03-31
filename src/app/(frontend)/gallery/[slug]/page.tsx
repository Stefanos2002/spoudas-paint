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
  const description = `Έργα ${title} — επαγγελματικός ελαιοχρωματισμός και ανακαίνιση χώρων από τη Σπουδάς.`

  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.url}/gallery/${slug}` },
    openGraph: {
      title: `${title} | Σπουδάς`,
      description,
      url: `${siteConfig.url}/gallery/${slug}`,
      type: 'website',
    },
  }
}

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
