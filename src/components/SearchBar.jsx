import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchBar({value, onChange, placeholder='Search listings...'}){
  return (
    <label className="relative block" aria-label="Search listings">
      <span className="sr-only">Search</span>
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 dark:text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        aria-label="Search input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-10 pr-3 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-gray-100"
      />
    </label>
  )
}
