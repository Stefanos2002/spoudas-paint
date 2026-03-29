'use client'
import { useEffect } from 'react'

interface Props {
  selectors: string[]
  visibleClass: string
  threshold?: number
}

/**
 * Mounts an IntersectionObserver after hydration.
 * Renders nothing — purely a side-effect component.
 * Safe to use inside server components.
 */
export default function ScrollReveal({ selectors, visibleClass, threshold = 0.12 }: Props) {
  useEffect(() => {
    const query = selectors.map((s) => `.${s}`).join(', ')
    const els = document.querySelectorAll<HTMLElement>(query)

    if (!els.length) return

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add(visibleClass))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.target.classList.toggle(visibleClass, e.isIntersecting))
      },
      { threshold },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [selectors, visibleClass, threshold])

  return null
}
