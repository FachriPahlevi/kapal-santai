import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Breadcrumb({ items = [] }) {
  if (!items.length) return null
  return (
    <nav aria-label="Breadcrumb" className="mb-3 text-sm text-slate-600">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, idx) => {
          const last = idx === items.length - 1
          return (
            <li key={idx} className="flex items-center gap-1">
              {idx > 0 && (
                <span className="text-slate-400">
                  <ChevronRight className="w-4 h-4" />
                </span>
              )}
              {last ? (
                <span className="font-medium text-slate-900">{it.label}</span>
              ) : (
                <Link href={it.href} className="hover:underline">
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
