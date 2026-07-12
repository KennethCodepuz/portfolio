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
      <section id='hero' className='px-6 py-14 flex flex-col  '>
         <div className='flex gap-5 flex-col w-full'>
            <StatusBadge />
            <h1 className='text-5xl'>
               Software
               <br />
               Engineer.
            </h1>
            <p className='text-lg leading-normal text-[var(--text-white-40)]'>
               Hi, I'm Kenneth Sean Corpuz, a Software Engineer and Computer Science student passionate about building scalable web and mobile applications. My goal is to build software that is reliable, maintainable, and designed to scale.
            </p>
            <div className='flex gap-4 items-center'>
               <DarkBGButton className='px-4 py-3 text-sm'>See My Works</DarkBGButton>
               <ButtonRightArrow className="px-4 py-3 text-sm">Contact Me</ButtonRightArrow>
            </div>
            <IconCarousel />
         </div>
         <div id='self-portrait-hero' className='bg-[var(--background-charcoal-100)] flex justify-center items-center'>
            <Image
               src={Portrait}
               alt="Self Portrait"
               width={400}
               height={400}
               className="rounded-lg"
            />
         </div>
      </section>
   )
}

export default Hero