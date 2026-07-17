'use client'

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '../ui/SectionTitle'
import ReactIcon from '../icons/ReactIcon'
import NextjsIcon from '../icons/NextJS'
import Html5Icon from '../icons/Html5Icon'
import Css3Icon from '../icons/Css3Icon'
import JavascriptIcon from '../icons/JavaScriptIcon'
import TailwindIcon from '../icons/TailwindIcons'
import TanStackIcon from '../icons/TanStackIcon'
import GsapIcon from '../icons/GsapIcon'
import TypescriptIcon from '../icons/TypeScriptIcon'
import GitIcon from '../icons/GitIcon'
import SpringBootIcon from '../icons/SpringBootIcon'
import JavaIcon from '../icons/JavaIcon'
import AnimatedTitle from '../ui/AnimatedTitle'
import AnimatedParagraph from '../ui/AnimatedParagraph'
import FadeUp from '../ui/FadeUp'

gsap.registerPlugin(ScrollTrigger)

type Props = {}

const techStack = [
   { icon: ReactIcon, name: 'ReactJS' },
   { icon: NextjsIcon, name: 'NextJS' },
   { icon: Html5Icon, name: 'HTML5' },
   { icon: Css3Icon, name: 'CSS3' },
   { icon: JavascriptIcon, name: 'JavaScript' },
   { icon: TanStackIcon, name: 'TanStack' },
   { icon: GsapIcon, name: 'GSAP' },
   { icon: TailwindIcon, name: 'TailwindCSS' },
   { icon: TypescriptIcon, name: 'TypeScript' },
   { icon: GitIcon, name: 'Git' },
   { icon: SpringBootIcon, name: 'SpringBoot' },
   { icon: JavaIcon, name: 'Java' },
]

const Skills = (props: Props) => {
   const chipsRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if (!chipsRef.current) return
      const chips = chipsRef.current.querySelectorAll<HTMLDivElement>('.chip')

      gsap.set(chips, { opacity: 0, y: 28 })

      const trigger = ScrollTrigger.create({
         trigger: chipsRef.current,
         start: 'top 88%',
         onEnter: () => {
            gsap.to(chips, {
               opacity: 1,
               y: 0,
               duration: 0.6,
               ease: 'power3.out',
               stagger: 0.055,
            })
         },
         once: true,
      })

      return () => trigger.kill()
   }, [])

   return (
      <section id='skills-section' className='px-6 lg:px-[200px] py-14 md:py-24 bg-[var(--background-charcoal-100)] flex flex-col items-center gap-10'>
         <div className='flex flex-col items-center justify-center gap-2.5'>
            <FadeUp>
               <SectionTitle className='bg-[var(--background-dark-100)]'>Tech Stack</SectionTitle>
            </FadeUp>
            <AnimatedTitle className='text-3xl leading-[1.4]' delay={0.1}>
               Tools I Build With
            </AnimatedTitle>
            <AnimatedParagraph className='text-lg leading-normal text-[var(--text-white-40)] md:w-[70%] text-center'>
               {'A curated set of technologies I rely on to build modern web and mobile applications'}
            </AnimatedParagraph>
         </div>
         <div ref={chipsRef} id='tech-stack' className='flex flex-wrap w-full justify-center items-center gap-2.5 lg:w-[50%]'>
            {techStack.map((tech, idx) => (
               <div key={idx} className="chip gap-2 bg-[var(--background-dark-100)] rounded-full h-14 flex items-center justify-center border-[var(--border-white-5)] border-[0.5px] px-6 py-4">
                  <tech.icon size={26} />
                  <span className='text-lg'>{tech.name}</span>
               </div>
            ))}
         </div>
      </section>
   )
}

export default Skills