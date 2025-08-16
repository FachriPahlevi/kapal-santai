'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Images } from 'lucide-react'
import { useMemo, useRef, useState, useEffect } from 'react'

export default function ProductGallery({ images = [], openModal }) {
  const list = useMemo(() => {
    if (!Array.isArray(images)) return []
    return images
      .map(i => ({
        id: i?.id ?? i?.src ?? i?.image,
        src: (i?.src || i?.image || '').trim(),
        alt: i?.alt || 'Photo',
        type: i?.type ?? 'image',
        isThumb: Boolean(i?.isThumb),
      }))
      .filter(i => i.src)
  }, [images])

  if (list.length === 0) return null

  const idx = list.findIndex(i => i.isThumb)
  const heroIndex = idx >= 0 ? idx : 0
  const hero = list[heroIndex]
  const rest = list.filter((_, i) => i !== heroIndex)

  const [active, setActive] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const el = sliderRef.current
    if (!el) return
    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth)
      setActive(index)
    }
    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="relative md:w-full md:rounded-2xl"
      style={{ margin: '-24px -24px 0 -24px', width: 'calc(100% + 48px)' }}
    >
      <div className="relative w-full overflow-hidden sm:overflow-visible">
        <div className="sm:hidden relative">
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar scroll-smooth"
          >
            {[hero, ...rest].map((img, i) => (
              <div
                key={img.id ?? i}
                className="min-w-full snap-center"
                onClick={openModal}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && openModal?.()}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  priority={i === 0}
                  sizes="100vw"
                  className="w-full h-auto aspect-[460/360] object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {[hero, ...rest].map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === active ? 'bg-white' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="max-sm:hidden grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={openModal}
            className="relative group overflow-hidden rounded-2xl"
          >
            <Image
              src={hero.src}
              alt={hero.alt}
              width={1200}
              height={900}
              priority
              sizes="(min-width:1024px) 33vw, 50vw"
              className="w-full h-auto aspect-[460/360] object-cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
          </button>

          <div className="flex flex-col gap-2">
            {rest.slice(0, 2).map((img, i) => (
              <button
                type="button"
                key={img.id ?? i}
                onClick={openModal}
                className="overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1000}
                  height={600}
                  sizes="(min-width:1024px) 33vw, 50vw"
                  className="w-full h-auto aspect-[460/180] object-cover"
                />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {rest.slice(2, 4).map((img, i) => (
              <button
                type="button"
                key={img.id ?? i}
                onClick={openModal}
                className="overflow-hidden rounded-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1000}
                  height={600}
                  sizes="(min-width:1024px) 33vw, 50vw"
                  className="w-full h-auto aspect-[460/180] object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={openModal}
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black/40 text-white backdrop-blur px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base shadow"
        >
          <Images className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline">Lihat semua foto</span>
          <span className="sm:hidden">{list.length}</span>
        </button>
      </div>
    </div>
  )
}
