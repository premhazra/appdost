import React from 'react'

export default function Messages(){
  return (
    <section>
      <h2 className="text-2xl font-semibold">Messages</h2>
      <p className="mt-2 text-gray-600">Your recent conversations with vendors and customers.</p>

      <div className="mt-6 space-y-3">
        <div className="p-3 bg-white rounded shadow">Message thread with Vendor A</div>
        <div className="p-3 bg-white rounded shadow">Message thread with Customer X</div>
      </div>
    </section>
  )
}
