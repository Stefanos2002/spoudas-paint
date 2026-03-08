// components/ClientWrapper.tsx
'use client'
import { ReactNode, useEffect } from 'react'
import { initLenis } from '@/lib/lenis'

export const ClientWrapper = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    initLenis()
  }, [])

  return <>{children}</>
}
