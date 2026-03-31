'use client'
import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.3,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <main
      ref={ref}
      className={`flex justify-center items-center w-full shadow-[0_-8px_20px_rgba(0,0,0,0.08)]
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <div className="p-4 text-sm">
        © 2026 Spoudas Paint · Website by{' '}
        <a
          className="text-blue-500 hover:underline hover:text-blue-700 transition-colors duration-200"
          href="https://www.kaloulis.dev"
        >
          kaloulis.dev
        </a>
      </div>
    </main>
  )
}
