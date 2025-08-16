'use client'

export default function ProductShipPolicy({ shipPolicy }) {
  if (!shipPolicy) return null

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Kebijakan Kapal</h2>
      <div className="bg-slate-50 rounded-lg p-6">
        {shipPolicy.description && (
          <p className="text-slate-700 mb-4">{shipPolicy.description}</p>
        )}

        {shipPolicy.rules && shipPolicy.rules.length > 0 && (
          <div className="mb-4">
            <h3 className="font-medium text-slate-900 mb-3">
              Aturan di Kapal:
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {shipPolicy.rules.map((rule, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-white rounded border"
                >
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center text-xs flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="text-slate-700 text-sm">{rule}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {shipPolicy.prohibited && shipPolicy.prohibited.length > 0 && (
          <div className="mb-4">
            <h3 className="font-medium text-red-700 mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-sm">✕</span>
              </span>
              Barang/Aktivitas Terlarang
            </h3>
            <ul className="space-y-1">
              {shipPolicy.prohibited.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {shipPolicy.safety && shipPolicy.safety.length > 0 && (
          <div>
            <h3 className="font-medium text-green-700 mb-2 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </span>
              Keselamatan
            </h3>
            <ul className="space-y-1">
              {shipPolicy.safety.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {shipPolicy.contact && (
          <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-600 rounded">
            <p className="text-sm text-blue-700">
              <span className="font-medium">Kontak Darurat:</span>{' '}
              {shipPolicy.contact}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
