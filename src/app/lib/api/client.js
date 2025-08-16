export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ?? 'https://be.kapalsantai.com/api/v1'

export async function get(path, { next: nextOpts, ...init } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    next: { revalidate: 60, ...nextOpts },
  })
  if (!res.ok) throw new Error(`API error ${res.status}`)
  return res.json()
}
