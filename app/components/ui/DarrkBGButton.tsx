import React from 'react'

type Props = {
  children: React.ReactNode
  link?: string
  className?: string
}

const SeeMyWorks = ({ children, link = "#", className = "" }: Props) => {
  return (
    <a href={link} target='_blank'>
      <button className={`text-sm rounded-full border-1 font-bold border-[var(--border-white-75)] leading-[1.6] ${className}`}>
        {children}
      </button>
    </a>
  )
}

export default SeeMyWorks