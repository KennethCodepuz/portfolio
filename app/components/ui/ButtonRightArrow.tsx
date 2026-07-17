"use client"
import React, { useRef } from 'react'
import RightArrow from '../icons/RightArrow'
import HoverText from './HoverText'
import gsap from 'gsap'

type Props = {
  className?: string
  children?: React.ReactNode
  link?: string
  download?: boolean
}

const ContactButton = ({ className = "", children, link = '#', download = false }: Props) => {
  const arrowRef = useRef<HTMLSpanElement>(null)

  const handleMouseEnter = () => {
    if (!arrowRef.current) return
    gsap.to(arrowRef.current, {
      rotation: -360,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: 'auto'
    })
  }

  const handleMouseLeave = () => {
    if (!arrowRef.current) return
    gsap.to(arrowRef.current, {
      rotation: 0,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: 'auto'
    })
  }

  return (
    <a
      href={link}
      download={download ? '' : undefined}
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex justify-center items-center gap-1 text-sm font-bold text-[var(--background-dark-100)] bg-[var(--background-white-100)] border border-transparent rounded-full cursor-pointer ${className}`}
    >
      <HoverText>{children}</HoverText>
      <span ref={arrowRef} className="inline-block flex items-center justify-center">
        <RightArrow />
      </span>
    </a>
  )
}

export default ContactButton