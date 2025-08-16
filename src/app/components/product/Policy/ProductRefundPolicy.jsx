'use client'

export default function ProductRefundPolicy({ refundPolicy }) {
  return (
    <section className="mt-10 scroll-mt-16">
      <div className="flex max-md:flex-col gap-4 sm:gap-6 text-black">
        {/* Judul Kiri */}
        <h2 className="sm:text-2xl text-lg font-bold md:w-[205px] shrink-0">
          Kebijakan Refund &amp; Reschedule
        </h2>

        {/* Konten Kanan */}
        <div className="flex flex-col gap-6 w-full">
          {/* Deskripsi Umum */}
          {refundPolicy?.description && (
            <p className="text-slate-700">{refundPolicy?.description}</p>
          )}

          {/* Aturan Refund */}
          {refundPolicy?.rules && refundPolicy?.rules.length > 0 && (
            <div>
              <h3 className="font-medium text-slate-900 mb-3">
                Aturan Refund:
              </h3>
              <div className="space-y-4">
                {refundPolicy?.rules.map((rule, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-200 text-orange-700 flex items-center justify-center text-xs font-medium flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="text-slate-700">
                      {rule.timeframe && (
                        <div className="font-medium text-slate-900 mb-1">
                          {rule.timeframe}
                        </div>
                      )}
                      <div>{rule.description}</div>
                      {rule.percentage && (
                        <div className="text-sm text-orange-600 mt-1">
                          Refund: {rule.percentage}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Syarat & Ketentuan */}
          {refundPolicy?.conditions && refundPolicy?.conditions.length > 0 && (
            <div>
              <h3 className="font-medium text-slate-900 mb-3">
                Syarat &amp; Ketentuan:
              </h3>
              <ul className="prose max-w-none max-md:text-sm space-y-2">
                {refundPolicy?.conditions.map((condition, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-700 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Non Refundable Warning */}
          {refundPolicy?.nonRefundable && (
            <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
              <p className="text-sm text-red-700">
                <span className="font-medium">Perhatian:</span>{' '}
                {refundPolicy?.nonRefundable}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
