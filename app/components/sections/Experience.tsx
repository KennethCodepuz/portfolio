"use client"
import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import JobExperienceCard from '../ui/JobExperienceCard'
import ButtonRightArrow from '../ui/ButtonRightArrow'
import AnimatedTitle from '../ui/AnimatedTitle'
import AnimatedParagraph from '../ui/AnimatedParagraph'
import FadeUp from '../ui/FadeUp'
import SlideUp from '../ui/SlideUp'

const Experience = () => {
   return (
      <section id='experience' className='px-6 lg:px-[200px] py-14 md:py-24 md:px-14.5 lg:py-31 flex flex-col gap-10 bg-[var(--background-charcoal-100)] justify-center items-center w-full'>
         <div className='flex flex-col justify-center items-center gap-2.5'>
            <FadeUp>
               <SectionTitle className='bg-[var(--background-dark-100)]'>Experience</SectionTitle>
            </FadeUp>
            <AnimatedTitle className='text-3xl leading-[1.4]' delay={0.1}>
               {"Where I've Worked"}
            </AnimatedTitle>
            <AnimatedParagraph className='text-center text-lg leading-normal text-[var(--text-white-40)]'>
               {'Hands-on product engineering experience across frontend, backend, data, and delivery.'}
            </AnimatedParagraph>
         </div>
         <div id='job-experience-list' className='flex flex-col gap-2.5 w-full'>
            <JobExperienceCard defaultOpen={true}>
               <div className='flex flex-wrap justify-between items-center gap-2'>
                  <h2 className='text-[1.375rem] leading-[1.4] font-light'>Frontend Developer · Freelance</h2>
                  <p className='text-lg leading-normal text-[var(--text-white-40)]'>January 2025 - February 2025</p>
               </div>
               <ul className='list-disc px-6'>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Built a responsive client website with React and reusable UI components.</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Integrated Sanity as a headless CMS so content could be updated without code changes.</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Deployed and maintained the application on Vercel while iterating with the client on UI/UX and content structure.</li>
               </ul>
            </JobExperienceCard>
            <JobExperienceCard>
               <div className='flex flex-wrap justify-between items-center gap-2'>
                  <h2 className='text-[1.375rem] leading-[1.4] font-light'>Software Developer · HelportAI</h2>
                  <p className='text-lg leading-normal text-[var(--text-white-40)]'>July 2026 - July 2026</p>
               </div>
               <ul className='list-disc px-6'>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Built and maintained Asset Management System modules with Next.js, React, TypeScript, Prisma, and PostgreSQL.</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Delivered reusable Tailwind CSS interfaces connected to backend APIs and business logic for full-stack workflows.</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Designed and migrated PostgreSQL schemas through Prisma while protecting data integrity.</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Tested, debugged, and resolved issues across features to improve application reliability.</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Collaborated through Git-based feature development and code integration; supported production deployments, migrations, and post-release verification.</li>
               </ul>
            </JobExperienceCard>
         </div>
         <SlideUp>
            <ButtonRightArrow className="px-4 py-3 text-sm" link="/Resume,Kenneth-Sean-Corpuz.pdf" download={true}>Download My CV</ButtonRightArrow>
         </SlideUp>
      </section>
   )
}

export default Experience
