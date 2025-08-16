import Image from 'next/image'
import Link from 'next/link'

export default function OverviewSection() {
  return (
    <section id="overview" className="flex gap-6 scroll-mt-16">
      {/* Kiri: Detail trip */}
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-[#0CA34C] max-sm:text-sm w-fit flex items-center gap-2 px-2 sm:px-4 py-2 rounded-xl text-white">
          <Image
            src="/assets/icons/suitcase.svg"
            alt="Trip Icon"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          Open Trip
        </div>

        <h1 className="sm:text-3xl text-xl font-bold text-black">
          3 Hari 2 Malam Open Trip Dengan Papiton Lopi
        </h1>

        <div className="flex sm:text-lg gap-2 items-center font-semibold">
          <Image
            src="/assets/icons/ship-fill.svg"
            alt="Ship Icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          Papiton Lopi
        </div>

        <div className="mb-8">
          <p
            id="about_ship"
            className="sm:text-xl text-lg font-bold text-black mb-2 scroll-mt-16"
          >
            Tentang kapal
          </p>
          <p className="max-sm:text-sm">
            We bring curious travelers to one of the best paradise destination
            in Indonesia, Komodo National Park, for an authentic live-on-board
            experience and a unique sailing adventure.
          </p>
        </div>
      </div>

      {/* Kanan: Sidebar desktop */}
      <aside className="p-6 border h-min text-nowrap min-w-[350px] rounded-2xl max-lg:hidden ml-auto flex flex-col gap-2">
        <p className="flex items-center gap-2 text-sm font-semibold">
          {/* Icon tamu */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z"></path>
          </svg>
          1-11 Tamu
        </p>
        <p className="font-semibold text-black text-sm">Harga mulai</p>
        <p className="text-xl font-bold">IDR 4.850.000</p>
        <p>3 Hari 2 Malam Open trip</p>

        <div className="flex flex-col gap-6 items-center mt-4">
          <Link
            href="/id/product/papiton-lopi--open-trip-11-person-3-days-liveaboard-papiton-lopi-deluxe/checkout"
            className="text-center relative text-sm px-5 py-2 sm:py-[10px] w-full flex justify-center items-center gap-2 sm:min-w-[100px] rounded-md text-nowrap border bg-primary border-primary text-white bounce-animation"
          >
            Reservasi
          </Link>

          <div className="h-[1px] bg-slate-300 w-full"></div>

          <p className="items-center flex gap-2">
            <Image
              src="/assets/icons/ship.svg"
              alt="Ship Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            Papiton Lopi
          </p>
        </div>
      </aside>

      {/* Mobile bottom bar */}
      <div className="fixed p-4 left-0 bottom-0 w-screen bg-white lg:hidden z-50 border-t">
        <p>3 Hari 2 Malam Open trip</p>
        <div className="flex">
          <div className="flex-1">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z"></path>
              </svg>
              1-11 Tamu
            </p>
            <p className="font-semibold text-black text-xs">Harga mulai</p>
            <p className="font-bold text-base">IDR 4.850.000</p>
          </div>

          <div>
            <Link
              href="/id/product/papiton-lopi--open-trip-11-person-3-days-liveaboard-papiton-lopi-deluxe/checkout"
              className="text-center relative text-sm px-5 py-2 sm:py-[10px] w-full flex justify-center items-center gap-2 sm:min-w-[100px] rounded-md text-nowrap border bg-primary border-primary text-white bounce-animation"
            >
              Reservasi
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
