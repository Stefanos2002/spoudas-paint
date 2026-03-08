import React from 'react'
import './styles.css'
import Navbar from './components/Navbar/Navbar'
import { Manrope } from 'next/font/google'
import StickyCTA from './components/StickyCTA/StickyCTA'
import Footer from './components/Footer/Footer'
import { ClientWrapper } from './components/ClientWrapper/ClientWrapper'

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
      <body className={`${manrope.variable} antialiased flex flex-col min-h-screen`}>
        <ClientWrapper>
          <Navbar />
          <StickyCTA />
          <main className="flex-1">{children}</main>
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  )
}
