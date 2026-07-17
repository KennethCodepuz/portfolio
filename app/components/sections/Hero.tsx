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

type Props = {}

const Hero = (props: Props) => {
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
               {'AI/Software\nEngineer.'}
            </AnimatedTitle>

            {/* Paragraph — lines fade up starting at 0.55s */}
            <AnimatedParagraph className='text-lg leading-normal text-[var(--text-white-40)] lg:w-[70%]' triggerOnMount>
               {"Hi, I'm Kenneth Sean Corpuz, a Software Engineer and Computer Science student passionate about building scalable web and mobile applications. My goal is to build software that is reliable, maintainable, and designed to scale."}
            </AnimatedParagraph>

            {/* Buttons */}
            <div className='flex flex-wrap gap-4 items-center'>
               <SlideUp triggerOnMount delay={0.8}>
                  <DarkBGButton className='px-4 py-3 text-sm'>See My Works</DarkBGButton>
               </SlideUp>
               <SlideUp triggerOnMount delay={0.95}>
                  <ButtonRightArrow className="px-4 py-3 text-sm" link="https://www.linkedin.com/in/kennethcorpuz/">Contact Me</ButtonRightArrow>
               </SlideUp>
            </div>

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