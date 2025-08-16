import { formatIDR } from '../utils/currency'

function uniqueStrings(arr = []) {
  return [...new Set(arr.filter(Boolean).map(s => String(s).trim()))]
}

function parseIncludeExclude(templates = []) {
  const includes = []
  const excludes = []
  for (const item of templates) {
    const t = item?.specification_template
    if (!t) continue
    const label = t.specification_id || t.specification_en
    if (!label) continue
    if (t.specification_type === 'Include') includes.push(label.trim())
    if (t.specification_type === 'Exclude') excludes.push(label.trim())
  }
  return {
    includes: uniqueStrings(includes),
    excludes: uniqueStrings(excludes),
  }
}

function personFromDetail(detail = []) {
  // cari "Sleeps X"
  const sleeps = detail.find(
    d => d?.icon === 'person' && /sleeps\s+\d+/i.test(d?.value || '')
  )
  if (!sleeps) return null
  const m = sleeps.value.match(/(\d+)/)
  return m ? Number(m[1]) : null
}

export function mapProductPayload(payload) {
  if (!payload) return null
  const ship = payload.product?.ship || {}
  const productName =
    (ship.name || payload.product?.name || '').trim() || 'Product'
  const shipImages = Array.isArray(ship.images) ? ship.images : []
  const specs = Array.isArray(ship.specification) ? ship.specification : []
  const facilities = Array.isArray(ship.facility) ? ship.facility : []
  const { includes, excludes } = parseIncludeExclude(
    payload.specification_template_product
  )

  const rooms = (ship.room_availability || payload.room_availability || []).map(
    r => {
      const images = Array.isArray(r.images) ? r.images : []
      return {
        id: r.id,
        name: r.name,
        type: r.type, // Private / Shared
        price: r.price,
        priceFormatted: formatIDR(r.price),
        person:
          r.person && r.person > 0
            ? r.person
            : personFromDetail(r.detail) || null,
        details: r.detail || [], // [{icon, value}]
        images,
        thumbnail: images.find(i => i.is_thumbnail) || images[0] || null,
      }
    }
  )

  return {
    id: payload.id,
    slug: payload.slug,
    badges: {
      isOpenTrip: !!payload.is_open_trip,
      isLiveaboard: !!payload.is_liveaboard,
      days: payload.days || null,
      maxGuest: payload.max_guest || null,
      class: ship.class || null,
    },
    title: productName,
    description: ship.description || null,
    gallery: shipImages.map(i => ({
      id: i.id,
      src: i.image,
      alt: i.type || 'Image',
      isThumb: !!i.is_thumbnail,
    })),
    price: {
      base: payload.price,
      baseFormatted: formatIDR(payload.price),
      additional: payload.additional_price,
      additionalFormatted: formatIDR(payload.additional_price),
    },
    spec: uniqueStrings(specs),
    facilities: uniqueStrings(facilities),
    rooms,
    itinerary: (payload.itinerary || []).map(d => ({
      day: d.day,
      stops: d.detail || [],
    })),
    includeExclude: { includes, excludes },
    period: {
      start: payload.product?.date_start || null,
      end: payload.product?.date_end || null,
    },
    company: ship.company?.name || null,
  }
}
