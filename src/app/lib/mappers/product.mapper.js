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
    const label = (t.specification_en || t.specification_id || '').trim()
    if (!label) continue
    if (t.specification_type === 'Include') includes.push(label)
    if (t.specification_type === 'Exclude') excludes.push(label)
  }
  return {
    includes: uniqueStrings(includes),
    excludes: uniqueStrings(excludes),
  }
}

function personFromDetail(detail = []) {
  const sleeps = detail.find(
    d => d?.icon === 'person' && /sleeps\s+\d+/i.test(d?.value || '')
  )
  if (!sleeps) return null
  const m = String(sleeps.value).match(/(\d+)/)
  return m ? Number(m[1]) : null
}

function safetyFromTemplates(templates = []) {
  const out = []
  for (const s of templates) {
    const t = s?.specification_template
    if (!t || t.specification_type !== 'SafetyEquipment') continue
    const label = (t.specification_en || t.specification_id || '').trim()
    if (!label) continue
    const val = s?.value
    out.push(val ? `${label}: ${val}` : label)
  }
  return uniqueStrings(out)
}

function mapShipRoom(r) {
  const images = Array.isArray(r.images) ? r.images : []
  const detail = Array.isArray(r.detail) ? r.detail : []
  const price = r.price ?? null
  return {
    id: r.id,
    name: r.name,
    type: r.type,
    price,
    priceFormatted: formatIDR(price),
    person:
      typeof r.person === 'number' && r.person > 0
        ? r.person
        : personFromDetail(detail) || null,
    details: detail,
    images,
    thumbnail: images.find(i => i?.is_thumbnail) || images[0] || null,
  }
}

function mapProductRoomAvailability(item) {
  // Bentuk: { id, thumbnail, price, additional_price, room_availability: {...tanpa images} }
  const ra = item?.room_availability || {}
  const detail = Array.isArray(ra.detail) ? ra.detail : []
  const images = Array.isArray(ra.images) ? ra.images : [] // biasanya kosong pada sumber ini
  const price = item?.price ?? ra?.price ?? null
  return {
    id: ra.id || item.id,
    name: ra.name || null,
    type: ra.type || null,
    price,
    priceFormatted: formatIDR(price),
    person:
      typeof ra.person === 'number' && ra.person > 0
        ? ra.person
        : personFromDetail(detail) || null,
    details: detail,
    images,
    thumbnail:
      item?.thumbnail || images.find(i => i?.is_thumbnail) || images[0] || null,
  }
}

export function mapProductPayload(input) {
  if (!input) return null

  // Bisa diberikan full response { code, message, payload } atau payload langsung
  const root = input?.payload ?? input
  if (!root?.product) return null

  const ship = root.product?.ship || {}

  const productName = (ship.name || root.product?.name || 'Product').trim()
  const shipImages = Array.isArray(ship.images) ? ship.images : []
  const specs = Array.isArray(ship.specification) ? ship.specification : []
  const facilities = Array.isArray(ship.facility) ? ship.facility : []

  const { includes, excludes } = parseIncludeExclude(
    root.product?.specification_template_product || []
  )

  // Safety: pakai field langsung kalau ada, kalau null/empty fallback template
  let safety = Array.isArray(ship.safety_equipment)
    ? uniqueStrings(ship.safety_equipment)
    : []
  if (
    (!safety || safety.length === 0) &&
    Array.isArray(ship.specification_template_ship)
  ) {
    safety = safetyFromTemplates(ship.specification_template_ship)
  }

  // Rooms gabungan dari dua sumber:
  // 1) product.ship.room_availability (punya images)
  // 2) product_room_availability (thumbnail + nested room_availability)
  const shipRooms = Array.isArray(ship.room_availability)
    ? ship.room_availability.map(mapShipRoom)
    : []

  const prRooms = Array.isArray(root.product_room_availability)
    ? root.product_room_availability.map(mapProductRoomAvailability)
    : []

  // Gabungkan & hilangkan duplikat berdasarkan id
  const roomsMap = new Map()
  ;[...shipRooms, ...prRooms].forEach(r => {
    if (!r?.id) return
    // Prefer yang punya images
    const existing = roomsMap.get(r.id)
    if (!existing) {
      roomsMap.set(r.id, r)
    } else {
      const better =
        Array.isArray(existing.images) && existing.images.length > 0
          ? existing
          : r
      roomsMap.set(r.id, better)
    }
  })
  const rooms = Array.from(roomsMap.values())

  return {
    id: root.id,
    slug: root.slug,
    badges: {
      isOpenTrip: !!root.is_open_trip,
      isLiveaboard: !!root.is_liveaboard,
      days: root.days || null,
      maxGuest: root.max_guest || null,
      class: ship.class || null,
    },
    title: productName,
    description: ship.description || null,
    gallery: shipImages.map(i => ({
      id: i.id,
      src: i.image,
      alt: i.type || 'Image',
      type: i.type || '-',
      isThumb: !!i.is_thumbnail,
    })),
    price: {
      base: root.price ?? null,
      baseFormatted: formatIDR(root.price),
      additional: root.additional_price ?? null,
      additionalFormatted: formatIDR(root.additional_price),
    },
    spec: uniqueStrings(specs),
    facilities: uniqueStrings(facilities),
    safety,
    rooms,
    itinerary: Array.isArray(root.itinerary)
      ? root.itinerary.map(d => ({
          day: d.day,
          stops: Array.isArray(d.detail) ? d.detail : [],
        }))
      : [],
    includeExclude: { includes, excludes },
    period: {
      start: root.product?.date_start || null,
      end: root.product?.date_end || null,
    },
    company: ship.company?.name || null,
  }
}
