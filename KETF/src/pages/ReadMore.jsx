const ReadMore = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <main className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {/* Section 1: Image & Introduction (50/50 split with matched length) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Image Card */}
          <div className="flex flex-col">
            <div className="relative overflow-hidden rounded-2xs border border-gray-200/80 bg-white p-3 shadow-xs flex-1 flex flex-col">
              <img
                src="/AboutImg.jpg"
                alt="Students in a classroom supported by KwaraETF"
                className="w-full h-full min-h-[340px] sm:min-h-[420px] object-cover rounded-xs"
              />
              <div className="mt-3 flex items-center justify-between px-1 text-xs text-gray-500">
                <span className="font-medium text-[#066842]">Kwara State Education Trust Fund</span>
                <span>Transforming Public Education</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Mandate */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
                About KwaraETF
              </span>
              <h1
                style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900"
              >
                Building a Sustainable Future for Kwara&apos;s Children
              </h1>
              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#066842] to-[#c8b268]" />

              <div className="mt-6 space-y-4 text-base sm:text-[16.5px] leading-relaxed text-gray-700">
                <p>
                  The <strong className="text-gray-900">Kwara State Education Trust Fund (KwaraETF)</strong> was established to mobilize non-governmental resources, forge strategic partnerships, and channel catalytic funding directly into public education across Kwara State.
                </p>
                <p>
                  Recognizing that government financing alone cannot bridge the long-standing deficits in school infrastructure, instructional technology, and teacher development, KwaraETF operates as an independent, transparent vehicle governed by reputable civic and private-sector leaders.
                </p>
                <p>
                  Through rigorous project governance, transparent procurement, and data-driven oversight, every contribution — whether from corporate donors, international foundations, alumni groups, or well-meaning citizens — directly improves teaching and learning outcomes.
                </p>
              </div>
            </div>

            {/* Quick Stat Pill Bar */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-gray-200/80 pt-6">
              <div>
                <span className="text-2xl font-bold text-[#066842]">16</span>
                <p className="text-xs text-gray-500">Local Gov. Areas Covered</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#066842]">100%</span>
                <p className="text-xs text-gray-500">Transparent Allocation</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#066842]">Tiered</span>
                <p className="text-xs text-gray-500">Global Admin Standard</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Values Grid */}
        <section className="mt-20 border-t border-gray-200/80 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
              Our Principles
            </span>
            <h2
              style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
              className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl"
            >
              Guided by Integrity, Driven by Impact
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Every initiative, partnership, and fund allocation is measured against four foundational commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-gray-200/80 shadow-xs hover:border-[#066842]/40 transition-colors">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Quality Learning</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Modern curricula, well-equipped classrooms, and instructional materials tailored for student success.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200/80 shadow-xs hover:border-[#066842]/40 transition-colors">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Total Transparency</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Open-book reporting, statutory audits, and published quarterly financials accessible to every citizen.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200/80 shadow-xs hover:border-[#066842]/40 transition-colors">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Equity &amp; Inclusion</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Extending high-caliber education to indigent children across all 16 Local Government Areas.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200/80 shadow-xs hover:border-[#066842]/40 transition-colors">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Sustainable Future</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Building durable institutional capacity so schools thrive for generations beyond initial investments.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Commitments (Partnership & Innovation) */}
        <section className="mt-20 border-t border-gray-200/80 pt-16">
          <div className="border border-gray-200/90 bg-white p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-1 w-8 bg-[#066842]" />
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                className="text-xl sm:text-2xl font-bold tracking-wider text-[#066842] uppercase"
              >
                Strategic Commitments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* PARTNERSHIP */}
              <div className="border-l-2 border-[#c8b268] pl-5">
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                  className="text-base sm:text-lg font-bold tracking-wide text-gray-900 uppercase"
                >
                  PARTNERSHIP:
                </h3>
                <p className="mt-2.5 text-base text-gray-700 leading-relaxed">
                  We recognize that achieving our goals requires collaboration and partnership with a wide range of stakeholders, including government agencies, civil society organizations, schools, communities, and the private sector. We are committed to working together with partners to maximise our impact and reach.
                </p>
              </div>

              {/* INNOVATION */}
              <div className="border-l-2 border-[#c8b268] pl-5">
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                  className="text-base sm:text-lg font-bold tracking-wide text-gray-900 uppercase"
                >
                  INNOVATION:
                </h3>
                <p className="mt-2.5 text-base text-gray-700 leading-relaxed">
                  We embrace innovation and creativity as drivers of positive change in education. We are continuously exploring new approaches and technologies to improve teaching and learning outcomes and to address the evolving needs of learners in Kwara State.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Our 5-Year Development Plan */}
        <section className="mt-12 sm:mt-16 mb-16 sm:mb-24">
          <div className="border border-gray-200/90 bg-white p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1 w-8 bg-[#066842]" />
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                className="text-xl sm:text-2xl font-bold tracking-wider text-[#066842] uppercase"
              >
                OUR 5-YEAR DEVELOPMENT PLAN
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-base sm:text-[16.5px] leading-relaxed text-gray-700">
              <p>
                At the Kwara State Education Trust Fund, our 5-Year Development Plan represents a clear and ambitious vision for the future of education in Kwara State. This plan outlines our strategic priorities from 2025 to 2029, focusing on improving school infrastructure, enhancing the quality of teaching and learning, expanding access to education, and fostering innovation across the education sector.
              </p>
              <p>
                We are committed to working with communities, partners, and stakeholders to deliver long-lasting, inclusive, and measurable impact. With this plan, we are building a stronger foundation for students, educators, and the entire Kwara education system—ensuring every child has the opportunity to thrive and succeed.
              </p>
            </div>

            {/* Download PDF Button with Hover Bounce, Small Radius & Adobe Reader Icon Swap */}
            <div className="mt-8 pt-2">
              <a
                href="#download-plan"
                className="group inline-flex items-center gap-3 rounded-md px-6 py-3 text-[14.5px] font-medium tracking-wide text-white transition-all duration-200 ease-out bg-[#066842] border border-[#6a8752] hover:bg-[#F20F00] hover:border-[#F20F00] hover:-translate-y-1 hover:shadow-md active:translate-y-0"
              >
                <span>Download PDF</span>

                {/* Default State: Download Icon */}
                <svg
                  className="h-4 w-4 block group-hover:hidden transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>

                {/* Hover State: Exact Adobe Reader Logo provided */}
                <img
                  src="/adobe-reader.png"
                  alt="Adobe Reader"
                  className="h-4 w-auto object-contain hidden group-hover:block transition-all"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ReadMore
