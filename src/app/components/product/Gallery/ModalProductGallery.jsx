'use client'

import { useEffect, useMemo, useRef, useCallback, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function ModalProductGallery({
  isOpen,
  onClose = () => {},
  title = '-',
  images = [],
  onReserve = () => {},
}) {
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)
  const [activeTab, setActiveTab] = useState(0)

  console.log('tes', title, images)

  // Process images and create tabs based on types
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

    // Get unique types and create tabs
    const allTypes = [...new Set(safeImages.map(img => img.type))]
    const tabsData = allTypes
      .map(type => ({
        label: type,
        type,
        count: safeImages.filter(img => img.type === type).length,
      }))
      .filter(tab => tab.count > 0)

    return {
      processedImages: safeImages,
      tabs: tabsData,
    }
  }, [images])

  // Filter images based on active tab
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

    const onKey = e => handleKeyDown(e)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = prevOverflow
    }
  }, [isOpen, handleKeyDown])

  // Reset active tab when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab(0)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleOverlayClick = e => {
    if (e.target === dialogRef.current) onClose()
  }

  const handleTabChange = index => {
    setActiveTab(index)
  }

  return (
    <div
      className="fixed inset-0 z-99 bg-black/60"
      onClick={handleOverlayClick}
    >
      <div className="bg-white md:w-5/6 w-full max-md:h-full overflow-y-clip md:max-h-[85%] absolute md:top-[7.5%] left-1/2 -translate-x-1/2 p-6 md:rounded-xl flex flex-col">
        {/* Header Mobile */}
        <div className="flex justify-center items-center mb-6 md:hidden">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="w-6 h-6"
          >
            <X className="w-6 h-6" />
          </button>
          <p className="mx-auto font-semibold">{title}</p>
        </div>

        {/* Header Desktop */}
        <div className="flex items-center gap-4 mb-6 max-md:hidden">
          <button type="button" onClick={onClose} className="w-6 h-6">
            <X className="w-6 h-6" />
          </button>
          <p className="flex-1 text-2xl font-bold">{title}</p>
          <div className="w-[240px]">
            <button
              type="button"
              onClick={onReserve}
              className="btn btn-primary text-sm text-nowrap text-white"
            >
              <span className="flex items-center gap-2">Reserve</span>
            </button>
          </div>
        </div>

        {/* Tabs Navigation */}
        <nav className="flex items-center text-gray-400 text-nowrap w-full">
          <div className="w-full h-full custom-scrollbar pb-4">
            <div className="overflow-x-auto">
              <div className="flex gap-1 min-w-max">
                {tabs.map((tab, idx) => {
                  const isActive = idx === activeTab
                  return (
                    <button
                      key={`${tab.type}-${idx}`}
                      onClick={() => handleTabChange(idx)}
                      className={`text-sm transition-all font-medium py-2 px-3 rounded whitespace-nowrap ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </nav>

        {/* All Photo Title */}
        <p className="text-xl md:text-3xl font-bold mb-4">All Photo</p>

        {/* Images Container */}
        <div className="-mx-4 flex-1 min-h-0 overflow-hidden overflow-y-auto -mb-6 pb-6">
          <div className="px-3">
            <div className="gap-6 grid md:grid-cols-2">
              {filteredImages.length ? (
                filteredImages.map(img => (
                  <img
                    key={img.id}
                    alt={img.alt}
                    loading="lazy"
                    width="2000"
                    height="2000"
                    className="w-full border rounded-lg object-cover aspect-[350/160] md:aspect-[558/300] cursor-pointer hover:opacity-90 transition-opacity"
                    src={img.src}
                  />
                ))
              ) : (
                <div className="col-span-full flex items-center justify-center h-64">
                  <p className="text-gray-500">
                    Tidak ada gambar untuk kategori "{tabs[activeTab]?.label}"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
