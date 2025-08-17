import ProductCabinCard from './ProductCabinCard'

export default function ProductCabinList({ rooms = [] }) {
  if (!rooms.length) return null
  return (
    <section className="section">
      <h2 className="text-lg font-semibold mb-3">Daftar Kabin</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map(r => (
          <ProductCabinCard key={r.id} room={r} />
        ))}
      </div>
    </section>
  )
}
