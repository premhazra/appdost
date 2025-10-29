import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t mt-16 py-6 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} AppDost</div>
          <div className="text-xs text-gray-400 dark:text-gray-500">GitHub - @premhazra </div>
        </div>
      </div>
    </footer>
  )
}
