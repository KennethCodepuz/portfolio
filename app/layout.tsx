import React from 'react'
import Hero from './about/Hero'
import './globals.css'
import Header from './components/Header'

type Props = {}

const layout = (props: Props) => {
  return (
    <html>
      <body>
        <Header />
      </body>
    </html>
  )
}

export default layout