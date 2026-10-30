const impactMetrics = [
  {
    number: '16',
    label: 'Local Government Areas',
    detail: 'Statewide coverage across all senatorial districts in Kwara State.',
  },
  {
    number: '2025',
    label: 'Cumulative Review',
    detail: 'Tracking measurable outcomes from fund establishment through 2025.',
  },
  {
    number: '100%',
    label: 'Transparency Mandate',
    detail: 'Every naira audited and accounted for through public disclosures.',
  },
  {
    number: 'Multi-Pillar',
    label: 'Intervention Scope',
    detail: 'Classrooms, ICT labs, teacher training, and student scholarships.',
  },
]

const impactFocusAreas = [
  {
    title: 'School Infrastructure Rehabilitation',
    desc: 'Targeted renovation of dilapidated primary and secondary school classrooms, modern sanitation blocks, and clean water facilities.',
    tag: 'Infrastructure',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    title: 'Digital Tools & ICT Empowerment',
    desc: 'Equipping public schools with modern computers, high-speed connectivity, and interactive e-learning resources for pupils and teachers.',
    tag: 'Digital Learning',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
  {
    title: 'Scholarships & Talent Acceleration',
    desc: 'Empowering indigent and exceptionally gifted students through statewide mock exams, full tuition coverage, and ongoing mentorship.',
    tag: 'Human Capital',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
    ),
  },
  {
    title: 'Partnerships & Resource Mobilization',
    desc: 'Fostering collaborative ties with corporate organizations, alumni associations, philanthropists, and development institutions.',
    tag: 'Collaboration',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
]

const ImpactReports = () => {
  const downloadUrl = 'https://kwaraetf.org/wp-content/uploads/2026/01/The-KwaraETF-Impact-Report.pdf'

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
              Impact Reports &amp; Outcomes
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Capturing our cumulative journey from vision to action—tracking verified investments, school transformations, and educational opportunities delivered across Kwara State.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Featured Impact Report Card */}
        <div className="animate-fade-up border border-gray-200 bg-white shadow-xs">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49]" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Cover Artwork */}
            <div className="flex items-center justify-center bg-gradient-to-br from-[#f2f6f4] via-[#fafbfc] to-[#fdf9ee] p-8 lg:col-span-5 border-b border-gray-100 lg:border-b-0 lg:border-r">
              <div className="w-full max-w-[280px] border border-[#c8b268]/60 bg-gradient-to-br from-[#064e3b] via-[#066842] to-[#053e3b] p-6 text-white shadow-xl transition-transform duration-300 hover:-translate-y-1">
                <div className="flex min-h-[310px] flex-col justify-between border border-[#c8b268]/50 p-5">
                  <div>
                    <div className="inline-block bg-white px-2.5 py-1.5">
                      <img
                        src="/KETF%20logo.png"
                        alt="Kwara State Education Trust Fund"
                        className="h-7 w-auto"
                      />
                    </div>
                    <p className="mt-5 text-[10px] font-semibold tracking-[0.2em] text-[#f3df9d] uppercase">
                      Special Publication
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-snug text-white">
                      The KwaraETF Impact Report
                    </h3>
                    <p className="mt-1 text-[11px] text-emerald-100/80">
                      Establishment to 2025
                    </p>
                    <div className="mt-3 h-0.5 w-12 bg-[#c8b268]" />
                  </div>

                  <div className="pt-6 flex items-center justify-between">
                    <span className="inline-block rounded-xs bg-[#fdf8eb] px-2.5 py-1 text-xs font-bold text-[#8c6d23]">
                      From Vision to Action
                    </span>
                    <span className="text-[11px] font-medium text-emerald-200">
                      Statewide
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information & Action */}
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-7 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center border border-[#c8b268]/60 bg-[#fdf8eb] px-3.5 py-1 text-xs font-semibold tracking-widest text-[#8c6d23] uppercase">
                  Comprehensive Review
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-gray-200/80" />
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                KwaraETF Impact Report
              </h2>

              <p className="mt-5 text-[17px] leading-8 text-gray-700 sm:text-[18px] sm:leading-[1.95]">
                From vision to action. This report captures the Kwara State Education Trust Fund’s progress from its establishment to the end of 2025, showcasing how strategic investments and partnerships are transforming learning outcomes across Kwara State.
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
                  <span>Comprehensive Impact Report • Official Document</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Metrics Bar */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {impactMetrics.map((item) => (
            <div
              key={item.label}
              className="border border-gray-200 bg-white p-6 text-center shadow-2xs"
            >
              <div className="text-2xl font-extrabold text-[#066842] sm:text-3xl">
                {item.number}
              </div>
              <div className="mt-1 text-xs font-bold tracking-wider text-gray-900 uppercase">
                {item.label}
              </div>
              <div className="mt-2 text-xs text-gray-500">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Focus Areas Grid */}
        <div className="border border-gray-200 bg-white p-8 sm:p-10 shadow-xs">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
              Strategic Transformation
            </span>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Where Our Impact Counts
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Targeting critical educational interventions to ensure inclusive, sustainable, and lasting growth for every learner.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactFocusAreas.map((area) => (
              <div
                key={area.title}
                className="group relative border border-gray-100 bg-[#fbfdfc] p-6 transition-all duration-200 hover:border-[#c8b268]/60 hover:bg-white hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#066842]/10 text-[#066842] transition-colors duration-200 group-hover:bg-[#066842] group-hover:text-[#f3df9d]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                    {area.icon}
                  </svg>
                </div>
                <span className="mt-4 inline-block text-[11px] font-semibold tracking-wider text-[#8c6d23] uppercase">
                  {area.tag}
                </span>
                <h4 className="mt-1 text-base font-bold text-gray-900 group-hover:text-[#066842]">
                  {area.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Governance Links */}
        <div className="rounded-none border border-emerald-900/10 bg-gradient-to-r from-[#064e3b]/5 via-[#066842]/5 to-transparent p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-base font-bold text-gray-900">
                Explore Detailed Disclosures
              </h4>
              <p className="text-sm text-gray-600">
                Review verified quarterly progress, statutory audits, and institutional policies.
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
                href="#audit-reports"
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-2xs transition-colors hover:border-[#066842] hover:text-[#066842]"
              >
                Audit Reports &rarr;
              </a>
              <a
                href="#policies-and-guidelines"
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-2xs transition-colors hover:border-[#066842] hover:text-[#066842]"
              >
                Policies &amp; Guidelines &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactReports

