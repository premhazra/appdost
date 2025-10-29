import React from 'react'

export default function ContactCard(){
  return (
    <aside className="mt-6 p-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-lg">
      <h4 className="text-lg font-semibold">Get in Touch</h4>
      <p className="text-sm mt-2">Start your project with a short message and we’ll get back to you.</p>

      <form className="mt-4 grid grid-cols-1 gap-2">
        <input aria-label="Your name" placeholder="Your name" className="px-3 py-2 rounded text-gray-900" />
        <input aria-label="Your email" placeholder="Email" className="px-3 py-2 rounded text-gray-900" />
        <textarea aria-label="Message" placeholder="Project details" rows={3} className="px-3 py-2 rounded text-gray-900"></textarea>
        <div className="text-right">
          <button className="bg-white text-indigo-600 font-medium px-4 py-2 rounded">Send</button>
        </div>
      </form>
    </aside>
  )
}
