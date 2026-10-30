import { useState } from 'react'

const reports = [
  {
    year: '2026',
    quarter: 'Q3',
    title: 'Kwara State Education Trust Fund Quarterly Report Q3 2026',
    description:
      'The Kwara State Education Trust Fund presents its Quarterly Report for Q3 2026, highlighting key activities and updates in the third quarter of year 2026.',
    pdfUrl: 'https://kwaraetf.org/wp-content/uploads/2026/10/Q3-2026-QUARTERLY-REPORT-.pdf',
  },
  {
    year: '2026',
    quarter: 'Q2',
    title: 'Kwara State Education Trust Fund Quarterly Report Q2 2026',
    description:
      'The Kwara State Education Trust Fund presents its Quarterly Report for Q2 2026, highlighting key activities and updates in the second quarter of year 2026.',
    pdfUrl: 'https://kwaraetf.org/wp-content/uploads/2026/10/Q2-2026-QUARTERLY-REPORT-.pdf',
  },
  {
    year: '2026',
    quarter: 'Q1',
    title: 'Kwara State Education Trust Fund Quarterly Report Q1 2026',
    description:
      'The Kwara State Education Trust Fund presents its Quarterly Report for Q1 2026, highlighting key activities and updates in the first quarter of year 2026.',
    pdfUrl: 'https://kwaraetf.org/wp-content/uploads/2026/10/Q1-2026-QUARTERLY-REPORT-.pdf',
  },
  {
    year: '2025',
    quarter: 'Q4',
    title: 'Kwara State Education Trust Fund Quarterly Report Q4 2025',
    description:
      'The Kwara State Education Trust Fund presents its Quarterly Report for Q4 2025, highlighting key activities and updates in the fourth quarter of year 2025.',
    pdfUrl: 'https://kwaraetf.org/wp-content/uploads/2026/01/Q4-2025-QUARTERLY-REPORT-.pdf',
  },
  {
    year: '2025',
    quarter: 'Q3',
    title: 'Kwara State Education Trust Fund Quarterly Report Q3 2025',
    description:
      'The Kwara State Education Trust Fund presents its Quarterly Report for Q3 2025, highlighting key activities and updates in the third quarter of year 2025.',
    pdfUrl: 'https://kwaraetf.org/wp-content/uploads/2026/01/Q3-2025-QUARTERLY-REPORT-.pdf',
  },
  {
    year: '2025',
    quarter: 'Q2',
    title: 'Kwara State Education Trust Fund Quarterly Report Q2 2025',
    description:
      'The Kwara State Education Trust Fund presents its Quarterly Report for Q2 2025, highlighting key activities and updates in the second quarter of year 2025.',
    pdfUrl: 'https://kwaraetf.org/wp-content/uploads/2025/07/Q2-2025-Quarterly-Report.pdf',
  },
  {
    year: '2025',
    quarter: 'Q1',
    title: 'Kwara State Education Trust Fund Quarterly Report Q1 2025',
    description:
      'The Kwara State Education Trust Fund presents its Quarterly Report for Q1 2025, highlighting key activities and updates in the first quarter of year 2025.',
    pdfUrl: 'https://kwara.fund/wp-content/uploads/2025/04/Q1-2025-Quarterly-Report.pdf',
  },
  {
    year: '2024',
    quarter: 'Q4',
    title: 'Kwara State Education Trust Fund Quarterly Report Q4 2024',
    description:
      'The Kwara State Education Trust Fund presents its Quarterly Report for Q4 2024, highlighting key activities and updates in the fourth quarter of year 2024.',
    pdfUrl: 'https://kwara.fund/wp-content/uploads/2025/02/Q4-2024-Quarterly-Report.pdf',
  },
  {
    year: '2024',
    quarter: 'Q3',
    title: 'Kwara State Education Trust Fund Quarterly Report Q3 2024',
    description:
      'The Kwara State Education Trust Fund presents its Quarterly Report for Q3 2024, highlighting key activities and updates in the third quarter of year 2024.',
    pdfUrl: 'https://kwara.fund/wp-content/uploads/2024/10/Q3-2024-Quarterly-Report.pdf',
  },
  {
    year: '2024',
    quarter: 'Q2',
    title: 'Kwara State Education Trust Fund Quarterly Report Q2 2024',
    description:
      'The Kwara State Education Trust Fund presents its Quarterly Report for Q2 2024, highlighting key activities and updates in the second quarter of year 2024.',
    pdfUrl: 'https://kwara.fund/wp-content/uploads/2024/09/Q2-2024-Quarterly-Report.pdf',
  },
  {
    year: '2024',
    quarter: 'Q1',
    title: 'Kwara State Education Trust Fund Quartely Report Q1 2024',
    description:
      'The Kwara State Education Trust Fund presents its Quarterly Report for Q1 2024, highlighting key activities and updates in the first quarter of year 2024.',
    pdfUrl: 'https://kwara.fund/wp-content/uploads/2024/09/Q1-2024-Quarterly-Report.pdf',
  },
]

