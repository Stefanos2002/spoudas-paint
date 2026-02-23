'use client'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import { FaHome } from 'react-icons/fa'
import { GoPersonFill } from 'react-icons/go'
import { IoIosCall } from 'react-icons/io'
import { FaPaintRoller } from 'react-icons/fa'
import { FaImages } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { HiMenu, HiX } from 'react-icons/hi'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  const links = [
    { href: '/#αρχική', label: 'Αρχική', icon: <FaHome /> },
    { href: '/#υπηρεσίες', label: 'Υπηρεσίες', icon: <FaPaintRoller /> },
    { href: '/gallery', label: 'Τα Εργα μας', icon: <FaImages /> },
    { href: '/#ομάδα', label: 'Γνωρίστε μας', icon: <GoPersonFill /> },
  ]
  return (
    <nav id="navbar" className="fixed z-30 bg-blue-950 flex justify-between h-22 w-full">
      <div id="logo" className="w-max flex">
        <Image src="/images/logo-splash.png" alt="logo-splash" width={100} height={100} />
        <div className="flex flex-col -translate-x-10 justify-center">
          <h1 className="text-white text-3xl font-black tracking-tighter leading-none">ΣΠΟΥΔΑΣ</h1>
          <span className="text-blue-100 text-center bg-blue-700 p-1 text-xs font-semibold tracking-wider uppercase mt-1">
            ΧΡΩΜΑ & ΔΙΑΚΟΣΜΗΣΗ
          </span>
        </div>
      </div>
      <ul
        className={`text-neutral-300 max-[1150px]:hidden flex ${styles.paint} text-lg gap-4 flex-row justify-end items-center mr-6 h-full`}
      >
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <li
              key={link.href}
              className={`${pathname === link.href ? 'active' : ''} flex cursor-pointer nav-link-splash flex-row items-center gap-2`}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </li>
          </Link>
        ))}
        <li className="relative group">
          <button
            className="flex cursor-pointer group-hover:bg-blue-800 items-center transition-all duration-200 bg-blue-700 text-white p-2 px-4 rounded-full gap-2
    "
          >
            <IoIosCall />
            <span>Καλέστε μας</span>
          </button>

          <div className="absolute right-0 hidden group-hover:block bg-white rounded-lg shadow-lg overflow-hidden">
            <a
              href="tel:+306973188392"
              className="flex items-center gap-2 text-[16px] px-4 py-2 text-blue-950 hover:bg-blue-100"
            >
              <FiPhone className="text-blue-900 fill-blue-900" />
              697 318 8392
            </a>
            <a
              href="tel:+306989462660"
              className="flex items-center gap-2 text-[16px] px-4 py-2 text-blue-950 hover:bg-blue-100"
            >
              <FiPhone className="text-blue-900 fill-blue-900" />
              698 946 2660
            </a>
          </div>
        </li>
      </ul>
      {/* Hamburger */}
      <button
        className="hidden cursor-pointer max-[1150px]:block mr-6 z-50 text-white text-[2.6rem]"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-60 bg-blue-950 transform transition-transform duration-300 hidden max-[1150px]:block ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 p-6 pt-24 text-white text-lg">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <div className="flex items-center gap-3">
                {link.icon}
                {link.label}
              </div>
            </Link>
          ))}

          <div className="border-t border-blue-800 pt-4 flex flex-col gap-3">
            <a
              href="tel:+306973188392"
              className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg"
            >
              <FiPhone />
              697 318 8392
            </a>

            <a
              href="tel:+306989462660"
              className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg"
            >
              <FiPhone />
              698 946 2660
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
