const laws = [
  {
    year: '2021',
    title: 'Kwara State Education Trust Fund Law, 2021',
    description:
      'The Kwara State Education Trust Fund was established by the Kwara State Education Trust Fund Law, 2021. This law was enacted to provide a sustainable framework for funding education in the state, ensuring consistent support for infrastructure development, scholarships, and educational programs. The Fund is committed to enhancing the quality and accessibility of education across Kwara State, fostering a brighter future for all learners.',
    highlights: [
      'Sustainable Funding Framework',
      'Infrastructure & Scholarships',
      'Statewide Access',
    ],
    pdfUrl:
      'https://kwaraetf.org/wp-content/uploads/2024/05/Kwara-State-Education-Trust-Fund-Law-2021.pdf',
  },
  {
    year: '2022',

    title: 'Amendment of the Kwara State Education Trust Fund Law, 2022',
    description:
      "This amendment was introduced to enhance the Fund's effectiveness in mobilizing resources and expanding its reach within the educational sector. By refining its objectives and operational framework, the amendment aims to ensure that the Fund continues to support infrastructure development, scholarships, and innovative educational initiatives, ultimately improving the quality of education for all students in Kwara State.",
    highlights: [
      'Resource Mobilization',
      'Refined Operational Framework',
      'Innovative Initiatives',
    ],
    pdfUrl:
      'https://kwaraetf.org/wp-content/uploads/2024/05/Amendment-Kwara-State-Education-Trust-Fund-Law-2021.pdf',
  },
  {
    year: '2025',

    title: 'Kwara State Education Trust Fund (Amendment) Law, 2025',
    description:
      "The Kwara State Education Trust Fund (Amendment) Law, 2025 further amends Law No.6 of 2021, previously revised in 2023. It requires the Fund to submit its annual budget to Governor for approval. The Fund's income shall come from government grants, investments, donations, endowments, gifts, and other legitimate sources. It also empowers the Fund to engage the organized private sector through CSR and collaborate with relevant ministries to ensure fund transfers. The amendment defines the appointment of the Executive Secretary, provides for board remuneration, sets the quorum at five, and permits direct staff employment.",
    highlights: [
      'Annual Budget Approval',
      'Private Sector CSR Partnerships',
      'Board & Executive Governance',
    ],
    pdfUrl:
      'https://kwaraetf.org/wp-content/uploads/2025/07/Kwara_State_Education_Trust_Fund_Amendment_Law_20251.pdf',
  },
]

const TheLaw = ({ onNavigate }) => {
  return (
    <section className="min-h-screen bg-[#f8faf9] pb-24">
      {/* Page Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#066842] to-[#084d49] text-white">
        {/* Decorative Animated Ambient Shapes */}
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#c8b268]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl"
          style={{ animationDelay: '2.5s' }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="animate-fade-up max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The Enabling Law &amp; Amendments
            </h1>

            <p className="mt-4 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Explore the foundational legislation and statutory amendments that
              govern accountability, resource mobilization, and educational
              advancement across Kwara State.
            </p>
          </div>

          {/* Quick Summary Strip */}
          <div
            className="animate-fade-up mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
            style={{ animationDelay: '180ms' }}
          >
            <div className="rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xs">
              <p className="text-xs font-medium tracking-wider text-emerald-100/80 uppercase">
                Established
              </p>
              <p className="mt-1 text-2xl font-bold text-[#f3df9d]">2021</p>
              <p className="mt-0.5 text-xs text-emerald-50/80">
                Law No. 6 of Kwara State
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xs">
              <p className="text-xs font-medium tracking-wider text-emerald-100/80 uppercase">
                Statutory Documents
              </p>
              <p className="mt-1 text-2xl font-bold text-[#f3df9d]">
                3 Official Acts
              </p>
              <p className="mt-0.5 text-xs text-emerald-50/80">
                Publicly accessible PDFs
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xs">
              <p className="text-xs font-medium tracking-wider text-emerald-100/80 uppercase">
                Most Recent Revision
              </p>
              <p className="mt-1 text-2xl font-bold text-[#f3df9d]">2025</p>
              <p className="mt-0.5 text-xs text-emerald-50/80">
                Strengthened CSR &amp; governance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legislative Timeline & Document Cards */}
      <div className="mx-auto mt-14 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative space-y-8 before:absolute before:top-6 before:bottom-6 before:left-6 before:hidden before:w-0.5 before:bg-gradient-to-b before:from-[#066842] before:via-[#c8b268] before:to-[#066842]/30 md:before:block">
          {laws.map((law, index) => (
            <article
              key={law.year}
              className="animate-fade-up group relative md:pl-20"
              style={{ animationDelay: `${240 + index * 130}ms` }}
            >
              {/* Timeline Year Node (Desktop) */}
              <div className="absolute top-7 left-0 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-[#f8faf9] bg-[#066842] text-xs font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#b91c1c] md:flex">
                {law.year}
              </div>

              {/* Law Card */}
              <div className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#066842]/40 hover:shadow-xl">
                {/* Top Color Accent Bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49]" />

                <div className="p-6 sm:p-8">
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-[#066842] ring-1 ring-[#066842]/20 ring-inset md:hidden">
                      {law.year}
                    </span>

                    <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-gray-400">
                      <svg
                        className="h-4 w-4 text-[#b91c1c]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 11h-2v5h-2v-5H9l3-3 3 3zm-2-6V3.5L18.5 9H13z" />
                      </svg>
                      Official Gazette PDF
                    </span>
                  </div>

                  {/* Law Heading */}
                  <h2 className="mt-3 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-[#066842] sm:text-2xl">
                    {law.title}
                  </h2>

                  {/* Law Description */}
                  <p className="mt-3.5 text-[15px] leading-relaxed text-gray-600 sm:text-base">
                    {law.description}
                  </p>

                  {/* Key Highlights Pills + Download CTA */}
                  <div className="mt-6 flex flex-col gap-5 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {law.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors group-hover:bg-emerald-50/70 group-hover:text-[#066842]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={law.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-[#6a8752] bg-[#066842] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-250 hover:-translate-y-0.5 hover:border-[#991b1b] hover:bg-[#b31b1b] hover:shadow-md active:translate-y-0"
                    >
                      <span className="relative flex h-4.5 w-4.5 items-center justify-center">
                        {/* Default Download Arrow Icon */}
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

                        {/* Hover Adobe Acrobat / PDF Loop Logo */}
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
            </article>
          ))}
        </div>

        {/* Bottom Public Transparency Callout */}
        <div
          className="animate-fade-up mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#066842]/15 bg-gradient-to-r from-emerald-50/90 via-white to-[#fdf8eb] p-6 sm:flex-row sm:items-center sm:p-8"
          style={{ animationDelay: '650ms' }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#066842] text-[#f3df9d] shadow-xs">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                Committed to Transparency &amp; Public Accountability
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">
                All statutory frameworks, financial disclosures, and quarterly
                reports are published openly in compliance with Kwara State law.
              </p>
            </div>
          </div>

          <a
            href="#quarterly-reports"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault()
                onNavigate('#quarterly-reports')
              }
            }}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#066842] shadow-2xs transition-all hover:border-[#066842] hover:bg-[#066842] hover:text-white"
          >
            <span>View Reports</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TheLaw
