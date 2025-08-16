// src/app/components/product/ProductIncludes.jsx
import { Check, X } from 'lucide-react'

export default function ProductIncludes({ includes = [], excludes = [] }) {
  if (!includes.length && !excludes.length) return null
  return (
    <section className="section grid gap-4 md:grid-cols-2">
      {includes.length ? (
        <div className="card">
          <h3 className="card-title">Termasuk dalam Paket</h3>
          <ul className="list">
            {includes.map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-4 h-4 mt-1 text-green-600" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {excludes.length ? (
        <div className="card">
          <h3 className="card-title">Tidak Termasuk</h3>
          <ul className="list">
            {excludes.map((s, i) => (
              <li key={i} className="flex items-start gap-2">
                <X className="w-4 h-4 mt-1 text-red-600" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  )
}
