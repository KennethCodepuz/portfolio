'use client'

import React, { useRef, useEffect, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Props = {
   children: ReactNode
   /** Class applied to the outer overflow:hidden clip wrapper */
   className?: string
   /** Class applied to the inner sliding container */
   innerClassName?: string
   delay?: number
   triggerOnMount?: boolean
   duration?: number
}

/**
 * Pure slide-up — no fade. The inner content enters from below
 * the clip boundary, like sliding out from behind a wall.
 */
const SlideUp = ({
   children,
   className = '',
   innerClassName = '',
   delay = 0,
   triggerOnMount = false,
   duration = 0.65,
}: Props) => {
   const innerRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if (!innerRef.current) return
      const el = innerRef.current

      const animate = () => {
         gsap.fromTo(
            el,
            { y: '105%' },
            { y: '0%', duration, ease: 'power3.out', delay }
         )
      }

      if (triggerOnMount) {
         animate()
         return
      }

      // Use the clip wrapper (parent) as the scroll trigger
      const trigger = ScrollTrigger.create({
         trigger: el.parentElement,
         start: 'top 90%',
         onEnter: animate,
         once: true,
      })

      return () => trigger.kill()
   }, [delay, triggerOnMount, duration])

   return (
      /* overflow-hidden clips the child while it's below the boundary */
      <div className={`overflow-hidden ${className}`}>
         <div ref={innerRef} className={innerClassName} style={{ transform: 'translateY(105%)' }}>
            {children}
         </div>
      </div>
   )
}

export default SlideUp
