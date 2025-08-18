'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ModalLanguage from '../shared/ModalLanguange'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [lang, setLang] = useState('id')

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'id'
    setLang(savedLang)
  }, [isLangOpen])

  return (
    <nav className="absolute top-0 left-0 z-50 flex h-[65px] w-full items-center bg-white px-4 py-4 shadow-md sm:px-10 md:h-[72px] md:px-20 xl:px-36 xl:gap-7 gap-4 font-sans">
      <Link href="/" className="mr-auto" aria-label="Kapal Santai">
        <Image
          src="/assets/logo/logo.svg"
          alt="logo"
          width={190}
          height={190}
          className="w-[128px] transition-all md:w-[168px]"
          priority
        />
      </Link>

      <div className="hidden xl:flex items-center gap-6 text-muted">
        <Link
          href="/product"
          className="hover:text-primary focus:text-primary whitespace-nowrap font-normal"
        >
          Sewa Kapal
        </Link>
        <Link
          href="/ship-registration"
          className="hover:text-primary focus:text-primary whitespace-nowrap font-normal"
        >
          Menjadi Mitra Kapal
        </Link>
        <Link
          href="/about-us"
          className="hover:text-primary focus:text-primary whitespace-nowrap font-normal"
        >
          Tentang Kami
        </Link>
        <Link
          href="/support"
          className="hover:text-primary focus:text-primary whitespace-nowrap font-normal"
        >
          Dukungan
        </Link>
      </div>

      <button
        aria-label="Ganti bahasa"
        onClick={() => setIsLangOpen(true)}
        className="hidden xl:flex"
      >
        <Image
          src={lang === 'id' ? '/assets/flags/id.svg' : '/assets/flags/uk.svg'}
          alt={lang.toUpperCase()}
          width={24}
          height={24}
          className="h-6 w-6 sm:h-10 md:w-10"
        />
      </button>

      <button
        aria-label="Ganti bahasa"
        onClick={() => setIsLangOpen(true)}
        className="xl:hidden"
      >
        <Image
          src={lang === 'id' ? '/assets/flags/id.svg' : '/assets/flags/uk.svg'}
          alt={lang.toUpperCase()}
          width={24}
          height={24}
          className="h-6 w-6 sm:h-10 md:w-10"
        />
      </button>

      <div className="hidden xl:flex items-center gap-4">
        <Link
          href="/register"
          className="btn btn-primary btn-sm bounce-animation"
        >
          Daftar
        </Link>
        <Link href="/login" className="btn btn-outline btn-sm bounce-animation">
          Masuk
        </Link>
      </div>

      <button
        type="button"
        aria-label="Buka menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen(v => !v)}
        className="xl:hidden"
      >
        <Image
          src="/assets/icons/hamburger-menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="h-8 w-8 md:h-11 md:w-11"
        />
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 top-[65px] w-full bg-white px-6 py-6 shadow-md md:top-[72px] xl:hidden"
        >
          <nav className="flex flex-col gap-4">
            <Link href="/product" className="font-normal">
              Sewa Kapal
            </Link>
            <Link href="/ship-registration" className="font-normal">
              Menjadi Mitra Kapal
            </Link>
            <Link href="/about-us" className="font-normal">
              Tentang Kami
            </Link>
            <Link href="/support" className="font-normal">
              Dukungan
            </Link>
          </nav>
          <div className="mt-4 flex gap-3">
            <Link href="/register" className="btn btn-primary w-full">
              Daftar
            </Link>
            <Link href="/login" className="btn btn-outline w-full">
              Masuk
            </Link>
          </div>
        </div>
      )}

      <ModalLanguage isOpen={isLangOpen} onClose={() => setIsLangOpen(false)} />
    </nav>
  )
}
