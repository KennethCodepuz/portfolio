import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import JobExperienceCard from '../ui/JobExperienceCard'

type Props = {}

const Experience = (props: Props) => {
   return (
      <section id='experience' className='px-6 py-14 flex flex-col gap-10 bg-[var(--background-charcoal-100)] justify-center items-center'>
         <div className='flex flex-col justify-center items-center gap-2.5'>
            <SectionTitle className='bg-[var(--background-dark-100)]'>Experience</SectionTitle>
            <h1 className='text-3xl leading-[1.4]'>Where I've Worked</h1>
            <p className='text-center text-lg leading-normal text-[var(--text-white-40)]'>A summary of my professional journey and impact I've made</p>
         </div>
         <div id='job-experience-list' className='flex flex-col gap-2.5'>
            <JobExperienceCard>
               <div className='flex flex-col gap-2'>
                  <h2 className='text-[1.375rem] leading-[1.4] font-light'>Frontend Developer - Freelance</h2>
                  <p className='text-lg leading-normal text-[var(--text-white-40)]'>January 2025 - February 2025</p>
               </div>
               <ul className='list-disc px-6'>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Developed a responsive frontend website using Reac.</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Integrated Sanity as a headless CMS for dynamic content managemen.</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Implemented reusable components and modern UI patterns.</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Deployed and maintained the application on Vercel</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Collaborated with the client to refine UI/UX and content structure</li>
               </ul>
            </JobExperienceCard>
            <JobExperienceCard>
               <div className='flex flex-col gap-2'>
                  <h2 className='text-[1.375rem] leading-[1.4] font-light'>Software Developer Intern - HelportAI</h2>
                  <p className='text-lg leading-normal text-[var(--text-white-40)]'>July 2026 - July 2026</p>
               </div>
               <ul className='list-disc px-6'>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Developed and maintained an internal Asset Management System using Next.js, React, TypeScript,
                     Prisma ORM, and PostgreSQL.
                  </li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Engineered responsive and reusable frontend components using React, Next.js, and Tailwind CSS.</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Developed full-stack functionality by integrating frontend interfaces with backend APIs and business
                     logic.
                  </li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Designed, updated, and migrated PostgreSQL database schemas using Prisma ORM while maintaining
                     data integrity.
                  </li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Debugged and optimized application features through testing and issue resolution, improving overall
                     system reliability.
                  </li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Collaborated with developers using Git to manage feature development and code integration.</li>
                  <li className='text-lg leading-normal text-[var(--text-white-40)]'>Assisted in production deployment, database migration, and post-deployment verification to ensure
                     successful software releases.
                  </li>
               </ul>
            </JobExperienceCard>
         </div>
      </section>
   )
}

export default Experience