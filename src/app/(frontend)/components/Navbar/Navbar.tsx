'use client'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import DesktopMenu from '../DesktopMenu/DekstopMenu'
import MobileMenu from '../MobileMenu/MobileMenu'
import { useSmoothScroll } from '@/lib/useSmoothScroll'

export default function Navbar() {
  const { scrollTo } = useSmoothScroll()
  const pathname = usePathname()
  const router = useRouter()

  const handleLogoClick = () => {
    if (pathname === '/') {
      scrollTo('αρχική')
    } else {
      router.push('/')
    }
  }

  return (
    <nav className="fixed z-30 bg-blue-950 flex justify-between h-19 w-full">
      <div className="w-max flex cursor-pointer" onClick={handleLogoClick}>
        <Image src="/images/logo-splash.png" alt="logo" width={100} height={100} />
        <div className="flex flex-col -translate-x-10 justify-center">
          <h1 className="text-white text-3xl font-black tracking-tighter leading-none">ΣΠΟΥΔΑΣ</h1>
          <span className="text-blue-100 text-center bg-blue-700 p-1 text-xs font-semibold tracking-wider uppercase mt-1">
            ΧΡΩΜΑ & ΔΙΑΚΟΣΜΗΣΗ
          </span>
        </div>
      </div>

      <DesktopMenu scrollTo={scrollTo} />
      <MobileMenu scrollTo={scrollTo} />
    </nav>
  )
}
