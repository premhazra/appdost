import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header(){
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      return saved === 'dark'
    } catch (e) {
      return false
    }
  })
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const el = document.documentElement
    if (dark) {
      el.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      el.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-10 h-10 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">AD</Link>
          <div>
            <div className="font-bold text-gray-900 dark:text-gray-100">AppDost</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Find & connect</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* mobile menu button */}
          <button className="sm:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" /> : <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />}
          </button>

          {/* desktop nav */}
          <nav className="hidden sm:flex items-center gap-4" aria-label="Main navigation">
            <input aria-label="Top search" className="hidden md:inline-block border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:bg-gray-800 dark:border-gray-700" placeholder="Search apps, vendors..." />
            <NavLink to="/discover" className={({isActive}) => isActive ? 'text-indigo-600 font-medium' : 'text-sm text-gray-700 dark:text-gray-200'}>Discover</NavLink>
            <NavLink to="/profile" className={({isActive}) => isActive ? 'text-indigo-600 font-medium' : 'text-sm text-gray-700 dark:text-gray-200'}>Profile</NavLink>
            <NavLink to="/messages" className={({isActive}) => isActive ? 'text-indigo-600 font-medium' : 'text-sm text-gray-700 dark:text-gray-200'}>Messages</NavLink>
            <button aria-label="Sign in" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">Sign in</button>
          </nav>

          {/* dark mode toggle */}
          <button aria-label="Toggle dark mode" onClick={() => setDark(d => !d)} className="p-2">
            {dark ? <SunIcon className="w-5 h-5 text-yellow-400" /> : <MoonIcon className="w-5 h-5 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* mobile nav panel */}
      {open && (
        <div className="sm:hidden px-4 pb-4">
          <div className="flex flex-col gap-2">
            <NavLink to="/discover" onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-gray-800 dark:text-gray-100">Discover</NavLink>
            <NavLink to="/profile" onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-gray-800 dark:text-gray-100">Profile</NavLink>
            <NavLink to="/messages" onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-gray-800 dark:text-gray-100">Messages</NavLink>
            <button className="w-full text-left px-3 py-2 rounded bg-indigo-600 text-white">Sign in</button>
          </div>
        </div>
      )}
    </header>
  )
}
