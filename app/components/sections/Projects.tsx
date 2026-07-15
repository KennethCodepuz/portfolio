import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import DarkBGButton from '../ui/DarrkBGButton'
import ButtonRightArrow from '../ui/ButtonRightArrow'

type Props = {}

const Projects = (props: Props) => {
   return (
      <section id='projects' className='px-6 lg:px-[200px] py-14 md:py-24 md:px-14.5 bg-[var(--background-dark-100)] flex flex-col items-center justify-center gap-2.5'>
         <SectionTitle className='bg-[var(--background-charcoal-100)]'>Projects</SectionTitle>
         <h1 className='text-3xl leading-[1.4]'>Projects I've Shipped</h1>
         <p className='text-lg leading-normal text-[var(--text-white-40)] text-center lg:w-[50%]'>
            A collection of my notable projects, ranging from web and mobile applications to backend systems
         </p>

         <ProjectCard content="/aglugan_demo.mp4">
            <div className='py-10 px-8 bg-[var(--background-dark-100)] rounded-xl flex flex-col gap-[10px]'>
               <h1 className='text-2xl leading-[1.4] font-light text-[var(--text-white-100)]'>AgLugan</h1>
               <p className='text-lg leading-normal text-[var(--text-white-40)]'>A real-time jeepney tracking app that helps commuters see exactly where their ride is before it arrives.</p>
               <div className='flex gap-4'>
                  <DarkBGButton className='text-sm py-2 px-3' link='https://github.com/KennethCodepuz/agLugan'>Source Code</DarkBGButton>
               </div>
            </div>
         </ProjectCard>
      </section>
   )
}

export default Projects