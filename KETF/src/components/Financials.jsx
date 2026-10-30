const financialPillars = [
  {
    title: 'Statutory Compliance',
    detail: 'Full adherence to the Kwara State Education Trust Fund Law, public procurement rules, and fiscal guidelines.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: 'Prudent Fund Allocation',
    detail: 'Targeted capital expenditure for school renovations, digital e-learning equipment, and scholar support.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: 'Independent Verification',
    detail: 'Open-book audit trails examined by certified external auditing bodies to preserve public confidence.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
  {
    title: 'Transparent Governance',
    detail: 'Annual budget submission and executive disclosures presented to the Governor and Board of Trustees.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
      />
    ),
  },
]

const Financials = () => {
  const downloadUrl = 'https://kwaraetf.org/financials/#'

  return (
    <section className="min-h-screen bg-[#f8faf9] pb-24">
      {/* Hero Banner */}
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
              Transparency &amp; Governance
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Financial Statements &amp; Accounts
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Official annual financial statements demonstrating responsible stewardship, resource mobilization, and prudent fiscal discipline.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Featured 2024 Financial Report Publication Card */}
        <div className="animate-fade-up border border-gray-200 bg-white shadow-xs">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49]" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Cover Artwork */}
            <div className="flex items-center justify-center bg-gradient-to-br from-[#f2f6f4] via-[#fafbfc] to-[#fdf9ee] p-8 lg:col-span-5 border-b border-gray-100 lg:border-b-0 lg:border-r">
              <div className="w-full max-w-[280px] border border-[#c8b268]/60 bg-gradient-to-br from-[#064e3b] via-[#066842] to-[#053e3b] p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <div className="flex min-h-[300px] flex-col justify-between border border-[#c8b268]/50 p-5">
                  <div>
                    <div className="inline-block bg-white px-2.5 py-1.5">
                      <img
                        src="/KETF%20logo.png"
                        alt="Kwara State Education Trust Fund"
                        className="h-7 w-auto"
                      />
                    </div>
                    <p className="mt-5 text-[10px] font-semibold tracking-[0.2em] text-[#f3df9d] uppercase">
                      Audited Accounts
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-snug text-white">
                      Financial Report 2024
                    </h3>
                    <div className="mt-3 h-0.5 w-12 bg-[#c8b268]" />
                  </div>

                  <div className="pt-6">
                    <span className="inline-block rounded-xs bg-[#fdf8eb] px-2.5 py-1 text-xs font-bold text-[#8c6d23]">
                      FY 2024 Official
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information & Action */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-7 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center border border-[#c8b268]/60 bg-[#fdf8eb] px-3.5 py-1 text-xs font-semibold tracking-widest text-[#8c6d23] uppercase">
                  Annual Statement
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-gray-200/80" />
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Kwara State Education Trust Fund Financial Report 2024
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-gray-700 sm:text-[18px] sm:leading-[1.95]">
                The Kwara State Education Trust Fund presents its Financial Report for 2024, highlighting key activities and updates in the year 2024.
              </p>

              {/* Action */}
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-7">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2.5 rounded-full border border-[#6a8752] bg-[#066842] px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#991b1b] hover:bg-[#b31b1b] hover:shadow-md"
                >
                  <span className="relative flex h-4.5 w-4.5 items-center justify-center">
                    <svg
                      className="h-4.5 w-4.5 text-[#e3cc81] transition-all duration-200 group-hover/btn:scale-75 group-hover/btn:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                    </svg>
                    <svg
                      className="absolute inset-0 h-4.5 w-4.5 scale-75 text-white opacity-0 transition-all duration-200 group-hover/btn:scale-105 group-hover/btn:opacity-100"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12.2 3.6c-.8 0-1.2 1.2-.8 2.9.9 3.6 3.5 7.7 6.8 9.2 1.7.8 3 .6 3.2-.2.2-.8-1-1.6-2.9-1.6-3.7 0-8.6 1.2-11.9 3.2-1.8 1.1-2.8 2.3-2.3 3 .5.7 2 .1 3.4-1.5 2.4-2.8 4.6-8 5.2-12.1.2-1.6-.1-2.9-.7-2.9z" />
                    </svg>
                  </span>
                  <span>Download PDF</span>
                </a>

                <span className="text-xs font-medium text-gray-500 sm:text-sm">
                  Official Audited Publication
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Accountability & Stewardship Pillars */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {financialPillars.map((item, idx) => (
            <div
              key={item.title}
              className="animate-fade-up border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#066842]/40 hover:shadow-md"
              style={{ animationDelay: `${120 + idx * 80}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h4 className="mt-4 text-base font-bold text-gray-900">{item.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-[13px]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Financials

