import { useState } from 'react'

const socialShareLinks = [
  {
    name: 'Facebook',
    brandColor: '#1877F2', // Official Facebook Blue
    url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkwaraetf.org%2F%3Fpost_type%3Dawsm_job_openings%26%23038%3Bp%3D1088',
    icon: (
      // Official Facebook 'f' in exact brand color #1877F2
      <svg className="h-3.5 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#1877F2]" viewBox="0 0 320 512" aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    name: 'X',
    brandColor: '#000000', // Official X Black
    url: 'https://twitter.com/intent/tweet?text=Finance+Manager+%26%238211%3B+Kwara+State+Education+Trust+Fund.+https%3A%2F%2Fkwaraetf.org%2F%3Fpost_type%3Dawsm_job_openings%26%23038%3Bp%3D1088',
    icon: (
      // Official X glyph in exact brand color #000000
      <svg className="h-3 w-3 fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#000000]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    brandColor: '#0A66C2', // Official LinkedIn Blue
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fkwaraetf.org%2F%3Fpost_type%3Dawsm_job_openings%26%23038%3Bp%3D1088',
    icon: (
      // Official LinkedIn 'in' in exact brand color #0A66C2
      <svg className="h-3 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#0A66C2]" viewBox="0 0 448 512" aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    brandColor: '#E60023', // Official Pinterest Red
    url: 'https://pinterest.com/pin/find/?url=https%3A%2F%2Fkwaraetf.org%2F%3Fpost_type%3Dawsm_job_openings%26%23038%3Bp%3D1088',
    icon: (
      // Official Pinterest circular logo in exact brand color #E60023
      <svg className="h-3.5 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#E60023]" viewBox="0 0 496 512" aria-hidden="true">
        <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.5 6.9-28.1.6-2.5.2-4.9-1.9-7.4-11.3-13.8-18.5-38.9-18.5-62.6 0-59.5 45.4-115.1 121.7-115.1 66.5 0 110.1 45.4 110.1 107.6 0 71.7-36 122.9-83.3 122.9-25.2 0-44.1-20.8-38.1-46.3 7.2-30.5 21.2-63.4 21.2-85.4 0-19.7-10.6-36.1-32.4-36.1-25.7 0-46.4 26.6-46.4 62.2 0 22.7 7.7 38 7.7 38s-26.1 110.5-30.7 130c-5.4 22.9-2.2 56.4-.3 78.5C65.5 431.1 0 351.4 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256z" />
      </svg>
    ),
  },
]

const FinanceManagerJob = ({ onNavigate }) => {
  const [liked, setLiked] = useState(false)

  const handleBack = (e) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('#jobs')
    } else {
      window.location.hash = '#jobs'
    }
  }

  // Exact Social Share Component with official brand colors
  const renderShareBar = () => (
    <div className="flex items-center justify-between border-y border-gray-200/80 bg-[#f4f7f9] px-4 py-2.5 sm:px-6">
      {/* Left: Share text + 4 exact social icon logos in their official brand colors */}
      <div className="flex items-center gap-4 sm:gap-5">
        <span className="text-[14px] font-medium text-gray-800">
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
              className="group flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right: Green outline heart + 0 */}
      <button
        type="button"
        onClick={() => setLiked((prev) => !prev)}
        className="group inline-flex items-center gap-1.5 text-xs transition-colors cursor-pointer"
        aria-label="Like this job opening"
      >
        <svg
          className={`h-4.5 w-4.5 transition-transform duration-150 group-hover:scale-110 ${
            liked
              ? 'fill-[#16a34a] text-[#16a34a]'
              : 'fill-none text-[#16a34a]'
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
      {/* Top Breadcrumb & Hero */}
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

        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-100/80 uppercase">
            <a
              href="#jobs"
              onClick={handleBack}
              className="transition-colors hover:text-[#f3df9d]"
            >
              Careers
            </a>
            <span>/</span>
            <span className="text-[#f3df9d]">Job Opening</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Finance Manager
          </h1>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />

          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-emerald-100/90">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#c8b268]" />
              <span>Published by <strong>KwaraETF</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#f3df9d]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>July 16, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[#f3df9d]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Location: <strong>Ilorin</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-xs bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-white">
                Full Time
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Job Status Banner: Sorry! This job has expired. */}
        <div className="border-l-4 border-amber-600 bg-amber-50 p-5 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-900">
                Sorry! This job has expired.
              </h4>
              <p className="text-xs text-amber-800">
                Application closed on <strong>August 16, 2025</strong>. We are no longer accepting submissions for this opening.
              </p>
            </div>
          </div>
        </div>

        {/* TOP SOCIAL SHARE BAR */}
        {renderShareBar()}

        {/* Main Job Body */}
        <div className="border border-gray-200 bg-white p-7 sm:p-12 shadow-xs space-y-10">
          {/* Metadata tags */}
          <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 pb-6 text-xs text-gray-500">
            <div>
              <span className="font-semibold text-gray-700">Categories:</span>{' '}
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-gray-800">Finance &amp; Accounting</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Tags:</span>{' '}
              <span className="inline-flex gap-1.5">
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-gray-800">Budgeting</span>
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-gray-800">Compliance</span>
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-gray-800">Audit</span>
              </span>
            </div>
          </div>

          {/* Role Overview */}
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              Role Overview
            </h2>
            <p className="mt-4 text-[17px] leading-8 text-gray-700 sm:text-[18px] sm:leading-[1.95]">
              The Finance Manager will oversee the financial health of the Kwara State Education Trust Fund. This role involves managing budgeting, financial planning, reporting, compliance, and internal controls in line with regulatory and donor requirements. The ideal candidate will bring strong analytical skills, integrity, and a proven ability to manage funds transparently and strategically in a nonprofit or public sector environment.
            </p>
          </div>

          {/* Key Responsibilities */}
          <div>
            <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
              Key Responsibilities:
            </h3>
            <ul className="mt-4 space-y-3 text-[15px] leading-7 text-gray-700 sm:text-[16px]">
              {[
                'Develop and manage the Fund’s annual budget in collaboration with relevant departments.',
                'Oversee financial planning, cash flow forecasting, and fund disbursement processes.',
                'Maintain accurate financial records and ensure timely preparation of monthly, quarterly, and annual financial reports.',
                'Monitor budget performance and provide variance analysis with strategic recommendations.',
                'Ensure compliance with donor and statutory financial regulations.',
                'Supervise the processing of all payments, staff advances, and procurement-related disbursements.',
                'Manage relationships with external auditors, banks, and government financial institutions.',
                'Lead financial risk management, including fraud prevention controls and compliance protocols.',
                'Support the development and implementation of financial systems, tools, and dashboards for transparency and accountability.',
                'Mentor and supervise finance officers and administrative support staff.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#066842]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications & Experience */}
          <div>
            <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
              Qualifications &amp; Experience:
            </h3>
            <ul className="mt-4 space-y-3 text-[15px] leading-7 text-gray-700 sm:text-[16px]">
              {[
                'Bachelor’s degree or HND in Finance, Accounting, Economics, or related field (Master’s degree preferred).',
                'Minimum of 5 years of relevant experience in financial management or supervisory roles; public sector or nonprofit experience is an advantage.',
                'Professional certification such as ACA, ACCA, ICAN, or equivalent is required.',
                'Strong understanding of Nigerian financial regulations, procurement procedures, and donor compliance frameworks.',
                'Experience with budgeting, forecasting, and financial reporting systems.',
                'Proficiency in accounting software (e.g., QuickBooks, Sage) and Microsoft Excel.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8c6d23]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills & Competencies */}
          <div>
            <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
              Skills &amp; Competencies:
            </h3>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-[15px] leading-7 text-gray-700 sm:text-[16px]">
              {[
                'Strong leadership and organizational skills',
                'Excellent analytical and decision-making abilities',
                'High ethical standards and attention to detail',
                'Strong interpersonal and communication skills',
                'Capacity to work under pressure and meet deadlines',
                'Familiarity with grant funding and donor reporting processes',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-[#fbfdfc] p-3">
                  <svg className="h-4 w-4 text-[#066842] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Summary Grid */}
          <div className="border-t border-gray-100 pt-8">
            <h4 className="text-sm font-bold tracking-wider text-gray-900 uppercase">
              Position Details
            </h4>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="border border-gray-200 bg-gray-50/70 p-4">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Job Type</span>
                <p className="mt-1 font-bold text-gray-900">Full Time</p>
              </div>
              <div className="border border-gray-200 bg-gray-50/70 p-4">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Location</span>
                <p className="mt-1 font-bold text-gray-900">Ilorin, Kwara State</p>
              </div>
              <div className="border border-gray-200 bg-gray-50/70 p-4">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Application Status</span>
                <p className="mt-1 font-bold text-red-700">Closed (August 16, 2025)</p>
              </div>
            </div>
          </div>

          {/* BOTTOM SOCIAL SHARE BAR */}
          {renderShareBar()}

          {/* Footer Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-8">
            <a
              href="#jobs"
              onClick={handleBack}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs font-semibold text-gray-700 shadow-2xs hover:border-[#066842] hover:text-[#066842]"
            >
              <span>&larr;</span>
              <span>Back to All Openings</span>
            </a>

            <div className="text-xs text-gray-500">
              Kwara State Education Trust Fund &bull; Careers Portal
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinanceManagerJob
