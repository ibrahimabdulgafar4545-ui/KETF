const packages = [
  {
    tier: 'Bronze',
    badge: 'Essential Upgrade',
    title: 'Basic Renovations',
    accentColor: 'from-[#cd7f32] to-[#b87333]',
    borderColor: 'border-[#cd7f32]/40',
    highlightBg: 'bg-[#fdf8f5]',
    features: [
      'Classroom rehabilitation & repainting',
      'Modern toilet & sanitation facilities',
      'Ergonomic desks and student furniture',
      'Essential chalkboard / whiteboard installations',
    ],
    summary: 'Restores core infrastructure to create a clean, safe, and dignified learning environment.',
  },
  {
    tier: 'Silver',
    badge: 'Digital Integration',
    title: 'ICT & E-Learning',
    accentColor: 'from-gray-400 to-slate-500',
    borderColor: 'border-slate-300',
    highlightBg: 'bg-slate-50',
    features: [
      'Dedicated ICT computer laboratory setup',
      'Digital e-learning tablets and software tools',
      'High-speed school-wide internet access',
      'Digital literacy training for teaching staff',
    ],
    summary: 'Bridges the digital divide by connecting Kwara students to global educational resources.',
  },
  {
    tier: 'Gold',
    badge: 'Comprehensive Impact',
    title: 'Full Transformation',
    accentColor: 'from-[#d4af37] via-[#c8b268] to-[#997a15]',
    borderColor: 'border-[#c8b268]',
    highlightBg: 'bg-[#fdfaf2]',
    features: [
      'Complete structural modernization of school premises',
      'Clean solar energy & renewable power system',
      'Safe recreational playground & sporting facilities',
      'Continuous teacher support, incentives & mentorship',
      'Full ICT suite with digital library resources',
    ],
    summary: 'A 360-degree transformation addressing learning, power, recreation, and educator capacity.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Contact KwaraETF',
    desc: 'Reach out to our programs team via programs@kwara.fund or complete the online adoption form.',
  },
  {
    step: '02',
    title: 'Select a School',
    desc: 'Choose a priority public school across Kwara State based on verified infrastructure needs.',
  },
  {
    step: '03',
    title: 'Sign an MoU',
    desc: 'Formalize the partnership framework with clear project milestones and transparent oversight.',
  },
  {
    step: '04',
    title: 'Transform Lives',
    desc: 'Commence renovation, track verified impact, and inaugurate branded facilities.',
  },
]

const AdoptASchool = () => {
  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSdFr0Y85gqa5NEjaMpNa9opcYrVpvKTidk615ddJ5m7miR0yA/viewform'

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
              Community &amp; Corporate Partnership
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Adopt-a-School Initiative
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Transforming Education, One School at a Time
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Core Challenge & Vision Statement Card */}
        <div className="animate-fade-up border border-gray-200 bg-white p-7 sm:p-10 lg:p-12 shadow-xs">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center border border-[#c8b268]/60 bg-[#fdf8eb] px-3.5 py-1 text-xs font-semibold tracking-widest text-[#8c6d23] uppercase">
                The Mission
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Adopt-a-School: Transforming Education, One School at a Time
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-gray-700 sm:text-[18px] sm:leading-[1.95]">
                Over 70% of public schools in Kwara need urgent repairs, and fewer than 10% have access to digital tools. The Adopt-a-School initiative empowers individuals and organizations to directly upgrade public schools and improve learning outcomes.
              </p>
              <p className="mt-4 text-[16.5px] leading-relaxed text-gray-600">
                Let’s build the future of education—one school at a time.
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-3">
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-3 rounded-full border border-[#6a8752] bg-[#066842] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#055737] hover:shadow-md"
              >
                <span>Adopt a School</span>
                <svg
                  className="h-5 w-5 transition-transform duration-200 group-hover/btn:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <span className="text-center text-xs text-gray-500">
                Opens official partnership Google Form
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-100 bg-[#fcfdfd] p-5">
              <span className="text-3xl font-bold text-[#b91c1c]">70%+</span>
              <p className="mt-1 text-sm font-medium text-gray-700">Urgent Infrastructure Need</p>
              <p className="text-xs text-gray-500">Classrooms, roofing &amp; basic sanitation facilities</p>
            </div>
            <div className="border border-gray-100 bg-[#fcfdfd] p-5">
              <span className="text-3xl font-bold text-[#b91c1c]">&lt; 10%</span>
              <p className="mt-1 text-sm font-medium text-gray-700">Digital Tool Access</p>
              <p className="text-xs text-gray-500">Urgent need for computers, internet &amp; e-learning</p>
            </div>
            <div className="border border-gray-100 bg-[#fcfdfd] p-5 sm:col-span-2 lg:col-span-1">
              <span className="text-3xl font-bold text-[#066842]">100%</span>
              <p className="mt-1 text-sm font-medium text-gray-700">Direct Impact Tracking</p>
              <p className="text-xs text-gray-500">Verified milestone execution backed by ETF MoU</p>
            </div>
          </div>
        </div>

        {/* Adoption Packages Section */}
        <div className="mt-16">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
              Partnership Options
            </span>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Adoption Packages
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Choose the level of intervention that aligns with your CSR mission or personal commitment to Kwara’s youth.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.tier}
                className={`animate-fade-up relative flex flex-col justify-between border ${pkg.borderColor} bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                style={{ animationDelay: `${150 + idx * 100}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {pkg.badge}
                    </span>
                    <span className={`inline-block h-3 w-3 rounded-full bg-gradient-to-r ${pkg.accentColor}`} />
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-gray-900">
                    {pkg.tier} Package
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#066842]">
                    {pkg.title}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {pkg.summary}
                  </p>

                  <div className="mt-6 border-t border-gray-100 pt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Includes:
                    </p>
                    <ul className="mt-3 space-y-2.5 text-sm text-gray-700">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <svg
                            className="h-4 w-4 shrink-0 text-[#066842] mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100">
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center rounded-lg border border-[#066842] py-2.5 text-sm font-semibold text-[#066842] transition-colors hover:bg-[#066842] hover:text-white"
                  >
                    Select {pkg.tier}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits to Adopters */}
        <div className="mt-16 border border-[#c8b268]/40 bg-gradient-to-r from-[#fdfbf6] via-white to-[#f4f8f5] p-8 sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#fdf8eb] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8c6d23]">
                Partner Recognition
              </span>
              <h3 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
                Benefits for Adopters
              </h3>
              <p className="mt-2 text-base leading-relaxed text-gray-700">
                Branded installations, media recognition, and ETF impact features.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
                <span className="bg-white border border-gray-200 px-3 py-1.5">Branded Building Plaques</span>
                <span className="bg-white border border-gray-200 px-3 py-1.5">Press &amp; Digital Features</span>
                <span className="bg-white border border-gray-200 px-3 py-1.5">Annual Report Recognition</span>
                <span className="bg-white border border-gray-200 px-3 py-1.5">Verified ESG / CSR Proof</span>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:programs@kwara.fund"
                className="inline-flex items-center gap-2 border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition-colors hover:border-[#066842] hover:text-[#066842]"
              >
                <span>Email programs@kwara.fund</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Step-by-Step Engagement */}
        <div className="mt-16 border border-gray-200 bg-white p-7 sm:p-10">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
              How To Start
            </span>
            <h2 className="mt-1 text-2xl font-bold text-gray-900">
              Get Involved in 4 Easy Steps
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((st) => (
              <div key={st.step} className="border border-gray-100 bg-[#fbfcfb] p-6">
                <span className="font-mono text-2xl font-bold text-[#c8b268]">{st.step}</span>
                <h4 className="mt-3 text-base font-bold text-gray-900">{st.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#6a8752] bg-[#066842] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#055737]"
            >
              <span>Get Started — Adopt a School Now</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdoptASchool

