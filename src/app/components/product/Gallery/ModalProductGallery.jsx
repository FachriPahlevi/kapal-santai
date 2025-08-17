// components/product/Gallery/ModalProductGallery.jsx
'use client'

import { useEffect, useMemo, useRef, useCallback, useState } from 'react'
import { X } from 'lucide-react'

export default function ModalProductGallery({
  isOpen,
  onClose = () => {},
  title = '-',
  images = [],
  onReserve = () => {},
  initialIndex = 0,
}) {
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)
  const scrollRef = useRef(null)
  const [activeTab, setActiveTab] = useState(0)

  const { processedImages, tabs } = useMemo(() => {
    const safeImages = (Array.isArray(images) ? images : [])
      .map((it, i) => {
        if (typeof it === 'string') {
          return {
            id: i,
            src: it,
            alt: `Gallery image ${i + 1}`,
            type: 'Outdoor',
          }
        }
        const src = (it?.src || it?.image || '').trim()
        if (!src) return null
        return {
          id: it?.id ?? src ?? i,
          src,
          alt: it?.alt || it?.type || `Gallery image ${i + 1}`,
          type: it?.type || 'Outdoor',
        }
      })
      .filter(Boolean)
    const allTypes = [...new Set(safeImages.map(img => img.type))]
    const tabsData = allTypes
      .map(type => ({
        label: type,
        type,
        count: safeImages.filter(img => img.type === type).length,
      }))
      .filter(tab => tab.count > 0)
    return { processedImages: safeImages, tabs: tabsData }
  }, [images])

  const filteredImages = useMemo(() => {
    if (!tabs.length || activeTab >= tabs.length) return processedImages
    const selectedType = tabs[activeTab].type
    return processedImages.filter(img => img.type === selectedType)
  }, [processedImages, tabs, activeTab])

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.documentElement.style.overflow = prevOverflow
    }
  }, [isOpen, handleKeyDown])

  useEffect(() => {
    if (!isOpen) return
    const selected = processedImages[initialIndex]
    if (!selected) return
    const tabIdx = Math.max(
      0,
      tabs.findIndex(t => t.type === selected.type)
    )
    setActiveTab(tabIdx)
    const id = `gallery-${selected.id}`
    requestAnimationFrame(() => {
      const el = document.getElementById(id)
      el?.scrollIntoView({ block: 'center' })
    })
  }, [isOpen, initialIndex, processedImages, tabs])

  useEffect(() => {
    if (isOpen) setActiveTab(0)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-50 bg-black/60"
      onClick={e => e.target === dialogRef.current && onClose()}
    >
      <div className="bg-white md:w-5/6 w-full max-md:h-full overflow-y-clip md:max-h-[85%] absolute md:top-[7.5%] left-1/2 -translate-x-1/2 p-6 md:rounded-xl flex flex-col">
        <div className="flex justify-between items-center mb-6 md:hidden">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="w-6 h-6"
          >
            <X className="w-6 h-6" />
          </button>
          <p className="flex-1 text-center text-3xl font-semibold">{title}</p>
        </div>

        <div className="items-center gap-4 mb-6 max-md:hidden flex">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="w-6 h-6"
          >
            <X className="w-6 h-6" />
          </button>
          <p className="flex-1 text-3xl font-bold">{title}</p>
          <div className="w-[240px]">
            <button
              type="button"
              onClick={onReserve}
              className="btn btn-primary text-sm text-nowrap w-full"
            >
              Reserve
            </button>
          </div>
        </div>

        <nav className="flex items-center text-gray-400 text-nowrap w-full">
          <div className="w-full h-full custom-scrollbar pb-4">
            <div className="overflow-x-auto">
              <div className="flex gap-1 min-w-max">
                {tabs.map((tab, idx) => (
                  <button
                    key={`${tab.type}-${idx}`}
                    onClick={() => setActiveTab(idx)}
                    className={`text-sm transition-all font-medium py-2 px-3 rounded whitespace-nowrap ${
                      idx === activeTab
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <p className="text-xl md:text-3xl font-bold mb-4">All Photo</p>

        <div
          ref={scrollRef}
          className="-mx-4 flex-1 min-h-0 overflow-hidden overflow-y-auto -mb-6 pb-6"
        >
          <div className="px-3">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredImages.map(img => (
                <img
                  id={`gallery-${img.id}`}
                  key={img.id}
                  alt={img.alt}
                  loading="lazy"
                  width="2000"
                  height="2000"
                  className="aspect-[350/160] w-full rounded-lg object-cover md:aspect-[558/300] cursor-pointer hover:opacity-90 transition-opacity"
                  src={img.src}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
