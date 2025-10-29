import React from 'react'

export default function StatsStrip(){
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '4+', label: 'Offices' },
    { value: '1', label: 'Global Recognition' },
    { value: '2025', label: 'Awards' }
  ]

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition-colors">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {stats.map(s => (
          <div key={s.label} className="py-2">
            <div className="text-2xl font-bold text-indigo-600">{s.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
