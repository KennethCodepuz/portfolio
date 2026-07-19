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
import ClaudeIcon from '../icons/ClaudeIcon'

type Props = {}

const icons = [
  ReactIcon,
  NextjsIcon,
  Html5Icon,
  Css3Icon,
  JavascriptIcon,
  TailwindIcon,
  TanStackIcon,
  GsapIcon,
  TypescriptIcon,
  GitIcon,
  SpringBootIcon,
  JavaIcon,
  ClaudeIcon
]

const doubledIcons = [...icons, ...icons]

const IconCarousel = (props: Props) => {
  return (
    <div id='icon-carousel' className='w-full overflow-hidden mask-fade lg:w-[90%]'>
      <div className="flex flex-row flex-nowrap w-max py-2 animate-carousel-loop">
        {doubledIcons.map((Icon, idx) => (
          <div
            key={idx}
            className="bg-[var(--background-charcoal-100)] p-4 rounded-2xl flex items-center justify-center mr-5"
          >
            <Icon size={60} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default IconCarousel