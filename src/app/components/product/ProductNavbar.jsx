'use client'
import { useState } from 'react'

export default function ProductNavbar() {
  const tabs = [
    'Overview',
    'About The Boat',
    'Cabin List',
    'Itinerary',
    'Policy',
  ]

  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <nav className="bg-white z-50 transition-shadow shadow-sm border-b-2 bg-gray-300 pt-4">
      <div className="max-w-full overflow-x-auto overflow-y-hidden -my-3 custom-scrollbar">
        <div className="flex gap-4 min-w-max h-[50px]">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`sm:text-base text-sm font-semibold max-sm:px-3 border-b-2 mb-3 transition-all
                ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-600'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
