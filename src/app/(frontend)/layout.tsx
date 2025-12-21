import React from 'react'
import './styles.css'
import Navbar from './components/Navbar/Navbar'
import MagicCursor from './components/Animations/MagicCursor/MagicCursor'

export const metadata = {
  description: 'This is a Painter Portfolio Website',
  title: 'Spoudas Paint',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      {/* <MagicCursor /> */}
      <body className={`antialiased relative w-full min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
