"use client"
import React from 'react'
import HoverText from './HoverText'

type Props = {
  children: React.ReactNode
  link?: string
  className?: string
}

const SeeMyWorks = ({ children, link = "#", className = "" }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`inline-flex justify-center items-center text-sm rounded-full border font-bold border-[var(--border-white-75)] leading-[1.6] cursor-pointer ${className}`}
    >
      <HoverText>{children}</HoverText>
    </a>
  )
}

export default SeeMyWorks