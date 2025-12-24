'use client'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import { FaHome } from 'react-icons/fa'
import { GoPersonFill } from 'react-icons/go'
import { IoIosCall } from 'react-icons/io'
import { FaPaintRoller } from 'react-icons/fa'
import { FaImages } from 'react-icons/fa'

export default function Navbar() {
  const pathname = usePathname()
  const links = [
    { href: '/', label: 'Καλωσήρθατε', icon: <FaHome /> },
    { href: '/about', label: 'Γνωρίστε μας', icon: <GoPersonFill /> },
    { href: '/services', label: 'Υπηρεσίες', icon: <FaPaintRoller /> },
    { href: '/portfolio', label: 'Τα Εργα μας', icon: <FaImages /> },
    { href: '/contact', label: 'Καλέστε μας', icon: <IoIosCall /> },
  ]
  return (
    <nav id="navbar" className="fixed z-30 bg-blue-950 items-center justify-center h-22 w-full">
      <ul
        className={`text-neutral-300  ${styles.paint} text-lg flex gap-6 flex-row justify-end items-center mr-12 h-full`}
      >
        {links.map((link) => (
          <li
            key={link.href}
            className={`${pathname === link.href ? 'active' : ''} flex nav-link-splash flex-row items-center gap-1`}
          >
            <span>{link.icon}</span>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
