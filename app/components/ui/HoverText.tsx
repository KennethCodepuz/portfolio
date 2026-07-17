'use client'

import React, { useRef, useEffect, ReactNode } from 'react'
import gsap from 'gsap'

type Props = {
   children: ReactNode
   className?: string
}

/**
 * Reusable text hover component that automatically attaches to its closest
 * interactive parent (like a button or link) and performs the slide-up/slide-down animation.
 */
const HoverText = ({ children, className = '' }: Props) => {
   const containerRef = useRef<HTMLSpanElement>(null)
   const textRef = useRef<HTMLSpanElement>(null)
   const tlRef = useRef<gsap.core.Timeline | null>(null)

   useEffect(() => {
      if (!containerRef.current) return
      // Find the parent interactive element so hover works on padding areas
      const parent = containerRef.current.closest('button, a') || containerRef.current

      const handleMouseEnter = () => {
         if (tlRef.current) tlRef.current.kill()
         const el = textRef.current
         if (!el) return
         const tl = gsap.timeline()
         tlRef.current = tl
         tl.to(el, { y: '-105%', duration: 0.08, ease: 'none' })
           .set(el, { y: '105%' })
           .to(el, { y: '0%', duration: 0.08, ease: 'none' })
      }

      const handleMouseLeave = () => {
         if (tlRef.current) tlRef.current.kill()
         const el = textRef.current
         if (!el) return
         const tl = gsap.timeline()
         tlRef.current = tl
         tl.to(el, { y: '105%', duration: 0.08, ease: 'none' })
           .set(el, { y: '-105%' })
           .to(el, { y: '0%', duration: 0.08, ease: 'none' })
      }

      parent.addEventListener('mouseenter', handleMouseEnter)
      parent.addEventListener('mouseleave', handleMouseLeave)

      return () => {
         parent.removeEventListener('mouseenter', handleMouseEnter)
         parent.removeEventListener('mouseleave', handleMouseLeave)
         if (tlRef.current) tlRef.current.kill()
      }
   }, [])

   return (
      <span ref={containerRef} className={`inline-block overflow-hidden vertical-align-middle ${className}`}>
         <span ref={textRef} className="inline-block">
            {children}
         </span>
      </span>
   )
}

export default HoverText
