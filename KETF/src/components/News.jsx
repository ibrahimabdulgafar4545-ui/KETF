import { useState, useEffect } from 'react'

const allDispatches = {
  1: [
    {
      id: 'news-in-memoriam',
      title: 'IN MEMORIAM: Moses Jimoh Adebayo Oyelere',
      date: 'October 26, 2026',
      category: 'In Memoriam',
      publishedBy: 'KwaraETF',
      excerpt:
        'A Life of Service, A Legacy in Education 1965–2026 Some legacies are written in the institutions we build. Others live on in the people we teach, […]',
      image: '/N1.png',
      imageAlt: 'Moses Jimoh Adebayo Oyelere',
      badge: 'Official In Memoriam Dispatch',
      targetRoute: '#news-in-memoriam',
    },
  ],
  2: [
    {
      id: 'dispatch-2-1',
      title: 'Kwara State Education Trust Fund Inaugurates Central Secretariat in Ilorin',
      date: 'October 14, 2026',
      category: 'Institutional Update',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Board of Trustees has officially ratified the operational deployment of the central secretariat to coordinate strategic donor partnerships, transparent procurement filings, and school interventions across the 16 Local Government Areas.',
      image: '/Hero-img1.jpg',
      imageAlt: 'Kwara State Education Trust Fund Secretariat',
      badge: 'Institutional Secretariat Dispatch',
    },
  ],
  3: [
    {
      id: 'dispatch-3-1',
      title: 'Public-Private Partnership Accord Signed for Public School Solar Infrastructure',
      date: 'September 28, 2026',
      category: 'Infrastructure Interventions',
      publishedBy: 'KwaraETF',
      excerpt:
        'In alignment with the 5-Year Strategic Development Plan, KwaraETF executes formal partnership agreements with renewable power providers to electrify priority community secondary schools.',
      image: '/initiative-adopt-school.jpg',
      imageAlt: 'School Solar Infrastructure Accord',
      badge: 'Public-Private Partnership Notice',
    },
  ],
  4: [
    {
      id: 'news-anniversary-office',
      title: 'ON THE OCCASION OF MY FIRST ANNIVERSARY IN OFFICE',
      date: 'Official Statement',
      category: 'Executive Address',
      publishedBy: 'KwaraETF',
      excerpt:
        'Today marks one year since I had the honour of being appointed as Chairman of the Kwara State Education Trust Fund a role that has been [...]',
      image: '/news-pg4-1.jpg',
      imageAlt: 'Chairman, Kwara State Education Trust Fund',
      badge: "Chairman's Official Statement",
      fullContent: `Today marks one year since I had the honour of being appointed as Chairman of the Kwara State Education Trust Fund a role that has been both a profound privilege and a defining responsibility.

From day one, our mission has been resolute: to mobilize strategic resources, foster sustainable public-private partnerships, and inject transparent, high-impact investments into public education across all sixteen Local Government Areas of Kwara State.

Over the past twelve months, the Board of Trustees has laid robust administrative and statutory frameworks, initiated transformative learning interventions, and engaged stakeholders at every level—from community classrooms to diaspora partners.

We extend our profound appreciation to His Excellency, the Executive Governor of Kwara State, for the unyielding support, and to the dedicated Secretariat team, development partners, educators, and citizens of Kwara State. The journey toward an enlightened, equitable future continues with even greater resolve.`,
    },
  ],
  5: [
    {
      id: 'dispatch-5-1',
      title: 'Statewide Teacher Continuous Professional Development (CPD) Summit Announced',
      date: 'August 30, 2026',
      category: 'Educator Empowerment',
      publishedBy: 'KwaraETF',
      excerpt:
        'Preparations commence for the orientation of over 3,000 public educators under the Teachers’ Lounge Initiative, advancing instructional pedagogy and digital classroom competencies.',
      image: '/project-teachers-lounge.jpg',
      imageAlt: 'Teachers Lounge Professional Development',
      badge: 'Educator Summit Notice',
    },
  ],
  6: [
    {
      id: 'dispatch-6-1',
      title: 'Adoption Framework Guidelines Issued for Corporate and Diaspora Donors',
      date: 'August 12, 2026',
      category: 'Partnership Guidelines',
      publishedBy: 'KwaraETF',
      excerpt:
        'KwaraETF releases the standardized Bronze, Silver, and Gold school adoption framework, clarifying memorandum terms, naming rights, and institutional monitoring protocols.',
      image: '/initiative-celebrate.jpg',
      imageAlt: 'Adopt-A-School Framework',
      badge: 'Framework Guideline Publication',
    },
  ],
  7: [
    {
      id: 'dispatch-7-1',
      title: 'Gazette Notice: Establishment & Foundation Charter of the Kwara Education Trust Fund',
      date: 'July 24, 2026',
      category: 'Statutory Record',
      publishedBy: 'KwaraETF',
      excerpt:
        'Official archival publication of the founding charter establishing an autonomous, transparent trust vehicle to catalyze private-sector investments into Kwara public schools.',
      image: '/AboutImg.jpg',
      imageAlt: 'Foundation Charter of KwaraETF',
      badge: 'Statutory Foundation Gazette',
    },
  ],
}

