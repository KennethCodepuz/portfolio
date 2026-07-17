import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kenneth Sean Corpuz — AI/Software Engineer',
  description: 'Portfolio of Kenneth Sean Corpuz, a Software Engineer and Computer Science student passionate about building scalable web and mobile applications.',
}

type Props = {
  children: React.ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}

export default layout