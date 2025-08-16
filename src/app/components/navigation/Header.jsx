'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute bg-white px-4 xl:gap-7 gap-4 xl:px-36 md:px-20 sm:px-10 py-4 shadow-md w-full transition-all flex items-center top-0 z-50 left-0 h-[65px] md:h-[72px]">
      <Link href="/" className="mr-auto" aria-label="Kapal Santai">
        <Image
          src="/assets/logo/logo.svg"
          alt="logo"
          width={190}
          height={190}
          className="transition-all md:w-[168px] w-[128px]"
          priority
        />
      </Link>

      <div className="flex gap-6 max-xl:hidden items-center">
        <Link
          href="/product"
          className="hover:text-primary focus:text-primary text-nowrap"
        >
          Sewa Kapal
        </Link>
        <Link
          href="/ship-registration"
          className="hover:text-primary focus:text-primary text-nowrap"
        >
          Menjadi Mitra Kapal
        </Link>
        <Link
          href="/about-us"
          className="hover:text-primary focus:text-primary text-nowrap"
        >
          Tentang Kami
        </Link>
        <Link
          href="/support"
          className="hover:text-primary focus:text-primary text-nowrap"
        >
          Dukungan
        </Link>
      </div>

      <div className="max-xl:hidden">
        <div className="h-full flex items-center relative text-left">
          <button aria-label="Ganti bahasa">
            <Image
              src="/assets/flags/id.svg"
              alt="ID"
              width={190}
              height={190}
              className="md:w-10 sm:h-10 w-6 h-6"
            />
          </button>
        </div>
      </div>

      <div className="xl:hidden">
        <div className="h-full flex items-center relative text-left">
          <button aria-label="Ganti bahasa">
            <Image
              src="/assets/flags/id.svg"
              alt="ID"
              width={190}
              height={190}
              className="md:w-10 sm:h-10 w-6 h-6"
            />
          </button>
        </div>
      </div>

      <div className="max-xl:hidden flex gap-4 items-center">
        <Link href="/register" className="btn btn-primary text-sm text-nowrap">
          Daftar
        </Link>

        <Link
          href="/login"
          className="btn btn-outline text-sm text-nowrap bg-white font-medium"
        >
          Masuk
        </Link>
      </div>

      {/* Hamburger (mobile) */}
      <button
        type="button"
        aria-label="Buka menu"
        onClick={() => setIsOpen(v => !v)}
        className="xl:hidden"
      >
        <Image
          src="/assets/icons/hamburger-menu.svg"
          alt="menu"
          width={500}
          height={500}
          className="md:w-11 md:h-11 w-8 h-8 text-black md:-p-2"
        />
      </button>

      {/* Drawer Mobile */}
      {isOpen && (
        <div className="absolute left-0 top-[72px] w-full bg-white shadow-md xl:hidden px-6 py-6">
          <nav className="flex flex-col gap-4">
            <Link href="/product" onClick={() => setIsOpen(false)}>
              Sewa Kapal
            </Link>
            <Link href="/ship-registration" onClick={() => setIsOpen(false)}>
              Menjadi Mitra Kapal
            </Link>
            <Link href="/about-us" onClick={() => setIsOpen(false)}>
              Tentang Kami
            </Link>
            <Link href="/support" onClick={() => setIsOpen(false)}>
              Dukungan
            </Link>
          </nav>
          <div className="mt-4 flex gap-3">
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary w-full"
            >
              Daftar
            </Link>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="btn btn-outline w-full"
            >
              Masuk
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
