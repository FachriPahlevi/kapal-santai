// components/product/Gallery/GalleryModal.jsx
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function ShowGalleryModal({
  images = [],
  index = 0,
  onClose,
  onPrev,
  onNext,
  onJump,
}) {
  const current = images[index] || {}

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose?.()
      if (e.key === 'ArrowLeft') onPrev?.()
      if (e.key === 'ArrowRight') onNext?.()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1b2b]/95 overflow-x-hidden">
      <Link
        href="/product"
        className="absolute left-5 top-5 text-white/90 hover:text-white text-sm underline-offset-4 hover:underline"
      >
        Lihat semua kapal
      </Link>
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 text-white/90 hover:text-white text-3xl leading-none"
      >
        &times;
      </button>

      <button
        onClick={onPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl"
      >
        ‹
      </button>
      <button
        onClick={onNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl"
      >
        ›
      </button>

      <div className="mx-auto w-[92vw] max-w-[820px]">
        <div className="relative mx-auto h-[68vh] w-full">
          {current?.src && (
            <Image
              src={current.src}
              alt={current.alt || 'Photo'}
              fill
              priority
              sizes="(max-width: 820px) 92vw, 820px"
              className="object-contain"
            />
          )}
        </div>

        <div className="mt-4 flex items-center gap-3 overflow-x-hidden px-1">
          {images.map((img, i) => (
            <button
              key={img.id || i}
              onClick={() => onJump?.(i)}
              className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl ring-2 ${
                i === index ? 'ring-white' : 'ring-transparent'
              }`}
              aria-label={`thumb-${i + 1}`}
            >
              <Image
                src={img.src}
                alt={img.alt || 'Thumb'}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
