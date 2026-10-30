const strategicPriorities = [
  {
    number: '01',
    title: 'School Infrastructure',
    description:
      'Modernizing classrooms, laboratories, sanitation, and safe learning environments across public schools in Kwara State.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    number: '02',
    title: 'Quality of Teaching & Learning',
    description:
      'Equipping educators with modern training, instructional resources, and curriculum support to elevate student outcomes.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    ),
  },
  {
    number: '03',
    title: 'Expanded Access to Education',
    description:
      'Removing financial and geographic barriers through scholarships and inclusive community outreach so no child is left behind.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
    ),
  },
  {
    number: '04',
    title: 'Sector-Wide Innovation',
    description:
      'Integrating digital literacy, STEM tools, and data-driven educational management for future-ready learners.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    ),
  },
]

const roadmapPhases = [
  {
    years: '2025 – 2026',
    phase: 'Foundation & Mobilization',
    detail: 'Baseline school assessments, stakeholder partnerships & priority infrastructure upgrades.',
  },
  {
    years: '2027 – 2028',
    phase: 'Scale & Digital Integration',
    detail: 'Statewide expansion of teacher training, STEM innovation hubs & scholarship coverage.',
  },
  {
    years: '2029',
    phase: 'Sustainability & Impact Review',
    detail: 'Comprehensive impact evaluation, institutional consolidation & long-term endowment growth.',
  },
]