// Single Standardized Executive News Card Component (Format of the 1st news on page 1)
const NewsArticleCard = ({ article, onSelectArticle }) => {
  const handleClick = (e) => {
    e.preventDefault()
    onSelectArticle(article)
  }

  return (
    <article className="group border border-gray-200 bg-white shadow-xs transition-all duration-200 hover:border-[#c8b268]/80 hover:shadow-md overflow-hidden">
      {/* Top Brand Accent Gradient Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49]" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-9 lg:p-10 items-start">
        {/* Left Column: Framed Image */}
        <div className="md:col-span-5 w-full">
          <div
            onClick={handleClick}
            className="relative overflow-hidden border border-gray-200 bg-gray-50 shadow-2xs cursor-pointer group/img"
          >
            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              className="w-full h-auto max-h-[380px] object-cover object-top transition-transform duration-300 group-hover/img:scale-102"
            />
          </div>
        </div>

        {/* Right Column: Details & Copy */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 pb-3 border-b border-gray-100">
              {article.date && (
                <>
                  <div className="flex items-center gap-1.5 font-medium text-gray-600">
                    <svg className="h-4 w-4 text-[#066842]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{article.date}</span>
                  </div>
                  <span>&bull;</span>
                </>
              )}

              <div className="flex items-center gap-1">
                <span>Published by</span>
                <span className="font-bold text-[#066842] hover:text-[#b31b1b] cursor-pointer transition-colors">
                  {article.publishedBy || 'KwaraETF'}
                </span>
              </div>

              <span>&bull;</span>

              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-700">
                {article.category || 'News'}
              </span>
            </div>

            {/* Article Headline */}
            <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 leading-snug">
              <a
                href={article.targetRoute || '#'}
                onClick={handleClick}
                className="hover:text-[#066842] hover:underline cursor-pointer transition-colors"
              >
                {article.title}
              </a>
            </h3>

            {/* Body Excerpt */}
            <p className="mt-4 text-[16px] leading-8 text-gray-700 sm:text-[17px] sm:leading-[1.95]">
              {article.excerpt}
            </p>
          </div>

          {/* Bottom Action Row */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              type="button"
              onClick={handleClick}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#066842] bg-[#066842] px-7 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b31b1b] hover:border-[#b31b1b] hover:shadow-md cursor-pointer self-start sm:self-auto"
            >
              <span>Read more</span>
              <span>&rarr;</span>
            </button>

            <span className="text-xs text-gray-400 font-medium">
              {article.badge || 'Official Dispatch'}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

const News = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [readingArticle, setReadingArticle] = useState(null)

  // Support jumping to page 4 directly if specified in hash e.g. #news-page-4
  useEffect(() => {
    if (window.location.hash === '#news-page-4' || window.location.hash === '#news-pg4') {
      setCurrentPage(4)
    }
  }, [])

  const handleSelectArticle = (article) => {
    if (article.targetRoute) {
      if (onNavigate) {
        onNavigate(article.targetRoute)
      } else {
        window.location.hash = article.targetRoute
      }
    } else {
      setReadingArticle(article)
    }
  }

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum)
    const feedHeader = document.getElementById('news-feed-top')
    if (feedHeader) {
      feedHeader.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 380, behavior: 'smooth' })
    }
  }

  const currentArticles = allDispatches[currentPage] || []

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

        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="animate-fade-up mx-auto max-w-3xl">
            <span className="inline-block rounded-full border border-[#c8b268]/50 bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#f3df9d] uppercase">
              Resources &bull; Media &amp; Press
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              News &amp; Announcements
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Official updates, special memorandums, press briefings, and stories from the Kwara State Education Trust Fund.
            </p>
          </div>
        </div>
      </div>

      <div id="news-feed-top" className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* News Feed Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {currentPage === 1 ? 'Latest Publications' : `Publications & Archives — Page ${currentPage}`}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Official dispatches, gazette notices, and executive statements from KwaraETF.
            </p>
          </div>
          <span className="self-start sm:self-auto rounded-full bg-[#fdf8eb] border border-[#c8b268]/50 px-3.5 py-1 text-xs font-bold text-[#8c6d23]">
            {currentPage === 1 ? 'Featured Update' : `Archive Page ${currentPage} of 7`}
          </span>
        </div>

        {/* Dynamic Page Content: Formatted in the 1st news first page format for all */}
        <div className="space-y-10">
          {currentArticles.map((article) => (
            <NewsArticleCard
              key={article.id}
              article={article}
              onSelectArticle={handleSelectArticle}
            />
          ))}
        </div>

        {/* Redesigned Executive Pagination Bar */}
        <div className="pt-8 pb-4 border-t border-gray-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Status info */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium order-2 sm:order-1">
            <span className="inline-block h-2 w-2 rounded-full bg-[#066842]" />
            <span>
              Showing page <strong className="text-[#066842] font-bold">{currentPage}</strong> of <strong className="text-gray-800 font-bold">7</strong>
            </span>
          </div>

          {/* Numbered Controls */}
          <nav aria-label="News Pagination" className="order-1 sm:order-2 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="inline-flex h-9 sm:h-10 items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 sm:px-3 text-xs font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-[#066842] hover:border-[#066842]/40 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-2xs"
              aria-label="Previous page"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Page Buttons: 1, 2, 3, 4, 5, 6, 7 */}
            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 cursor-pointer ${
                  currentPage === page
                    ? 'bg-[#066842] text-white shadow-sm ring-2 ring-[#c8b268]/50 ring-offset-1 border border-[#066842]'
                    : 'border border-gray-200 bg-white text-gray-700 hover:border-[#066842]/60 hover:bg-emerald-50/50 hover:text-[#066842] shadow-2xs'
                }`}
                aria-current={currentPage === page ? 'page' : undefined}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              type="button"
              onClick={() => handlePageChange(Math.min(7, currentPage + 1))}
              disabled={currentPage === 7}
              className="inline-flex h-9 sm:h-10 items-center gap-1.5 rounded-lg border border-[#066842]/30 bg-white px-3 sm:px-3.5 text-xs sm:text-sm font-bold text-[#066842] transition-all duration-200 hover:bg-[#066842] hover:text-white hover:border-[#066842] shadow-2xs disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 cursor-pointer"
              aria-label="Next page"
            >
              <span>Next page</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      {/* Interactive Executive Article Reader Modal */}
      {readingArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fade-in"
          onClick={() => setReadingArticle(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 sm:p-10 shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49] rounded-t-2xl" />

            <div className="flex items-start justify-between border-b border-gray-100 pb-4">
              <div>
                <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-[#066842]">
                  {readingArticle.category}
                </span>
                <span className="ml-3 text-xs text-gray-500 font-medium">
                  {readingArticle.date}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setReadingArticle(null)}
                className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                aria-label="Close article modal"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              {readingArticle.title}
            </h2>

            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <span>Published by</span>
              <span className="font-bold text-[#066842]">{readingArticle.publishedBy}</span>
              <span>&bull;</span>
              <span>Official Institutional Release</span>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full max-h-[420px] object-cover object-top"
              />
            </div>

            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              {readingArticle.fullContent ? (
                readingArticle.fullContent.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="leading-8">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="leading-8">{readingArticle.excerpt}</p>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setReadingArticle(null)}
                className="inline-flex items-center gap-2 rounded-full border border-[#066842] bg-[#066842] px-6 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#b31b1b] hover:border-[#b31b1b]"
              >
                <span>&larr; Return to News</span>
              </button>
              <span className="text-xs text-gray-400 font-medium">
                Kwara State Education Trust Fund
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default News
