const policies = [
  {
    title: 'Child Protection and Safeguarding Policy',
    category: 'Safeguarding & Welfare',
    code: 'POL-01',
    description:
      'KwaraETF is committed to protecting the rights and wellbeing of all children. This policy sets clear standards to prevent abuse, exploitation, and neglect in any of our programs or engagements. It also establishes reporting mechanisms and responsibilities for ensuring that children remain safe and supported.',
    url: 'https://kwaraetf.org/wp-content/uploads/2025/08/Child-Protection-and-Safeguarding-Policy.pdf',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: 'Gender Equality and Inclusion Policy',
    category: 'Equity & Inclusion',
    code: 'POL-02',
    description:
      'Our Gender & Inclusion Policy ensures that KwaraETF’s programs and interventions are equitable and accessible to all. It emphasizes fairness and inclusivity for people of all genders, abilities, and social backgrounds. Through this policy, we strive to eliminate barriers and create opportunities that promote equal participation and impact.',
    url: 'https://kwaraetf.org/wp-content/uploads/2025/08/Child-Protection-and-Safeguarding-Policy.pdf',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    title: 'Anti-Corruption Guidelines',
    category: 'Integrity & Compliance',
    code: 'POL-03',
    description:
      'The Anti-Corruption Guidelines reflect KwaraETF’s zero-tolerance approach to corruption and malpractice. They outline preventive measures, reporting procedures, and accountability systems to detect and address unethical behavior. By enforcing these standards, we uphold integrity and safeguard the resources meant for education.',
    url: 'https://kwaraetf.org/wp-content/uploads/2025/08/Anti-Corruption-Guidelines.pdf',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    ),
  },
  {
    title: 'Ethical Guidelines Policy',
    category: 'Conduct & Standards',
    code: 'POL-04',
    description:
      'This policy serves as a code of conduct for decision-making and implementation across all levels of KwaraETF. It emphasizes fairness, transparency, respect, and accountability in dealings with staff, beneficiaries, and partners. By following these guidelines, KwaraETF ensures that every action taken reflects our values and commitment to the greater good.',
    url: 'https://kwaraetf.org/wp-content/uploads/2025/08/Ethical-Guidelines-Policy.pdf',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    ),
  },
  {
    title: 'Environmental Policy',
    category: 'Sustainability & Safety',
    code: 'POL-05',
    description:
      'The Environmental Policy demonstrates KwaraETF’s commitment to sustainability and environmental responsibility. It requires that all projects, especially school construction and renovation, adopt eco-friendly and safe practices. By integrating environmental considerations into our work, we contribute to a healthier and more sustainable future for communities.',
    url: 'https://kwaraetf.org/wp-content/uploads/2025/08/Environmental-Policy-1.pdf',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    ),
  },
  {
    title: 'Work Ethics Policy',
    category: 'Workplace Excellence',
    code: 'POL-06',
    description:
      'This policy serves as a code of conduct for decision-making and implementation across all levels of KwaraETF. It emphasizes fairness, transparency, respect, and accountability in dealings with staff, beneficiaries, and partners. By following these guidelines, KwaraETF ensures that every action taken reflects our values and commitment to the greater good.',
    url: 'https://kwaraetf.org/wp-content/uploads/2025/08/Work-Ethics-policy-.pdf',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    ),
  },
]

const PoliciesAndGuidelines = () => {
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
              Policies and Guidelines
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              The institutional frameworks, safeguarding standards, and ethical codes that govern our operations, partnerships, and service delivery across Kwara State.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Core Institutional Commitment Statement */}
        <div className="animate-fade-up border border-gray-200 bg-white p-8 sm:p-10 shadow-xs relative">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49] absolute top-0 left-0" />
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none border border-[#c8b268]/70 bg-[#fdf8eb] text-[#8c6d23]">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-[#066842] uppercase">
                Institutional Framework
              </span>
              <p className="mt-2 text-[17px] leading-8 text-gray-800 sm:text-[18px] sm:leading-[1.95]">
                At the Kwara State Education Trust Fund (KwaraETF), our policies and guidelines serve as the foundation for transparency, accountability, and effective service delivery. They provide clear direction on how we operate, engage with stakeholders, and deliver on our mandate of advancing education in Kwara State. This page outlines our key policies, ensuring that every action we take reflects best practices, good governance, and our commitment to building a stronger education system for all.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="group flex flex-col justify-between border border-gray-200 bg-white p-7 sm:p-9 shadow-xs transition-all duration-200 hover:border-[#c8b268]/80 hover:shadow-md"
            >
              <div>
                {/* Header row with Code and Category */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-[#066842]/10 text-[#066842] transition-colors duration-200 group-hover:bg-[#066842] group-hover:text-[#f3df9d]">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                        {policy.icon}
                      </svg>
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-[#8c6d23] uppercase">
                      {policy.category}
                    </span>
                  </div>
                  <span className="border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] font-mono font-bold text-gray-600">
                    {policy.code}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold tracking-tight text-gray-900 group-hover:text-[#066842]">
                  {policy.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[15px] leading-7 text-gray-700 sm:text-[16px] sm:leading-8">
                  {policy.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-7 pt-5 border-t border-gray-100 flex items-center justify-between">
                <a
                  href={policy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 rounded-full border border-[#6a8752] bg-[#066842] px-5 py-2.5 text-[13px] font-semibold text-white shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#991b1b] hover:bg-[#b31b1b] hover:shadow-sm"
                >
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <svg
                      className="h-4 w-4 text-[#e3cc81] transition-all duration-200 group-hover/btn:scale-75 group-hover/btn:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <svg
                      className="absolute inset-0 h-4 w-4 scale-75 text-white opacity-0 transition-all duration-200 group-hover/btn:scale-105 group-hover/btn:opacity-100"
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
                  <span>Read more</span>
                </a>

                <span className="text-xs text-gray-500 font-medium">
                  Official PDF • Published Aug 2025
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Ecosystem Links */}
        <div className="rounded-none border border-emerald-900/10 bg-gradient-to-r from-[#064e3b]/5 via-[#066842]/5 to-transparent p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-base font-bold text-gray-900">
                Related Governance Records
              </h4>
              <p className="text-sm text-gray-600">
                View our statutory enabling law, audit reports, and financial statements.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#the-law"
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-2xs transition-colors hover:border-[#066842] hover:text-[#066842]"
              >
                The Law &rarr;
              </a>
              <a
                href="#audit-reports"
                className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700 shadow-2xs transition-colors hover:border-[#066842] hover:text-[#066842]"
              >
                Audit Reports &rarr;
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

export default PoliciesAndGuidelines