const DevelopmentPlan = ({ onNavigate }) => {
  const pdfUrl =
    'https://kwaraetf.org/wp-content/uploads/2025/05/A3-5-Year-Development-Plan-for-the-Kwara-State-Education-Trust-Fund-.pdf'

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
            <span className="inline-block rounded-full border border-[#c8b268]/50 bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#f3df9d] uppercase">
              Strategic Horizon • 2025 – 2029
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              5-Year Development Plan
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              A clear, inclusive, and measurable blueprint transforming public
              education across Kwara State.
            </p>
          </div>
        </div>
      </div>

      {/* Main Editorial Vision & Plan Document Section */}
      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="animate-fade-up overflow-hidden border border-gray-200 bg-white shadow-xs"
          style={{ animationDelay: '120ms' }}
        >
          {/* Top KETF Gold/Emerald Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49]" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Side: Clear, Enlarged, Easy-to-Read Vision Statement */}
            <div className="p-7 sm:p-10 lg:col-span-8 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center border border-[#c8b268]/60 bg-[#fdf8eb] px-3.5 py-1 text-xs font-semibold tracking-widest text-[#8c6d23] uppercase">
                  Strategic Vision (2025 – 2029)
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-gray-200/80"
                />
              </div>

              <h2 className="mt-4 text-2xl leading-tight font-bold tracking-tight text-gray-900 sm:text-3xl">
                Building a Stronger Foundation for Every Learner in Kwara State
              </h2>

              {/* Enlarged, Crisp, Highly Readable Body Text */}
              <p className="mt-6 text-[17px] leading-8 text-gray-700 sm:text-[18px] sm:leading-[1.95]">
                At the Kwara State Education Trust Fund, our 5-Year Development
                Plan represents a clear and ambitious vision for the future of
                education in Kwara State. This plan outlines our strategic
                priorities from 2025 to 2029, focusing on improving school
                infrastructure, enhancing the quality of teaching and learning,
                expanding access to education, and fostering innovation across
                the education sector. We are committed to working with
                communities, partners, and stakeholders to deliver long-lasting,
                inclusive, and measurable impact. With this plan, we are
                building a stronger foundation for students, educators, and the
                entire Kwara education system—ensuring every child has the
                opportunity to thrive and succeed.
              </p>

              {/* Read More Official PDF CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-7">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2.5 rounded-full border border-[#6a8752] bg-[#066842] px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-250 hover:-translate-y-0.5 hover:border-[#991b1b] hover:bg-[#b31b1b] hover:shadow-md active:translate-y-0"
                >
                  <span>Read More</span>
                  <span className="relative flex h-4.5 w-4.5 items-center justify-center">
                    {/* Default Arrow Icon */}
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
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
                </a>

                <span className="text-xs font-medium text-gray-400 sm:text-sm">
                  Opens Official A3 Strategic Plan (PDF)
                </span>
              </div>
            </div>

            {/* Right Side: Visual Document Blueprint Card */}
            <div className="flex flex-col justify-between border-t border-gray-100 bg-gradient-to-b from-[#f2f6f4] to-[#f9f6ec] p-7 sm:p-10 lg:col-span-4 lg:border-t-0 lg:border-l">
              <div className="border border-[#c8b268]/60 bg-gradient-to-br from-[#064e3b] via-[#066842] to-[#053e3b] p-6 text-white shadow-md">
                <div className="inline-block bg-white px-2.5 py-1.5">
                  <img
                    src="/KETF%20logo.png"
                    alt="Kwara State Education Trust Fund"
                    className="h-7 w-auto"
                  />
                </div>
                <p className="mt-5 text-[11px] font-semibold tracking-[0.2em] text-[#f3df9d] uppercase">
                  Official Blueprint
                </p>
                <h3 className="mt-2 text-xl leading-snug font-bold text-white">
                  2025 – 2029 Strategic Framework
                </h3>
                <div className="mt-3 h-0.5 w-12 bg-[#c8b268]" />
                <p className="mt-4 text-xs leading-relaxed text-emerald-100/90">
                  Inclusive, community-driven roadmap for sustainable educational
                  excellence across all 16 LGAs of Kwara State.
                </p>
              </div>

              {/* Key Horizon Metrics */}
              <div className="mt-6 grid grid-cols-2 gap-3 pt-2">
                <div className="border border-gray-200/80 bg-white p-4">
                  <p className="text-2xl font-bold text-[#066842]">5 Years</p>
                  <p className="mt-0.5 text-xs font-medium text-gray-500">
                    2025 – 2029 Horizon
                  </p>
                </div>
                <div className="border border-gray-200/80 bg-white p-4">
                  <p className="text-2xl font-bold text-[#8c6d23]">4 Pillars</p>
                  <p className="mt-0.5 text-xs font-medium text-gray-500">
                    Strategic Focus Areas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Strategic Priorities Breakdown */}
        <div className="mt-16">
          <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
                Core Focus Areas
              </p>
              <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                Our Four Strategic Priorities
              </h2>
            </div>
            <p className="text-sm text-gray-500">
              Delivering measurable, statewide educational outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {strategicPriorities.map((pillar, idx) => (
              <div
                key={pillar.number}
                className="animate-fade-up group border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#066842]/45 hover:shadow-lg"
                style={{ animationDelay: `${220 + idx * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-emerald-50 text-[#066842] transition-colors duration-300 group-hover:bg-[#066842] group-hover:text-[#f3df9d]">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.9"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      {pillar.icon}
                    </svg>
                  </div>
                  <span className="font-mono text-2xl font-bold text-gray-200 transition-colors group-hover:text-[#c8b268]">
                    {pillar.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-[#066842]">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[15.5px] leading-relaxed text-gray-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Horizon Strip (2025 - 2029) */}
        <div
          className="animate-fade-up mt-16 border border-gray-200 bg-white p-7 sm:p-10"
          style={{ animationDelay: '520ms' }}
        >
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold tracking-widest text-[#8c6d23] uppercase">
              Implementation Phasing
            </p>
            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              2025 – 2029 Execution Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {roadmapPhases.map((step, i) => (
              <div
                key={step.years}
                className="relative border-l-4 border-[#066842] bg-[#f8faf9] p-5"
              >
                <span className="inline-block bg-[#fdf8eb] px-2.5 py-0.5 text-xs font-bold text-[#8c6d23]">
                  Phase {i + 1} • {step.years}
                </span>
                <h3 className="mt-2.5 text-lg font-bold text-gray-900">
                  {step.phase}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Stakeholder Partnership Callout */}
          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-gray-100 pt-7 sm:flex-row sm:items-center">
            <p className="text-[15px] font-medium text-gray-700">
              Want to partner with KwaraETF in achieving our 2025–2029 goals?
            </p>
            <a
              href="#donation"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault()
                  onNavigate('#donation')
                }
              }}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#6a8752] bg-[#066842] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#055737]"
            >
              <span>Partner / Support Us</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentPlan

