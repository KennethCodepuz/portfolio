import React from 'react'
import RightArrow from '../icons/RightArrow'

type Props = {
  className?: string
  children?: React.ReactNode
  link?: string
  download?: boolean
}

const ContactButton = ({ className = "", children, link = '#', download = false }: Props) => {
  return (
    <a 
      href={link} 
      download={download ? '' : undefined} 
      target='_blank' 
      rel='noopener noreferrer'
    >
      <button className={`flex justify-center items-center gap-1 text-sm font-bold text-[var(--background-dark-100)] bg-[var(--background-white-100)] rounded-full cursor-pointer ${className}`}>
        {children}
        <RightArrow />
      </button>
    </a>
  )
}

export default ContactButton