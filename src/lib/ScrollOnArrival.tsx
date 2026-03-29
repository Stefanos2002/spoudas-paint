'use client'
import { useEffect } from 'react'
import { getLenis } from '@/lib/lenis'

export function ScrollOnArrival() {
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTo')
    if (!target) return
    sessionStorage.removeItem('scrollTo')

    const tryScroll = (attempts = 0) => {
      const section = document.getElementById(target)
      const lenis = getLenis()

      if (section && lenis) {
        lenis.scrollTo(section, { offset: 0 })
      } else if (attempts < 20) {
        setTimeout(() => tryScroll(attempts + 1), 100)
      }
    }

    // Give the page a moment to paint first
    setTimeout(() => tryScroll(), 300)
  }, [])

  return null
}
