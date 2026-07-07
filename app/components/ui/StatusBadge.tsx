import React from 'react'
import GreenPing from '../icons/GreenPing'

type Props = {}

const StatusBadge = (props: Props) => {
  return (
    <div className="flex py-2 px-4 items-center gap-2 bg-[var(--background-charcoal-100)] w-[55%] rounded-full  h-10">
      <GreenPing />
      <span className="text-sm font-medium text-base leading-[1.6] text-[var(--text-white-65)]">Available for work</span>
    </div>
  )
}

export default StatusBadge