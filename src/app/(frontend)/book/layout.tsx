import type { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Κλείστε Ραντεβού',
  description:
    'Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση. Επαγγελματικές βαφές χώρων, ελαιοχρωματισμός και ανακαίνιση. Άμεση ανταπόκριση.',
  alternates: { canonical: `${siteConfig.url}/book` },
  openGraph: {
    title: 'Κλείστε Ραντεβού | Σπούδας',
    description:
      'Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση. Επαγγελματικές βαφές χώρων.',
    url: `${siteConfig.url}/book`,
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children
}
