'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface LightboxProps {
  images: {
    img: string
    altText?: string
  }[]
  index: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ images, index, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev])

  const image = images[index]

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute hover:text-neutral-400 cursor-pointer top-4 right-4 text-white text-4xl"
      >
        ×
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute hover:text-neutral-400 cursor-pointer left-4 text-white text-4xl"
      >
        ‹
      </button>

      {/* Image */}
      <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
        <Image src={image.img} alt={image.altText ?? ''} fill className="object-contain" priority />
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute hover:text-neutral-400 cursor-pointer right-4 text-white text-4xl"
      >
        ›
      </button>
    </div>
  )
}
