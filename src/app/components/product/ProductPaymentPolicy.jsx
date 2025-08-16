'use client'

export default function ProductPaymentPolicy({ paymentPolicy }) {
  if (!paymentPolicy) return null

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Kebijakan Pembayaran</h2>
      <div className="bg-blue-50 rounded-lg p-6">
        {paymentPolicy.description && (
          <p className="text-slate-700 mb-4">{paymentPolicy.description}</p>
        )}

        {paymentPolicy.methods && paymentPolicy.methods.length > 0 && (
          <div className="mb-4">
            <h3 className="font-medium text-slate-900 mb-2">
              Metode Pembayaran:
            </h3>
            <ul className="space-y-1">
              {paymentPolicy.methods.map((method, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  {method}
                </li>
              ))}
            </ul>
          </div>
        )}

        {paymentPolicy.terms && paymentPolicy.terms.length > 0 && (
          <div>
            <h3 className="font-medium text-slate-900 mb-2">
              Syarat & Ketentuan:
            </h3>
            <ul className="space-y-2">
              {paymentPolicy.terms.map((term, i) => (
                <li key={i} className="text-slate-700 text-sm">
                  {i + 1}. {term}
                </li>
              ))}
            </ul>
          </div>
        )}

        {paymentPolicy.downPayment && (
          <div className="mt-4 p-3 bg-white rounded border-l-4 border-blue-600">
            <p className="text-sm">
              <span className="font-medium">Down Payment:</span>{' '}
              {paymentPolicy.downPayment}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
