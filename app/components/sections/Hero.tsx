import React from 'react'
import StatusBadge from '../ui/StatusBadge'
import SeeMyWorks from '../ui/SeeMyWorks'
import ContactButton from '../ui/ContactButton'
import IconCarousel from '../ui/IconCarousel'
import Image from 'next/image'
import Portrait from '@/public/my-picture.jpg'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section id='hero'>
      <div>
            <StatusBadge />
         <div>
            Software Engineer
         </div>
         <p>
            Hi, I'm Kenneth Sean Corpuz, a Software Engineer and Computer Science student passionate about building scalable web and mobile applications. I enjoy creating clean, user-focused digital experiences while continuously improving my skills in software architecture, system design, cloud technologies, and performance optimization. My goal is to build software that is reliable, maintainable, and designed to scale.
         </p>
         <div>
            <SeeMyWorks />
            <ContactButton />
         </div>
      </div>
      <IconCarousel />
      <div id='self-portrait-hero'>
         <Image
         src={Portrait}
         alt="Self Portrait"
         width={480}
         height={480}
         className="rounded-lg"
         />
      </div>
    </section>
  )
}

export default Hero