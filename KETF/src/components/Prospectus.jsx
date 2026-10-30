const pillars = [
  {
    title: 'Establishment',
    detail: 'Statutory origin & institutional foundation under Kwara State law.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    title: 'Core Mandate',
    detail: 'Strategic funding for school infrastructure, scholarships & quality.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: 'Governance Structure',
    detail: 'Board of Trustees oversight, Secretariat execution & compliance.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: 'Key Milestones',
    detail: 'Track record of educational transformation & measurable impact.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    ),
  },
]

const Prospectus = () => {
  const pdfUrl =
    'https://kwaraetf.org/wp-content/uploads/2026/01/Kwara-State-Education-Trust-Fund-Prospectus.pdf'

  return (
    <section className="min-h-screen bg-[#f8faf9] pb-24">
      {/* Page Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#066842] to-[#084d49] text-white">
        {/* Decorative Ambient Glows */}
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
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Official Prospectus
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Comprehensive institutional profile and strategic overview of the
              Kwara State Education Trust Fund.
            </p>
          </div>
        </div>
      </div>

      {/* Main Executive Publication Showcase */}
      <div className="mx-auto mt-14 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className="animate-fade-up overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
          style={{ animationDelay: '140ms' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Styled Executive Document Cover Preview */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-[#eef4f1] via-[#f6f8f7] to-[#f9f4e6] p-8 sm:p-10 lg:col-span-5">
              {/* Publication Book / Cover Mockup */}
              <div className="group relative w-full max-w-[260px] rounded-r-xl rounded-l-sm border border-[#c8b268]/60 bg-gradient-to-br from-[#064e3b] via-[#066842] to-[#053e3b] p-6 text-white shadow-xl transition-transform duration-500 hover:-translate-y-1.5">
                {/* Book Spine Binding Accent */}
                <div
                  aria-hidden="true"
                  className=" absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/30 to-transparent"
                />

                {/* Inner Gold Frame */}
                <div className="flex min-h-[300px] flex-col justify-between border border-[#c8b268]/55 p-5">
                  <div>
                    <div className="inline-block rounded-xs bg-white px-2.5 py-1.5 shadow-xs">
                      <img
                        src="/KETF%20logo.png"
                        alt="Kwara State Education Trust Fund"
                        className="h-7 w-auto"
                      />
                    </div>
                    <p className="mt-5 text-[10px] font-semibold tracking-[0.2em] text-[#f3df9d] uppercase">
                      Official Publication
                    </p>
                    <h3 className="mt-2 text-lg leading-snug font-bold text-white">
                      Kwara State Education Trust Fund
                    </h3>
                    <div className="mt-3 h-0.5 w-12 bg-[#c8b268]" />
                  </div>

                  <div className="pt-6">
                    <p className="text-xs font-semibold tracking-widest text-emerald-100 uppercase">
                      Prospectus
                    </p>
                    <p className="mt-1 text-[11px] text-emerald-200/80">
                      PDF Document • Official Edition
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Prospectus Content & Download Action */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-7">
              <div className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold tracking-wider text-[#066842] uppercase">
                <svg
                  className="h-4 w-4 text-[#b91c1c]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 11h-2v5h-2v-5H9l3-3 3 3zm-2-6V3.5L18.5 9H13z" />
                </svg>
                <span>Institutional Document</span>
              </div>

              <h2 className="mt-3 text-2xl leading-snug font-bold text-gray-900 sm:text-3xl">
                Kwara State Education Trust Fund Prospectus
              </h2>

              <p className="mt-4 text-[15.5px] leading-relaxed text-gray-600 sm:text-base sm:leading-8">
                This prospectus provides an overview of the Kwara State
                Education Trust Fund, detailing its establishment, mandate,
                governance structure, and key milestones.
              </p>

              {/* Download CTA Row (Turns Crimson Red with Acrobat PDF Logo on Hover) */}
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-7">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2.5 rounded-full border border-[#6a8752] bg-[#066842] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-250 hover:-translate-y-0.5 hover:border-[#991b1b] hover:bg-[#b31b1b] hover:shadow-md active:translate-y-0 sm:text-[15px]"
                >
                  <span className="relative flex h-4.5 w-4.5 items-center justify-center">
                    {/* Default Download Arrow */}
                    <svg
                      className="h-4.5 w-4.5 text-[#e3cc81] transition-all duration-200 group-hover/btn:scale-75 group-hover/btn:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                      />
                    </svg>

                    {/* Hover PDF Trefoil Logo */}
                    <svg
                      className="absolute inset-0 h-4.5 w-4.5 scale-75 text-white opacity-0 transition-all duration-200 group-hover/btn:scale-105 group-hover/btn:opacity-100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12.2 3.6c-.8 0-1.2 1.2-.8 2.9.9 3.6 3.5 7.7 6.8 9.2 1.7.8 3 .6 3.2-.2.2-.8-1-1.6-2.9-1.6-3.7 0-8.6 1.2-11.9 3.2-1.8 1.1-2.8 2.3-2.3 3 .5.7 2 .1 3.4-1.5 2.4-2.8 4.6-8 5.2-12.1.2-1.6-.1-2.9-.7-2.9z" />
                    </svg>
                  </span>
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Prospectus Pillars Highlighted Below */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, idx) => (
            <div
              key={item.title}
              className="animate-fade-up rounded-xl border border-gray-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#066842]/35 hover:shadow-md"
              style={{ animationDelay: `${260 + idx * 80}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </div>
              <h3 className="mt-3.5 text-base font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-gray-600 sm:text-[13px]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Prospectus

