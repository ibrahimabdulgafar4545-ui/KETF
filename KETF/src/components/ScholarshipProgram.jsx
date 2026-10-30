const scholarshipPillars = [
  {
    title: 'Financial Assistance',
    desc: 'Covers essential tuition, learning materials, and academic expenses so education continues without interruption.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: 'Mentorship & Guidance',
    desc: 'Pairing scholars with experienced mentors, academic advisors, and ethical leadership role models.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
      />
    ),
  },
  {
    title: 'Statewide Equity (16 LGAs)',
    desc: 'Transparent merit selection reaching grassroots pupils in all sixteen local government councils of Kwara State.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: 'Academic Excellence',
    desc: 'Rewarding character, dedication, and high academic performance to make excellence an enduring tradition.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
    ),
  },
]

const ScholarshipProgram = () => {
  const learnMoreUrl =
    'https://kwaraetf.org/kwaraetf-welcomes-first-cohort-of-12-scholarship-beneficiaries-2/'

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
              Merit &amp; Equity Initiative
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              KwaraETF Scholarship Program
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Empowering Talent. Unlocking Potential.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Core Vision Statement Card */}
        <div className="animate-fade-up border border-gray-200 bg-white shadow-xs">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49]" />

          <div className="p-7 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center border border-[#c8b268]/60 bg-[#fdf8eb] px-3.5 py-1 text-xs font-semibold tracking-widest text-[#8c6d23] uppercase">
                Empowering Talent • Unlocking Potential
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-gray-200/80" />
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Nurturing the Next Generation of Kwara Leaders
            </h2>

            <div className="mt-6 space-y-6 text-[17px] leading-8 text-gray-700 sm:text-[18px] sm:leading-[1.95]">
              <p>
                At the Kwara State Education Trust Fund (KwaraETF), we believe that no child’s potential should be limited by financial barriers. The Scholarship Programme is one of our key interventions to ensure that brilliant students in Kwara—especially those in public schools—are supported to pursue quality education and reach their full potential.
              </p>
            </div>

            {/* CTA Action Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-7">
              <a
                href={learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2.5 rounded-full border border-[#6a8752] bg-[#066842] px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#055737] hover:shadow-md"
              >
                <span>Learn More</span>
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
                <span>Sponsor a Scholar</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Focus & How It Works 2-Column Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Our Focus */}
          <div className="animate-fade-up border border-gray-200 bg-white p-7 sm:p-9 shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-[#066842]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-gray-900">Our Focus</h3>
            </div>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-600 sm:text-[16.5px] sm:leading-8">
              The Scholarship Programme identifies and supports outstanding students from public schools who demonstrate exceptional academic performance, character, and promise. The initiative aims to reward excellence, promote equity, and nurture the next generation of leaders who will drive innovation and progress in Kwara State.
            </p>
          </div>

          {/* How It Works */}
          <div className="animate-fade-up border border-gray-200 bg-white p-7 sm:p-9 shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-[#8c6d23]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-gray-900">How It Works</h3>
            </div>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-600 sm:text-[16.5px] sm:leading-8">
              The scholarship program follows a structured selection process, including a statewide mock exam for top-performing pupils in public schools across all 16 Local Government Areas (LGAs).
            </p>
            <div className="mt-5 border-l-2 border-[#c8b268] pl-3.5 text-xs font-semibold uppercase tracking-wider text-[#8c6d23]">
              Statewide Coverage Across All 16 LGAs of Kwara State
            </div>
          </div>
        </div>

        {/* Our Commitment & Brighter Future Editorial Section */}
        <div className="animate-fade-up border border-gray-200 bg-white p-7 sm:p-10 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
                Institutional Promise
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">Our Commitment</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-600 sm:text-[16.5px] sm:leading-8">
                Through this programme, the Fund provides financial assistance, mentorship, and academic support to deserving students to ensure they can continue their education without interruption. Our goal is to make excellence a tradition—and to create a pathway where talent is recognised and rewarded, regardless of background.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-6 lg:border-t-0 lg:border-l lg:border-gray-100 lg:pl-8 lg:pt-0">
              <span className="text-xs font-semibold tracking-widest text-[#8c6d23] uppercase">
                Long-Term Impact
              </span>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">A Step Toward a Brighter Future</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-600 sm:text-[16.5px] sm:leading-8">
                By investing in our brightest minds, KwaraETF is not only transforming individual lives but also laying the foundation for a more inclusive, innovative, and prosperous Kwara.
              </p>
              <p className="mt-3 font-semibold text-[#066842] text-[16px]">
                Together, we are building a future where every child’s potential finds the support it deserves.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scholarshipPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="animate-fade-up border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#066842]/40 hover:shadow-md"
              style={{ animationDelay: `${120 + idx * 80}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  {pillar.icon}
                </svg>
              </div>
              <h4 className="mt-4 text-base font-bold text-gray-900">{pillar.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-[13px]">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScholarshipProgram

