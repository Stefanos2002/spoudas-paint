'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiPhone } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { SlMenu } from 'react-icons/sl'
import { links, NavLink } from '@/lib/data'
import { getLenis } from '@/lib/lenis'

interface Props {
  scrollTo: (id: string) => void
}

export default function MobileMenu({ scrollTo }: Props) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handleClick = (link: NavLink) => {
    if ('target' in link) {
      const section = document.getElementById(link.target)
      if (!section) return
      getLenis().scrollTo(section.offsetTop)
      setOpen(false)
    } else {
      // page link, navigate normally
      setOpen(false)
    }
  }

  return (
    <>
      {/* Hamburger */}
      <button
        className="hidden cursor-pointer max-[1150px]:block mr-6 z-50 text-white text-[2rem]"
        onClick={() => setOpen(!open)}
      >
        <SlMenu
          className={`absolute right-6 top-8 transition-all duration-300 ease-in-out ${
            open ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <IoClose
          className={`absolute right-6 top-8 text-4xl transition-all duration-300 ease-in-out ${
            open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-58 bg-blue-950 transform transition-transform duration-300 hidden max-[1150px]:block ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4 p-6 pt-24 text-white text-lg">
          {links.map((link) => {
            // same-page scroll
            if ('target' in link) {
              return (
                <li
                  key={link.label}
                  className="flex cursor-pointer hover:scale-105 transition-all duration-200 flex-row items-center gap-2"
                  onClick={() => scrollTo(link.target)}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </li>
              )
            } else {
              // page navigation
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`flex flex-row items-center gap-2 hover:scale-105 transition-all duration-200 ${
                      pathname === link.href ? 'active' : ''
                    }`}
                    onClick={() => handleClick(link)}
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              )
            }
          })}

          {/* Call Buttons */}
          <div className="border-t border-blue-800 pt-4 flex flex-col gap-3">
            <a
              href="tel:+306973188392"
              className="flex hover:scale-105 transition-all duration-200 items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg"
            >
              <FiPhone />
              697 318 8392
            </a>
            <a
              href="tel:+306989462660"
              className="flex hover:scale-105 transition-all duration-200 items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg"
            >
              <FiPhone />
              698 946 2660
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
