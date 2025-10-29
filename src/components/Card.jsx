import React from 'react'

export default function Card({title, description}){
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 hover:shadow-md transition-colors flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">A</div>
        <div className="text-sm text-gray-500">New</div>
      </div>

      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm flex-grow break-words whitespace-normal">{description}</p>

      <div className="mt-4 mt-auto">
        <button className="text-indigo-600 font-medium">Explore →</button>
      </div>
    </article>
  )
}
