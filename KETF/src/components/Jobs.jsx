const Jobs = ({ onNavigate }) => {
  const handleJobClick = (e, jobRoute) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate(jobRoute)
    } else {
      window.location.hash = jobRoute
    }
  }

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

        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="animate-fade-up mx-auto max-w-3xl">
            <span className="inline-block rounded-full border border-[#c8b268]/50 bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#f3df9d] uppercase">
              Resources &bull; Careers
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Career Opportunities
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Join our mission-driven team dedicated to revolutionizing education, ensuring fiscal integrity, and transforming public schools in Kwara State.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Openings Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Current &amp; Past Openings
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Browse positions at the Kwara State Education Trust Fund Secretariat.
            </p>
          </div>
          <span className="self-start sm:self-auto rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
            1 Position Listed
          </span>
        </div>

        {/* Featured Job Card: Finance Manager */}
        <div className="group relative border border-gray-200 bg-white p-7 sm:p-9 shadow-xs transition-all duration-200 hover:border-[#c8b268]/80 hover:shadow-md">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-xs bg-[#fdf8eb] px-2.5 py-0.5 text-xs font-bold text-[#8c6d23]">
                  Finance &amp; Accounting
                </span>
                <span className="rounded-xs bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-600">
                  Full Time
                </span>
                <span className="rounded-xs bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-800">
                  Expired / Closed
                </span>
              </div>

              {/* Clickable Title */}
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[#066842] transition-colors">
                <a
                  href="#job-finance-manager"
                  onClick={(e) => handleJobClick(e, '#job-finance-manager')}
                  className="hover:underline focus:outline-hidden"
                >
                  Finance Manager
                </a>
              </h3>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-gray-500">
                <span className="flex items-center gap-1.5 font-medium text-gray-700">
                  <svg className="h-4 w-4 text-[#066842]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ilorin
                </span>
                <span>&bull;</span>
                <span>Published July 16, 2025</span>
                <span>&bull;</span>
                <span>Closed August 16, 2025</span>
              </div>

              <p className="mt-3 text-[15px] leading-7 text-gray-700 sm:text-[16px]">
                The Finance Manager will oversee the financial health of the Kwara State Education Trust Fund, managing budgeting, financial planning, compliance, and internal controls in line with regulatory and donor requirements.
              </p>
            </div>

            {/* Action Button: More Details */}
            <div className="md:self-center shrink-0">
              <a
                href="#job-finance-manager"
                onClick={(e) => handleJobClick(e, '#job-finance-manager')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#066842] bg-[#066842] px-6 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b31b1b] hover:border-[#b31b1b] hover:shadow-md"
              >
                <span>More Details</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Talent Network Notice Box */}
        <div className="border border-emerald-900/10 bg-gradient-to-br from-[#064e3b]/5 via-[#066842]/5 to-transparent p-7 sm:p-9">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-gray-900">
                Future Openings &amp; Talent Pool
              </h4>
              <p className="mt-1 text-sm text-gray-600 max-w-xl">
                Interested in working with KwaraETF on future educational programs, engineering oversight, or governance initiatives? Stay connected with our office.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleJobClick(e, '#contact')}
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-2.5 text-xs font-semibold text-gray-800 shadow-2xs hover:border-[#066842] hover:text-[#066842]"
            >
              Contact Secretariat
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jobs

