import { useState, useRef } from 'react'
import { newsArticles } from '../data/newsArticles.js'
import { newsArticlesPage2 } from '../data/newsArticlesPage2.js'
import { newsArticlesPage3 } from '../data/newsArticlesPage3.js'
import { newsArticlesPage4 } from '../data/newsArticlesPage4.js'
import { newsArticlesPage6 } from '../data/newsArticlesPage6.js'
import { newsArticlesPage7 } from '../data/newsArticlesPage7.js'

// Additional Dispatches for pagination
const allDispatches = {
  1: newsArticles,
  2: newsArticlesPage2,
  3: newsArticlesPage3,
  4: newsArticlesPage4,
  5: [],
  6: newsArticlesPage6,
  7: newsArticlesPage7,
}

const News = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [readingArticle, setReadingArticle] = useState(null)
  const listTopRef = useRef(null)

  const currentArticles = allDispatches[currentPage] || []

  const handlePageChange = (page) => {
    setCurrentPage(page)
    if (listTopRef.current) {
      listTopRef.current.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 400, behavior: 'smooth' })
    }
  }

  const handleOpenArticle = (e, article) => {
    e.preventDefault()
    if (article.slug) {
      if (onNavigate) {
        onNavigate(article.slug)
      } else {
        window.location.hash = article.slug
      }
    } else if (article.targetRoute) {
      if (onNavigate) {
        onNavigate(article.targetRoute)
      } else {
        window.location.hash = article.targetRoute
      }
    } else {
      setReadingArticle(article)
    }
  }

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

      <div ref={listTopRef} className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* News Feed Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Latest Publications
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Stay informed with official dispatches, educational reforms, and stories from KwaraETF.
            </p>
          </div>
          <span className="self-start sm:self-auto rounded-full bg-[#fdf8eb] border border-[#c8b268]/50 px-3.5 py-1 text-xs font-bold text-[#8c6d23]">
            Page {currentPage} of 7
          </span>
        </div>

        {/* Current Page Articles */}
        {currentArticles.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-200 bg-white p-12 text-center shadow-2xs">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-[#066842]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-800">
              No publications on Page {currentPage}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Archival dispatches for this section will appear here once published.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {currentArticles.map((article, idx) => (
              <article
                key={article.id || idx}
                className="group border border-gray-200 bg-white shadow-xs transition-all duration-200 hover:border-[#c8b268]/80 hover:shadow-md overflow-hidden"
              >
                {/* Subtle top gradient bar */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${
                    idx % 2 === 0
                      ? 'from-[#066842] via-[#c8b268] to-[#084d49]'
                      : 'from-[#c8b268] via-[#066842] to-[#c8b268]'
                  }`}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-9 lg:p-10 items-start">
                  {/* Beside Image */}
                  <div className="md:col-span-5 w-full">
                    <div
                      onClick={(e) => handleOpenArticle(e, article)}
                      className="relative overflow-hidden border border-gray-200 bg-gray-50 shadow-2xs cursor-pointer group/img rounded-sm"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-auto max-h-[360px] object-cover object-top transition-transform duration-300 group-hover/img:scale-102"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="md:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Date & Published By & Categories Bar */}
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-gray-500 pb-3 border-b border-gray-100">
                        {article.date && (
                          <>
                            <div className="flex items-center gap-1.5 font-medium text-gray-600">
                              <svg
                                className="h-3.5 w-3.5 text-[#066842]"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span>{article.date}</span>
                            </div>
                            <span>&bull;</span>
                          </>
                        )}

                        <div className="flex items-center gap-1">
                          <span>Published by</span>
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="font-bold text-[#066842] hover:text-[#b31b1b] hover:underline cursor-pointer transition-colors"
                          >
                            {article.publishedBy || 'KwaraETF'}
                          </a>
                        </div>

                        <span>&bull;</span>

                        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-700">
                          {article.category || 'Categories'}
                        </span>
                      </div>

                      {/* Article Title */}
                      <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 leading-snug">
                        <a
                          href={article.slug || '#'}
                          onClick={(e) => handleOpenArticle(e, article)}
                          className="hover:text-[#066842] hover:underline cursor-pointer transition-colors"
                        >
                          {article.title}
                        </a>
                      </h3>

                      {/* Body Excerpt */}
                      <p className="mt-4 text-[15.5px] leading-7 text-gray-700 sm:text-[16px] sm:leading-8">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                      <a
                        href={article.slug || '#'}
                        onClick={(e) => handleOpenArticle(e, article)}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#066842] bg-[#066842] px-6 py-2.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b31b1b] hover:border-[#b31b1b] hover:shadow-md cursor-pointer"
                      >
                        <span>Read more</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination Bar: Previous page, 1, 2, 3, 4, 5, 6, 7, Next page */}
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
              className="inline-flex h-9 sm:h-10 items-center gap-1.5 rounded-lg border border-[#066842]/30 bg-white px-3 sm:px-3.5 text-xs sm:text-sm font-bold text-[#066842] transition-all duration-200 hover:bg-[#066842] hover:text-white hover:border-[#066842] shadow-2xs disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 cursor-pointer"
              aria-label="Previous page"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous page</span>
            </button>

            {/* Page Buttons: 1, 2, 3, 4, 5, 6, 7 */}
            {[1, 2, 3, 4, 5, 6, 7].map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 cursor-pointer ${
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

      {/* Interactive Article Reader Modal for Pages 2 to 7 */}
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
                className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer"
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
                className="inline-flex items-center gap-2 rounded-full border border-[#066842] bg-[#066842] px-6 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#b31b1b] hover:border-[#b31b1b] cursor-pointer"
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
