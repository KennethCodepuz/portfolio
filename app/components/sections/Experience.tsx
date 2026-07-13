import React from 'react'
import SectionTitle from '../ui/SectionTitle'

type Props = {}

const Experience = (props: Props) => {
   return (
      <section id='experience' className='px-6 py-14 flex flex-col bg-[var(--background-charcoal-100)] justify-center items-center'>
         <div className='flex flex-col justify-center items-center gap-2.5'>
            <SectionTitle className='bg-[var(--background-dark-100)]'>Experience</SectionTitle>
            <h1 className='text-3xl leading-[1.4]'>Where I've Worked</h1>
            <p className='text-center text-lg leading-normal text-[var(--text-white-40)]'>A summary of my professional journey and impact I've made</p>
         </div>
         <div id='job-experience-list'>

         </div>
      </section>
   )
}

export default Experience