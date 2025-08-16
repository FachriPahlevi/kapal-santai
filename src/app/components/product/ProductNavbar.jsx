'use client'
import { useState } from 'react'

export default function ProductNavbar() {
  const tabs = [
    { label: 'Overview', target: 'details' },
    { label: 'About The Boat', target: 'about' },
    { label: 'Cabin List', target: 'cabins' },
    { label: 'Itinerary', target: 'itinerary' },
    { label: 'Policy', target: 'policy' },
  ]

  const [activeTab, setActiveTab] = useState('Overview')

  const handleClick = tab => {
    setActiveTab(tab.label)
    const el = document.getElementById(tab.target)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="bg-white border-b border-[var(--border)] sticky top-0 z-50">
      <div className="container">
        <div className="flex gap-6 h-[50px] overflow-x-auto custom-scrollbar">
          {tabs.map(tab => (
            <button
              key={tab.label}
              onClick={() => handleClick(tab)}
              className={`sm:text-base text-sm font-semibold border-b-2 transition-all
                ${
                  activeTab === tab.label
                    ? 'border-[var(--primary)] text-[var(--primary)]'
                    : 'border-transparent text-[var(--muted)]'
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
