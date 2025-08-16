// src/app/components/product/SafetyEquipments.jsx
export default function SafetyEquipments() {
  const equipments = [
    'Jaket pelampung',
    'Pemadam api',
    'Rakit darurat',
    'Ban pelampung',
  ]

  return (
    <section>
      <h2 className="mb-2 text-lg font-bold text-slate-900">Alat keamanan</h2>
      <ul className="grid list-disc list-inside grid-cols-1 gap-x-8 sm:grid-cols-2">
        {equipments.map((item, idx) => (
          <li key={idx} className="text-slate-800">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
