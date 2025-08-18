'use client'

import Image from 'next/image'
import { useMemo, useState, useCallback, useEffect } from 'react'
import {
  Users,
  Bed,
  Bath,
  Snowflake,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import ShowGalleryModal from '../Gallery/ShowGalleryModal'

const ICON_MAP = { person: Users, bed: Bed, bathroom: Bath, snow: Snowflake }

function Dots({ total, active, onJump, className = '' }) {
  if (total <= 1) return null
  return (
    <div className={`flex lg:hidden items-center gap-1 ${className}`}>
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          aria-label={`Slide ${i + 1}`}
          onClick={() => onJump(i)}
          className={`h-2 w-2 rounded-full ${
            i === active ? 'bg-white' : 'bg-white/50'
          }`}
        />
      ))}
    </div>
  )
}

export default function ProductCabinCard({ room }) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const images = useMemo(
    () =>
      (room?.images || [])
        .map((img, i) => ({
          id: img?.id ?? i,
          src: img?.image || img?.src || '',
          alt: img?.alt || room?.name || 'Cabin',
        }))
        .filter(i => i.src),
    [room]
  )

  const thumb =
    room?.thumbnailSrc ||
    room?.thumbnail?.image ||
    room?.thumbnail?.src ||
    images?.[0]?.src ||
    null

  const total = images.length || 1
  const safeIndex = ((index % total) + total) % total

  useEffect(() => {
    if (index > total - 1) setIndex(0)
  }, [total, index])

  const handleOpen = useCallback((i = 0) => {
    setIndex(i)
    setOpen(true)
  }, [])
  const handleClose = useCallback(() => setOpen(false), [])
  const handlePrev = useCallback(
    () => setIndex(i => (i > 0 ? i - 1 : total - 1)),
    [total]
  )
  const handleNext = useCallback(
    () => setIndex(i => (i < total - 1 ? i + 1 : 0)),
    [total]
  )
  const handleJump = useCallback(i => setIndex(i), [])

  return (
    <>
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {thumb && (
          <div className="relative aspect-[4/3] w-full bg-slate-100">
            <Image
              src={images[safeIndex]?.src || thumb}
              alt={room?.name || 'Cabin'}
              fill
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              className="object-cover"
            />

            <Dots
              total={total}
              active={safeIndex}
              onJump={handleJump}
              className="absolute left-3 bottom-3 z-10"
            />

            {total > 1 && (
              <button
                type="button"
                onClick={() => handleOpen(safeIndex)}
                className="absolute right-3 bottom-3 z-10 lg:hidden px-2.5 py-1 rounded-lg bg-black/20 text-white text-xs font-semibold leading-none inline-flex items-center gap-1"
              >
                <Image
                  src="/assets/icons/image.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
                <span>{total}</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => handleOpen(safeIndex)}
              className="absolute bottom-3 right-3 hidden sm:inline-flex items-center gap-2 rounded-lg bg-black/20 px-3 py-1.5 text-sm font-medium text-white hover:bg-black/60 z-10"
            >
              <Image
                src="/assets/icons/image.svg"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <span>Lihat semua foto</span>
            </button>

            {total > 1 && (
              <>
                <button
                  aria-label="Sebelumnya"
                  onClick={handlePrev}
                  className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white text-[#0a77ff] shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#0a77ff]/30 z-10"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  aria-label="Berikutnya"
                  onClick={handleNext}
                  className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-white text-[#0a77ff] shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#0a77ff]/30 z-10"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        )}

        <div className="min-w-0 p-4">
          <h3 className="truncate font-semibold text-slate-900">
            {room?.name}
          </h3>

          {Array.isArray(room?.details) && room.details.length > 0 && (
            <>
              <p className="mt-3 text-sm text-slate-700 sm:hidden">
                {room.details
                  .map(d => d?.value)
                  .filter(Boolean)
                  .join(' • ')}
              </p>
              <ul className="mt-3 hidden sm:flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
                {room.details.map((d, i) => {
                  const key = String(d?.icon || '').toLowerCase()
                  const Icon = ICON_MAP[key]
                  return (
                    <li key={i} className="flex items-center gap-2">
                      {Icon && <Icon className="h-4 w-4 shrink-0" />}
                      <span>{d?.value}</span>
                    </li>
                  )
                })}
              </ul>
            </>
          )}
        </div>
      </div>

      {open && (
        <ShowGalleryModal
          images={images}
          index={safeIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
          onJump={handleJump}
          thumbClassName="mt-4 flex items-center justify-center gap-3 overflow-x-auto px-1"
        />
      )}
    </>
  )
}
