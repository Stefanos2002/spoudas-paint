'use client'
import { usePathname } from 'next/navigation'
import { FiPhone } from 'react-icons/fi'
import { IoIosCall } from 'react-icons/io'
import { links } from '@/lib/data'

interface Props {
  scrollTo: (id: string) => void
}

export default function DesktopMenu({ scrollTo }: Props) {
  const pathname = usePathname()

  return (
    <ul className="text-neutral-300 max-[1150px]:hidden flex text-[16.5px] gap-4 flex-row justify-end items-center mr-6 h-full">
      {links.map((link) => {
        if ('target' in link) {
          // same-page section
          return (
            <li
              key={link.label}
              className="flex cursor-pointer nav-link-splash flex-row items-center gap-2"
              onClick={() => scrollTo(link.target)}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </li>
          )
        } else {
          // page link
          return (
            <li key={link.label} className="flex flex-row items-center gap-2">
              <a
                href={link.href}
                className={`${pathname === link.href ? 'active' : ''} flex nav-link-splash items-center gap-2`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            </li>
          )
        }
      })}

      {/* Call Button */}
      <li className="relative group">
        <button
          className="flex border-b-3 border-blue-700 items-center gap-2 cursor-pointer
          bg-linear-to-b from-blue-600 via-blue-700 to-blue-800
          hover:from-blue-700 hover:via-blue-800 hover:to-blue-900
          text-white px-4 py-2 rounded-full transition-colors duration-300 ease-out
          shadow-blue-900/40 hover:shadow-blue-900/60
          shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
        >
          <IoIosCall />
          <span className="text-[16.5px]">Καλέστε μας</span>
        </button>

        <div
          className="absolute right-0 mt-1
          bg-white rounded-lg shadow-lg overflow-hidden
          max-h-0 opacity-0 translate-y-1
          group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 ease-out"
        >
          <a
            href="tel:+306973188392"
            className="flex items-center gap-2 text-[16px] px-4 py-2 text-blue-950 hover:bg-blue-100"
          >
            <FiPhone className="text-blue-900 fill-blue-900" /> 697 318 8392
          </a>
          <a
            href="tel:+306989462660"
            className="flex items-center gap-2 text-[16px] px-4 py-2 text-blue-950 hover:bg-blue-100"
          >
            <FiPhone className="text-blue-900 fill-blue-900" /> 698 946 2660
          </a>
        </div>
      </li>
    </ul>
  )
}
