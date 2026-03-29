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
      href="/book"
      className={`
        fixed bottom-4 right-6 z-20
        cursor-pointer
  hover:translate-y-1.5
  border-b-9 border-slate-900
  text-[14px] sm:text-[15px] md:text-[16px]
  rounded-full transition-all duration-300
  bg-linear-to-b from-blue-900 via-blue-950 to-blue-950
  text-white
  py-3 px-4
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      Κλείστε ραντεβού
    </Link>
  )
}
