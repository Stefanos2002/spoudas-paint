// app/page.tsx or a client component on the home page
'use client'
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { getLenis } from '@/lib/lenis'

export function ScrollOnArrival() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const target = searchParams.get('scrollTo')
    if (!target) return
    // wait for page to render
    setTimeout(() => {
      const section = document.getElementById(target)
      if (!section) return
      getLenis().scrollTo(section.offsetTop)
    }, 300)
  }, [searchParams])

  return null
}
