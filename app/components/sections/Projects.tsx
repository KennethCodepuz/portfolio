'use client'

import React from 'react'
import Link from 'next/link'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import AnimatedTitle from '../ui/AnimatedTitle'
import AnimatedParagraph from '../ui/AnimatedParagraph'
import FadeUp from '../ui/FadeUp'

const TechStack = ({ children }: { children: React.ReactNode }) => <p className='text-sm leading-relaxed text-[var(--text-white-65)]'><span className='text-white font-medium'>Stack: </span>{children}</p>

const Projects = () => (
   <section id='projects' className='px-6 lg:px-[200px] py-14 md:py-24 bg-[var(--background-dark-100)] flex flex-col items-center gap-3 w-full'>
      <FadeUp><SectionTitle className='bg-[var(--background-charcoal-100)]'>Selected Work</SectionTitle></FadeUp>
      <AnimatedTitle className='text-3xl leading-[1.4]' delay={0.1}>Projects I&apos;ve Built</AnimatedTitle>
      <AnimatedParagraph className='text-lg leading-normal text-[var(--text-white-40)] text-center max-w-2xl'>
         {'A closer look at systems I built end to end, with a focus on useful products and sound engineering choices.'}
      </AnimatedParagraph>

      <div className='flex w-full max-w-5xl flex-col gap-6 mt-6'>
         <FadeUp delay={0.15}>
            <article className='grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-[var(--background-charcoal-100)] p-3 md:p-5 lg:grid-cols-2'>
               <div className='flex min-h-[18rem] items-center'><ProjectCard content='/finance-autopilot.png' className='justify-center' /></div>
               <div className='py-3 md:py-6 flex flex-col gap-4'>
                  <span className='text-xs font-semibold tracking-[0.16em] uppercase text-[var(--ping-green)]'>Featured project · AI + backend</span>
                  <h3 className='text-3xl font-light'>Finance-Autopilot</h3>
                  <p className='text-lg leading-normal text-[var(--text-white-40)]'>An AI-assisted financial workflow that reads bank data, proposes actions, and keeps high-risk execution under human control.</p>
                  <p className='text-base leading-normal text-[var(--text-white-65)]'>The Next.js dashboard requests account data through a FastAPI service. Background workers process jobs through Redis, while the approval flow and hash-chained audit trail make important actions reviewable and resilient to retries.</p>
                  <TechStack>Next.js, TypeScript, Python, FastAPI, Plaid, ARQ, Redis, PostgreSQL, Vercel</TechStack>
                  <div className='flex flex-wrap gap-3 mt-auto'>
                     <a className='rounded-full bg-white px-4 py-2.5 text-sm font-bold text-black' href='https://finance-autopilot-silk.vercel.app/' target='_blank' rel='noopener noreferrer'>Live Demo</a>
                     <a className='rounded-full border border-[var(--border-white-75)] px-4 py-2.5 text-sm font-bold' href='https://github.com/KennethCodepuz/finance-autopilot' target='_blank' rel='noopener noreferrer'>GitHub</a>
                     <Link className='rounded-full border border-[var(--border-white-75)] px-4 py-2.5 text-sm font-bold' href='/projects/finance-autopilot'>Case Study</Link>
                  </div>
               </div>
            </article>
         </FadeUp>
         <FadeUp delay={0.2} className='h-full'>
            <article className='grid h-full grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-[var(--background-charcoal-100)] p-3 md:p-5 lg:grid-cols-2'>
               <div className='flex min-h-[18rem] items-center'><ProjectCard content='/aglugan_demo.mp4' className='justify-center' /></div>
               <div className='py-3 md:py-6 flex flex-col gap-4'>
                  <h3 className='text-2xl font-light'>AgLugan</h3>
                  <p className='text-lg leading-normal text-[var(--text-white-40)]'>A real-time jeepney tracking app that helps commuters check where their ride is before it arrives. The interface turns live location updates into a simple route-and-vehicle view for riders.</p>
                  <TechStack>React, TypeScript, Tailwind CSS, mapping and real-time location APIs</TechStack>
                  <a className='mt-auto w-fit rounded-full border border-[var(--border-white-75)] px-4 py-2.5 text-sm font-bold' href='https://github.com/KennethCodepuz/agLugan' target='_blank' rel='noopener noreferrer'>GitHub</a>
               </div>
            </article>
         </FadeUp>
      </div>
   </section>
)

export default Projects
