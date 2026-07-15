import React from 'react'
import ButtonRightArrow from '../ui/ButtonRightArrow'

type Props = {}

const CallToAction = (props: Props) => {
   return (
      <section id='call-to-action' className='px-6 py-14 flex flex-col items-center justify-center bg-[var(--background-dark-100)]'>
         <div className='py-[6.25rem] px-6 flex flex-col items-center justify-center gap-5 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(/CreativeShot.jpeg)] bg-center bg-cover rounded-[1.25rem]'>
            <h1 className='text-3xl leading-[1.4] tracking-[-0.02em]'>Let's Connect</h1>
            <p className='text-lg text-center leading-normal text-[var(--text-white-40)]'>I'm currently open to new opportunities, whether they're full-time roles, freelance projects, or Internships.</p>
            <ButtonRightArrow className='px-4 py-3 text-sm'>Contact Me</ButtonRightArrow>
         </div>
      </section>
   )
}

export default CallToAction