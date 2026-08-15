import React from 'react'
import Image from 'next/image'


type Props = {
   content: string,
   children?: React.ReactNode
}

const isImage = (src: string) => /\.(png|jpe?g|gif|webp|svg)$/i.test(src)

const ProjectCard = ({ content, children }: Props) => {
   return (
      <div className='bg-[var(--background-charcoal-100)] px-2 py-2 rounded-xl w-full h-full flex flex-col'>
         {isImage(content) ? (
            <div className='relative w-full aspect-video rounded-xl overflow-hidden mb-3 border border-white/10 ring-1 ring-white/5'>
               <Image src={content} alt='Project preview' fill className='object-cover' />
            </div>
         ) : (
            <video className='w-full rounded-xl mb-3 border border-white/10 ring-1 ring-white/5' controls autoPlay loop muted playsInline>
               <source src={content} type='video/mp4' />
            </video>
         )}
         {children}
      </div>
   )
}

export default ProjectCard