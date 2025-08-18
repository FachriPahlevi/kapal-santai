import Container from './components/shared/Container'
import ProductGalleryWrapper from './components/product/Gallery/ProductGalleryWrapper'
import ProductCabinList from './components/product/Cabin/ProductCabinList'
import ProductFacilities from './components/product/ProductFacilities'
import ProductItinerary from './components/product/ProductItinerary'
import ProductNavbar from './components/product/ProductNavbar'
import ProductSafetyEquipment from './components/product/ProductSafetyEquipment'
import ProductSpecs from './components/product/ProductSpecs'
import ProductTitle from './components/product/ProductTitle'
import ProductPolicy from './components/product/ProductPolicy'
import Breadcrumb from './components/shared/breadcrumb'

import { getProduct } from './lib/api/product.service'
import { mapProductPayload } from './lib/mappers/product.mapper'

export const revalidate = 60

export default async function Home() {
  let raw = null
  try {
    raw = await getProduct()
  } catch (e) {
    console.error('GET PRODUCT FAILED:', e)
  }

  const data = mapProductPayload(raw)

  const crumbs = [
    { href: '/', label: 'Home' },
    { href: '/product', label: 'Sewa Kapal' },
    {
      href: `/product/Detail-Kapal}`,
      label: data.title,
    },
  ]

  return (
    <Container className="sm:px-4">
      <div className="hidden sm:block">
        <Breadcrumb items={crumbs} />
      </div>

      <section id="gallery" className="mt-0 mb-6">
        <div className="mx-auto max-w-8xl">
          <ProductGalleryWrapper images={data.gallery} />
        </div>
      </section>

      <section id="productNavbar" className="mb-6">
        <ProductNavbar />
      </section>

      <section id="overview" className="mb-4">
        <ProductTitle
          title={`3 Days 2 Nights Open Trip with ${data.title}`}
          description={data.description}
          shipName={data.title}
          badges={data.badges}
          price={data.price}
          slug={data.slug}
        />
      </section>

      <section
        id="about"
        className="mt-2 md:mt-6 mb-12 md:mb-16 border-b border-slate-200"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <ProductSpecs items={data.spec} />
            <ProductFacilities items={data.facilities} />
            <ProductSafetyEquipment items={data.safety} />
          </div>
        </div>
      </section>

      <section id="cabins" className="mb-8">
        <ProductCabinList rooms={data.rooms} />
      </section>

      <section id="itinerary" className="mb-8">
        <ProductItinerary
          itinerary={data.itinerary}
          includes={data.includeExclude.includes}
          excludes={data.includeExclude.excludes}
        />
      </section>

      <section id="policy" className="mb-8">
        <ProductPolicy />
      </section>
    </Container>
  )
}
