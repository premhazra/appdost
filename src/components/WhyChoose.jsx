import React from 'react'

const reasons = [
  { title: 'Quality Assurance', text: 'Proven processes and QA for reliable delivery.' },
  { title: 'Transparent Pricing', text: 'Clear estimates and flexible engagement models.' },
  { title: 'Dedicated Teams', text: 'Experienced engineers and product managers.' }
]

export default function WhyChoose(){
  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold">Why Choose AppDost?</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {reasons.map(r => (
          <div key={r.title} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow transition-colors">
            <div className="font-medium text-gray-900 dark:text-gray-100">{r.title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">{r.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
