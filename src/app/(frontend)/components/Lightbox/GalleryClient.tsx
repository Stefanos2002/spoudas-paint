'use client'

import { useState } from 'react'
import Masonry, { Item } from '../Masonry/Masonry'
import Sort from '../Sort/Sort'
import Lightbox from './Lightbox'

export default function GalleryClient({ items }: { items: Item[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const open = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const next = () => setCurrentIndex((i) => (i + 1) % items.length)

  const prev = () => setCurrentIndex((i) => (i === 0 ? items.length - 1 : i - 1))

  return (
    <>
      <Sort />

      <Masonry
        items={items.map((item, index) => ({
          ...item,
          onClick: () => open(index),
        }))}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />

      {isOpen && (
        <Lightbox
          images={items}
          index={currentIndex}
          onClose={() => setIsOpen(false)}
          onNext={next}
          onPrev={prev}
        />
      )}
    </>
  )
}
