import React from 'react'
import { IoIosArrowDropup } from "react-icons/io";

type Props = {
   children: React.ReactNode
}

const JobExperienceCard = ({ children }: Props) => {
   return (
      <div className='px-6 py-6 bg-[var(--background-dark-100)] rounded-[1.25rem] flex flex-col gap-6'>
         {children}
         <button>
            <IoIosArrowDropup size={24} />
         </button>
      </div>
   )
}

export default JobExperienceCard