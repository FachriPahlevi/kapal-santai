'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function ProductFacilities({ items = [] }) {
  const [isOpen, setIsOpen] = useState(false)
  const list = (items || []).filter(Boolean).map(s => String(s).trim())
  const left = list.filter((_, i) => i % 2 === 0)
  const right = list.filter((_, i) => i % 2 === 1)

  return (
    <>
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full p-4 text-left"
        >
          <p className="text-xl font-semibold text-black">Spesifikasi kapal</p>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        {isOpen && (
          <div className="px-4 pb-4">
            <div className="space-y-2 text-sm">
              {list.map((t, i) => (
                <div key={i} className="flex gap-2">
                  <p>•</p>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="max-sm:hidden sm:-mt-8">
        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold text-black mb-2">
            Fasilitas kapal
          </p>
        </div>
        <div className="grid grid-cols-2 text-14 px-2">
          <div>
            {left.map((t, i) => (
              <div key={`l-${i}`} className="flex gap-2">
                <p>•</p>
                <p>{t}</p>
              </div>
            ))}
          </div>
          <div>
            {right.map((t, i) => (
              <div key={`r-${i}`} className="flex gap-2 ml-4">
                <p>•</p>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
