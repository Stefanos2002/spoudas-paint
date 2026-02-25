'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FiPhone } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { SlMenu } from 'react-icons/sl'
import { links } from '@/lib/data'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      {/* Hamburger */}
      <button
        className="hidden cursor-pointer max-[1150px]:block mr-6 z-50 text-white text-[2rem]"
        onClick={() => setOpen(!open)}
      >
        <SlMenu
          className={`absolute right-6 top-8 transition-all duration-300 ease-in-out ${open ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
        />
        <IoClose
          className={`absolute right-6 top-8 text-4xl transition-all duration-300 ease-in-out ${open ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
        />
      </button>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-58 bg-blue-950 transform transition-transform duration-300 hidden max-[1150px]:block ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4 p-6 pt-24 text-white text-lg">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <li
                key={link.href}
                className={`${pathname === link.href ? 'active' : ''} flex cursor-pointer hover:scale-105 transition-all duration-200 flex-row items-center gap-2`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </li>
            </Link>
          ))}

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
              className="flex hover:scale-105 transition-all duration-200  items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg"
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
