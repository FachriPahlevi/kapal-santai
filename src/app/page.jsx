import Link from 'next/link'

const SLUG =
  'papiton-lopi--open-trip-11-person-3-days-liveaboard-papiton-lopi-deluxe'

export default function Home() {
  return (
    <main className="min-h-[60vh] flex items-center">
      <div className="container text-center p-6">
        <h1 className="text-2xl font-semibold">Kapal Santai – Demo Produk</h1>
        <p className="mt-2 text-[var(--muted)]">
          Klik tombol di bawah untuk membuka halaman produk Papiton Lopi.
        </p>
        <Link
          href={`/product/${SLUG}`}
          className="inline-block mt-6 rounded-xl px-4 py-2 font-medium text-white bg-[var(--brand)] hover:brightness-95"
        >
          Buka Halaman Produk
        </Link>
      </div>
    </main>
  )
}
