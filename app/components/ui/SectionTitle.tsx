import React, { ReactNode } from 'react'

type Props = {
   children: ReactNode,
   className?: string
}

const TechStack = ({ children, className }: Props) => {
   return (
      <div className={`w-22 h-7 rounded-full flex justify-center items-center ${className}`}>
         <h4 className='text-[0.625rem] text-[var(--text-white-100)] leading-[1.6] tracking-wide'>{children}</h4>
      </div>
   )
}

export default TechStack