const occasionTypes = [
  {
    title: 'Birthdays & Anniversaries',
    desc: 'Turn personal and family milestones into life-changing educational sponsorships.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
      />
    ),
  },
  {
    title: 'Career & Business Wins',
    desc: 'Celebrate promotions, company anniversaries, or corporate achievements by giving back.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: 'Memorials & Tributes',
    desc: 'Honor the enduring legacy of loved ones through lasting investments in student futures.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    title: 'Graduations & Academic Honors',
    desc: 'Pay your success forward by funding scholarships and learning materials for the next generation.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
    ),
  },
]

const CelebrateWithKwaraETF = () => {
  const readMoreUrl =
    'https://kwaraetf.org/kwaraetf-introduces-celebratewithkwaraetf-movement-join-the-impact/'

  return (
    <section className="min-h-screen bg-[#f8faf9] pb-24">
      {/* Page Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#066842] to-[#084d49] text-white">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#c8b268]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl"
          style={{ animationDelay: '2.5s' }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="animate-fade-up mx-auto max-w-3xl">
            <span className="inline-block rounded-full border border-[#c8b268]/50 bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#f3df9d] uppercase">
              #CelebrateWithKwaraETF
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Celebrate With Kwara ETF
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Turn your cherished personal milestones into lasting opportunities for indigent students.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Core Showcase Card */}
        <div className="animate-fade-up border border-gray-200 bg-white shadow-xs">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49]" />

          <div className="p-7 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center border border-[#c8b268]/60 bg-[#fdf8eb] px-3.5 py-1 text-xs font-semibold tracking-widest text-[#8c6d23] uppercase">
                The Movement
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-gray-200/80" />
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Giving Meaning to Every Milestone
            </h2>

            {/* Clear, readable main statement */}
            <p className="mt-6 text-[17px] leading-8 text-gray-700 sm:text-[18px] sm:leading-[1.95]">
              The <span className="font-semibold text-[#066842]">#CelebrateWithKwaraETF</span> initiative — a platform that enables individuals to commemorate personal milestones by supporting access to quality education for indigent students across Kwara State.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-7">
              <a
                href={readMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2.5 rounded-full border border-[#6a8752] bg-[#066842] px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#055737] hover:shadow-md"
              >
                <span>Read More</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.4"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a
                href="#donation"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3.5 text-[15px] font-semibold text-[#066842] transition-colors hover:border-[#066842] hover:bg-[#f4f9f6]"
              >
                <span>Support a Student Today</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ways to Celebrate Breakdown */}
        <div className="mt-16">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
              Milestone Occasions
            </span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Ways You Can Celebrate
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Every celebration can become a spark of hope. Dedicate your special day to brightening a young learner’s path.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {occasionTypes.map((occ, idx) => (
              <div
                key={occ.title}
                className="animate-fade-up border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#066842]/40 hover:shadow-md"
                style={{ animationDelay: `${150 + idx * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.9" stroke="currentColor">
                    {occ.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{occ.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-[13px]">{occ.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Callout Banner */}
        <div className="mt-16 border border-[#c8b268]/40 bg-gradient-to-r from-[#fdfbf6] via-white to-[#f4f8f5] p-8 sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#fdf8eb] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8c6d23]">
                Direct Community Impact
              </span>
              <h3 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
                How Your Milestone Helps
              </h3>
              <p className="mt-2 text-base leading-relaxed text-gray-700">
                Contributions go directly into covering tuition support, learning supplies, school uniforms, and examination fees for vulnerable and indigent students across Kwara State.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href={readMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-[#066842] hover:text-[#066842]"
              >
                <span>Read Full Movement Story</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CelebrateWithKwaraETF

