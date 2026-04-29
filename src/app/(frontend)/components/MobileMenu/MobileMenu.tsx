'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FiPhone } from 'react-icons/fi'
import { links, NavLink } from '@/lib/data'
import { getLenis } from '@/lib/lenis'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface Props {
  scrollTo: (id: string) => void
}

export default function MobileMenu({ scrollTo }: Props) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleClick = (link: NavLink) => {
    if ('target' in link) {
      if (pathname !== '/') {
        sessionStorage.setItem('scrollTo', link.target)
        router.push('/')
      } else {
        scrollTo(link.target)
        setOpen(false)
      }
    } else {
      router.push(link.href)
    }
  }

  const handleLogoClick = () => {
    if (pathname === '/') {
      scrollTo('αρχική')
    } else {
      router.push('/')
    }
  }

  const portal = (
    <>
      {/* Hamburger — always on top, portaled to body so z-index is global */}
      <button
        className="lg:hidden fixed top-4 right-4 z-[100] w-11 h-11 flex items-center justify-center
          rounded-xl cursor-pointer transition-all duration-200"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
      >
        <span className="flex flex-col gap-[7px] items-center justify-center w-5 h-4 relative">
          <span
            className={`absolute w-6 h-px rounded-full transition-all duration-300 ease-in-out
              ${open ? 'rotate-45 translate-y-0 bg-white' : '-translate-y-[9px] bg-white'}`}
          />
          <span
            className={`absolute w-6 h-px bg-white rounded-full transition-all duration-300 ease-in-out
              ${open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}
          />
          <span
            className={`absolute w-6 h-px rounded-full transition-all duration-300 ease-in-out
              ${open ? '-rotate-45 translate-y-0 bg-white' : 'translate-y-[9px] bg-white'}`}
          />
        </span>
      </button>

      {/* Fullscreen overlay */}
      <div
        className={`fixed inset-0 z-[90] flex flex-col lg:hidden
          transition-[clip-path] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          bg-gradient-to-br from-[#0a1932] via-[#0d2347] to-[#0a1932]
          ${
            open
              ? '[clip-path:circle(150%_at_calc(100%_-_44px)_44px)] pointer-events-auto'
              : '[clip-path:circle(0%_at_calc(100%_-_44px)_44px)] pointer-events-none'
          }`}
      >
        {/* Decorative rings */}
        <div className="absolute top-[-60px] right-[-80px] w-[300px] h-[300px] rounded-full border border-blue-400/7 pointer-events-none" />
        <div className="absolute bottom-[60px] left-[-60px] w-[200px] h-[200px] rounded-full border border-blue-400/5 pointer-events-none" />

        <div className="flex flex-col justify-between h-full px-7 pt-6 pb-8">
          {/* Logo inside overlay */}
          <div
            onClick={handleLogoClick}
            className={`flex cursor-pointer absolute left-0 top-0 items-center gap-1 mb-8 transition-all duration-300 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
            style={{ transitionDelay: open ? '100ms' : '0ms' }}
          >
            <Image src="/images/logo-splash.png" alt="logo" width={72} height={72} />
            <div className="flex flex-col -translate-x-6">
              <h1 className="text-white text-2xl font-black tracking-tighter leading-none">
                ΣΠΟΥΔΑΣ
              </h1>
              <span className="text-blue-100 text-center bg-blue-700 px-1 py-0.5 text-[10px] font-semibold tracking-wider uppercase mt-1">
                ΧΡΩΜΑ & ΔΙΑΚΟΣΜΗΣΗ
              </span>
            </div>
          </div>

          {/* Nav Section */}
          <div className="flex-1 mt-18">
            <p className="text-[10px] font-2 tracking-[3px] text-blue-400/60 uppercase mb-6">
              Πλοηγηση
            </p>
            <nav className="flex flex-col gap-1">
              {links.map((link, i) => (
                <div
                  key={link.label}
                  className={`flex items-center gap-4 px-3 py-2 rounded-2xl cursor-pointer
                    border border-transparent font-thin
                    hover:bg-blue-400/10 hover:border-blue-400/12 hover:translate-x-1
                    transition-all duration-200
                    ${open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
                  onClick={() => handleClick(link)}
                >
                  <div className="w-10 h-10 rounded-[11px] bg-blue-400/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-300/80 text-base">{link.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-[16px]">{link.label}</p>
                  </div>
                  <svg
                    className="w-4 h-4 text-white/20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              ))}
            </nav>
          </div>

          {/* Bottom: Call Buttons */}
          <div
            className={`transition-all duration-400 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: open ? '350ms' : '0ms' }}
          >
            <div className="h-px bg-white/6 mb-4" />
            <p className="text-[10px] font-semibold tracking-[3px] text-blue-400/60 uppercase mb-3">
              Αμεση Κληση
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              {[
                { label: 'Γραμμή Α', number: '697 837 7224', href: 'tel:+306978377224' },
                { label: 'Γραμμή Β', number: '697 318 8392', href: 'tel:+306973188392' },
                { label: 'Γραμμή Γ', number: '698 946 2660', href: 'tel:+306989462660' },
              ].map((call) => (
                <a
                  key={call.href}
                  href={call.href}
                  className="flex-1 flex items-center gap-2.5 px-3 py-3 rounded-2xl
                    bg-blue-700/30  border border-blue-400/20
                    hover:bg-blue-700/50 hover:border-blue-400/40 hover:-translate-y-0.5
                    active:scale-[0.97] transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-[9px] bg-blue-400/15 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-blue-300/90 text-md" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/45 font-medium tracking-wide">
                      {call.label}
                    </span>
                    <span className="text-[15px] text-white tracking-wide">{call.number}</span>
                  </div>
                </a>
              ))}
            </div>

            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="w-full mt-6 flex items-center justify-center gap-2
                py-4 rounded-2xl text-[15px] tracking-wide text-white
                bg-blue-600 hover:bg-blue-500 active:scale-[0.98]
                transition-all duration-200 shadow-lg shadow-blue-900/40"
            >
              Κλείστε ραντεβού
            </Link>
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Placeholder in nav to preserve layout space for the hamburger */}
      <div className="lg:hidden w-11 h-11 mr-4 mt-4" />

      {mounted && createPortal(portal, document.body)}
    </>
  )
}
