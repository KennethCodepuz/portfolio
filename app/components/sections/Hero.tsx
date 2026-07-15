import React from 'react'
import StatusBadge from '../ui/StatusBadge'
import DarkBGButton from '../ui/DarrkBGButton'
import ButtonRightArrow from '../ui/ButtonRightArrow'
import IconCarousel from '../ui/IconCarousel'
import Image from 'next/image'
import Portrait from '@/public/my-picture.jpg'

type Props = {}

const Hero = (props: Props) => {
   return (
      <section id='hero' className='px-6 lg:px-[200px] py-14 lg:py-30 flex flex-col lg:flex-row lg:gap-1 justify-center items-center gap-12 w-full min-h-[calc(100vh-5rem)]'>
         <div className='flex gap-5 flex-col w-full lg:w-[60%]'>
            <StatusBadge />
            <h1 className='text-5xl lg:text-6xl font-semibold leading-[1.1]'>
               AI/Software
               <br />
               Engineer.
            </h1>
            <p className='text-lg leading-normal text-[var(--text-white-40)] lg:w-[70%]'>
               Hi, I'm Kenneth Sean Corpuz, a Software Engineer and Computer Science student passionate about building scalable web and mobile applications. My goal is to build software that is reliable, maintainable, and designed to scale.
            </p>
            <div className='flex gap-4 items-center'>
               <DarkBGButton className='px-4 py-3 text-sm'>See My Works</DarkBGButton>
               <ButtonRightArrow className="px-4 py-3 text-sm" link="https://www.linkedin.com/in/kennethcorpuz/">Contact Me</ButtonRightArrow>
            </div>
            <IconCarousel />
         </div>
         <div id='self-portrait-hero' className='bg-[var(--background-charcoal-100)] rounded-[1.25rem] flex justify-center items-center w-full lg:h-[31.25rem] lg:w-[31.25rem] aspect-square relative p-6'>
            <Image
               src={Portrait}
               alt="Self Portrait"
               fill
               className="rounded-[1rem] object-cover p-2"
               priority
            />
         </div>
      </section>
   )
}

export default Hero