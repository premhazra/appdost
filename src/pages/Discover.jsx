import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import ListingCard from '../components/ListingCard'
import { listings as allListings } from '../data/listings'

export default function Discover(){
  const [query, setQuery] = useState('')

  const filtered = allListings.filter(l => {
    const q = query.trim().toLowerCase()
    if (!q) return true
    return (
      l.name.toLowerCase().includes(q) ||
      l.category.toLowerCase().includes(q) ||
      l.location.toLowerCase().includes(q)
    )
  })

  return (
    <section>
      <h2 className="text-2xl font-semibold">Discover</h2>
      <p className="mt-2 text-gray-600">Find apps and services curated for small businesses. Use the search to filter listings.</p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <div className="sm:max-w-md">
          <SearchBar value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by name, category or location" />
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {filtered.map(item => (
            <div className="h-full" key={item.id}>
              <ListingCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
