import { useState } from 'react'

const COMMITTEES_DATA = [
  {
    id: 'audit-risk',
    num: '01',
    name: 'Audit & Risk',
    tagline: 'Fiduciary Stewardship & Legal Compliance',
    description:
      'Provides independent oversight of the Fund’s financial reporting, internal controls, risk management architecture, procurement procedures, and compliance with statutory obligations.',
    icon: (
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
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    chair: {
      name: 'Dr. Amudalat Shagaya',
      title: 'Committee Chair',
      designation: 'Chairperson, Audit & Risk Committee',
      affiliation: 'Kwara State Education Trust Fund',
    },
    members: [
      {
        name: 'Rahman Ayuba',
        role: 'Committee Member',
        affiliation: 'Finance & Risk Specialist',
      },
      {
        name: 'Tolu Agbana',
        role: 'Committee Member',
        affiliation: 'Corporate Governance & Audit Advisor',
      },
      {
        name: 'Oluwatoyin Olawumi',
        role: 'Committee Member',
        affiliation: 'Director, Ministry of Justice',
        highlight: true,
      },
    ],
    responsibilities: [
      'Comprehensive review of annual financial statements and external auditor reports.',
      'Monitoring internal audit procedures, financial safeguards, and risk registers.',
      'Ensuring strict adherence to the Kwara State Education Trust Fund Law and state procurement regulations.',
    ],
  },
  {
    id: 'finance-fundraising-investment',
    num: '02',
    name: 'Finance, Fundraising & Investment',
    tagline: 'Capital Mobilization & Long-term Endowment Strategy',
    description:
      'Formulates resource mobilization strategies, guides public-private co-investment models, oversees endowment management, and ensures financial sustainability for education investments.',
    icon: (
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
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm6 3.75a3 3 0 11-6 0 3 3 0 016 0zM6 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    chair: {
      name: 'Iyin Aboyeji',
      title: 'Committee Chair',
      designation: 'Chairperson, Finance, Fundraising & Investment',
      affiliation: 'Founding Partner, Future Africa • Trustee, KwaraETF',
    },
    members: [
      {
        name: 'Abdullahi Danladi',
        role: 'Committee Member',
        affiliation: 'Investment Strategy & Asset Management',
      },
      {
        name: 'Abdulmalik Sherrif',
        role: 'Committee Member',
        affiliation: 'Capital Markets & Corporate Finance',
      },
      {
        name: 'Folawe Omikunle',
        role: 'Committee Member',
        affiliation: 'Development Finance & Education Advocate',
      },
      {
        name: 'Akin Oyebode',
        role: 'Committee Member',
        affiliation: 'Public Finance & Strategic Policy Advisor',
      },
    ],
    responsibilities: [
      'Spearheading philanthropic fundraising drives and international institutional partnerships.',
      'Advising on optimal treasury management, capital preservation, and grant structuring.',
      'Establishing transparency benchmarks for corporate and individual donor contributions.',
    ],
  },
  {
    id: 'governance-nominations-remuneration',
    num: '03',
    name: 'Governance, Nominations & Remuneration',
    tagline: 'Institutional Excellence & Leadership Oversight',
    description:
      'Guides institutional policy, assesses Board performance, oversees leadership appointments, and establishes meritocratic compensation frameworks aligned with public sector best practice.',
    icon: (
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
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
        />
      </svg>
    ),
    chair: {
      name: 'HRH Muhammed Kudu-Kawu',
      title: 'Committee Chair',
      designation: 'Chairperson, Governance, Nominations & Remuneration',
      affiliation: 'Emir of Lafiagi • Trustee, KwaraETF',
    },
    members: [
      {
        name: 'Dr. Funke Shittu',
        role: 'Committee Member',
        affiliation: 'Governance & Institutional Development',
      },
      {
        name: 'Abdulbaqi Sadiq',
        role: 'Committee Member',
        affiliation: 'Legal Advisory & Regulatory Compliance',
      },
      {
        name: 'Kazeem Oladepo',
        role: 'Committee Member',
        affiliation: 'Human Capital & Executive Operations',
      },
      {
        name: 'Mohammed Sambo',
        role: 'Committee Member',
        affiliation: 'Public Administration & Policy Review',
      },
      {
        name: 'Mr. Abioye Victor Olusola',
        role: 'Committee Member',
        affiliation: 'Rtd. Permanent Secretary',
        highlight: true,
      },
    ],
    responsibilities: [
      'Maintaining the highest standards of governance ethics, accountability, and conflict-of-interest policies.',
      'Supervising the succession planning, executive evaluations, and nomination procedures.',
      'Administering competitive, prudent remuneration structures for the Fund’s administrative arm.',
    ],
  },
  {
    id: 'monitoring-evaluation-learning',
    num: '04',
    name: 'Monitoring, Evaluation & Learning',
    tagline: 'Evidence-Based Verification & Educational Impact Tracking',
    description:
      'Monitors project delivery across Kwara State schools, verifies rehabilitation milestones, evaluates student learning metrics, and provides empirical feedback for continuous policy iteration.',
    icon: (
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
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    chair: {
      name: 'Col. Abdulwahab Lawal (Rtd) PhD',
      title: 'Committee Chair',
      designation: 'Chairperson, Monitoring, Evaluation & Learning',
      affiliation: 'Chairman, Board of Trustees, KwaraETF',
    },
    members: [
      {
        name: 'Jumoke Alakoso',
        role: 'Committee Member',
        affiliation: 'Program Monitoring & Educational Assessment',
      },
      {
        name: 'Yusuf Agboola',
        role: 'Committee Member',
        affiliation: 'Teachers’ Welfare & Field Coordination',
      },
      {
        name: 'Prof. Shade Adekeye',
        role: 'Committee Member',
        affiliation: 'University of Ilorin',
        highlight: true,
      },
    ],
    responsibilities: [
      'Rigorous physical and qualitative inspection of infrastructure interventions.',
      'Tracking scholarship cohorts, learning baseline improvements, and student retention rates.',
      'Consolidating actionable data reports to guide quarterly and annual board intervention strategies.',
    ],
  },
  {
    id: 'programmes-partnerships',
    num: '05',
    name: 'Programmes & Partnerships',
    tagline: 'Strategic Execution, Community Co-design & Global Alliances',
    description:
      'Champions core educational programs—from classroom modernization to teacher welfare initiatives—while cultivating impactful partnerships with multilateral bodies, NGOs, and alumni associations.',
    icon: (
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
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.199l-.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.999-3.199a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    chair: {
      name: 'Oluwadamilola Amolegbe',
      title: 'Committee Chair',
      designation: 'Chairperson, Programmes & Partnerships',
      affiliation: 'Executive Secretary, Kwara State Education Trust Fund',
    },
    members: [
      {
        name: 'Zainab Abdulsalam',
        role: 'Committee Member',
        affiliation: 'Program Implementation & Donor Relations',
      },
      {
        name: 'Rebecca Olanrewaju',
        role: 'Committee Member',
        affiliation: 'Strategic Alliances & Community Engagement',
      },
    ],
    responsibilities: [
      'Designing transformative student and teacher empowerment programs across Kwara State.',
      'Fostering relationships with community stakeholders, diaspora networks, and philanthropic foundations.',
      'Coordinating multi-stakeholder school rehabilitation and Adopt-A-School commitments.',
    ],
  },
]

const BoardCommitteeMembers = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleNavigate = (hash) => {
    if (onNavigate) {
      onNavigate(hash)
    } else {
      window.location.hash = hash
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const scrollToCommittee = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const displayedCommittees =
    activeFilter === 'all'
      ? COMMITTEES_DATA
      : COMMITTEES_DATA.filter((c) => c.id === activeFilter)

  return (
    <section className="min-h-screen overflow-x-hidden bg-[#f7faf8] pb-16 sm:pb-24">
      {/* Executive Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#072417] via-[#066842] to-[#084d49] text-white">
        {/* Ambient Glows */}
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#c8b268]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl"
          style={{ animationDelay: '2.5s' }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-20 lg:px-8">
          

          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Board Committee Members
          </h1>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-emerald-50/95 sm:text-base lg:text-lg">
            Specialised standing committees of the Kwara State Education Trust
            Fund established to drive fiduciary discipline, transparent
            stewardship, risk governance, and measurable impact across all
            educational interventions.
          </p>

          {/* Quick Statistics Bar */}
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/15 bg-black/25 px-3 py-2.5 backdrop-blur-md">
              <p className="text-xl sm:text-2xl font-extrabold text-[#f3df9d]">5</p>
              <p className="text-[11px] sm:text-xs font-medium text-emerald-100">
                Standing Committees
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/25 px-3 py-2.5 backdrop-blur-md">
              <p className="text-xl sm:text-2xl font-extrabold text-white">20+</p>
              <p className="text-[11px] sm:text-xs font-medium text-emerald-100">
                Eminent Committee Seats
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1 rounded-xl border border-white/15 bg-black/25 px-3 py-2.5 backdrop-blur-md">
              <p className="text-xl sm:text-2xl font-extrabold text-[#c8b268]">100%</p>
              <p className="text-[11px] sm:text-xs font-medium text-emerald-100">
                Meritocratic Alignment
              </p>
            </div>
          </div>

          {/* Jump-to-Committee Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#c8b268] text-[#072417] shadow-md'
                  : 'bg-white/10 text-emerald-100 hover:bg-white/20'
              }`}
            >
              All Committees
            </button>
            {COMMITTEES_DATA.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setActiveFilter(c.id)
                  scrollToCommittee(c.id)
                }}
                className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeFilter === c.id
                    ? 'bg-[#c8b268] text-[#072417] shadow-md'
                    : 'bg-white/10 text-emerald-100 hover:bg-white/20'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Committee Cards Section */}
      <div className="mx-auto mt-8 sm:mt-14 max-w-6xl px-3.5 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {displayedCommittees.map((committee) => (
          <article
            key={committee.id}
            id={committee.id}
            className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm transition-all duration-300 hover:border-[#c8b268]/70 hover:shadow-md"
          >
            {/* Committee Header Banner */}
            <div className="relative border-b border-gray-100 bg-gradient-to-r from-[#072417] via-[#066842] to-[#0a5238] px-4 py-5 sm:px-8 sm:py-6 text-white">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#f3df9d] shadow-inner ring-1 ring-white/20">
                    {committee.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-md bg-[#c8b268]/25 px-2 py-0.5 text-[10.5px] font-extrabold uppercase tracking-widest text-[#f3df9d]">
                        Committee {committee.num}
                      </span>
                    </div>
                    <h2 className="mt-1 text-lg sm:text-2xl font-extrabold tracking-tight text-white leading-snug">
                      {committee.name}
                    </h2>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="inline-block rounded-full bg-emerald-950/40 border border-emerald-400/25 px-3 py-1 text-[11px] sm:text-xs font-semibold text-emerald-100">
                    {committee.tagline}
                  </span>
                </div>
              </div>

              <p className="mt-3.5 text-[13px] sm:text-sm leading-relaxed text-emerald-50/90 max-w-4xl">
                {committee.description}
              </p>
            </div>

            {/* Committee Members Body */}
            <div className="p-4 sm:p-8 space-y-6">
              {/* Committee Chair Featured Showcase */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c8b268]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Committee Leadership
                  </h3>
                </div>

                <div className="relative overflow-hidden rounded-xl border-2 border-[#c8b268]/60 bg-gradient-to-br from-[#fdfbf6] via-white to-[#f9fbf9] p-4 sm:p-5 shadow-xs">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#066842] to-[#072417] text-base font-bold text-[#f3df9d] shadow-sm ring-2 ring-[#c8b268]">
                        {committee.chair.name
                          .split(' ')
                          .filter((w) => !w.startsWith('(') && !w.startsWith('Dr.') && !w.startsWith('Col.') && !w.startsWith('HRH'))
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('') || 'CH'}
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-base sm:text-lg font-extrabold text-gray-900 leading-snug">
                            {committee.chair.name}
                          </h4>
                          <span className="inline-flex items-center gap-1 rounded-md bg-[#066842] px-2 py-0.5 text-[11px] font-bold text-white shadow-2xs">
                            <svg className="h-3 w-3 text-[#f3df9d]" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                            </svg>
                            Chair
                          </span>
                        </div>
                        <p className="mt-0.5 text-xs sm:text-sm font-semibold text-[#066842]">
                          {committee.chair.designation}
                        </p>
                        <p className="text-[11.5px] sm:text-xs text-gray-500">
                          {committee.chair.affiliation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Committee Members Grid */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#066842]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Committee Members ({committee.members.length})
                  </h3>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {committee.members.map((member, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 rounded-xl border p-3.5 transition-all duration-200 hover:border-emerald-300 hover:bg-[#fafcfa] ${
                        member.highlight
                          ? 'border-emerald-200 bg-emerald-50/40 shadow-2xs'
                          : 'border-gray-200/80 bg-[#fbfdfc]'
                      }`}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100/70 text-xs font-bold text-[#066842]">
                        {member.name
                          .split(' ')
                          .filter((w) => !w.startsWith('Mr.') && !w.startsWith('Dr.') && !w.startsWith('Prof.'))
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('') || 'M'}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-bold text-gray-900 leading-snug">
                          {member.name}
                        </h4>
                        <p className="mt-0.5 text-[11.5px] font-medium text-[#066842]">
                          {member.role}
                        </p>
                        <p className="text-[11px] text-gray-500 leading-tight mt-0.5">
                          {member.affiliation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Responsibilities Box */}
              <div className="rounded-xl border border-gray-100 bg-[#f9faf9] p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Core Responsibilities & Mandate
                </h4>
                <ul className="mt-2.5 space-y-1.5">
                  {committee.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="flex items-start gap-2 text-xs sm:text-[13px] text-gray-600 leading-relaxed"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#066842]" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Cross-Link Related Governance Pages */}
      <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-8 shadow-xs">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#066842]">
                Explore Governance
              </span>
              <h3 className="mt-1 text-lg sm:text-xl font-bold text-gray-900">
                Kwara State Education Trust Fund Leadership Ecosystem
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">
                Discover the Board of Trustees, the Executive Secretariat, and the Enabling Act.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => handleNavigate('#board-members')}
                className="cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#066842] shadow-2xs transition-all hover:border-[#066842] hover:bg-emerald-50/40 active:scale-98"
              >
                Board of Trustees &rarr;
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('#secretariat')}
                className="cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#066842] shadow-2xs transition-all hover:border-[#066842] hover:bg-emerald-50/40 active:scale-98"
              >
                The Secretariat &rarr;
              </button>
              <button
                type="button"
                onClick={() => handleNavigate('#the-law')}
                className="cursor-pointer rounded-xl bg-[#066842] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-2xs transition-all hover:bg-[#055737] active:scale-98"
              >
                The Law &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoardCommitteeMembers

