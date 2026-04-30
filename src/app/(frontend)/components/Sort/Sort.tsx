'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const categories = [
  { label: 'Όλες', href: '/gallery' },
  { label: 'Εσωτερικός χώρος', href: '/gallery/interior' },
  { label: 'Εξωτερικός χώρος', href: '/gallery/exterior' },
  { label: 'Τεχνοτροπίες', href: '/gallery/texnotropies' },
  { label: 'Ταράτσες', href: '/gallery/monosi-taratses' },
]

export default function Sort() {
  const pathname = usePathname()

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      {categories.map(({ label, href }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive
                ? 'bg-linear-to-r from-blue-600 to-blue-950 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]'
                : 'bg-white text-blue-950 border border-blue-200 hover:border-blue-400 hover:bg-blue-50'
            }`}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}
