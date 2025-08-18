'use client'
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react'

export default function ProductItinerary({
  itinerary = [],
  includes = [],
  excludes = [],
}) {
  if (!itinerary.length) return null
  const split2 = a => [
    a.slice(0, Math.ceil(a.length / 2)),
    a.slice(Math.ceil(a.length / 2)),
  ]
  const days = [...itinerary].sort((a, b) => (a.day || 0) - (b.day || 0))
  const [incL, incR] = split2(includes)
  const [excL, excR] = split2(excludes)

  const TwoColList = ({ cols, Icon, color }) => (
    <div className="grid grid-cols-2 gap-x-12 gap-y-2">
      {cols.map((col, c) => (
        <ul key={c} className="space-y-2">
          {col.map((t, i) => (
            <li key={i} className="flex items-start gap-2">
              <Icon className={`h-5 w-5 ${color} shrink-0 flex-none`} />
              <span className="leading-6 text-slate-800">{t}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )

  const SectionMobile = ({ title, data, icon: Icon, color }) => (
    <details className="sm:hidden group rounded-lg border border-slate-200">
      <summary className="flex items-center justify-between px-4 py-3 font-semibold text-slate-900 cursor-pointer">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 text-slate-600 transition-transform group-open:rotate-180 shrink-0" />
      </summary>
      <div className="px-4 pb-4">
        <TwoColList cols={split2(data)} Icon={Icon} color={color} />
      </div>
    </details>
  )

  const SectionDesktop = ({ title, cols, icon: Icon, color }) => (
    <div className="hidden sm:block">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xl font-semibold text-slate-900">{title}</p>
        <ChevronUp className="h-4 w-4 text-slate-600" />
      </div>
      <TwoColList cols={cols} Icon={Icon} color={color} />
    </div>
  )

  return (
    <div className="flex gap-4 sm:gap-6 max-sm:flex-col">
      <p className="w-full sm:w-[150px] md:w-[160px] lg:w-[180px] text-lg sm:text-2xl font-bold">
        Rencana perjalanan
      </p>

      <div className="w-full text-sm">
        <div className="grid gap-6 sm:grid-cols-2">
          {days.map(d => (
            <div key={d.day}>
              <p className="mb-2 text-base sm:text-2xl font-bold">
                DAY {d.day}
              </p>
              <ul className="ml-4 list-disc space-y-2">
                {d.stops?.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {!!includes.length && (
          <div className="mt-6 sm:mt-8">
            <SectionMobile
              title="Termasuk dalam Paket"
              data={includes}
              icon={Check}
              color="text-green-600"
            />
            <SectionDesktop
              title="Termasuk dalam Paket"
              cols={[incL, incR]}
              icon={Check}
              color="text-green-600"
            />
          </div>
        )}

        {!!excludes.length && (
          <div className="mt-6 sm:mt-8">
            <SectionMobile
              title="Tidak Termasuk dalam Paket"
              data={excludes}
              icon={X}
              color="text-red-500"
            />
            <SectionDesktop
              title="Tidak Termasuk dalam Paket"
              cols={[excL, excR]}
              icon={X}
              color="text-red-500"
            />
          </div>
        )}
      </div>
    </div>
  )
}
