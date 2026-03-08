import Image from 'next/image'
import DesktopMenu from '../DesktopMenu/DekstopMenu'
import MobileMenu from '../MobileMenu/MobileMenu'

export default function Navbar() {
  return (
    <nav id="navbar" className="fixed z-30 bg-blue-950 flex justify-between h-19 w-full">
      <div id="logo" className="w-max flex">
        <Image src="/images/logo-splash.png" alt="logo-splash" width={100} height={100} />
        <div className="flex flex-col -translate-x-10 justify-center">
          <h1 className="text-white text-3xl font-black tracking-tighter leading-none">ΣΠΟΥΔΑΣ</h1>
          <span className="text-blue-100 text-center bg-blue-700 p-1 text-xs font-semibold tracking-wider uppercase mt-1">
            ΧΡΩΜΑ & ΔΙΑΚΟΣΜΗΣΗ
          </span>
        </div>
      </div>
      <DesktopMenu />
      <MobileMenu />
    </nav>
  )
}
