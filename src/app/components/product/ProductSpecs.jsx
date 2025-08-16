export default function ProductSpecs({ left = [], right = [] }) {
  if (!left.length && !right.length) return null

  return (
    <div className="max-sm:hidden sm:-mt-8">
      {/* Judul */}
      <div className="flex items-center gap-2">
        <p className="text-xl font-semibold text-black mb-2">
          Spesifikasi kapal
        </p>
      </div>

      {/* Grid 2 kolom */}
      <div className="grid grid-cols-2 text-14 px-2">
        {/* Kolom kiri */}
        <div>
          {left.map((item, i) => (
            <div key={i} className="flex gap-2">
              <p>•</p>
              <p>{item}</p>
            </div>
          ))}
        </div>

        {/* Kolom kanan */}
        <div>
          {right.map((item, i) => (
            <div key={i} className="flex gap-2 ml-4">
              <p>•</p>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
