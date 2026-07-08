import React from 'react'
import TechStack from '../ui/TechStack'
import ReactIcon from '../icons/ReactIcon'
import NextjsIcon from '../icons/NextJS'
import Html5Icon from '../icons/Html5Icon'
import Css3Icon from '../icons/Css3Icon'
import JavascriptIcon from '../icons/JavaScriptIcon'
import TailwindIcon from '../icons/TailwindIcons'
import TanStackIcon from '../icons/TanStackIcon'
import GsapIcon from '../icons/GsapIcon'
import TypescriptIcon from '../icons/TypeScriptIcon'
import GitIcon from '../icons/GitIcon'
import SpringBootIcon from '../icons/SpringBootIcon'
import JavaIcon from '../icons/JavaIcon'

type Props = {}

const techStack = [
   { icon: ReactIcon, name: 'ReactJS' },
   { icon: NextjsIcon, name: 'NextJS' },
   { icon: Html5Icon, name: 'HTML5' },
   { icon: Css3Icon, name: 'CSS3' },
   { icon: JavascriptIcon, name: 'JavaScript' },
   { icon: TailwindIcon, name: 'Tailwind' },
   { icon: TanStackIcon, name: 'TanStack' },
   { icon: GsapIcon, name: 'GSAP' },
   { icon: TypescriptIcon, name: 'TypeScript' },
   { icon: GitIcon, name: 'Git' },
   { icon: SpringBootIcon, name: 'SpringBoot' },
   { icon: JavaIcon, name: 'Java' }
]


const Skills = (props: Props) => {
   return (
      <section id='skills-section' className='px-6 py-14 bg-[var(--background-charcoal-100)] flex flex-col items-center'>
         <div className='flex flex-col items-center justify-center gap-2.5'>
            <TechStack />
            <h1 className='text-3xl leading-[1.4]'>Tools I Build With</h1>
            <p className='text-lg leading-normal text-[var(--text-white-40)] text-center'>
               A curated set of technologies I rely on to build modern web and mobile applications
            </p>
         </div>
         <div id='tech-stack' className='flex flew-wrap w-full'>
            {techStack.map((tech, idx) => (
               <div key={idx} className="gap-2 bg-[var(--background-dark-100)] rounded-full h-14 w-34 flex items-center justify-center border-[var(--border-white-5)] border-[0.5px]">
                  <tech.icon size={26} />
                  <span className='text-lg'>{tech.name}</span>
               </div>
            ))}
         </div>
      </section>
   )
}

export default Skills