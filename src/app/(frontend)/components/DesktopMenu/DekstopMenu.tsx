'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiPhone } from 'react-icons/fi'
import { IoIosCall } from 'react-icons/io'
import { links } from '@/lib/data'

export default function DesktopMenu() {
  const pathname = usePathname()
  return (
    <>
      <ul
        className={`text-neutral-300 max-[1150px]:hidden flex text-lg gap-4 flex-row justify-end items-center mr-6 h-full`}
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
    </>
  )
}
