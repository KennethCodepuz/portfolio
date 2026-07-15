"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Portrait from '@/public/my-picture.jpg'
import gsap from 'gsap'
import ButtonRightArrow from '../ui/ButtonRightArrow'

type Props = {}

const navItems = [
   { id: 'home', label: 'Home', href: '#hero' },
   { id: 'skills', label: 'Skills', href: '#skills-section' },
   { id: 'projects', label: 'Projects', href: '#projects' },
   { id: 'experience', label: 'Experience', href: '#experience' },
]

const Header = (props: Props) => {

   const [isOpen, setIsOpen] = useState(false)
   const menuRef = useRef<HTMLDivElement>(null)
   const isFirstRender = useRef(true)

   const toggleMenu = () => {
      setIsOpen(!isOpen)
   }

   useEffect(() => {
      if (isFirstRender.current) {
         isFirstRender.current = false
         return
      }

      // Kill any active tweens on the menu container to prevent overlaps
      gsap.killTweensOf(menuRef.current)

      if (isOpen) {
         // Position menu correctly at the bottom of header and enable pointer events
         gsap.set(menuRef.current, {
            y: '0%',
            pointerEvents: 'auto',
         })

         // Animate height to auto with a back ease (only the bottom border bounces; links remain static)
         gsap.to(menuRef.current, {
            height: 'auto',
            duration: 0.3,
            ease: 'back.out(1.2)',
         })
      } else {
         // Disable pointer events immediately
         gsap.set(menuRef.current, { pointerEvents: 'none' })

         // Create a timeline to slide up and bounce back down before settling
         const tl = gsap.timeline()

         tl.to(menuRef.current, {
            y: '-100%',
            duration: 0.25,
            ease: 'power2.in',
         })
            .to(menuRef.current, {
               y: '-96%', // Rebound down into the visible area
               duration: 0.1,
               ease: 'power2.out',
            })
            .to(menuRef.current, {
               y: '-100%', // Settle back at the bottom of the header
               duration: 0.1,
               ease: 'power2.inOut',
               onComplete: () => {
                  // Reset to default closed state (height: 0, y: 0%) so the border remains visible at header bottom
                  gsap.set(menuRef.current, {
                     height: 0,
                     y: '0%',
                  })
               }
            })
      }
   }, [isOpen])

   return (
      <header className='w-full h-20 flex items-center relative z-50 bg-[var(--background-dark-100)] lg:border-b lg:border-[var(--border-white-5)]'>
         <nav className='relative z-20 w-full h-full flex items-center justify-between flex-row px-6 lg:px-[200px] bg-[var(--background-dark-100)]'>
            {/* Brand/Profile Photo and Name */}
            <div className='flex items-center gap-3.5'>
               <div id='self-picture' className='h-12 w-12 relative flex-shrink-0'>
                  <Image src={Portrait} alt="portrait" fill className='object-cover rounded-full' />
               </div>
               <div className='text-[var(--text-white-100)] font-semibold text-lg whitespace-nowrap'>Kenneth Sean Corpuz</div>
            </div>

            {/* Desktop Navigation (Hidden on Mobile) */}
            <ul className='hidden lg:flex items-center gap-6'>
               {navItems.map((item) => (
                  <li key={item.id}>
                     <a href={item.href} id={`desktop-${item.id}`} className='text-[var(--text-white-100)] transition-colors duration-200'>
                        {item.label}
                     </a>
                  </li>
               ))}
               <ButtonRightArrow className="px-4 py-3 text-sm" link="https://www.linkedin.com/in/kennethcorpuz/">Contact Me</ButtonRightArrow>
            </ul>

            {/* Mobile Menu Toggle Button */}
            <button
               onClick={toggleMenu}
               className='flex flex-col justify-between items-center w-10 h-10 py-3 focus:outline-none lg:hidden z-50 relative cursor-pointer bg-[var(--background-white-100)] rounded-sm'
               aria-label='Toggle navigation menu'
            >
               <span
                  className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-[7px]' : ''
                     }`}
               />
               <span
                  className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : ''
                     }`}
               />
               <span
                  className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''
                     }`}
               />
            </button>
         </nav>

         {/* Mobile Dropdown Navigation Menu */}
         <div
            ref={menuRef}
            className='absolute top-full left-0 w-full overflow-hidden z-10 bg-[var(--background-dark-100)] border-b border-[var(--border-white-5)] lg:hidden'
            style={{ height: 0, pointerEvents: 'none' }}
         >
            <ul className='flex flex-col gap-4 px-6 py-5 text-sm font-medium'>
               {navItems.map((item) => (
                  <li key={`mobile-${item.id}`}>
                     <a
                        href={item.href}
                        id={`mobile-${item.id}`}
                        onClick={() => setIsOpen(false)}
                        className='block py-2 text-[var(--text-white-100)] text-base hover:text-white transition-colors duration-200'
                     >
                        {item.label}
                     </a>
                  </li>
               ))}
               <ButtonRightArrow className='w-38 h-10' link="https://www.linkedin.com/in/kennethcorpuz/">Contact Me</ButtonRightArrow>
            </ul>
         </div>
      </header>
   )
}

export default Header