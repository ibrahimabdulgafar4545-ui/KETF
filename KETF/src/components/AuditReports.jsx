const auditPillars = [
  {
    title: 'Independent External Opinion',
    detail: 'Rigorous examination of financial statements by certified independent auditors conducted in accordance with statutory accounting standards.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: 'Public Sector Accounting Compliance',
    detail: 'Full compliance with IPSAS standards and the Kwara State Education Trust Fund Law for statutory public reporting.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    title: 'Prudent Resource Stewardship',
    detail: 'Independent confirmation that public revenue and philanthropic donations directly fund school upgrades and student scholarships.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: 'Open-Book Public Confidence',
    detail: 'Proactive public disclosure that builds deep trust with donors, international partners, educators, and the people of Kwara State.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
]

const AuditReports = () => {
  const downloadUrl = 'https://kwaraetf.org/wp-content/uploads/2026/10/2025-AFS.pdf'

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
              Audited Financial Statements
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Statutory independent verification and audited financial statements affirming our commitment to accountability, fiscal integrity, and open-book stewardship.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Featured 2025 Audit Report Publication Card */}
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
                      Independent Audit
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-snug text-white">
                      Audit Report 2025
                    </h3>
                    <p className="mt-1 text-[11px] text-emerald-100/80">
                      Audited Financial Statements (AFS)
                    </p>
                    <div className="mt-3 h-0.5 w-12 bg-[#c8b268]" />
                  </div>

                  <div className="pt-6 flex items-center justify-between">
                    <span className="inline-block rounded-xs bg-[#fdf8eb] px-2.5 py-1 text-xs font-bold text-[#8c6d23]">
                      FY 2025 Certified
                    </span>
                    <span className="text-[11px] font-medium text-emerald-200">
                      Statutory AFS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information & Action */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-7 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center border border-[#c8b268]/60 bg-[#fdf8eb] px-3.5 py-1 text-xs font-semibold tracking-widest text-[#8c6d23] uppercase">
                  Statutory Audit
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-gray-200/80" />
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Kwara State Education Trust Fund Audit Report 2025
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-gray-700 sm:text-[18px] sm:leading-[1.95]">
                The Kwara State Education Trust Fund presents its Audit Report for 2025, highlighting key financial activities and updates in the year 2025.
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
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="9" y1="13" x2="15" y2="13" />
                      <line x1="9" y1="17" x2="15" y2="17" />
                    </svg>
                  </span>
                  <span>Download PDF</span>
                </a>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Audited Financial Statements (AFS) • Official Release</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Audit & Assurance Pillars */}
        <div className="border border-gray-200 bg-white p-8 sm:p-10 shadow-xs">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
              Independent Assurance
            </span>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Principles of Audit &amp; Accountability
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Our statutory audit processes guarantee the highest standards of financial prudence and transparent reporting to Kwara citizens and stakeholders.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {auditPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group relative border border-gray-100 bg-[#fbfdfc] p-6 transition-all duration-200 hover:border-[#c8b268]/60 hover:bg-white hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#066842]/10 text-[#066842] transition-colors duration-200 group-hover:bg-[#066842] group-hover:text-[#f3df9d]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                    {pillar.icon}
                  </svg>
                </div>
                <h4 className="mt-4 text-base font-bold text-gray-900 group-hover:text-[#066842]">
                  {pillar.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Governance Documents Box */}
        <div className="rounded-none border border-emerald-900/10 bg-gradient-to-r from-[#064e3b]/5 via-[#066842]/5 to-transparent p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-base font-bold text-gray-900">
                Explore More Governance Disclosures
              </h4>
              <p className="text-sm text-gray-600">
                Review past quarterly progress reports, enabling laws, and annual financial statements.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#quarterly-reports"
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-2xs transition-colors hover:border-[#066842] hover:text-[#066842]"
              >
                Quarterly Reports &rarr;
              </a>
              <a
                href="#financials"
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-2xs transition-colors hover:border-[#066842] hover:text-[#066842]"
              >
                Financials &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuditReports

