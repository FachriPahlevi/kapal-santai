export default function ProductItinerary({
  itinerary = [],
  includes = [],
  excludes = [],
}) {
  if (!Array.isArray(itinerary) || itinerary.length === 0) return null

  const split2 = arr => {
    const m = Math.ceil((arr || []).length / 2)
    return [(arr || []).slice(0, m), (arr || []).slice(m)]
  }

  const days = [...itinerary].sort((a, b) => (a?.day || 0) - (b?.day || 0))
  const [incL, incR] = split2(includes)
  const [excL, excR] = split2(excludes)

  return (
    <div className="flex gap-4 sm:gap-6 max-sm:flex-col">
      <p className="w-full sm:w-[150px] md:w-[160px] lg:w-[180px] text-lg sm:text-2xl font-bold">
        Rencana perjalanan
      </p>

      <div className="w-full text-[14px]">
        <div className="grid gap-6 sm:grid-cols-2">
          {days.map(d => (
            <div key={d.day}>
              <p className="mb-2 text-[14px] sm:text-2xl font-bold text-black">
                DAY {d.day}
              </p>
              <ul className="ml-4 list-disc space-y-2 max-sm:text-sm">
                {(d.stops || []).map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {includes.length > 0 && (
          <div className="mt-8">
            <p className="mb-2 text-xl font-semibold text-black">
              Termasuk dalam Paket
            </p>
            <div className="grid grid-cols-1 gap-2 pl-1 sm:grid-cols-2 sm:gap-x-10">
              <ul className="space-y-2">
                {incL.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 min-w-6 text-[#0CA34C]"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {incR.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 min-w-6 text-[#0CA34C]"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {excludes.length > 0 && (
          <div className="mt-8">
            <p className="mb-2 text-xl font-semibold text-black">
              Tidak Termasuk dalam Paket
            </p>
            <div className="grid grid-cols-1 gap-2 pl-1 sm:grid-cols-2 sm:gap-x-10">
              <ul className="space-y-2">
                {excL.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      viewBox="0 0 15 15"
                      className="h-5 min-w-5 text-red-500"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                        fill="currentColor"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {excR.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      viewBox="0 0 15 15"
                      className="h-5 min-w-5 text-red-500"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                        fill="currentColor"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
