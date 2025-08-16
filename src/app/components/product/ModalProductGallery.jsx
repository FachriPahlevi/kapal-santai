'use client'

import { useEffect, useMemo, useRef, useCallback } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export default function ModalProductGallery({
  isOpen,
  onClose = () => {},
  title = '-',
  tabs = [],
  activeTab = 0,
  onTabChange = () => {},
  images = [],
  onReserve = () => {},
}) {
  const dialogRef = useRef(null)
  const closeBtnRef = useRef(null)
  const titleId = 'modal-product-gallery-title'

  const safeTabs = useMemo(
    () =>
      (Array.isArray(tabs) ? tabs : []).map(t => ({
        label: String(t?.label ?? ''),
        count:
          typeof t?.count === 'number'
            ? t.count
            : t?.count == null
            ? null
            : Number(t.count) || null,
      })),
    [tabs]
  )

  const safeImages = useMemo(
    () =>
      (Array.isArray(images) ? images : [])
        .map((it, i) => {
          if (typeof it === 'string') {
            return { id: i, src: it, alt: `Gallery image ${i + 1}` }
          }
          const src = (it?.src || it?.image || '').trim()
          if (!src) return null
          return {
            id: it?.id ?? src ?? i,
            src,
            alt: it?.alt || it?.type || `Gallery image ${i + 1}`,
          }
        })
        .filter(Boolean),
    [images]
  )

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') onClose()
      if (!safeTabs.length) return
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        onTabChange((activeTab + 1) % safeTabs.length)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        onTabChange((activeTab - 1 + safeTabs.length) % safeTabs.length)
      }
    },
    [activeTab, safeTabs.length, onClose, onTabChange]
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

  if (!isOpen) return null

  const handleOverlayClick = e => {
    if (e.target === dialogRef.current) onClose()
  }

  return (
    <div
      ref={dialogRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="flex max-h-[90vh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center gap-2">
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="inline-flex size-9 items-center justify-center rounded-full transition hover:bg-gray-100"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
            <h2
              id={titleId}
              className="text-base font-semibold text-gray-800 md:text-lg"
            >
              {title}
            </h2>
          </div>

          <button type="button" onClick={onReserve} className="btn btn-primary">
            Reserve
          </button>
        </div>

        {/* Tabs */}
        <div className="overflow-x-auto border-b px-4 md:px-6">
          <div className="flex min-w-max gap-6">
            {safeTabs.length ? (
              safeTabs.map((tab, idx) => {
                const isActive = idx === activeTab
                return (
                  <button
                    key={`${tab.label}-${idx}`}
                    type="button"
                    onClick={() => onTabChange(idx)}
                    className={`relative py-3 text-sm transition md:text-base ${
                      isActive
                        ? 'font-medium text-blue-600'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    role="tab"
                    aria-selected={isActive}
                  >
                    {tab.label}
                    {tab.count != null ? ` (${tab.count})` : ''}
                    {isActive && (
                      <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-blue-600" />
                    )}
                  </button>
                )
              })
            ) : (
              <span className="py-3 text-sm text-gray-400">–</span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {safeImages.length ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {safeImages.map(img => (
                <div
                  key={img.id}
                  className="overflow-hidden rounded-xl border border-gray-200 shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-56">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-48 items-center justify-center">
              <p className="text-gray-400">No images available</p>
            </div>
          )}
        </div>

        {/* Footer (kosong, siapkan kalau butuh) */}
        <div className="border-t bg-gray-50 px-4 py-3 md:px-6 md:py-4" />
      </div>
    </div>
  )
}
