import { useState } from 'react'
import { newsArticles } from '../data/newsArticles.js'

const socialIconsData = [
  {
    name: 'Facebook',
    getUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: (
      <svg className="h-3.5 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#1877F2]" viewBox="0 0 320 512" aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    name: 'X',
    getUrl: (url, title) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title + ' - Kwara State Education Trust Fund. ' + url)}`,
    icon: (
      <svg className="h-3 w-3 fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#000000]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    getUrl: (url) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`,
    icon: (
      <svg className="h-3 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#0A66C2]" viewBox="0 0 448 512" aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    getUrl: (url) => `https://pinterest.com/pin/find/?url=${encodeURIComponent(url)}`,
    icon: (
      <svg className="h-3.5 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#E60023]" viewBox="0 0 496 512" aria-hidden="true">
        <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.5 6.9-28.1.6-2.5.2-4.9-1.9-7.4-11.3-13.8-18.5-38.9-18.5-62.6 0-59.5 45.4-115.1 121.7-115.1 66.5 0 110.1 45.4 110.1 107.6 0 71.7-36 122.9-83.3 122.9-25.2 0-44.1-20.8-38.1-46.3 7.2-30.5 21.2-63.4 21.2-85.4 0-19.7-10.6-36.1-32.4-36.1-25.7 0-46.4 26.6-46.4 62.2 0 22.7 7.7 38 7.7 38s-26.1 110.5-30.7 130c-5.4 22.9-2.2 56.4-.3 78.5C65.5 431.1 0 351.4 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256z" />
      </svg>
    ),
  },
]

