'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { GrNext, GrPrevious } from 'react-icons/gr'

interface LightboxProps {
  images: { img: string; altText?: string }[]
  index: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ images, index, onClose, onNext, onPrev }: LightboxProps) {
  const [visible, setVisible] = useState(false)
  const [slideDir, setSlideDir] = useState<'left' | 'right' | null>(null)
  const [displayIndex, setDisplayIndex] = useState(index)
  const [animating, setAnimating] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Open animation + lock scroll
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10)

    // Lock native scroll & hide scrollbar
    document.body.style.overflow = 'hidden'
    document.documentElement.style.scrollbarWidth = 'none'

    // Stop Lenis
    const lenis = (window as any).__lenis
    lenis?.stop()

    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
      document.documentElement.style.scrollbarWidth = ''
      lenis?.start()
    }
  }, [])

  useEffect(() => {
    if (!animating) setDisplayIndex(index)
  }, [index])

  const handleClose = () => {
    setVisible(false)
    closeTimeoutRef.current = setTimeout(onClose, 350)
  }

  useEffect(
    () => () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    },
    [],
  )

  const navigate = (dir: 'left' | 'right', callback: () => void) => {
    if (animating) return
    setAnimating(true)
    setSlideDir(dir)

    setTimeout(() => {
      callback()
      setDisplayIndex(
        dir === 'right' ? (index + 1) % images.length : (index - 1 + images.length) % images.length,
      )
      setSlideDir(null)
      setAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
      if (e.key === 'ArrowRight') navigate('right', onNext)
      if (e.key === 'ArrowLeft') navigate('left', onPrev)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrev, animating, index])

  const image = images[displayIndex]

  const slideClass =
    slideDir === 'right'
      ? 'animate-slide-out-left'
      : slideDir === 'left'
        ? 'animate-slide-out-right'
        : 'animate-slide-in'

  return (
    <>
      <style>{`
        @keyframes backdropIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes backdropOut { from { opacity: 1 } to { opacity: 0 } }
        @keyframes scaleIn  { from { opacity: 0; transform: scale(0.92) } to { opacity: 1; transform: scale(1) } }
        @keyframes scaleOut { from { opacity: 1; transform: scale(1) }   to { opacity: 0; transform: scale(0.92) } }
        @keyframes slideOutLeft  { from { opacity:1; transform:translateX(0) }    to { opacity:0; transform:translateX(-60px) } }
        @keyframes slideOutRight { from { opacity:1; transform:translateX(0) }    to { opacity:0; transform:translateX(60px) } }
        @keyframes slideIn       { from { opacity:0; transform:scale(0.97) }      to { opacity:1; transform:scale(1) } }

        .lightbox-backdrop { animation: ${visible ? 'backdropIn' : 'backdropOut'} 350ms cubic-bezier(0.4,0,0.2,1) forwards; }
        .lightbox-content  { animation: ${visible ? 'scaleIn' : 'scaleOut'}    350ms cubic-bezier(0.4,0,0.2,1) forwards; }
        .animate-slide-out-left  { animation: slideOutLeft  280ms cubic-bezier(0.4,0,0.2,1) forwards; }
        .animate-slide-out-right { animation: slideOutRight 280ms cubic-bezier(0.4,0,0.2,1) forwards; }
        .animate-slide-in        { animation: slideIn       280ms cubic-bezier(0.4,0,0.2,1) forwards; }
      `}</style>

      <div
        className="lightbox-backdrop fixed inset-0 z-[110] bg-black/80 backdrop-blur-md flex flex-col items-center justify-center"
        onClick={handleClose}
      >
        {/* Close */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleClose()
          }}
          className="absolute z-[120] bg-red-600 hover:bg-red-700 rounded-sm w-9 h-9 flex items-center justify-center transition-all hover:scale-110 cursor-pointer top-6 right-8 text-white text-3xl leading-none"
        >
          ×
        </button>

        {/* Prev */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            navigate('left', onPrev)
          }}
          className="absolute z-[120] hover:bg-neutral-700 bg-neutral-600 hover:scale-105 transition-all rounded-full p-2 cursor-pointer left-6 text-white text-xl md:text-2xl"
        >
          <GrPrevious />
        </button>

        {/* Image — leaves 48px at bottom for dots */}
        <div
          className="lightbox-content relative w-full max-w-6xl px-20"
          style={{ height: 'calc(90vh - 48px)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div key={displayIndex} className={`w-full h-full ${slideClass}`}>
            <Image
              src={image.img}
              alt={image.altText ?? ''}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Dots — always 48px below image */}
        <div className="flex gap-2 mt-4 z-[120]" onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-300 ${
                i === displayIndex ? 'w-4 h-2 bg-white' : 'w-2 h-2 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            navigate('right', onNext)
          }}
          className="absolute z-[120] hover:bg-neutral-700 bg-neutral-600 hover:scale-105 transition-all rounded-full p-2 cursor-pointer right-6 text-white text-xl md:text-2xl"
        >
          <GrNext />
        </button>
      </div>
    </>
  )
}
