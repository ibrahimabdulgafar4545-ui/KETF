import { useState } from 'react'

const socialShareLinks = [
  {
    name: 'Facebook',
    brandColor: '#1877F2',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkwaraetf.org%2Fa-case-study-why-kwaraetf-charges-administrative-fee%2F',
    icon: (
      <svg className="h-4 w-auto fill-[#1877F2]" viewBox="0 0 320 512" aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    name: 'X',
    brandColor: '#000000',
    url: 'https://twitter.com/intent/tweet?text=A+CASE+STUDY%3A+WHY+KWARAETF+CHARGES+AN+ADMINISTRATIVE+FEE+%26%238211%3B+Kwara+State+Education+Trust+Fund.&url=https%3A%2F%2Fkwaraetf.org%2Fa-case-study-why-kwaraetf-charges-administrative-fee%2F',
    icon: (
      <svg className="h-3.5 w-3.5 fill-[#000000]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    brandColor: '#0A66C2',
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fkwaraetf.org%2Fa-case-study-why-kwaraetf-charges-administrative-fee%2F',
    icon: (
      <svg className="h-3.5 w-auto fill-[#0A66C2]" viewBox="0 0 448 512" aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    brandColor: '#E60023',
    url: 'https://pinterest.com/pin/find/?url=https%3A%2F%2Fkwaraetf.org%2Fa-case-study-why-kwaraetf-charges-administrative-fee%2F',
    icon: (
      <svg className="h-4 w-auto fill-[#E60023]" viewBox="0 0 496 512" aria-hidden="true">
        <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.5 6.9-28.1.6-2.5.2-4.9-1.9-7.4-11.3-13.8-18.5-38.9-18.5-62.6 0-59.5 45.4-115.1 121.7-115.1 66.5 0 110.1 45.4 110.1 107.6 0 71.7-36 122.9-83.3 122.9-25.2 0-44.1-20.8-38.1-46.3 7.2-30.5 21.2-63.4 21.2-85.4 0-19.7-10.6-36.1-32.4-36.1-25.7 0-46.4 26.6-46.4 62.2 0 22.7 7.7 38 7.7 38s-26.1 110.5-30.7 130c-5.4 22.9-2.2 56.4-.3 78.5C65.5 431.1 0 351.4 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256z" />
      </svg>
    ),
  },
]

const AdminFeeCaseStudyNews = ({ onNavigate }) => {
  const [liked, setLiked] = useState(false)

  const handleBackToNews = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('#news-page-4')
    } else {
      window.location.hash = '#news-page-4'
    }
  }

  // Social Share Bar
  const renderShareBar = () => (
    <div className="flex items-center justify-between border-y border-gray-200/80 bg-[#f4f7f9] px-4 py-2.5 sm:px-6">
      <div className="flex items-center gap-3.5">
        <span className="text-[14px] font-medium text-gray-800">
          Share
        </span>
        <div className="flex items-center gap-3">
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

      <button
        type="button"
        onClick={() => setLiked((prev) => !prev)}
        className="group inline-flex items-center gap-1.5 text-xs transition-colors cursor-pointer"
        aria-label="Like this publication"
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
        <span className={`text-[13px] ${liked ? 'font-semibold text-[#16a34a]' : 'font-normal text-gray-500'}`}>
          {liked ? '1' : '0'}
        </span>
      </button>
    </div>
  )

  return (
    <article className="min-h-screen bg-[#f8faf9] pb-24">
      {/* Top Hero Banner */}
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

        <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-100/80 uppercase">
            <a
              href="#news-page-4"
              onClick={handleBackToNews}
              className="transition-colors hover:text-[#f3df9d]"
            >
              News
            </a>
            <span>/</span>
            <span className="text-[#f3df9d]">Governance &amp; Policy</span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
            A CASE STUDY: WHY KWARAETF CHARGES AN ADMINISTRATIVE FEE
          </h1>

          <p className="mt-3 text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-3xl">
            Safeguarding investments, ensuring technical oversight, and delivering measurable, lasting educational impact across Kwara State.
          </p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-200/90 bg-white shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12 space-y-8">
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 pb-5 border-b border-gray-100">
            <div className="flex items-center gap-1.5 font-medium text-gray-700">
              <svg className="h-4 w-4 text-[#066842]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>August 13, 2025</span>
            </div>
            <span>&bull;</span>
            <div className="flex items-center gap-1">
              <span>Published by</span>
              <span className="font-bold text-[#066842]">KwaraETF</span>
            </div>
            <span>&bull;</span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 font-semibold text-[#066842]">
              Governance &amp; Policy
            </span>
          </div>

          {/* TOP SOCIAL SHARE BAR */}
          {renderShareBar()}

          {/* Featured Framed Chart Image */}
          <div className="overflow-hidden border border-gray-200 bg-gray-50 shadow-xs">
            <img
              src="/news-pg4-7.jpg"
              alt="Impact of Administrative Fee on Project Outcomes Chart"
              className="w-full h-auto max-h-[500px] object-cover object-top"
            />
          </div>

          {/* A Story from the Field */}
          <div className="space-y-5 text-[16px] leading-8 sm:text-[17px] sm:leading-[1.95] text-gray-700">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 border-l-4 border-[#066842] pl-3.5">
              A Story from the Field
            </h2>

            <p>
              Two years ago, a generous partner funded the renovation of a rural primary school in Kwara State. The classrooms were painted, new desks delivered, and a ribbon-cutting ceremony was held. But six months later, the ceilings began to leak during the rainy season. Why?
            </p>

            <p>
              Because no one had funded technical supervision, quality checks, or post-renovation monitoring. The contractor had cut corners. The partner’s goodwill turned into frustration, and the community felt abandoned.
            </p>

            <p className="font-semibold text-gray-900 text-lg">
              At KwaraETF, we exist to ensure this never happens. And the way we safeguard impact is through our administrative fee.
            </p>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* What the Administrative Fee Covers */}
          <div className="space-y-5 text-[16px] leading-8 sm:text-[17px] sm:leading-[1.95] text-gray-700">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 border-l-4 border-[#c8b268] pl-3.5">
              What the Administrative Fee Covers
            </h2>

            <p>
              Our fee is not profit &mdash; it is the fuel that keeps your investment on track. It ensures every project is:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-800 font-medium">
              <li>Planned to meet state and community needs</li>
              <li>Implemented with quality and oversight</li>
              <li>Evaluated for results</li>
              <li>Sustained long after the ribbon is cut</li>
            </ul>

            <p className="pt-2 font-semibold text-gray-900">
              Specifically, the fee funds:
            </p>

            <div className="grid grid-cols-1 gap-4 pt-2">
              <div className="rounded-lg border border-gray-100 bg-[#fbfdfc] p-5 shadow-2xs">
                <h4 className="font-bold text-[#066842] text-base">Project Governance</h4>
                <p className="mt-1 text-sm text-gray-700">Aligning initiatives with state education policy, securing official approvals, and ensuring compliance.</p>
              </div>

              <div className="rounded-lg border border-gray-100 bg-[#fbfdfc] p-5 shadow-2xs">
                <h4 className="font-bold text-[#066842] text-base">Monitoring &amp; Evaluation</h4>
                <p className="mt-1 text-sm text-gray-700">Tracking milestones, conducting site visits, and measuring success with data-driven reporting.</p>
              </div>

              <div className="rounded-lg border border-gray-100 bg-[#fbfdfc] p-5 shadow-2xs">
                <h4 className="font-bold text-[#066842] text-base">Stakeholder Engagement</h4>
                <p className="mt-1 text-sm text-gray-700">Bringing schools, parents, communities, and local leaders on board for lasting ownership.</p>
              </div>

              <div className="rounded-lg border border-gray-100 bg-[#fbfdfc] p-5 shadow-2xs">
                <h4 className="font-bold text-[#066842] text-base">Transparency &amp; Accountability</h4>
                <p className="mt-1 text-sm text-gray-700">Producing financial and impact reports that meet international donor standards.</p>
              </div>

              <div className="rounded-lg border border-gray-100 bg-[#fbfdfc] p-5 shadow-2xs">
                <h4 className="font-bold text-[#066842] text-base">Sustainability Planning</h4>
                <p className="mt-1 text-sm text-gray-700">Embedding follow-up, maintenance, and future-proofing into every project.</p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Why It's Essential */}
          <div className="space-y-6 text-[16px] leading-8 sm:text-[17px] sm:leading-[1.95] text-gray-700">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 border-l-4 border-[#084d49] pl-3.5">
              Why It’s Essential
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-xl border border-red-200 bg-red-50/40 p-6 space-y-3">
                <h3 className="font-bold text-red-900 text-lg flex items-center gap-2">
                  <span className="text-red-600 font-extrabold">&times;</span>
                  Without this fee:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
                  <li>Projects risk poor quality, delays, or policy misalignment.</li>
                  <li>No budget exists for follow-up after completion.</li>
                  <li>Community engagement is weak, reducing sustainability.</li>
                  <li>ETF’s ability to deliver its core mandate is compromised.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-6 space-y-3">
                <h3 className="font-bold text-[#066842] text-lg flex items-center gap-2">
                  <span className="text-[#066842] font-extrabold">&check;</span>
                  With the fee:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
                  <li>Your investment is protected.</li>
                  <li>You have full visibility through transparent reporting.</li>
                  <li>Impact is measurable, scalable, and lasting.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* A Global Standard */}
          <div className="space-y-5 text-[16px] leading-8 sm:text-[17px] sm:leading-[1.95] text-gray-700">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 border-l-4 border-[#066842] pl-3.5">
              A Global Standard
            </h2>

            <p>
              From UNICEF to the Global Fund, reputable organizations worldwide include management or overhead fees &mdash; typically 7–15% &mdash; as a non-negotiable standard.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="rounded-lg border border-gray-200 bg-[#fafcfb] p-4 text-center">
                <span className="text-xs font-bold text-gray-500 uppercase block">UNICEF</span>
                <span className="text-2xl font-extrabold text-[#066842] mt-1 block">8%</span>
              </div>
              <div className="rounded-lg border border-gray-200 bg-[#fafcfb] p-4 text-center">
                <span className="text-xs font-bold text-gray-500 uppercase block">UNESCO</span>
                <span className="text-2xl font-extrabold text-[#066842] mt-1 block">13%</span>
              </div>
              <div className="rounded-lg border border-gray-200 bg-[#fafcfb] p-4 text-center">
                <span className="text-xs font-bold text-gray-500 uppercase block">The Global Fund</span>
                <span className="text-2xl font-extrabold text-[#066842] mt-1 block">Up to 10%</span>
              </div>
              <div className="rounded-lg border border-gray-200 bg-[#fafcfb] p-4 text-center">
                <span className="text-xs font-bold text-gray-500 uppercase block">World Bank</span>
                <span className="text-2xl font-extrabold text-[#066842] mt-1 block">7–15%</span>
              </div>
            </div>

            <p className="pt-2">
              KwaraETF’s fee is tiered and proportionate &mdash; reflecting the size and complexity of each partner’s project.
            </p>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Our Commitment to Transparency */}
          <div className="space-y-5 text-[16px] leading-8 sm:text-[17px] sm:leading-[1.95] text-gray-700">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 border-l-4 border-[#c8b268] pl-3.5">
              Our Commitment to Transparency
            </h2>

            <p>
              We apply a tiered fee model that is:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-800 font-medium">
              <li><strong className="text-gray-900">Clear</strong> &ndash; Partners know exactly what is covered.</li>
              <li><strong className="text-gray-900">Proportionate</strong> &ndash; Adjusted for project size and complexity.</li>
              <li><strong className="text-gray-900">Accountable</strong> &ndash; All funds go towards governance, monitoring, and sustainability.</li>
            </ul>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Closing Resolve & Sign-off Box */}
          <div className="rounded-none border border-emerald-900/10 bg-[#fbfdfc] p-7 sm:p-9 space-y-4">
            <p className="text-[17px] leading-8 sm:text-[18px] sm:leading-[1.95] font-semibold text-gray-900">
              When you partner with KwaraETF, your funding does more than buy desks, build classrooms, or train teachers &mdash; it’s backed by a system that ensures your impact is visible, measurable, and here to stay.
            </p>

            <div className="pt-4 border-t border-gray-200 font-semibold text-gray-900 text-sm">
              <p>Secretariat &amp; Board of Trustees</p>
              <p className="text-[#066842]">Kwara State Education Trust Fund (KwaraETF)</p>
            </div>
          </div>

          {/* BOTTOM SOCIAL SHARE BAR */}
          {renderShareBar()}

          {/* Footer Back Link */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <a
              href="#news-page-4"
              onClick={handleBackToNews}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs font-semibold text-gray-700 shadow-2xs hover:border-[#066842] hover:text-[#066842] transition-colors"
            >
              <span>&larr;</span>
              <span>Back to News</span>
            </a>

            <span className="text-xs text-gray-400">
              Institutional Case Study Dispatch
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default AdminFeeCaseStudyNews

