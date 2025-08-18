import ProductCabinCard from './ProductCabinCard'

export default function ProductCabinList({ rooms = [] }) {
  if (!rooms.length) return null
  return (
    <section className="section">
      <h2 className="text-3xl font-bold mb-3">Daftar Kabin</h2>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {rooms.map(r => (
          <ProductCabinCard key={r.id} room={r} />
        ))}
      </div>
    </section>
  )
}
