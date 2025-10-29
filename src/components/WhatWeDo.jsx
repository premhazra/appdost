import React from 'react'

const items = [
  { title: 'Web & Mobile Apps', text: 'Full-stack product development for web and mobile.' },
  { title: 'Custom Software', text: 'Tailored enterprise solutions and integrations.' },
  { title: 'UI/UX Design', text: 'User-centered design with prototypes and testing.' },
  { title: 'Cloud & DevOps', text: 'Scalable deployments and maintenance.' },
  { title: 'E-commerce', text: 'Shopfronts, payments and order management.' },
  { title: 'Support & Maintenance', text: 'Ongoing support and feature iteration.' }
]

export default function WhatWeDo(){
  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold">What We Do</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map(i => (
          <div key={i.title} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow transition-colors">
            <div className="font-medium text-gray-900 dark:text-gray-100">{i.title}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">{i.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
