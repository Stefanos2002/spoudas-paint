'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) {
      setVisible(true)
      return
    }
    const handleScroll = () => {
      setVisible(window.scrollY > 450)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHome])

  return (
    <Link
      href="/rantevou"
      className={`
        fixed bottom-6 right-6 z-50
        rounded-full bg-blue-950 px-6 py-4 transition-all text-white font-semibold shadow-xl
        hover:bg-blue-800
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      Κλείστε ραντεβού
    </Link>
  )
}
