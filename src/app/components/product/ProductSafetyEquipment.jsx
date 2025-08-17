export default function ProductSafetyEquipment({ items = [] }) {
  if (!items.length) return null
  const mid = Math.ceil(items.length / 2)
  const left = items.slice(0, mid)
  const right = items.slice(mid)

  return (
    <section className="p-4">
      <h2 className="mb-3 text-lg font-semibold text-slate-900">
        Alat keamanan
      </h2>
      <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-10">
        <ul className="list-disc list-inside text-slate-800">
          {left.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ul className="list-disc list-inside text-slate-800">
          {right.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
