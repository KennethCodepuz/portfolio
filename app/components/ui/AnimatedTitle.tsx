'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Props = {
   children: string
   className?: string
   as?: 'h1' | 'h2' | 'h3' | 'h4'
   /** Extra delay in seconds before chars start appearing */
   delay?: number
   /** Fire on mount instead of on scroll — for above-the-fold titles */
   triggerOnMount?: boolean
}

const AnimatedTitle = ({
   children,
   className = '',
   as: Tag = 'h1',
   delay = 0,
   triggerOnMount = false,
}: Props) => {
   const ref = useRef<HTMLHeadingElement>(null)

   useEffect(() => {
      if (!ref.current) return

      const chars = ref.current.querySelectorAll<HTMLSpanElement>('.char')
      
      // Initialize layout values in GSAP
      gsap.set(chars, { filter: 'blur(16px)' })

      const toVars = {
         opacity: 1,
         filter: 'blur(0px)',
         duration: 1.1,
         ease: 'power3.out',
         stagger: 0.07,
         delay: triggerOnMount ? 0.2 + delay : delay,
      }

      if (triggerOnMount) {
         gsap.to(chars, toVars)
         return
      }

      const trigger = ScrollTrigger.create({
         trigger: ref.current,
         start: 'top 82%',
         onEnter: () => gsap.to(chars, toVars),
         once: true,
      })

      return () => trigger.kill()
   }, [triggerOnMount, delay])

   const lines = children.split('\n')

   return (
      <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
         {lines.map((line, lineIdx) => {
            // Split line by spaces to get words
            const words = line.split(' ')
            return (
               <React.Fragment key={lineIdx}>
                  {words.map((word, wordIdx) => (
                     <span key={wordIdx} className="inline-block whitespace-nowrap">
                        {word.split('').map((char, charIdx) => (
                           <span
                              key={charIdx}
                              className="char inline-block"
                              style={{ opacity: 0 }}
                           >
                              {char}
                           </span>
                        ))}
                        {/* Append a space after the word, unless it's the last word in the line */}
                        {wordIdx < words.length - 1 && (
                           <span className="char inline-block" style={{ opacity: 0 }}>
                              {'\u00A0'}
                           </span>
                        )}
                     </span>
                  ))}
                  {lineIdx < lines.length - 1 && <br />}
               </React.Fragment>
            )
         })}
      </Tag>
   )
}

export default AnimatedTitle
