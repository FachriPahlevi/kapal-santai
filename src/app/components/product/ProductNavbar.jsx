'use client'

import { useState } from 'react'

const tabs = [
  { id: 'overview', label: 'Gambaran Umum', href: '#overview' },
  { id: 'about', label: 'Tentang Kapal', href: '#about' },
  { id: 'cabins', label: 'Daftar Kabin', href: '#cabins' },
  { id: 'itinerary', label: 'Rencana Perjalanan', href: '#itinerary' },
  { id: 'policy', label: 'Kebijakan', href: '#policy' },
]

export default function ProductNavbar() {
  const [activeTab, setActiveTab] = useState('overview')

  const handleTabClick = tabId => {
    setActiveTab(tabId)
    const element = document.getElementById(tabId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex-shrink-0 pr-6 py-2 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
