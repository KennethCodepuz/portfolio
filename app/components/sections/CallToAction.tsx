import React from 'react'
import ButtonRightArrow from '../ui/ButtonRightArrow'

type Props = {}

const CallToAction = (props: Props) => {
   return (
      <section id='call-to-action' className='px-6 py-14 flex flex-col items-center justify-center bg-[var(--background-dark-100)]'>
         <div className='flex flex-col items-center justify-center gap-5'>
            <h1 className='text-3xl leading-[1.4]'>Let's Connect</h1>
            <p className='text-lg text-center leading-normal text-[var(--text-white-40)]'>I'm currently open to new opportunities, whether they're full-time roles, freelance projects, or collaborations.</p>
            <div className='flex gap-4'>
               <ButtonRightArrow className='px-4 py-3 text-sm'>Contact Me</ButtonRightArrow>
            </div>
         </div>
      </section>
   )
}

export default CallToAction