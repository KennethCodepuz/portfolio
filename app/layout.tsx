import React from 'react'
import Hero from './components/sections/Hero'
import './globals.css'
import Header from './components/Header'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

type Props = {}

const layout = (props: Props) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <Hero />
      </body>
    </html>
  )
}

export default layout