const years = ['All', '2026', '2025', '2024']

const QuarterlyReports = () => {
  const [selectedYear, setSelectedYear] = useState('All')

  const filteredReports =
    selectedYear === 'All'
      ? reports
      : reports.filter((item) => item.year === selectedYear)

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
              Quarterly Reports
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Official publications detailing fund activities, project milestones, financial disbursements, and impact metrics across each quarter.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Filter Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-200 bg-white p-4 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Filter by Year:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {years.map((yr) => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setSelectedYear(yr)}
                  className={`cursor-pointer px-4 py-1.5 text-xs font-semibold transition-colors ${
                    selectedYear === yr
                      ? 'bg-[#066842] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs font-medium text-gray-500">
            Showing <span className="font-bold text-gray-900">{filteredReports.length}</span> Published Reports
          </div>
        </div>

        {/* Reports Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredReports.map((report, idx) => (
            <article
              key={`${report.year}-${report.quarter}-${idx}`}
              className="animate-fade-up group relative flex flex-col justify-between border border-gray-200 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#066842]/40 hover:shadow-lg"
              style={{ animationDelay: `${100 + (idx % 6) * 60}ms` }}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-sm bg-[#fdf8eb] px-2.5 py-1 text-xs font-bold text-[#8c6d23] ring-1 ring-[#c8b268]/40">
                      {report.year}
                    </span>
                    <span className="inline-flex items-center rounded-sm bg-emerald-50 px-2.5 py-1 text-xs font-bold text-[#066842] ring-1 ring-[#066842]/20">
                      {report.quarter}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400">
                    <svg className="h-4 w-4 text-[#b91c1c]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 11h-2v5h-2v-5H9l3-3 3 3zm-2-6V3.5L18.5 9H13z" />
                    </svg>
                    PDF Publication
                  </span>
                </div>

                {/* Report Title */}
                <h2 className="mt-4 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-[#066842]">
                  {report.title}
                </h2>

                {/* Description */}
                <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                  {report.description}
                </p>
              </div>

              {/* Download Action Footer */}
              <div className="mt-6 border-t border-gray-100 pt-5">
                <a
                  href={report.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2.5 rounded-full border border-[#6a8752] bg-[#066842] px-6 py-2.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#991b1b] hover:bg-[#b31b1b] hover:shadow-md"
                >
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <svg
                      className="h-4 w-4 text-[#e3cc81] transition-all duration-200 group-hover/btn:scale-75 group-hover/btn:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
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
                      <path d="M12.2 3.6c-.8 0-1.2 1.2-.8 2.9.9 3.6 3.5 7.7 6.8 9.2 1.7.8 3 .6 3.2-.2.2-.8-1-1.6-2.9-1.6-3.7 0-8.6 1.2-11.9 3.2-1.8 1.1-2.8 2.3-2.3 3 .5.7 2 .1 3.4-1.5 2.4-2.8 4.6-8 5.2-12.1.2-1.6-.1-2.9-.7-2.9z" />
                    </svg>
                  </span>
                  <span>Download PDF</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuarterlyReports

