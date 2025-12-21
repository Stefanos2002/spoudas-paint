'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'

export default function MagicCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 z-9999 pointer-events-none"
      animate={{ x: mousePos.x, y: mousePos.y }}
      transition={{ type: 'spring', damping: 40, stiffness: 350, mass: 0.5 }}
    >
      <Image src="/images/brush.svg" alt="Brush" width={40} height={40} className="rotate-12" />
    </motion.div>
  )
}
