import React from 'react'
import RightArrow from '../icons/RightArrow'

type Props = {
  className?: string
}

const ContactButton = ({ className = "" }: Props) => {
  return (
    <button className={`flex justify-center items-center gap-1 text-sm font-bold text-[var(--background-dark-100)] bg-[var(--background-white-100)] rounded-full cursor-pointer ${className}`}>
      Contact Me
      <RightArrow />
    </button>
  )
}

export default ContactButton