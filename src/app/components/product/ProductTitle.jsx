import Image from 'next/image'
import Link from 'next/link'
import { formatIDR } from '@/app/lib/utils/currency'

const Icon = ({ src, w = 20, h = 20, className = 'w-5 h-5' }) => (
  <Image src={src} alt="" width={w} height={h} className={className} />
)

const ShipInfo = ({ name, icon = '/assets/icons/ship-fill.svg' }) => (
  <div className="flex items-center gap-3">
    <div className="p-1 rounded-md">
      <Icon src={icon} w={24} h={24} className="w-6 h-6" />
    </div>
    <span className="font-semibold text-slate-900">{name}</span>
  </div>
)

const Left = ({ isOpenTrip, title, name, description }) => (
  <div className="space-y-4">
    {isOpenTrip && (
      <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
        <Icon
          src="/assets/icons/suitcase.svg"
          w={16}
          h={16}
          className="w-4 h-4"
        />
        <span>Open Trip</span>
      </div>
    )}
    <h1 className="text-2xl md:text-4xl font-bold text-slate-900">{title}</h1>
    <ShipInfo name={name} />
    {description && (
      <section className="pt-2 ">
        <h2 className="text-xl font-bold text-slate-900 mb-3">Tentang kapal</h2>
        <p className="text-slate-600">{description}</p>
      </section>
    )}
  </div>
)

const PriceBlock = ({ label = 'Harga mulai', value }) => (
  <div>
    <p className="text-sm text-slate-600">{label}</p>
    <p className="text-2xl font-bold text-slate-900">{value}</p>
  </div>
)

const PeopleRow = ({ text }) => (
  <div className="flex items-center gap-2 text-slate-900">
    <Icon src="/assets/icons/people.svg" />
    <span className="font-medium">{text}</span>
  </div>
)

const Sidebar = ({ guestText, priceText, tripText, href, name }) => (
  <aside className="sticky top-24 rounded-2xl border border-slate-200 p-4 sm:p-6 space-y-4 w-full lg:w-auto">
    <PeopleRow text={guestText} />
    <PriceBlock value={priceText} />
    {tripText && <p className="text-slate-600">{tripText}</p>}
    <Link href={href} className="btn btn-primary bounce-animation">
      Reservasi
    </Link>
    <div className="pt-4 border-t justify-center flex border-slate-200 mt-4">
      <ShipInfo name={name} icon="/assets/icons/ship.svg" />
    </div>
  </aside>
)

const MobileBar = ({ guestText, priceText, tripText, href }) => (
  <div className="fixed bottom-0 left-0 z-999 right-0 lg:hidden bg-white border-t border-slate-200 p-4 z-95">
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1">
        {tripText && <p className="text-xs text-slate-600">{tripText}</p>}
        <div className="flex items-center gap-2 mb-1">
          <Icon src="/assets/icons/people.svg" />
          <span className="text-sm font-medium">{guestText}</span>
        </div>
        <p className="text-xs text-slate-600">Harga mulai</p>
        <p className="text-lg font-bold text-slate-900">{priceText}</p>
      </div>
      <Link href={href} className="btn btn-primary btn-xs bounce-animation">
        Reservasi
      </Link>
    </div>
  </div>
)

export default function ProductTitle({
  title,
  description,
  badges = {},
  shipName,
  price,
  slug,
}) {
  if (!title) return null

  const name = shipName || title
  const minGuest = badges.minGuest ?? 1
  const maxGuest = badges.maxGuest ?? null
  const guestText = maxGuest
    ? `${minGuest}-${maxGuest} Tamu`
    : `${minGuest}+ Tamu`
  const days = Number(badges.days) || null
  const nights = days && days > 1 ? days - 1 : null
  const tripText = days
    ? `${days} Hari ${nights ? `${nights} Malam` : ''} ${
        badges.isOpenTrip ? 'Open trip' : ''
      }`.trim()
    : ''
  const priceText = price?.baseFormatted ?? formatIDR(price?.base)
  const href = slug ? `/product/${slug}/checkout` : '#'

  return (
    <>
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Left
              isOpenTrip={badges.isOpenTrip}
              title={title}
              name={name}
              description={description}
            />
          </div>
          <div className="hidden lg:block">
            <Sidebar
              guestText={guestText}
              priceText={priceText}
              tripText={tripText}
              href={href}
              name={name}
            />
          </div>
        </div>
      </div>

      <MobileBar
        guestText={guestText}
        priceText={priceText}
        tripText={tripText}
        href={href}
      />
      <div className="lg:hidden h-32" />
    </>
  )
}
