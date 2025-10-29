import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

/**
 * Rating component
 * Props:
 * - value: number (required) — rating value to display
 * - max: number (optional) — max rating (default 5)
 * - size: 'sm'|'md' (optional) — control icon/text size
 * - className: string (optional) — extra wrapper classes
 */
export default function Rating({ value, max = 5, size = 'sm', className = '' }){
  const sizes = {
    sm: { icon: 'w-4 h-4', text: 'text-sm' },
    md: { icon: 'w-5 h-5', text: 'text-base' }
  }
  const s = sizes[size] || sizes.sm

  return (
    <div
      className={`inline-flex items-center gap-1 text-yellow-500 ${s.text} ${className}`}
      role="img"
      aria-label={`Rated ${value} out of ${max}`}
    >
      <StarIcon className={s.icon} aria-hidden="true" />
      <span className="tabular-nums" aria-hidden>{value}</span>
    </div>
  )
}
