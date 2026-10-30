import { useState } from 'react'

const coverageItems = [
  {
    title: 'Project Governance',
    desc: 'Aligning initiatives with state education policy, securing official approvals, and ensuring strict regulatory compliance.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: 'Monitoring & Evaluation',
    desc: 'Tracking milestones, conducting on-site engineering inspections, and measuring learning improvements with data-driven reporting.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
  },
  {
    title: 'Stakeholder Engagement',
    desc: 'Mobilizing parent-teacher associations, community leaders, and school boards to foster local ownership and protect assets.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
  },
  {
    title: 'Transparency & Accountability',
    desc: 'Producing detailed financial audit trails and verifiable outcome reports that meet the rigorous standards of global donors.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
  {
    title: 'Sustainability Planning',
    desc: 'Embedding preventative maintenance protocols, spare parts support, and continuous facility monitoring to future-proof every project.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    ),
  },
]

const globalBenchmarks = [
  { org: 'UNICEF', rate: '8%', note: 'Standard cost recovery for child programmes' },
  { org: 'UNESCO', rate: '13%', note: 'Global education & science initiatives' },
  { org: 'The Global Fund', rate: 'up to 10%', note: 'Health & education grants overhead' },
  { org: 'World Bank', rate: '7–15%', note: 'Varies by programmatic scope & technicality' },
]

const metricsComparison = [
  {
    title: 'Project quality',
    withFee: 9,
    withoutFee: 5,
    gain: '+80%',
    summary: 'Ensures qualified architectural supervision, sound structural materials, and strict code compliance.',
  },
  {
    title: 'Timeliness',
    withFee: 9,
    withoutFee: 4,
    gain: '+125%',
    summary: 'Dedicated milestones monitoring prevents contractor stalls and delivers projects on schedule.',
  },
  {
    title: 'Sustainability',
    withFee: 9,
    withoutFee: 3,
    gain: '+200%',
    summary: 'Post-renovation warranty checks, community maintenance covenants, and asset preservation.',
  },
  {
    title: 'Stakeholder engagement',
    withFee: 9,
    withoutFee: 4,
    gain: '+125%',
    summary: 'Co-designing with community leaders, PTA, and teachers ensures deep local ownership.',
  },
  {
    title: 'Reporting & transparency',
    withFee: 9,
    withoutFee: 2,
    gain: '+350%',
    summary: 'Verifiable photo updates, financial breakdowns, and auditable governance logs for donors.',
  },
]

const AdministrativeFee = () => {
  const [viewMode, setViewMode] = useState('chart') // 'chart' | 'image'
  const [hoveredMetric, setHoveredMetric] = useState(null)

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
              Understanding the Administrative Fee
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Not profit, but the protective fuel that keeps your educational investment on track, of the highest technical quality, and sustained for generations.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* A Story from the Field Card */}
        <div className="animate-fade-up border border-gray-200 bg-white shadow-xs">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#c8b268] via-[#066842] to-[#c8b268]" />

          <div className="p-8 sm:p-12">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center border border-[#c8b268]/60 bg-[#fdf8eb] px-3.5 py-1 text-xs font-semibold tracking-widest text-[#8c6d23] uppercase">
                Case in Point
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-gray-200/80" />
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              A Story from the Field
            </h2>

            <div className="mt-6 space-y-5 text-[17px] leading-8 text-gray-700 sm:text-[18px] sm:leading-[1.95]">
              <p>
                Two years ago, a generous partner funded the renovation of a rural primary school in Kwara State. The classrooms were painted, new desks delivered, and a ribbon-cutting ceremony was held. But six months later, the ceilings began to leak during the rainy season. Why?
              </p>
              <p className="border-l-4 border-amber-500/80 bg-amber-50/60 p-4 font-medium text-amber-950 sm:p-5">
                Because no one had funded technical supervision, quality checks, or post-renovation monitoring. The contractor had cut corners. The partner’s goodwill turned into frustration, and the community felt abandoned.
              </p>
              <p className="font-semibold text-gray-900">
                At KwaraETF, we exist to ensure this never happens. And the way we safeguard impact is through our administrative fee.
              </p>
            </div>
          </div>
        </div>

        {/* PRIMARY HIGHLIGHT: The Outcomes Chart Section */}
        <div className="border border-gray-200 bg-white p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#066842] uppercase">
                Data-Driven Impact Analysis
              </span>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Impact of Administrative Fee on Project Outcomes
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Comparative analysis of project success scores (rated 1–10) across key delivery dimensions.
              </p>
            </div>

            {/* Toggle view buttons */}
            <div className="inline-flex rounded-full border border-gray-200 bg-gray-50 p-1">
              <button
                type="button"
                onClick={() => setViewMode('chart')}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  viewMode === 'chart'
                    ? 'bg-[#066842] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Interactive Chart
              </button>
              <button
                type="button"
                onClick={() => setViewMode('image')}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  viewMode === 'image'
                    ? 'bg-[#066842] text-white shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Original Figure
              </button>
            </div>
          </div>

          {viewMode === 'chart' ? (
            <div className="mt-8">
              {/* Chart Container */}
              <div className="relative mx-auto max-w-4xl overflow-x-auto rounded-none border border-gray-100 bg-[#fafcfb] p-4 sm:p-6">
                <div className="min-w-[620px]">
                  {/* SVG Chart */}
                  <svg
                    viewBox="0 0 800 420"
                    className="w-full h-auto select-none font-sans"
                    role="img"
                    aria-label="Impact of Administrative Fee on Project Outcomes Chart"
                  >
                    {/* Title */}
                    <text
                      x="400"
                      y="26"
                      textAnchor="middle"
                      className="fill-gray-800 text-[18px] font-semibold tracking-tight"
                    >
                      Impact of Administrative Fee on Project Outcomes
                    </text>

                    {/* Y-axis label */}
                    <text
                      x="-195"
                      y="28"
                      transform="rotate(-90)"
                      textAnchor="middle"
                      className="fill-gray-700 text-[14px] font-medium"
                    >
                      Impact Score (1–10)
                    </text>

                    {/* Gridlines and Y-axis scale */}
                    {[
                      { val: 10, y: 50 },
                      { val: 8, y: 110 },
                      { val: 6, y: 170 },
                      { val: 4, y: 230 },
                      { val: 2, y: 290 },
                      { val: 0, y: 350 },
                    ].map((tick) => (
                      <g key={tick.val}>
                        <line
                          x1="80"
                          y1={tick.y}
                          x2="760"
                          y2={tick.y}
                          stroke="#e5e7eb"
                          strokeDasharray={tick.val === 0 ? '0' : '4,4'}
                          strokeWidth="1"
                        />
                        <text
                          x="70"
                          y={tick.y + 4}
                          textAnchor="end"
                          className="fill-gray-600 text-[13px] font-medium"
                        >
                          {tick.val}
                        </text>
                      </g>
                    ))}

                    {/* Y-axis line & X-axis line */}
                    <line x1="80" y1="50" x2="80" y2="350" stroke="#4b5563" strokeWidth="1.5" />
                    <line x1="80" y1="350" x2="760" y2="350" stroke="#4b5563" strokeWidth="1.5" />

                    {/* Top Right Legend */}
                    <g transform="translate(565, 45)">
                      <rect
                        width="180"
                        height="54"
                        fill="#ffffff"
                        stroke="#e5e7eb"
                        strokeWidth="1"
                        rx="2"
                      />
                      {/* Item 1 */}
                      <rect x="12" y="12" width="18" height="12" fill="#2b74b9" rx="1" />
                      <text x="36" y="22" className="fill-gray-800 text-[11px] font-medium">
                        With Administrative Fee
                      </text>
                      {/* Item 2 */}
                      <rect x="12" y="32" width="18" height="12" fill="#f39237" rx="1" />
                      <text x="36" y="42" className="fill-gray-800 text-[11px] font-medium">
                        Without Administrative Fee
                      </text>
                    </g>

                    {/* 5 Categories Bar Groups */}
                    {[
                      { name: 'Project quality', withVal: 9, withoutVal: 5, x: 150 },
                      { name: 'Timeliness', withVal: 9, withoutVal: 4, x: 280 },
                      { name: 'Sustainability', withVal: 9, withoutVal: 3, x: 410 },
                      { name: 'Stakeholder engagement', withVal: 9, withoutVal: 4, x: 540 },
                      { name: 'Reporting & transparency', withVal: 9, withoutVal: 2, x: 670 },
                    ].map((cat, idx) => {
                      // Score 0 is at 350, Score 10 is at 50 -> 30px per unit
                      const withHeight = cat.withVal * 30
                      const withY = 350 - withHeight
                      const withoutHeight = cat.withoutVal * 30
                      const withoutY = 350 - withoutHeight

                      return (
                        <g
                          key={cat.name}
                          className="cursor-pointer transition-opacity duration-200"
                          onMouseEnter={() => setHoveredMetric(idx)}
                          onMouseLeave={() => setHoveredMetric(null)}
                        >
                          {/* With Fee Bar (Blue) */}
                          <rect
                            x={cat.x - 30}
                            y={withY}
                            width="28"
                            height={withHeight}
                            fill="#2b74b9"
                            className="transition-all duration-300 hover:fill-[#1e588f]"
                          />
                          {/* Score Label on Top */}
                          <text
                            x={cat.x - 16}
                            y={withY - 6}
                            textAnchor="middle"
                            className="fill-[#2b74b9] text-[12px] font-bold"
                          >
                            {cat.withVal}
                          </text>

                          {/* Without Fee Bar (Orange) */}
                          <rect
                            x={cat.x + 2}
                            y={withoutY}
                            width="28"
                            height={withoutHeight}
                            fill="#f39237"
                            className="transition-all duration-300 hover:fill-[#d87c24]"
                          />
                          {/* Score Label on Top */}
                          <text
                            x={cat.x + 16}
                            y={withoutY - 6}
                            textAnchor="middle"
                            className="fill-[#d87c24] text-[12px] font-bold"
                          >
                            {cat.withoutVal}
                          </text>

                          {/* X-axis Label (Angled at -20 degrees) */}
                          <text
                            x={cat.x}
                            y="368"
                            transform={`rotate(-22, ${cat.x}, 368)`}
                            textAnchor="end"
                            className="fill-gray-700 text-[12px] font-medium"
                          >
                            {cat.name}
                          </text>
                        </g>
                      )
                    })}
                  </svg>
                </div>
              </div>

              {/* Data Table / Key Performance Breakdown Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {metricsComparison.map((item, index) => (
                  <div
                    key={item.title}
                    className={`border p-4 transition-all duration-200 ${
                      hoveredMetric === index
                        ? 'border-[#066842] bg-[#f2f8f5] shadow-xs'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                        {item.title}
                      </span>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                        {item.gain}
                      </span>
                    </div>

                    <div className="mt-3 flex items-baseline gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-xs bg-[#2b74b9]" />
                        <span className="text-lg font-extrabold text-gray-900">{item.withFee}</span>
                      </div>
                      <span className="text-xs text-gray-400">vs</span>
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-xs bg-[#f39237]" />
                        <span className="text-sm font-semibold text-gray-600">{item.withoutFee}</span>
                      </div>
                    </div>

                    <p className="mt-2 text-[11px] leading-relaxed text-gray-600">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Original Image View */
            <div className="mt-8 flex flex-col items-center justify-center border border-gray-100 bg-[#fafcfb] p-6 sm:p-10">
              <div className="max-w-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <img
                  src="/admin-fee-chart.jpg"
                  alt="Impact of Administrative Fee on Project Outcomes Chart"
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="mt-4 text-center text-xs text-gray-500">
                Figure: Impact of Administrative Fee on Project Outcomes (Rating: 1–10)
              </p>
            </div>
          )}
        </div>

        {/* What the Administrative Fee Covers */}
        <div className="border border-gray-200 bg-white p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
              Operational Integrity
            </span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              What the Administrative Fee Covers
            </h3>
            <p className="mt-4 text-[17px] leading-relaxed text-gray-700 sm:text-[18px]">
              Our fee is not profit — it is the fuel that keeps your investment on track. It ensures every single intervention is:
            </p>
          </div>

          {/* 4 Core Pillars */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-emerald-900/10 bg-[#fbfdfc] p-5">
              <span className="text-xs font-mono font-bold text-[#066842]">01</span>
              <h4 className="mt-2 text-base font-bold text-gray-900">Planned</h4>
              <p className="mt-1 text-xs text-gray-600">To meet real state and community needs.</p>
            </div>
            <div className="border border-emerald-900/10 bg-[#fbfdfc] p-5">
              <span className="text-xs font-mono font-bold text-[#066842]">02</span>
              <h4 className="mt-2 text-base font-bold text-gray-900">Implemented</h4>
              <p className="mt-1 text-xs text-gray-600">With rigorous engineering quality &amp; oversight.</p>
            </div>
            <div className="border border-emerald-900/10 bg-[#fbfdfc] p-5">
              <span className="text-xs font-mono font-bold text-[#066842]">03</span>
              <h4 className="mt-2 text-base font-bold text-gray-900">Evaluated</h4>
              <p className="mt-1 text-xs text-gray-600">For measurable learning outcomes and impact.</p>
            </div>
            <div className="border border-emerald-900/10 bg-[#fbfdfc] p-5">
              <span className="text-xs font-mono font-bold text-[#066842]">04</span>
              <h4 className="mt-2 text-base font-bold text-gray-900">Sustained</h4>
              <p className="mt-1 text-xs text-gray-600">Long after the inaugural ribbon is cut.</p>
            </div>
          </div>

          {/* Detailed 5 Funding Allocations */}
          <div className="mt-10">
            <h4 className="text-sm font-bold tracking-wider text-gray-900 uppercase">
              Specifically, the fee funds:
            </h4>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coverageItems.map((item) => (
                <div
                  key={item.title}
                  className="group relative border border-gray-100 bg-[#fbfdfc] p-6 transition-all duration-200 hover:border-[#c8b268]/60 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#066842]/10 text-[#066842] transition-colors duration-200 group-hover:bg-[#066842] group-hover:text-[#f3df9d]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                      {item.icon}
                    </svg>
                  </div>
                  <h5 className="mt-4 text-base font-bold text-gray-900 group-hover:text-[#066842]">
                    {item.title}
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why It's Essential: Without vs With Side-by-Side */}
        <div className="border border-gray-200 bg-white p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
              Impact Comparison
            </span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Why It’s Essential
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Comparing outcomes when administrative safeguards are present versus omitted.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Without Fee */}
            <div className="border border-red-200 bg-gradient-to-b from-red-50/60 to-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-red-700">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-red-900">
                  Without This Fee
                </h4>
              </div>
              <ul className="mt-6 space-y-3.5 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  <span>Projects risk poor quality, structural defects, delays, or policy misalignment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  <span>No budget exists for technical follow-up or post-completion maintenance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  <span>Community engagement is weak, severely reducing long-term local sustainability.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  <span>ETF’s statutory ability to deliver its core educational mandate is compromised.</span>
                </li>
              </ul>
            </div>

            {/* With Fee */}
            <div className="border border-emerald-200 bg-gradient-to-b from-emerald-50/60 to-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-[#066842]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-emerald-950">
                  With the Fee
                </h4>
              </div>
              <ul className="mt-6 space-y-3.5 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#066842]" />
                  <span><strong>Your investment is protected:</strong> Qualified engineers and inspectors oversee each stage.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#066842]" />
                  <span><strong>Full visibility:</strong> Transparent, open-book quarterly financial and audit reporting.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#066842]" />
                  <span><strong>Lasting impact:</strong> Measurable, scalable, and embraced by the host community.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Standard Benchmark */}
        <div className="border border-gray-200 bg-white p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
              International Benchmarks
            </span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              A Global Standard
            </h3>
            <p className="mt-4 text-[17px] leading-relaxed text-gray-700 sm:text-[18px]">
              From UNICEF to the Global Fund, reputable organizations worldwide include management or overhead fees — typically <strong>7–15%</strong> — as a non-negotiable standard.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {globalBenchmarks.map((bench) => (
              <div
                key={bench.org}
                className="border border-gray-200 bg-[#fbfdfc] p-6 text-center"
              >
                <div className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                  {bench.org}
                </div>
                <div className="mt-3 text-3xl font-extrabold text-[#066842]">
                  {bench.rate}
                </div>
                <p className="mt-2 text-xs text-gray-600">
                  {bench.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <p className="text-sm font-semibold text-gray-800">
              KwaraETF’s fee is tiered and proportionate — reflecting the size and complexity of each partner’s project.
            </p>
          </div>
        </div>

        {/* Our Commitment to Transparency */}
        <div className="border border-gray-200 bg-white p-8 sm:p-10 shadow-xs">
          <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
            Trust &amp; Alignment
          </span>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Our Commitment to Transparency
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            We apply a tiered fee model built upon three foundational commitments:
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-100 bg-[#fbfdfc] p-6">
              <div className="text-xs font-bold tracking-widest text-[#8c6d23] uppercase">
                Pillar 1
              </div>
              <h4 className="mt-2 text-lg font-bold text-gray-900">Clear</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Partners know exactly what is covered before any agreement or MoU is signed.
              </p>
            </div>
            <div className="border border-gray-100 bg-[#fbfdfc] p-6">
              <div className="text-xs font-bold tracking-widest text-[#8c6d23] uppercase">
                Pillar 2
              </div>
              <h4 className="mt-2 text-lg font-bold text-gray-900">Proportionate</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                Adjusted responsibly according to individual project size, location, and technical complexity.
              </p>
            </div>
            <div className="border border-gray-100 bg-[#fbfdfc] p-6">
              <div className="text-xs font-bold tracking-widest text-[#8c6d23] uppercase">
                Pillar 3
              </div>
              <h4 className="mt-2 text-lg font-bold text-gray-900">Accountable</h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-600">
                All funds strictly go towards project governance, site monitoring, and long-term sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Partner Callout Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#064e3b] via-[#066842] to-[#084d49] p-8 text-white sm:p-12">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              An Enduring Partnership for Education
            </h3>
            <p className="mt-4 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              When you partner with KwaraETF, your funding does more than buy desks, build classrooms, or train teachers — it’s backed by a system that ensures your impact is visible, measurable, and here to stay.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#adopt-a-school"
                className="inline-flex items-center gap-2 rounded-full border border-[#c8b268] bg-[#c8b268] px-7 py-3 text-sm font-bold text-[#064e3b] transition-all hover:bg-white hover:text-[#066842]"
              >
                <span>Adopt a School</span>
                <span>&rarr;</span>
              </a>
              <a
                href="mailto:programs@kwara.fund"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                <span>Contact ETF Programs</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdministrativeFee
