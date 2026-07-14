'use client'

import React, { useState, useRef, useEffect } from 'react'
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import gsap from 'gsap'

type Props = {
   children: React.ReactNode
   defaultOpen?: boolean
}

const JobExperienceCard = ({ children, defaultOpen = false }: Props) => {
   const [isOpen, setIsOpen] = useState(defaultOpen)
   
   const childrenArray = React.Children.toArray(children)
   const header = childrenArray[0]
   const content = childrenArray.slice(1)

   const containerRef = useRef<HTMLDivElement>(null)
   const innerRef = useRef<HTMLDivElement>(null)
   const isFirstRender = useRef(true)

   useEffect(() => {
      if (!containerRef.current || !innerRef.current) return

      const firstLi = innerRef.current.querySelector('li')
      const allLis = Array.from(innerRef.current.querySelectorAll('li'))
      if (!firstLi) return

      const collapsedH = firstLi.offsetHeight
      const fullH = innerRef.current.scrollHeight

      if (isFirstRender.current) {
         // Initialize without transition to avoid flashing
         gsap.set(containerRef.current, { height: isOpen ? 'auto' : collapsedH })
         gsap.set(firstLi, { filter: isOpen ? 'none' : 'blur(8px)' })
         
         allLis.forEach((li, idx) => {
            if (idx > 0) {
               gsap.set(li, {
                  y: isOpen ? 0 : firstLi.offsetTop - li.offsetTop,
                  opacity: isOpen ? 1 : 0
               })
            }
         })
         
         isFirstRender.current = false
         return
      }

      if (isOpen) {
         gsap.killTweensOf(containerRef.current)
         gsap.killTweensOf(firstLi)
         gsap.killTweensOf(allLis)

         gsap.to(containerRef.current, {
            height: fullH,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => {
               // Set to auto for responsiveness on resize
               gsap.set(containerRef.current, { height: 'auto' })
            }
         })

         gsap.to(firstLi, {
            filter: 'blur(0px)',
            duration: 0.3,
            ease: 'power2.out',
            clearProps: 'filter'
         })

         // Pre-position sliced elements to ensure they start correctly from their stacked position
         allLis.forEach((li, idx) => {
            if (idx > 0) {
               gsap.set(li, {
                  y: firstLi.offsetTop - li.offsetTop,
                  opacity: 0
               })
            }
         })

         gsap.to(allLis.slice(1), {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'back.out(1.2)'
         })
      } else {
         gsap.killTweensOf(containerRef.current)
         gsap.killTweensOf(firstLi)
         gsap.killTweensOf(allLis)

         // Lock height to current pixel value before animating down
         gsap.set(containerRef.current, { height: containerRef.current.offsetHeight })

         gsap.to(containerRef.current, {
            height: collapsedH,
            duration: 0.6,
            ease: 'power2.inOut'
         })

         gsap.to(firstLi, {
            filter: 'blur(8px)',
            duration: 0.4,
            ease: 'power2.inOut'
         })

         gsap.to(allLis.slice(1), {
            y: (idx, target) => firstLi.offsetTop - target.offsetTop,
            opacity: 0,
            duration: 0.4,
            stagger: 0.04,
            ease: 'power2.inOut'
         })

         // Smoothly scroll the container back to top
         gsap.to(containerRef.current, {
            scrollTop: 0,
            duration: 0.3,
            ease: 'power2.inOut'
         })
      }
   }, [isOpen, children])

   useEffect(() => {
      const handleResize = () => {
         if (!containerRef.current || !innerRef.current) return
         
         const firstLi = innerRef.current.querySelector('li')
         const allLis = Array.from(innerRef.current.querySelectorAll('li'))
         if (!firstLi) return

         const collapsedH = firstLi.offsetHeight

         if (!isOpen) {
            gsap.set(containerRef.current, { height: collapsedH })
            allLis.forEach((li, idx) => {
               if (idx > 0) {
                  gsap.set(li, {
                     y: firstLi.offsetTop - li.offsetTop
                  })
               }
            })
         }
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [isOpen])

   if (childrenArray.length <= 1) {
      return (
         <div className='px-6 py-6 bg-[var(--background-dark-100)] rounded-[1.25rem] flex flex-col gap-6'>
            {children}
         </div>
      )
   }

   return (
      <div className='px-6 py-6 bg-[var(--background-dark-100)] rounded-[1.25rem] flex flex-col gap-6'>
         {header}
         <div
            ref={containerRef}
            className="overflow-hidden"
         >
            <div ref={innerRef}>
               {content}
            </div>
         </div>
         <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-fit text-[var(--text-white-100)] opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer self-start"
            aria-label={isOpen ? "Collapse card" : "Expand card"}
         >
            {isOpen ? <IoIosArrowDropup size={24} /> : <IoIosArrowDropdown size={24} />}
         </button>
      </div>
   )
}

export default JobExperienceCard