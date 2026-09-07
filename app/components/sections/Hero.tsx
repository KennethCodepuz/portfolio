'use client'

import React from 'react'
import StatusBadge from '../ui/StatusBadge'
import DarkBGButton from '../ui/DarrkBGButton'
import ButtonRightArrow from '../ui/ButtonRightArrow'
import IconCarousel from '../ui/IconCarousel'
import Image from 'next/image'
import Portrait from '@/public/my-picture.jpg'
import AnimatedTitle from '../ui/AnimatedTitle'
import AnimatedParagraph from '../ui/AnimatedParagraph'
import FadeUp from '../ui/FadeUp'
import SlideUp from '../ui/SlideUp'
import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi'

const Hero = () => {
   return (
      <section id='hero' className='px-6 lg:px-[200px] py-14 lg:py-30 flex flex-col lg:flex-row lg:gap-1 justify-center items-center gap-12 w-full'>
         <div className='flex gap-5 flex-col w-full lg:w-[60%]'>

            {/* Badge — first thing to appear */}
            <FadeUp triggerOnMount delay={0.1}>
               <StatusBadge />
            </FadeUp>

            {/* Title — chars blur in starting at 0.2s */}
            <AnimatedTitle
               className='text-5xl lg:text-6xl font-semibold leading-[1.1]'
               triggerOnMount
            >
               {'Software Engineer\nbuilding AI-powered systems.'}
            </AnimatedTitle>

            {/* Paragraph — lines fade up starting at 0.55s */}
            <AnimatedParagraph className='text-lg leading-normal text-[var(--text-white-40)] lg:w-[70%]' triggerOnMount>
               {"I'm Kenneth Sean Corpuz. I build dependable products across the frontend and backend—from polished interfaces and APIs to databases, asynchronous workflows, and AI-powered features."}
            </AnimatedParagraph>

            {/* Buttons */}
            <div className='flex flex-wrap gap-4 items-center'>
               <SlideUp triggerOnMount delay={0.8}>
                  <DarkBGButton className='px-4 py-3 text-sm' link='#projects'>See My Work</DarkBGButton>
               </SlideUp>
               <SlideUp triggerOnMount delay={0.95}>
                  <ButtonRightArrow className="px-4 py-3 text-sm" link="https://www.linkedin.com/in/kennethcorpuz/">Contact Me</ButtonRightArrow>
               </SlideUp>
            </div>

            <FadeUp triggerOnMount delay={1.05}>
               <div className='flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--text-white-65)]'>
                  <a href='https://github.com/kennethcodepuz' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 hover:text-white transition-colors'><FiGithub /> GitHub</a>
                  <a href='https://www.linkedin.com/in/kennethcorpuz/' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 hover:text-white transition-colors'><FiLinkedin /> LinkedIn</a>
                  <a href='/Resume,Kenneth-Sean-Corpuz.pdf' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 hover:text-white transition-colors'><FiFileText /> Resume</a>
               </div>
            </FadeUp>

            {/* Icon carousel */}
            <FadeUp triggerOnMount delay={1.15}>
               <IconCarousel />
            </FadeUp>

         </div>

         {/* Portrait — slides up from the right column */}
         <FadeUp
            triggerOnMount
            delay={0.35}
            className='w-full lg:h-[31.25rem] lg:w-[31.25rem]'
         >
            <div id='self-portrait-hero' className='bg-[var(--background-charcoal-100)] rounded-[1.25rem] flex justify-center items-center w-full aspect-square relative p-6 lg:h-[31.25rem]'>
               <Image
                  src={Portrait}
                  alt="Self Portrait"
                  fill
                  className="rounded-[1rem] object-cover p-2"
                  priority
               />
            </div>
         </FadeUp>

      </section>
   )
}

export default Hero
