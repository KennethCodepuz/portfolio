import React from 'react'
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { BiLogoGmail } from "react-icons/bi";
import Image from 'next/image';
import Portrait from '@/public/my-picture.jpg'

type Props = {}

const navItems = [
   { id: 'home', label: 'Home', href: '#hero' },
   { id: 'skills', label: 'Skills', href: '#skills-section' },
   { id: 'projects', label: 'Projects', href: '#projects' },
   { id: 'experience', label: 'Experience', href: '#experience' },
]

const Footer = (props: Props) => {
   return (
      <footer className='bg-[var(--background-dark-100)] py-14 px-6 lg:px-[200px] border-t border-[var(--border-white-5)]'>
         <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20 pb-10'>
            {/* Information Section */}
            <div id='information' className='flex flex-col gap-5 max-w-md'>
               <div className='flex items-center gap-3.5'>
                  <div id='self-picture' className='h-12 w-12 relative flex-shrink-0'>
                     <Image src={Portrait} alt="portrait" fill className='object-cover rounded-full' />
                  </div>
                  <div className='text-[var(--text-white-100)] font-semibold text-lg whitespace-nowrap'>Kenneth Sean Corpuz</div>
               </div>
               <p className='text-lg leading-normal text-[var(--text-white-40)]'>I build modern, user-focused web applications that combine clean design, performance, and real-world functionality.</p>
               <ul className='flex gap-4'>
                  <li className='flex-shrink-0'>
                     <a
                        href="https://github.com/kennethcodepuz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className='w-10 h-10 rounded-full bg-[var(--background-white-100)] text-[var(--text-dark-100)] flex items-center justify-center'
                     >
                        <FiGithub size={20} />
                     </a>
                  </li>
                  <li className='flex-shrink-0'>
                     <a
                        href="https://www.linkedin.com/in/kennethcorpuz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className='w-10 h-10 rounded-full bg-[var(--background-white-100)] text-[var(--text-dark-100)] flex items-center justify-center'
                     >
                        <LuLinkedin size={20} />
                     </a>
                  </li>
                  <li className='flex-shrink-0'>
                     <a
                        href="mailto:kennethseancorpuz14@gmail.com"
                        aria-label="Email"
                        className='w-10 h-10 rounded-full bg-[var(--background-white-100)] text-[var(--text-dark-100)] flex items-center justify-center'
                     >
                        <BiLogoGmail size={20} />
                     </a>
                  </li>
               </ul>
            </div>

            {/* Navigation Links Section */}
            <div id='navigation' className='flex flex-col gap-5 min-w-[150px]'>
               <ul className='flex flex-col gap-4'>
                  {navItems.map((item) => (
                     <li key={item.id}>
                        <a
                           href={item.href || `#${item.id}`}
                           className='text-[var(--text-white-100)] text-base leading-normal'
                        >
                           {item.label}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <div id='rights-reserved' className='pt-10 border-t border-[var(--border-white-5)]  text-center text-base leading-normal text-[var(--text-white-40)]'>© 2026 Kenneth Sean Corpuz. All rights reserved.</div>
      </footer>
   )
}

export default Footer