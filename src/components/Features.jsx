import React from 'react'
import { SparklesIcon, UsersIcon, BoltIcon } from '@heroicons/react/24/outline'

const featureList = [
  { icon: SparklesIcon, title: 'Curated apps', text: 'Hand-picked tools for small businesses to get started quickly.' },
  { icon: UsersIcon, title: 'Trusted vendors', text: 'Vetted service providers you can rely on.' },
  { icon: BoltIcon, title: 'Fast setup', text: 'Quick onboarding and easy integrations.' }
]

export default function Features(){
  return (
    <section className="mt-12">
      <h3 className="text-xl font-semibold">Why AppDost?</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {featureList.map(f => (
          <div key={f.title} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow transition-colors">
            <div className="flex items-center gap-3">
              <f.icon className="w-7 h-7 text-indigo-600" />
              <div>
                <div className="font-medium text-gray-900 dark:text-gray-100">{f.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{f.text}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
