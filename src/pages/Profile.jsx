import React from 'react'

export default function Profile(){
  return (
    <section>
      <h2 className="text-2xl font-semibold">Profile</h2>
      <p className="mt-2 text-gray-600">Create and manage your business profile. Add description, services, and contact details.</p>

      <div className="mt-6 bg-white rounded p-4 shadow">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">BP</div>
          <div>
            <div className="font-semibold">Business Profile</div>
            <div className="text-sm text-gray-500">New Delhi, India</div>
          </div>
        </div>

        <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input className="border rounded px-3 py-2" placeholder="Business name" />
          <input className="border rounded px-3 py-2" placeholder="Location" />
          <textarea className="border rounded px-3 py-2 col-span-1 sm:col-span-2" placeholder="Description" rows={4}></textarea>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded">Save profile</button>
        </form>
      </div>
    </section>
  )
}
