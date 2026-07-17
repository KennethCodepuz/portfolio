'use client'

import React, { useRef, useEffect, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Props = {
   children: ReactNode
   className?: string
   /** Extra delay in seconds before the animation starts */
   delay?: number
   /** Fire immediately on mount — for above-the-fold elements */
   triggerOnMount?: boolean
   /** Distance to travel upward from (default 28px) */
   y?: number
   /** Animation duration in seconds (default 0.75) */
   duration?: number
}

const FadeUp = ({
   children,
   className = '',
   delay = 0,
   triggerOnMount = false,
   y = 28,
   duration = 0.75,
}: Props) => {
   const ref = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if (!ref.current) return
      const el = ref.current

      // Initialize the position via GSAP to ensure smooth relative animation
      gsap.set(el, { y })

      const toVars = { opacity: 1, y: 0, duration, ease: 'power3.out', delay }

      if (triggerOnMount) {
         gsap.to(el, toVars)
         return
      }

      const trigger = ScrollTrigger.create({
         trigger: el,
         start: 'top 88%',
         onEnter: () => gsap.to(el, toVars),
         once: true,
      })

      return () => trigger.kill()
   }, [delay, triggerOnMount, y, duration])

   return (
      <div ref={ref} className={className} style={{ opacity: 0 }}>
         {children}
      </div>
   )
}

export default FadeUp
