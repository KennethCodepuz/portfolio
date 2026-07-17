'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Props = {
   children: string
   className?: string
   /** Fire on mount instead of scroll (for above-the-fold content) */
   triggerOnMount?: boolean
}

const AnimatedParagraph = ({ children, className = '', triggerOnMount = false }: Props) => {
   const ref = useRef<HTMLParagraphElement>(null)

   useEffect(() => {
      if (!ref.current) return

      const wordEls = Array.from(ref.current.querySelectorAll<HTMLSpanElement>('.word'))
      if (wordEls.length === 0) return

      // Initialize the position via GSAP to ensure smooth relative animation
      gsap.set(wordEls, { y: 22 })

      // Group words by their offsetTop into lines (4px tolerance for sub-pixel rendering)
      const lines: HTMLSpanElement[][] = []
      wordEls.forEach(word => {
         const top = word.offsetTop
         const existing = lines.find(line => Math.abs(line[0].offsetTop - top) < 4)
         if (existing) {
            existing.push(word)
         } else {
            lines.push([word])
         }
      })

      const animateLines = () => {
         lines.forEach((lineWords, i) => {
            gsap.to(
               lineWords,
               {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  ease: 'power3.out',
                  delay: (triggerOnMount ? 0.55 : 0) + i * 0.11,
                  stagger: 0,
               }
            )
         })
      }

      if (triggerOnMount) {
         animateLines()
         return
      }

      const trigger = ScrollTrigger.create({
         trigger: ref.current,
         start: 'top 87%',
         onEnter: animateLines,
         once: true,
      })

      return () => trigger.kill()
   }, [triggerOnMount])

   const words = children.trim().split(/\s+/)

   return (
      <p ref={ref} className={className}>
         {words.map((word, i) => (
            <React.Fragment key={i}>
               <span className='word inline-block' style={{ opacity: 0 }}>{word}</span>
               {i < words.length - 1 && ' '}
            </React.Fragment>
         ))}
      </p>
   )
}

export default AnimatedParagraph
