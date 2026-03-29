'use client'
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  // Safe check for SSR
  const isClient = typeof window !== 'undefined'

  const get = () =>
    isClient
      ? (values[queries.findIndex((q) => window.matchMedia(q).matches)] ?? defaultValue)
      : defaultValue

  const [value, setValue] = useState<number>(get)

  useEffect(() => {
    if (!isClient) return

    const handler = () => setValue(get)
    const mqls = queries.map((q) => window.matchMedia(q))

    mqls.forEach((mql) => mql.addEventListener('change', handler))
    return () => mqls.forEach((mql) => mql.removeEventListener('change', handler))
  }, [queries])

  return value
}

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (!ref.current) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  return [ref, size] as const
}

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image()
          img.src = src
          img.onload = img.onerror = () => resolve()
        }),
    ),
  )
}

export interface Item {
  id: string
  img: string
  altText: string
  height: number
  onClick?: () => void
}

interface GridItem extends Item {
  x: number
  y: number
  w: number
  h: number
}

interface MasonryProps {
  items: Item[]
  ease?: string
  duration?: number
  stagger?: number
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random'
  scaleOnHover?: boolean
  hoverScale?: number
  blurToFocus?: boolean
  colorShiftOnHover?: boolean
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    ['(min-width:1600px)', '(min-width:1200px)', '(min-width:930px)', '(min-width:600px)'],
    [5, 4, 3, 2],
    1,
  )

  // used for footer adjustment
  const [containerHeight, setContainerHeight] = useState(0)

  const [containerRef, { width }] = useMeasure<HTMLDivElement>()
  const [imagesReady, setImagesReady] = useState(false)

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!containerRect) return { x: item.x, y: item.y }

    let direction = animateFrom
    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right']
      direction = dirs[Math.floor(Math.random() * dirs.length)] as typeof animateFrom
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 }
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 }
      case 'left':
        return { x: -200, y: item.y }
      case 'right':
        return { x: window.innerWidth + 200, y: item.y }
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        }
      default:
        return { x: item.x, y: item.y + 100 }
    }
  }

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true))
  }, [items])

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return []
    const colHeights = new Array(columns).fill(0)
    const gap = 16
    const totalGaps = (columns - 1) * gap
    const columnWidth = (width - totalGaps) / columns

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights))
      const x = col * (columnWidth + gap)
      const height = child.height / 2
      const y = colHeights[col]

      colHeights[col] += height + gap
      return { ...child, x, y, w: columnWidth, h: height }
    })
  }, [columns, items, width])

  // used for footer adjustment
  useEffect(() => {
    if (!grid.length) return
    const maxHeight = Math.max(...grid.map((item) => item.y + item.h))
    const EXTRA_SPACE = 90

    setContainerHeight(maxHeight + EXTRA_SPACE)
  }, [grid])

  const hasMounted = useRef(false)

  useLayoutEffect(() => {
    if (!imagesReady) return

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h }

      if (!hasMounted.current) {
        const start = getInitialPosition(item)
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: 'blur(10px)' }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.8,
            ease: 'power3.out',
            delay: index * stagger,
          },
        )
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: 'auto',
        })
      }
    })

    hasMounted.current = true
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease])

  const handleMouseEnter = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay') as HTMLElement
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 })
    }
  }

  const handleMouseLeave = (id: string, element: HTMLElement) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector('.color-overlay') as HTMLElement
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 })
    }
  }

  return (
    <div ref={containerRef} className="relative mt-22 w-full" style={{ height: containerHeight }}>
      {grid.map((item) => (
        <div
          key={item.id}
          onClick={item.onClick}
          data-key={item.id}
          className="absolute box-content cursor-pointer"
          style={{ willChange: 'transform, width, height, opacity' }}
          // onClick={() => {}}
          onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
        >
          <Image
            src={item.img}
            alt={item.altText}
            width={item.w}
            height={item.h}
            className="w-full h-full object-cover rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)]"
          />
        </div>
      ))}
    </div>
  )
}

export default Masonry
