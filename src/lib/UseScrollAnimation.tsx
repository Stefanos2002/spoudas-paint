'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and a boolean `isVisible`.
 * The element animates in when it enters the viewport and resets when it leaves,
 * so animations replay both on scroll-down AND scroll-up.
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
