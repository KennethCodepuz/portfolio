import React from 'react'
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

const IconCarousel = (props: Props) => {
  return (
    <div id='icon-carousel'>
      <div className="flex flex-row gap-5 overflow-hidden">
         <ReactIcon size={48} />
         <NextjsIcon size={48} />
         <Html5Icon size={48} />
         <Css3Icon size={48} />
         <JavascriptIcon size={48} />
         <TailwindIcon />
         <TanStackIcon size={48} />
         <GsapIcon size={48} />
         <TypescriptIcon size={48} />
         <GitIcon size={48} />
         <SpringBootIcon size={48} />
         <JavaIcon size={48} />
      </div>
    </div>
  )
}

export default IconCarousel