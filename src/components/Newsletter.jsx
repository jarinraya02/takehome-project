import React from 'react'

export default function Newsletter() {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-1">Follow the latest trends</h2>
        <p className="text-gray-600 mb-4">With our daily newsletter</p>
        <div className="flex w-full max-w-md gap-2">
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <button className="px-4 py-2 text-sm text-white bg-black rounded-md hover:bg-gray-800 transition-colors">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

