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

// Exact 4 Social Media Platforms with Official Brand Glyphs and Colors
const socialShareLinks = [
  {
    name: 'Facebook',
    brandColor: '#1877F2',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkwaraetf.org%2Fadministrative-fee%2F',
    icon: (
      <svg className="h-4 w-auto fill-[#1877F2]" viewBox="0 0 320 512" aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    name: 'X',
    brandColor: '#000000',
    url: 'https://twitter.com/intent/tweet?text=Impact+of+Administrative+Fee+on+Project+Outcomes+%26%238211%3B+Kwara+State+Education+Trust+Fund.+https%3A%2F%2Fkwaraetf.org%2Fadministrative-fee%2F',
    icon: (
      <svg className="h-3.5 w-auto fill-[#000000]" viewBox="0 0 512 512" aria-hidden="true">
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.4 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    brandColor: '#0A66C2',
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fkwaraetf.org%2Fadministrative-fee%2F',
    icon: (
      <svg className="h-4 w-auto fill-[#0A66C2]" viewBox="0 0 448 512" aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    brandColor: '#E60023',
    url: 'https://pinterest.com/pin/find/?url=https%3A%2F%2Fkwaraetf.org%2Fadministrative-fee%2F',
    icon: (
      <svg className="h-4 w-auto fill-[#E60023]" viewBox="0 0 496 512" aria-hidden="true">
        <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.5 6.9-28.1.6-2.5.2-4.9-1.9-7.4-11.3-13.8-18.5-38.9-18.5-62.6 0-59.5 45.4-115.1 121.7-115.1 66.5 0 110.1 45.4 110.1 107.6 0 71.7-36 122.9-83.3 122.9-25.2 0-44.1-20.8-38.1-46.3 7.2-30.5 21.2-63.4 21.2-85.4 0-19.7-10.6-36.1-32.4-36.1-25.7 0-46.4 26.6-46.4 62.2 0 22.7 7.7 38 7.7 38s-26.1 110.5-30.7 130c-5.4 22.9-2.2 56.4-.3 78.5C65.5 431.1 0 351.4 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256z" />
      </svg>
    ),
  },
]

const AdministrativeFee = ({ onNavigate }) => {
  const [liked, setLiked] = useState(false)
  const [hoveredMetric, setHoveredMetric] = useState(null)

  const handleAdoptSchool = (e) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('#adopt-a-school')
    }
  }

  // Exact Social Share Component matching the provided reference bar
  const renderShareBar = () => (
    <div className="flex items-center justify-between border-y border-gray-200/90 bg-[#f8fafb] px-4 py-3 sm:px-6">
      {/* Left: Share text + 4 exact social icon logos in their official brand colors */}
      <div className="flex items-center gap-4 sm:gap-5">
        <span className="text-[14px] font-semibold text-gray-800">
          Share
        </span>
        <div className="flex items-center gap-4">
          {socialShareLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${item.name}`}
              className="flex items-center justify-center transition-all duration-200 hover:scale-115 hover:opacity-85"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right: Green outline heart + like counter */}
      <button
        type="button"
        onClick={() => setLiked((prev) => !prev)}
        className="group inline-flex items-center gap-1.5 text-xs transition-colors cursor-pointer"
        aria-label="Like this publication"
      >
        <svg
          className={`h-4.5 w-4.5 transition-transform duration-150 group-hover:scale-110 ${
            liked
              ? 'fill-[#066842] text-[#066842]'
              : 'fill-none text-[#066842]'
          }`}
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <span className={`text-[13px] font-semibold ${liked ? 'text-[#066842]' : 'text-gray-500'}`}>
          {liked ? '1' : '0'}
        </span>
      </button>
    </div>
  )

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

      <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Social Share Bar */}
        {renderShareBar()}

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

        {/* PRIMARY HIGHLIGHT: The Outcomes Chart Section (Displaying the user provided chart directly) */}
        <div className="border border-gray-200 bg-white p-6 sm:p-10 shadow-xs">
          <div className="border-b border-gray-100 pb-6">
            <span className="text-xs font-bold tracking-widest text-[#066842] uppercase">
              Data-Driven Impact Analysis
            </span>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Impact of Administrative Fee on Project Outcomes
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Comparative analysis of project success scores (rated 1–10) across key delivery dimensions.
            </p>
          </div>

          {/* Featured Chart Image Card */}
          <div className="mt-8 flex flex-col items-center">
            <div className="w-full max-w-3xl overflow-hidden rounded-xs border border-gray-200 bg-white p-2 shadow-xs transition-shadow hover:shadow-md">
              <img
                src="/admin-fee-chart.jpg"
                alt="Impact of Administrative Fee on Project Outcomes"
                className="h-auto w-full object-contain mx-auto"
              />
            </div>
            <p className="mt-3 text-center text-xs text-gray-500 font-medium">
              Figure 1: Comparative Impact Score (1–10) With vs. Without Administrative Fee
            </p>
          </div>

          {/* Interactive Metric Comparison Cards underneath */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-4">
              Detailed Dimension Breakdown
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {metricsComparison.map((item, index) => (
                <div
                  key={item.title}
                  onMouseEnter={() => setHoveredMetric(index)}
                  onMouseLeave={() => setHoveredMetric(null)}
                  className={`border p-4 transition-all duration-200 ${
                    hoveredMetric === index
                      ? 'border-[#066842] bg-[#f2f8f5] shadow-xs -translate-y-0.5'
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
              <span className="text-xs font-bold tracking-wider text-[#066842] uppercase">Pillar 1</span>
              <h4 className="mt-1 text-base font-bold text-gray-900">Planned to Meet Needs</h4>
              <p className="mt-2 text-xs text-gray-600">Rigorous baseline needs assessment aligning with community priorities.</p>
            </div>
            <div className="border border-emerald-900/10 bg-[#fbfdfc] p-5">
              <span className="text-xs font-bold tracking-wider text-[#066842] uppercase">Pillar 2</span>
              <h4 className="mt-1 text-base font-bold text-gray-900">Implemented with Oversight</h4>
              <p className="mt-2 text-xs text-gray-600">Continuous technical engineering inspection preventing shortcuts.</p>
            </div>
            <div className="border border-emerald-900/10 bg-[#fbfdfc] p-5">
              <span className="text-xs font-bold tracking-wider text-[#066842] uppercase">Pillar 3</span>
              <h4 className="mt-1 text-base font-bold text-gray-900">Evaluated for Results</h4>
              <p className="mt-2 text-xs text-gray-600">Empirical measurement of learning outcomes and student welfare gains.</p>
            </div>
            <div className="border border-emerald-900/10 bg-[#fbfdfc] p-5">
              <span className="text-xs font-bold tracking-wider text-[#066842] uppercase">Pillar 4</span>
              <h4 className="mt-1 text-base font-bold text-gray-900">Sustained for the Future</h4>
              <p className="mt-2 text-xs text-gray-600">Maintenance planning and local community ownership long after ribbon-cutting.</p>
            </div>
          </div>

          {/* Detailed Coverage List */}
          <div className="mt-10 border-t border-gray-100 pt-8">
            <h4 className="text-base font-bold text-gray-900 sm:text-lg">
              Specifically, the fee funds:
            </h4>
            <div className="mt-6 space-y-4">
              {coverageItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 border border-gray-100 bg-white p-5 transition-all hover:border-[#066842]/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#066842]/10 text-[#066842]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-gray-900">{item.title}</h5>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why It’s Essential: With vs Without Fee Comparison */}
        <div className="border border-gray-200 bg-white p-8 sm:p-12 shadow-xs">
          <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
            Comparative Perspective
          </span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Why It’s Essential
          </h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Without Fee */}
            <div className="border-l-4 border-rose-500 bg-rose-50/40 p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-700 text-xs font-bold">
                  &times;
                </span>
                <h4 className="text-lg font-bold text-rose-950">Without This Fee</h4>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-rose-900/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  <span>Projects risk poor quality, delays, or policy misalignment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  <span>No budget exists for follow-up or warranty enforcement after completion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  <span>Community engagement is weak, severely reducing long-term sustainability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                  <span>ETF&apos;s ability to deliver its core statutory mandate is compromised.</span>
                </li>
              </ul>
            </div>

            {/* With Fee */}
            <div className="border-l-4 border-emerald-600 bg-emerald-50/40 p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  &#10003;
                </span>
                <h4 className="text-lg font-bold text-emerald-950">With The Fee</h4>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-emerald-950/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#066842]" />
                  <span><strong>Your investment is protected</strong> by on-site technical inspection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#066842]" />
                  <span><strong>Full visibility</strong> through transparent financial and outcome reporting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#066842]" />
                  <span><strong>Impact is measurable, scalable, and lasting</strong> across school generations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#066842]" />
                  <span><strong>Official policy alignment</strong> guaranteeing state accreditation and support.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Global Standard Benchmarks */}
        <div className="border border-gray-200 bg-white p-8 sm:p-12 shadow-xs">
          <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
            International Practice
          </span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            A Global Standard
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
            From UNICEF to the Global Fund, reputable humanitarian and developmental organizations worldwide include management or overhead fees — typically <strong>7–15%</strong> — as a non-negotiable operational standard.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {globalBenchmarks.map((bench) => (
              <div
                key={bench.org}
                className="border border-gray-100 bg-[#fbfdfc] p-5 transition-all hover:border-[#c8b268]"
              >
                <div className="text-xs font-bold tracking-wider text-gray-500 uppercase">
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

        {/* Bottom Social Share Bar */}
        {renderShareBar()}

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
                onClick={handleAdoptSchool}
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
