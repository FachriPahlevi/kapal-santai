export default function ProductFacilities({ items = [] }) {
  if (!items.length) return null

  return (
    <section className="p-4">
      <h3 className="text-lg font-semibold text-slate-900">Fasilitas kapal</h3>
      <ul className="mt-3 grid list-disc grid-cols-1 gap-y-2 pl-5 text-slate-700 md:grid-cols-2">
        {items.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  )
}
