"use client"
import React from 'react'
import ButtonRightArrow from '../ui/ButtonRightArrow'
import AnimatedTitle from '../ui/AnimatedTitle'
import AnimatedParagraph from '../ui/AnimatedParagraph'
import SlideUp from '../ui/SlideUp'

const CallToAction = () => {
   return (
      <section id='call-to-action' className='px-6 py-14 md:py-24 md:px-14.5 lg:py-31 flex flex-col items-center justify-center bg-[var(--background-dark-100)]'>
         <div className='py-[6.25rem] px-6 md:py-[12.5rem] md:px-14.5 flex flex-col items-center justify-center gap-5 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/CreativeShot.jpeg)] bg-center bg-cover rounded-[1.25rem]'>
            <AnimatedTitle className='text-3xl leading-[1.4] tracking-[-0.02em] text-center md:w-[90%] '>
               {'Let’s talk about your next software engineering hire.'}
            </AnimatedTitle>
            <AnimatedParagraph className='text-lg text-center leading-normal text-[var(--text-white-40)] md:w-[70%]'>
               {'I’m seeking Software Engineering internships and junior roles where I can contribute across frontend, backend, APIs, databases, and AI-enabled systems.'}
            </AnimatedParagraph>
            <SlideUp>
               <ButtonRightArrow className='px-4 py-3 text-sm' link="mailto:kennethseancorpuz14@gmail.com">Email Me</ButtonRightArrow>
            </SlideUp>
         </div>
      </section>
   )
}

export default CallToAction
