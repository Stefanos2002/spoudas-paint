'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450) // ρύθμισε το offset
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Link
      href="#"
      className={`
        fixed bottom-6 right-6 z-50
        rounded-full bg-blue-950 px-6 py-4 text-white font-semibold shadow-xl
        transition-all duration-300 hover:bg-slate-600
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      Κλείστε ραντεβού
    </Link>
  )
}
