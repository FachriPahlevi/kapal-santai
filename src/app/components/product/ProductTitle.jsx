import Image from 'next/image'
import Link from 'next/link'
import { formatIDR } from '@/app/lib/utils/currency'

/* --- Badge --- */
const OpenTripBadge = () => (
  <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm">
    <Image
      src="/assets/icons/suitcase.svg"
      alt=""
      width={16}
      height={16}
      className="w-4 h-4"
    />
    <span>Open Trip</span>
  </div>
)

/* --- Ship Info --- */
const ShipInfo = ({ name, icon = '/assets/icons/ship-fill.svg' }) => (
  <div className="flex items-center gap-3">
    <div className="bg-primary p-1 rounded-md">
      <Image src={icon} alt="" width={24} height={24} className="w-6 h-6" />
    </div>
    <span className="font-semibold text-slate-900">{name}</span>
  </div>
)

/* --- Left Content --- */
const LeftContent = ({ badges, title, name, description }) => (
  <div className="space-y-6">
    {badges?.isOpenTrip && <OpenTripBadge />}

    <h1 className="text-2xl md:text-4xl font-bold text-slate-900">{title}</h1>

    <ShipInfo name={name} />

    {description && (
      <section className="pt-4">
        <h2 className="text-xl font-bold text-slate-900 mb-3">Tentang kapal</h2>
        <p className="text-slate-600">{description}</p>
      </section>
    )}
  </div>
)

/* --- Right Sidebar --- */
const RightSidebar = ({
  guestText,
  priceText,
  tripText,
  checkoutHref,
  name,
}) => (
  <aside className="sticky top-24 rounded-2xl border border-slate-200 p-6 space-y-4">
    <div className="flex items-center gap-2 text-slate-900">
      <Image
        src="/assets/icons/people.svg"
        alt=""
        width={20}
        height={20}
        className="w-5 h-5"
      />
      <span className="font-medium">{guestText}</span>
    </div>

    <div>
      <p className="text-sm text-slate-600">Harga mulai</p>
      <p className="text-2xl font-bold text-slate-900">{priceText}</p>
    </div>

    {tripText && <p className="text-slate-600">{tripText}</p>}

    <Link href={checkoutHref} className="btn btn-primary w-full">
      Reservasi
    </Link>

    <div className="pt-4 border-t border-slate-200 mt-4">
      <ShipInfo name={name} icon="/assets/icons/ship.svg" />
    </div>
  </aside>
)

/* --- Mobile Bottom Bar --- */
const MobileBottomBar = ({ guestText, priceText, tripText, checkoutHref }) => (
  <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-slate-200 p-4 z-50">
    <div className="flex items-center justify-between gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Image
            src="/assets/icons/people.svg"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-sm font-medium">{guestText}</span>
        </div>
        <p className="text-xs text-slate-600">Harga mulai</p>
        <p className="text-lg font-bold text-slate-900">{priceText}</p>
        {tripText && <p className="text-xs text-slate-600">{tripText}</p>}
      </div>
      <Link href={checkoutHref} className="btn btn-primary flex-shrink-0">
        Reservasi
      </Link>
    </div>
  </div>
)

/* --- Main Component --- */
export default function ProductTitle({
  title,
  description,
  badges = {},
  shipName,
  price,
  slug,
}) {
  if (!title) return null

  // Data processing
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
  const checkoutHref = slug ? `/product/${slug}/checkout` : '#'

  return (
    <>
      <div className="w-full mx-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LeftContent
              badges={badges}
              title={title}
              name={name}
              description={description}
            />
          </div>

          <div className="hidden lg:block">
            <RightSidebar
              guestText={guestText}
              priceText={priceText}
              tripText={tripText}
              checkoutHref={checkoutHref}
              name={name}
            />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <MobileBottomBar
        guestText={guestText}
        priceText={priceText}
        tripText={tripText}
        checkoutHref={checkoutHref}
      />

      {/* Prevent overlap with bottom bar */}
      <div className="lg:hidden h-32" />
    </>
  )
}
