import React from 'react'
import ListingCard from './ListingCard'
import { listings } from '../data/listings'

export default function Marketplace(){
  const preview = listings.slice(0, 3)

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Top Rated Listings</h3>
        <div className="text-sm text-gray-500">Top picks for you</div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 items-stretch">
        {preview.map(item => (
          <div className="h-full" key={item.id}>
            <ListingCard item={item} />
          </div>
        ))}
      </div>

      <div className="mt-4 text-right">
        <a className="text-indigo-600 font-medium" href="/discover">View all listings →</a>
      </div>
    </section>
  )
}
