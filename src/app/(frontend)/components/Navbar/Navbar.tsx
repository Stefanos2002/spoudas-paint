'use client'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import { FaHome } from 'react-icons/fa'
import { GoPersonFill } from 'react-icons/go'
import { IoIosCall } from 'react-icons/io'
import { FaPaintRoller } from 'react-icons/fa'
import { FaImages } from 'react-icons/fa'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const links = [
    { href: '#σπιτι', label: 'Καλωσήρθατε', icon: <FaHome /> },
    { href: '#σχετικα', label: 'Γνωρίστε μας', icon: <GoPersonFill /> },
    { href: '#υπηρεσίες', label: 'Υπηρεσίες', icon: <FaPaintRoller /> },
    { href: '#εργα', label: 'Τα Εργα μας', icon: <FaImages /> },
    { href: '#επικοινωνια', label: 'Καλέστε μας', icon: <IoIosCall /> },
  ]
  return (
    <nav id="navbar" className="fixed z-30 bg-blue-950 flex justify-between h-22 w-full">
      <div id="logo" className="w-max flex">
        <Image src="/images/logo-splash.png" alt="logo-splash" width={100} height={100} />
        <div className="flex flex-col -translate-x-10 justify-center">
          <h1 className="text-white text-3xl font-black tracking-tighter leading-none">ΣΠΟΥΔΑΣ</h1>
          <span className="text-blue-100 bg-blue-700 p-1 text-xs font-semibold tracking-wider uppercase mt-1">
            ΧΡΩΜΑ & ΔΙΑΚΟΣΜΗΣΗ
          </span>
        </div>
      </div>
      <ul
        className={`text-neutral-300  ${styles.paint} text-lg flex gap-6 flex-row justify-end items-center mr-12 h-full`}
      >
        {links.map((link) => (
          <li
            key={link.href}
            className={`${pathname === link.href ? 'active' : ''} flex nav-link-splash flex-row items-center gap-2`}
          >
            <span>{link.icon}</span>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
