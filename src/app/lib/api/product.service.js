import { get } from './client'

export async function getProductBySlug(slug) {
  const { payload } = await get(`/product/service/slug/${slug}?locale=en`)
  return payload
}
