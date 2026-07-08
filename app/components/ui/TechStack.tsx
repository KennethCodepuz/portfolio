import React from 'react'

type Props = {}

const TechStack = (props: Props) => {
   return (
      <div className='bg-[var(--background-dark-100)] w-22 h-7 rounded-full flex justify-center items-center'>
         <h4 className='text-[0.625rem] text-[var(--text-white-100)] leading-[1.6] tracking-wide'>Tech Stack</h4>
      </div>
   )
}

export default TechStack