const GenericNewsArticle = ({ articleSlug, onNavigate }) => {
  const [liked, setLiked] = useState(false)

  const article = newsArticles.find((a) => a.slug === articleSlug)

  const handleBackToNews = (e) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('#news')
    } else {
      window.location.hash = '#news'
    }
  }

  if (!article) {
    return (
      <div className="min-h-screen py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Article not found</h2>
        <button
          onClick={handleBackToNews}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#066842] px-4 py-2 text-white"
        >
          &larr; Back to News
        </button>
      </div>
    )
  }

  // Exact reference Share Bar: Share f 𝕏 in P ♡ 0
  const renderShareBar = () => (
    <div className="flex items-center justify-between border-y border-gray-200/80 bg-[#f4f7f9] px-4 py-2.5 sm:px-6">
      {/* Left: Share text + 4 exact social icons in muted grey */}
      <div className="flex items-center gap-3.5">
        <span className="text-[14px] font-medium text-gray-800">
          Share
        </span>
        <div className="flex items-center gap-3">
          {socialIconsData.map((item) => (
            <a
              key={item.name}
              href={item.getUrl(article.shareUrl, article.title)}
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

      {/* Right: Green outline heart + count */}
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
      {/* Top Header Banner */}
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
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-100/80 uppercase">
            <a
              href="#news"
              onClick={handleBackToNews}
              className="transition-colors hover:text-[#f3df9d]"
            >
              News
            </a>
            <span>/</span>
            <span className="text-[#f3df9d] truncate max-w-md">
              {article.subtitle || 'Official Dispatches'}
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="mt-3 text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-3xl">
              {article.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-200/90 bg-white shadow-sm overflow-hidden">
          {/* Top Metadata Header */}
          <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500">
              <span className="font-semibold text-gray-800">
                {article.date}
              </span>
              <span>&bull;</span>
              <div className="flex items-center gap-1">
                <span>Published by</span>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="font-semibold text-[#066842] hover:underline cursor-pointer"
                >
                  {article.publishedBy}
                </a>
              </div>
              <span>&bull;</span>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="rounded-full bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 font-medium text-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer"
              >
                {article.category}
              </a>
            </div>
          </div>

          {/* Top Share Bar */}
          {renderShareBar()}

          {/* Featured Image */}
          {article.image && (
            <div className="px-6 pt-6 sm:px-8 sm:pt-8">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-xs">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto max-h-[500px] object-cover object-center"
                />
              </div>
            </div>
          )}

          {/* Article Text Content */}
          <div className="px-6 py-8 sm:px-10 sm:py-10 space-y-7 text-[#2c3338] text-[15.5px] leading-relaxed">
            {article.sections && article.sections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-5">
                {/* Subhead if present */}
                {section.subhead && (
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 border-l-4 border-[#066842] pl-3.5 leading-snug">
                    {section.subhead}
                  </h3>
                )}

                {/* Section Heading */}
                {section.heading && (
                  <h2 className="pt-4 text-xl sm:text-2xl font-bold text-gray-900 leading-snug tracking-tight">
                    {section.heading}
                  </h2>
                )}

                {/* Embedded Image for this section (e.g., N5) */}
                {section.embeddedImage && (
                  <div className="my-6 overflow-hidden rounded-lg border border-gray-200/90 shadow-sm">
                    <img
                      src={section.embeddedImage.src}
                      alt={section.embeddedImage.alt}
                      className="w-full h-auto object-cover block"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Lead sentence */}
                {section.lead && (
                  <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                    {section.lead}
                  </p>
                )}

                {/* Section Paragraphs */}
                {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}

                {/* Highlight Cards (e.g., N8 Donald First Places) */}
                {section.highlightCards && (
                  <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {section.highlightCards.map((card, cIdx) => (
                      <div
                        key={cIdx}
                        className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-[#f3df9d]/20 p-5 text-center shadow-xs"
                      >
                        <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                          {card.label}
                        </span>
                        <div className="mt-2 text-2xl font-extrabold text-[#066842]">
                          {card.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Quote Block if present */}
                {section.quote && (
                  <blockquote className="my-6 rounded-r-xl border-l-4 border-[#066842] bg-[#f7faf8] p-5 italic text-gray-800 shadow-2xs">
                    <p className="text-[16px] leading-relaxed">
                      {section.quote.text}
                    </p>
                    {section.quote.author && (
                      <cite className="mt-3 block text-xs font-bold text-[#066842] not-italic">
                        &mdash; {section.quote.author}
                      </cite>
                    )}
                  </blockquote>
                )}

                {/* Paragraphs after quote */}
                {section.afterQuoteParagraphs && section.afterQuoteParagraphs.map((para, aqIdx) => (
                  <p key={aqIdx} className="text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}

                {/* Campaign Link Placeholder */}
                {section.campaignLink && (
                  <div className="my-5 rounded-lg border border-emerald-200/70 bg-emerald-50/60 p-4">
                    <span className="text-sm font-semibold text-gray-800 block">
                      {section.campaignLink.label}
                    </span>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="mt-1 inline-block text-sm font-medium text-[#066842] hover:text-[#055737] hover:underline break-all cursor-pointer"
                    >
                      {section.campaignLink.urlText}
                    </a>
                  </div>
                )}

                {/* Closing note */}
                {section.closingNote && (
                  <p className="pt-2 font-bold text-gray-900 italic">
                    {section.closingNote}
                  </p>
                )}

                {/* Author signoff (e.g., N9 Zainab Abdulsalam) */}
                {section.signoff && (
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="font-bold text-gray-900 text-base">
                      {section.signoff.name}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                      {section.signoff.role}
                    </p>
                    <p className="text-sm text-[#066842] font-semibold">
                      {section.signoff.org}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Share Bar */}
          {renderShareBar()}

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between border-t border-gray-100 bg-[#fafcfb] px-6 py-5 sm:px-8">
            <a
              href="#news"
              onClick={handleBackToNews}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#066842] transition-colors hover:text-[#055737] cursor-pointer"
            >
              <span>&larr;</span>
              <span>Back to All News</span>
            </a>

            <span className="text-xs text-gray-400">
              Kwara State Education Trust Fund
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default GenericNewsArticle

