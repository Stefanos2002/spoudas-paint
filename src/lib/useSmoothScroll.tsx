// lib/useSmoothScroll.tsx
'use client'
import { useCallback } from 'react'
import { getLenis } from './lenis'

export const useSmoothScroll = () => {
  // scroll to a section by id safely
  const scrollTo = useCallback((id: string) => {
    const section = document.getElementById(id)
    if (!section) return
    const lenis = getLenis()
    if (!lenis) return
    lenis.scrollTo(section.offsetTop)
  }, [])

  return { scrollTo }
}
