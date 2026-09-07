import React from 'react'
import Image from 'next/image'


type Props = {
   content: string,
   children?: React.ReactNode,
   className?: string,
   mediaFit?: 'cover' | 'contain'
}

const isImage = (src: string) => /\.(png|jpe?g|gif|webp|svg)$/i.test(src)

const ProjectCard = ({ content, children, className = '', mediaFit = 'cover' }: Props) => {
   return (
      <div className={`bg-[var(--background-charcoal-100)] px-2 py-2 rounded-xl w-full h-full flex flex-col ${className}`}>
         {isImage(content) ? (
            <div className={`relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 ring-1 ring-white/5 ${mediaFit === 'contain' ? 'bg-black' : ''}`}>
               <Image src={content} alt='Project preview' fill className={mediaFit === 'contain' ? 'object-contain' : 'object-cover'} />
            </div>
         ) : (
            <div className='flex min-h-[18rem] w-full items-center justify-center rounded-xl border border-white/10 bg-black ring-1 ring-white/5'>
               <video className='max-h-[24rem] max-w-full rounded-xl' controls autoPlay loop muted playsInline>
               <source src={content} type='video/mp4' />
               </video>
            </div>
         )}
         {children}
      </div>
   )
}

export default ProjectCard
