import React from 'react'
import GreenPing from '../icons/GreenPing'

const StatusBadge = () => {
  return (
    <div className="flex py-2 px-4 items-center gap-2 bg-[var(--background-charcoal-100)] w-fit rounded-full h-10">
      <GreenPing />
      <span className="font-medium text-sm leading-[1.6] text-[var(--text-white-65)]">Open to internships & junior roles</span>
    </div>
  )
}

export default StatusBadge
