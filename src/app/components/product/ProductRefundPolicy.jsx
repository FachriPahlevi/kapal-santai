'use client'

export default function ProductRefundPolicy({ refundPolicy }) {
  if (!refundPolicy) return null

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Kebijakan Refund</h2>
      <div className="bg-orange-50 rounded-lg p-6">
        {refundPolicy.description && (
          <p className="text-slate-700 mb-4">{refundPolicy.description}</p>
        )}

        {refundPolicy.rules && refundPolicy.rules.length > 0 && (
          <div className="mb-4">
            <h3 className="font-medium text-slate-900 mb-2">Aturan Refund:</h3>
            <div className="space-y-3">
              {refundPolicy.rules.map((rule, i) => (
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

        {refundPolicy.conditions && refundPolicy.conditions.length > 0 && (
          <div>
            <h3 className="font-medium text-slate-900 mb-2">
              Syarat & Ketentuan:
            </h3>
            <ul className="space-y-1">
              {refundPolicy.conditions.map((condition, i) => (
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

        {refundPolicy.nonRefundable && (
          <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
            <p className="text-sm text-red-700">
              <span className="font-medium">Perhatian:</span>{' '}
              {refundPolicy.nonRefundable}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
