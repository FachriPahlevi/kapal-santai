'use client'

export default function ProductBadges({ badges }) {
  if (!badges) return null

  const badgeItems = []

  if (badges.isOpenTrip)
    badgeItems.push({
      label: 'Open Trip',
      color: 'bg-green-100 text-green-700',
    })
  if (badges.isPrivate)
    badgeItems.push({
      label: 'Private Charter',
      color: 'bg-blue-100 text-blue-700',
    })
  if (badges.days)
    badgeItems.push({
      label: `${badges.days} Hari`,
      color: 'bg-purple-100 text-purple-700',
    })
  if (badges.maxGuest)
    badgeItems.push({
      label: `Max ${badges.maxGuest} Pax`,
      color: 'bg-orange-100 text-orange-700',
    })
  if (badges.isPopular)
    badgeItems.push({ label: 'Populer', color: 'bg-red-100 text-red-700' })
  if (badges.isNew)
    badgeItems.push({ label: 'Baru', color: 'bg-yellow-100 text-yellow-700' })

  if (!badgeItems.length) return null

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {badgeItems.map((badge, i) => (
        <span
          key={i}
          className={`px-2 py-1 rounded-full text-xs font-medium ${badge.color}`}
        >
          {badge.label}
        </span>
      ))}
    </div>
  )
}
