'use client'

import React from 'react'
import SectionTitle from '../ui/SectionTitle'
import AnimatedTitle from '../ui/AnimatedTitle'
import AnimatedParagraph from '../ui/AnimatedParagraph'
import FadeUp from '../ui/FadeUp'

const skillGroups = [
   { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
   { title: 'Backend', skills: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'REST APIs'] },
   { title: 'Databases', skills: ['PostgreSQL', 'Prisma ORM', 'Redis'] },
   { title: 'AI', skills: ['LLM APIs / AI Agents', 'Plaid integrations', 'Async job workflows'] },
   { title: 'Engineering', skills: ['Git', 'Testing & debugging', 'Async job processing', 'Vercel deployments'] },
]

const Skills = () => (
   <section id='skills-section' className='px-6 lg:px-[200px] py-14 md:py-20 bg-[var(--background-charcoal-100)] flex flex-col items-center gap-10'>
      <div className='flex flex-col items-center justify-center gap-2.5'>
         <FadeUp><SectionTitle className='bg-[var(--background-dark-100)]'>Capabilities</SectionTitle></FadeUp>
         <AnimatedTitle className='text-3xl leading-[1.4]' delay={0.1}>How I Build Software</AnimatedTitle>
         <AnimatedParagraph className='text-lg leading-normal text-[var(--text-white-40)] max-w-2xl text-center'>
            {'A practical stack for building responsive user experiences, reliable services, and AI-enabled workflows.'}
         </AnimatedParagraph>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 w-full max-w-5xl'>
         {skillGroups.map((group, index) => (
            <FadeUp key={group.title} delay={index * 0.06} className='h-full'>
               <article className='h-full rounded-xl border border-[var(--border-white-5)] bg-[var(--background-dark-100)] p-5'>
                  <h3 className='text-lg font-medium'>{group.title}</h3>
                  <div className='flex flex-wrap gap-2 mt-4'>
                     {group.skills.map((skill) => <span key={skill} className='rounded-full border border-[var(--border-white-5)] bg-[var(--background-charcoal-100)] px-3 py-1.5 text-sm text-[var(--text-white-65)]'>{skill}</span>)}
                  </div>
               </article>
            </FadeUp>
         ))}
      </div>
   </section>
)

export default Skills
