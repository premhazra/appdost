import React from 'react'
import Rating from './Rating'

export default function ListingCard({item}){
  return (
    <article
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col h-full transition-colors"
      aria-labelledby={`listing-${item.id}`}>

      {/* header: abbr | content | rating - explicit 3-column grid to prevent squeezing */}
      <div className="grid [grid-template-columns:auto_minmax(0,1fr)_auto] gap-3 items-start">
        <div className="flex items-center justify-start">
          <div className="w-12 h-12 rounded-md bg-indigo-50 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-200 font-semibold">{item.abbr}</div>
        </div>

        <div className="min-w-0">
          <h3 id={`listing-${item.id}`} className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100 leading-snug break-words whitespace-normal">
            {item.name}
          </h3>

          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 whitespace-normal">
            <span className="inline-block break-words">{item.category}</span>
          </div>

          {/* small-screen rating - stays with content on xs */}
          <div className="sm:hidden mt-2">
            <div className="inline-flex items-center bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 rounded-md px-2 py-1">
              <Rating value={item.rating} />
            </div>
          </div>
        </div>

        <div className="flex items-start justify-end">
          <div className="hidden sm:inline-flex bg-yellow-50 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 rounded-md px-2 py-1 items-center">
            <Rating value={item.rating} />
          </div>
        </div>
      </div>

      {/* description should wrap and allow the footer to sit at the bottom */}
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 flex-grow break-words whitespace-normal leading-relaxed">
        {item.description}
      </p>

      {/* footer: location + view link - stays at bottom because parent is flex-col and description flex-grows */}
      <div className="mt-4 mt-auto flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 whitespace-normal">
        <div className="break-words whitespace-normal">{item.location}</div>
        <button className="text-indigo-600 dark:text-indigo-300 font-medium">View</button>
      </div>
    </article>
  )
}
