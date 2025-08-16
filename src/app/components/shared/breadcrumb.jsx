import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Breadcrumb({ items = [] }) {
  if (!items.length) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-[13px]">
      <ol className="flex flex-wrap items-center">
        {items.map((it, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li key={idx} className="flex items-center">
              {idx > 0 && (
                <ChevronRight className="mx-1 h-3.5 w-3.5 text-slate-400" />
              )}
              {isLast ? (
                // 🔵 Aktif = biru
                <span className="font-medium text-blue-600">{it.label}</span>
              ) : (
                // 🩶 Link = slate (abu)
                <Link
                  href={it.href}
                  className="text-slate-500 hover:text-slate-700 transition-colors"
                >
                  {it.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
