import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
