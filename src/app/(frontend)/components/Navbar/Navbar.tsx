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
    <nav className="navbar-slide fixed z-30 bg-blue-950 flex justify-between h-19 w-full">
      <div className="w-max flex cursor-pointer" onClick={handleLogoClick}>
        <Image src="/images/logo-splash.png" alt="logo" width={75} height={72} />
        <div className="flex flex-col -translate-x-10 justify-center">
          <div className="text-white text-2xl font-black tracking-tighter leading-none">ΣΠΟΥΔΑΣ</div>
          <span className="text-blue-100 text-center bg-blue-700 p-1 text-[10px] font-semibold tracking-wider uppercase mt-1">
            ΧΡΩΜΑ & ΔΙΑΚΟΣΜΗΣΗ
          </span>
        </div>
      </div>

      <DesktopMenu scrollTo={scrollTo} />
      <MobileMenu scrollTo={scrollTo} />
    </nav>
  )
}
