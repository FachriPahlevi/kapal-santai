'use client'

export default function ProductAbout({ description, highlights }) {
  if (!description && (!highlights || !highlights.length)) return null

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Tentang Trip</h2>
      <div className="space-y-4">
        {description && (
          <div className="text-slate-700 leading-relaxed">
            {description.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-3 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {highlights && highlights.length > 0 && (
          <div>
            <h3 className="font-medium text-slate-900 mb-2">Highlight:</h3>
            <ul className="space-y-2">
              {highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
