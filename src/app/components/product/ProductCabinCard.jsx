'use client'
import Image from 'next/image'
import { iconFromApi } from './icon-map'

export default function ProductCabinCard({ room }) {
  const thumb =
    room?.thumbnailSrc ||
    room?.thumbnail?.image ||
    room?.thumbnail?.src ||
    room?.images?.[0]?.image ||
    null

  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
      {thumb && (
        <div className="relative aspect-[4/3]">
          <Image
            src={thumb}
            alt={room?.name || 'Cabin'}
            fill
            sizes="(max-width:768px) 100vw, 400px"
            className="object-cover"
          />
        </div>
      )}

      <div className="p-4">
        <h3 className="font-semibold">{room?.name}</h3>

        {Array.isArray(room?.details) && room.details.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
            {room.details.map((d, i) => {
              const Icon = iconFromApi(d.icon)
              return (
                <li key={i} className="flex items-center gap-1">
                  {Icon ? <Icon className="w-4 h-4" /> : null}
                  <span>{d.value}</span>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
