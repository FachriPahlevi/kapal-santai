'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ModalLanguage({ isOpen, onClose }) {
  const [selectedLang, setSelectedLang] = useState(
    typeof window !== 'undefined'
      ? document.cookie.match(/lang=(\w+)/)?.[1] || 'id'
      : 'id'
  )

  if (!isOpen) return null

  const saveLang = () => {
    document.cookie = `lang=${selectedLang}; path=/; max-age=31536000`
    window.location.reload()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-[400px] p-6"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-2">
          {selectedLang === 'id' ? 'Bahasa' : 'Language'}
        </h2>
        <p className="text-gray-600 mb-6 text-sm">
          {selectedLang === 'id'
            ? 'Pilih bahasa tampilan situs Kapalsantai sesuai preferensi akun kamu.'
            : 'Choose the display language for Kapalsantai based on your account preferences.'}
        </p>

        <label className="flex items-center justify-between border rounded-lg px-4 py-3 mb-3 cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/flags/id.svg"
              width={24}
              height={16}
              alt="Indonesia"
              unoptimized
            />
            <span>Bahasa Indonesia</span>
          </div>
          <input
            type="radio"
            name="language"
            value="id"
            checked={selectedLang === 'id'}
            onChange={() => setSelectedLang('id')}
            className="accent-blue-600 w-5 h-5"
          />
        </label>

        <label className="flex items-center justify-between border rounded-lg px-4 py-3 mb-6 cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/flags/uk.svg"
              width={24}
              height={16}
              alt="English"
              unoptimized
            />
            <span>English</span>
          </div>
          <input
            type="radio"
            name="language"
            value="en"
            checked={selectedLang === 'en'}
            onChange={() => setSelectedLang('en')}
            className="accent-blue-600 w-5 h-5"
          />
        </label>

        <button onClick={saveLang} className="btn btn-primary w-full">
          {selectedLang === 'id' ? 'Simpan perubahan' : 'Save changes'}
        </button>
      </div>
    </div>
  )
}
