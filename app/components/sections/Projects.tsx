import React from 'react'
import SectionTitle from '../ui/SectionTitle'

type Props = {}

const Projects = (props: Props) => {
   return (
      <section className='px-6 py-14 bg-[var(--background-dark-100)] flex flex-col items-center justify-center gap-2.5'>
         <SectionTitle className='bg-[var(--background-charcoal-100)]'>Projects</SectionTitle>
         <h1 className='text-3xl leading-[1.4]'>Projects I've Shipped</h1>
         <p className='text-lg leading-normal text-[var(--text-white-40)] text-center'>
            A collection of my notable projects, ranging from web and mobile applications to backend systems
         </p>
      </section>
   )
}

export default Projects