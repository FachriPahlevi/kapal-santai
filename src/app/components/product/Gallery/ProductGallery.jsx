'use client'

import Image from 'next/image'
import { ArrowLeft, ChevronLeft, Images } from 'lucide-react'
import { useMemo, useRef, useState, useEffect } from 'react'
import Link from 'next/link'

export default function ProductGallery({ images = [], openSingle, openAll }) {
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
  const all = [hero, ...rest]

  const [active, setActive] = useState(0)
  const sliderRef = useRef(null)

  useEffect(() => {
    const el = sliderRef.current
    if (!el) return
    const onScroll = () => setActive(Math.round(el.scrollLeft / el.clientWidth))
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const onOpen = i => e => {
    e.preventDefault()
    e.stopPropagation()
    openSingle?.(i)
  }

  return (
    <>
      <div className="max-sm:hidden mb-2">
        <Link
          href="/product"
          className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Lihat semua kapal</span>
        </Link>
      </div>

      <div className="relative w-full sm:w-auto">
        <div className="sm:hidden">
          <Link
            href="/product"
            className="absolute top-3 left-3 z-10 inline-flex items-center justify-center 
                 rounded-full bg-white p-1.5 text-black shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="sm:hidden relative -mx-4">
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar scroll-smooth"
          >
            {all.map((img, i) => (
              <button
                key={img.id ?? i}
                className="min-w-full snap-center"
                onClick={onOpen(i)}
                type="button"
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
              </button>
            ))}
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {all.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === active ? 'bg-white' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="max-sm:hidden grid grid-cols-3 gap-2 rounded-2xl overflow-hidden">
          <button
            type="button"
            onClick={onOpen(0)}
            className="relative group overflow-hidden"
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
                onClick={onOpen(i + 1)}
                className="overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1000}
                  height={600}
                  sizes="(min-width:1024px) 33vw, 50vw"
                  className="w-full h-auto aspect-[460/180] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {rest.slice(2, 4).map((img, i) => (
              <button
                type="button"
                key={img.id ?? i}
                onClick={onOpen(i + 3)}
                className="overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1000}
                  height={600}
                  sizes="(min-width:1024px) 33vw, 50vw"
                  className="w-full h-auto aspect-[460/180] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            openAll?.()
          }}
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:font-semibold transition-all"
          type="button"
        >
          <Image
            src="/assets/icons/image.svg"
            alt="Lihat semua foto"
            width={20}
            height={20}
            className="h-4 w-4 sm:h-5 sm:w-5"
          />
          <span className="hidden sm:inline text-white">Lihat semua foto</span>
          <span className="sm:hidden font-medium">{all.length}</span>
        </button>
      </div>
    </>
  )
}
