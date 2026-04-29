'use client'
import { usePathname, useRouter } from 'next/navigation'
import { FiPhone } from 'react-icons/fi'
import { IoIosCall } from 'react-icons/io'
import { links, NavLink } from '@/lib/data'

interface Props {
  scrollTo: (id: string) => void
}

export default function DesktopMenu({ scrollTo }: Props) {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (link: NavLink) => {
    if ('target' in link) {
      if (pathname !== '/') {
        sessionStorage.setItem('scrollTo', link.target)
        router.push('/')
      } else {
        scrollTo(link.target)
      }
    } else {
      router.push(link.href)
    }
  }

  return (
    <ul className="text-neutral-300 lg:flex hidden text-[16.5px] gap-4 flex-row justify-end items-center mr-6 h-full">
      {links.map((link) => (
        <li
          key={link.label}
          className={`flex cursor-pointer nav-link-splash flex-row items-center gap-2 ${'href' in link && pathname === link.href ? 'active' : ''}`}
          onClick={() => handleClick(link)}
        >
          <span>{link.icon}</span>
          <span>{link.label}</span>
        </li>
      ))}

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
            className="flex items-center gap-2 text-[16px] px-3 py-2 text-blue-950 hover:bg-blue-100"
          >
            <FiPhone className="text-blue-900 fill-blue-900" /> 697 837 7224
          </a>
          <a
            href="tel:+306973188392"
            className="flex items-center gap-2 text-[16px] px-3 py-2 text-blue-950 hover:bg-blue-100"
          >
            <FiPhone className="text-blue-900 fill-blue-900" /> 697 318 8392
          </a>

          <a
            href="tel:+306989462660"
            className="flex items-center gap-2 text-[16px] px-3 py-2 text-blue-950 hover:bg-blue-100"
          >
            <FiPhone className="text-blue-900 fill-blue-900" /> 698 946 2660
          </a>
        </div>
      </li>
    </ul>
  )
}
