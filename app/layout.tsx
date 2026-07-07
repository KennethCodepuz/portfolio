import React from 'react'
import Hero from './components/sections/Hero'
import './globals.css'
import Header from './components/Header'

type Props = {}

const layout = (props: Props) => {
  return (
    <html>
      <body>
        <Header />
        <Hero />
      </body>
    </html>
  )
}

export default layout