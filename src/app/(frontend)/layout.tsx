import React from 'react'
import './styles.css'
import Navbar from './components/Navbar/Navbar'
import { Manrope } from 'next/font/google'
import StickyCTA from './components/StickyCTA/StickyCTA'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

export const metadata = {
  description: 'This is a Painter Portfolio Website',
  title: 'Spoudas Paint',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased relative w-full min-h-screen`}>
        <Navbar />
        <StickyCTA />
        {children}
      </body>
    </html>
  )
}
