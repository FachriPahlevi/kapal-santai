import * as Icons from 'lucide-react'

const DIRECT = {
  person: 'Users',
  bed: 'Bed',
  bathroom: 'Bath',
  snow: 'Snowflake',
}

export function iconFromApi(key) {
  const k = (key ?? '').toString().toLowerCase().trim()
  const name = DIRECT[k] || null
  return name && Icons[name] ? Icons[name] : null
}
