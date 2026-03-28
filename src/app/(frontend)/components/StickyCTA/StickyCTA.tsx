'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'
  const isBooking = pathname === '/rantevou'

  useEffect(() => {
    if (isBooking) {
      setVisible(false)
      return
    }
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
  }, [isHome, isBooking])

  return (
    <Link
      href="/rantevou"
      className={`
        fixed bottom-6 right-6 z-20
        rounded-full bg-neutral-500 px-5 text-[16px] border border-neutral-700 border-b-10 py-3 transition-all text-white shadow-xl
        hover:bg-neutral-700
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      Κλείστε ραντεβού
    </Link>
  )
}
