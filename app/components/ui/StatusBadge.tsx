import React from 'react'
import GreenPing from '../icons/GreenPing'

type Props = {}

const StatusBadge = (props: Props) => {
  return (
    <div className="flex items-center gap-2">
      <GreenPing />
      <span className="text-sm font-medium">Available for work</span>
    </div>
  )
}

export default StatusBadge