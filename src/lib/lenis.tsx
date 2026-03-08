// lib/lenis.ts
import Lenis from '@studio-freight/lenis'

let lenis: Lenis | null = null

export const initLenis = () => {
  if (!lenis) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth inertia
    })
    const raf = (time: number) => {
      lenis?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }
  return lenis
}

export const getLenis = () => {
  if (!lenis) throw new Error('Lenis not initialized yet')
  return lenis
}
