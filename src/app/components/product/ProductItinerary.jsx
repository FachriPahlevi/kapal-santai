'use client'
import { useState } from 'react'

export default function ProductItinerary({
  itinerary = [],
  included = [],
  excluded = [],
}) {
  const [includedOpen, setIncludedOpen] = useState(false)
  const [excludedOpen, setExcludedOpen] = useState(false)

  if (!itinerary.length) return null

  return (
    <section
      id="itinerary"
      className="flex max-sm:flex-col scroll-mt-16 gap-4 sm:gap-6 mb-4"
    >
      <p className="sm:text-2xl text-lg font-bold sm:w-[150px] md:w-[160px] lg:w-[180px] w-full">
        Rencana perjalanan
      </p>

      <div className="flex flex-col gap-10 text-14 w-full">
        {/* Itinerary Days */}
        <div className="grid sm:grid-cols-2 gap-6">
          {itinerary
            .sort((a, b) => (a.day || 0) - (b.day || 0))
            .map(d => (
              <div key={d.day}>
                <p className="sm:text-2xl text-14 font-bold text-black mb-2">
                  DAY {d.day}
                </p>
                {(d.stops || []).map((stop, i) => (
                  <div key={i} className="flex gap-2 max-sm:text-sm ml-2">
                    <p>•</p>
                    <p>{stop}</p>
                  </div>
                ))}
              </div>
            ))}
        </div>

        <div className="flex flex-col gap-6 sm:gap-10">
          {/* Included - Desktop */}
          <div className="max-sm:hidden">
            <p className="text-xl font-semibold text-black mb-2">
              Termasuk dalam Paket
            </p>
            <div className="grid grid-cols-2 pl-1 gap-2">
              <div className="flex flex-col gap-2">
                {included
                  .slice(0, Math.ceil(included.length / 2))
                  .map((item, i) => (
                    <p key={i} className="flex items-start gap-2">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0CA34C] min-w-6 h-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      {item}
                    </p>
                  ))}
              </div>
              <div className="flex flex-col gap-2">
                {included
                  .slice(Math.ceil(included.length / 2))
                  .map((item, i) => (
                    <p key={i} className="flex items-start gap-2">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0CA34C] min-w-6 h-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      {item}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          {/* Excluded - Desktop */}
          <div className="max-sm:hidden">
            <p className="text-xl font-semibold text-black mb-2">
              Tidak Termasuk dalam Paket
            </p>
            <div className="grid grid-cols-2 items-center pl-1 gap-2">
              <div className="flex flex-col gap-2">
                {excluded
                  .slice(0, Math.ceil(excluded.length / 2))
                  .map((item, i) => (
                    <p key={i} className="flex items-start gap-2">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        viewBox="0 0 15 15"
                        className="text-red-500 min-w-5 h-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                          fill="currentColor"
                        />
                      </svg>
                      {item}
                    </p>
                  ))}
              </div>
              <div className="flex flex-col gap-2">
                {excluded
                  .slice(Math.ceil(excluded.length / 2))
                  .map((item, i) => (
                    <p key={i} className="flex items-start gap-2">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        viewBox="0 0 15 15"
                        className="text-red-500 min-w-5 h-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                          fill="currentColor"
                        />
                      </svg>
                      {item}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          {/* Mobile Accordions */}
          <div className="w-full mx-auto sm:hidden -mb-2 mt-2">
            <div className="pb-2 overflow-hidden">
              <h3>
                <button
                  type="button"
                  className="flex justify-between items-center w-full group"
                  onClick={() => setIncludedOpen(!includedOpen)}
                >
                  <span className="font-semibold">Termasuk dalam Paket</span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${
                      includedOpen ? 'rotate-180' : ''
                    }`}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </h3>
              {includedOpen && (
                <div className="mt-4 space-y-2">
                  {included.map((item, i) => (
                    <p key={i} className="flex items-start gap-2 text-sm">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#0CA34C] min-w-4 h-4 mt-0.5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-full mx-auto sm:hidden">
            <div className="pb-2 overflow-hidden">
              <h3>
                <button
                  type="button"
                  className="flex justify-between items-center w-full group"
                  onClick={() => setExcludedOpen(!excludedOpen)}
                >
                  <span className="font-semibold">
                    Tidak Termasuk dalam Paket
                  </span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${
                      excludedOpen ? 'rotate-180' : ''
                    }`}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </h3>
              {excludedOpen && (
                <div className="mt-4 space-y-2">
                  {excluded.map((item, i) => (
                    <p key={i} className="flex items-start gap-2 text-sm">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        viewBox="0 0 15 15"
                        className="text-red-500 min-w-4 h-4 mt-0.5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                          fill="currentColor"
                        />
                      </svg>
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
