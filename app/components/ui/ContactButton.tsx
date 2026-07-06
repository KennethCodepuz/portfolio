import React from 'react'
import RightArrow from '../icons/RightArrow'

type Props = {}

const ContactButton = (props: Props) => {
  return (
    <button className="flex justify-center items-center gap-2 text-md font-bold px-2 w-[30%] text-[var(--background-dark-100)] bg-[var(--background-white-100)] h-10 rounded-full cursor-pointer">
      Contact Me
      <RightArrow />
    </button>
  )
}

export default ContactButton