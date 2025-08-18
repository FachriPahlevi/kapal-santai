'use client'

import { useEffect, useRef, useState } from 'react'

const TABS = [
  { id: 'overview', label: 'Gambaran Umum' },
  { id: 'about', label: 'Tentang Kapal' },
  { id: 'cabins', label: 'Daftar Kabin' },
  { id: 'itinerary', label: 'Rencana Perjalanan' },
  { id: 'policy', label: 'Kebijakan' },
]

export default function ProductNavbar() {
  const [active, setActive] = useState('overview')
  const [stuck, setStuck] = useState(false)
  const [sections, setSections] = useState([])
  const sentryRef = useRef(null)

  const handleTabClick = id => {
    setActive(id)
    const el =
      typeof document !== 'undefined' ? document.getElementById(id) : null
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (typeof document === 'undefined') return
    setSections(TABS.map(t => document.getElementById(t.id)).filter(Boolean))
  }, [])

  useEffect(() => {
    if (!sentryRef.current) return
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), {
      rootMargin: '-1px 0px 0px 0px',
    })
    io.observe(sentryRef.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!sections.length) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [sections])

  return (
    <>
      <div ref={sentryRef} aria-hidden className="h-0" />
      <nav
        className={
          stuck
            ? 'fixed top-0 left-38 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200'
            : ''
        }
      >
        <div className="mx-auto max-w-8xl">
          <div className="flex overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex-shrink-0 pr-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  active === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div className={stuck ? 'h-[48px]' : ''} />
    </>
  )
}
