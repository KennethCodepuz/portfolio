import React from 'react'


type Props = {
   content: string,
   children?: React.ReactNode
}

const ProjectCard = ({ content, children }: Props) => {
   return (
      <div className='bg-[var(--background-charcoal-100)] px-2 py-2 rounded-xl'>
         <video className='w-full rounded-2xl mb-3' controls autoPlay loop muted playsInline>
            <source src={content} type='video/mp4' />
         </video>
         {children}
      </div>
   )
}

export default ProjectCard