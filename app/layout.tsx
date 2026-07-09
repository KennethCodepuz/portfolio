import React from 'react'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import './globals.css'
import Header from './components/Header'
import { Inter } from 'next/font/google'
import Projects from './components/sections/Projects'

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
        <Skills />
        <Projects />
      </body>
    </html>
  )
}

export default layout