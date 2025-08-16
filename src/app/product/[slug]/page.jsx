// src/app/product/[slug]/page.jsx
import Container from '@/app/components/common/Container'
import ProductTitle from '@/app/components/product/ProductTitle'
import ProductSpecs from '@/app/components/product/ProductSpecs'
import ProductFacilities from '@/app/components/product/ProductFacilities'
import ProductCabinList from '@/app/components/product/ProductCabinList'
import ProductIncludes from '@/app/components/product/ProductIncludes'
import ProductItinerary from '@/app/components/product/ProductItinerary'
import ProductCTA from '@/app/components/product/ProductCTA'
import { getProductBySlug } from '@/app/lib/api/product.service'
import { mapProductPayload } from '@/app/lib/mappers/product.mapper'
import Breadcrumb from '@/app/components/shared/breadcrumb'
import ProductNavbar from '@/app/components/product/ProductNavbar'
import ProductGalleryWrapper from '@/app/components/product/Gallery/ProductGalleryWrapper'
import ProductPaymentPolicy from '@/app/components/product/ProductPaymentPolicy'
import ProductRefundPolicy from '@/app/components/product/Policy/ProductRefundPolicy'
import ProductShipPolicy from '@/app/components/product/Policy/ProductShipPolicy'

export default async function Page({ params }) {
  const { slug } = params
  let raw
  try {
    raw = await getProductBySlug(slug)
  } catch {
    return <div className="p-8 text-center">Terjadi kesalahan memuat data.</div>
  }

  if (!raw?.product?.ship) {
    return (
      <div className="p-8 text-center">
        Produk tidak ditemukan atau API bermasalah.
      </div>
    )
  }

  const data = mapProductPayload(raw)
  const crumbs = [
    { href: '/', label: 'Beranda' },
    { href: '/product', label: 'Sewa Kapal' },
    { href: `/product/${data.slug}`, label: data.title || 'Detail' },
  ]

  return (
    <Container className="px-0 sm:px-4">
      <div className="section hidden sm:block">
        <Breadcrumb items={crumbs} />
      </div>

      <section id="gallery" className="section px-0 sm:px-4">
        <ProductGalleryWrapper images={data.gallery} />
      </section>

      <section id="productNavbar" className="section hidden sm:block">
        <ProductNavbar />
      </section>

      <section id="overview" className="section px-4 sm:px-4">
        <ProductTitle
          title={`3 Hari 2 Malam Open Trip Dengan ${data.title}`}
          description={data.description}
          shipName={data.title}
          badges={{ ...data.badges, minGuest: 1 }}
          price={data.price}
          slug={data.slug}
        />
      </section>

      <section className="section px-4 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid gap-6">
            <ProductSpecs items={data.spec} />
            <ProductFacilities items={data.facilities} />
          </div>
          <aside id="pricing" className="lg:col-span-1">
            <div className="sticky top-[88px]">
              <ProductCTA price={data.price} badges={data.badges} />
            </div>
          </aside>
        </div>
      </section>

      <section id="cabins" className="section px-4 sm:px-4">
        <ProductCabinList rooms={data.rooms} />
      </section>

      <section id="itinerary" className="section px-4 sm:px-4">
        <ProductItinerary itinerary={data.itinerary} />
      </section>

      <section id="includes" className="section px-4 sm:px-4">
        <ProductIncludes
          includes={data.includeExclude.includes}
          excludes={data.includeExclude.excludes}
        />
      </section>

      <section id="policy" className="section px-4 sm:px-4">
        <ProductPaymentPolicy policy={data.policy} />
      </section>
    </Container>
  )
}
