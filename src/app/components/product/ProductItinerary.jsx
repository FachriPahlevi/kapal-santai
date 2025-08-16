// src/app/components/product/ProductItinerary.jsx
export default function ProductItinerary({ itinerary = [] }) {
  if (!itinerary.length) return null
  return (
    <section className="section">
      <h2 className="text-lg font-semibold mb-3">Rencana Perjalanan</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {itinerary
          .sort((a, b) => (a.day || 0) - (b.day || 0))
          .map(d => (
            <div key={d.day} className="card">
              <h3 className="card-title">Day {d.day}</h3>
              <ul className="list">
                {(d.stops || []).map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  )
}
