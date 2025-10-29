import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import './index.css'

// Ensure initial theme on page load follows saved preference (default: light)
try {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') document.documentElement.classList.add('dark')
  else document.documentElement.classList.remove('dark')
} catch (e) {
  /* ignore */
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
