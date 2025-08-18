import { get } from './client'
import { cookies } from 'next/headers'

export async function getProduct() {
  const { payload } = await get(
    '/product/service/slug/papiton-lopi--open-trip-11-person-3-days-liveaboard-papiton-lopi-deluxe?locale=en'
  )

  return payload
}

// import { get } from './client'
// import { cookies } from 'next/headers'

// export async function getProduct() {
//   const cookieStore = await cookies()
//   const lang = cookieStore.get('lang')?.value || 'id'

//   const { payload } = await get(
//     `/product/service/slug/papiton-lopi--open-trip-11-person-3-days-liveaboard-papiton-lopi-deluxe?locale=${lang}`
//   )

//   return payload
// }
