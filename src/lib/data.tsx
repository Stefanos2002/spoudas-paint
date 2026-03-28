// lib/data.tsx
import { ReactElement } from 'react'
import { FaImages, FaPaintRoller } from 'react-icons/fa'
import { GoPersonFill } from 'react-icons/go'

export type NavLink =
  | { target: string; label: string; icon: ReactElement } // same-page scroll
  | { href: string; label: string; icon: ReactElement } // external page link

export const links: NavLink[] = [
  { target: 'υπηρεσίες', label: 'Υπηρεσιες', icon: <FaPaintRoller /> },
  { href: '/gallery', label: 'Τα Εργα μας', icon: <FaImages /> },
  { target: 'ομάδα', label: 'Γνωριστε μας', icon: <GoPersonFill /> },
]
