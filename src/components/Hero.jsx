import React from 'react'

export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-sm transition-colors">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Reimagine how you discover local apps & services</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-xl">A friendly marketplace to find vetted apps, build your presence, and connect with customers — redesigned with clarity and speed.</p>

          <div className="mt-6 flex gap-3">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-md font-medium">Get started</button>
            <button className="border rounded-md px-4 py-2">Learn more</button>
          </div>
        </div>

        <div className="mt-6 sm:mt-0 sm:ml-8">
          <div className="w-64 h-40 bg-white rounded-xl shadow-md p-4">
            <div className="text-sm text-gray-500">Quick preview</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-gray-100 rounded p-2 text-xs">Design tools</div>
              <div className="bg-gray-100 rounded p-2 text-xs">Marketing</div>
              <div className="bg-gray-100 rounded p-2 text-xs">Payments</div>
              <div className="bg-gray-100 rounded p-2 text-xs">Hiring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
