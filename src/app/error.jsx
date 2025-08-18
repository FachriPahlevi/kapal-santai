'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Error caught by error.jsx:', error)
  }, [error])

  return (
    <html lang="id">
      <body className="flex pt-64 mt-64 flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Terjadi Kesalahan 😢</h1>
        <p className="text-lg mb-6">
          {error?.message || 'Maaf, ada yang tidak beres.'}
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Coba Lagi
          </button>
          <a
            href="/"
            className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            Kembali ke Beranda
          </a>
        </div>
      </body>
    </html>
  )
}
