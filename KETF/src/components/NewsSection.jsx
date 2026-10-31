import { newsArticles } from '../data/newsArticles.js'

const NewsSection = ({ onNavigate }) => {
  const handleOpenNewsPage = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('#news')
    } else {
      window.location.hash = '#news'
    }
  }

  // Show only ONE featured news article on the home page
  const featuredArticles = newsArticles.slice(0, 1)

  return (
    <section id="news-section" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with horizontal divider lines */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <div className="flex-1 h-px bg-[#103C20]/25" />
          <h2
            style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
            className="text-2xl sm:text-3xl font-bold text-[#103C20] whitespace-nowrap tracking-tight"
          >
            News &amp; Media
          </h2>
          <div className="flex-1 h-px bg-[#103C20]/25" />
        </div>

        <div className="mx-auto max-w-5xl space-y-10">
          {featuredArticles.map((article) => (
            <div
              key={article.id}
              className="border border-gray-200 bg-white p-6 sm:p-9 shadow-xs hover:border-[#c8b268]/80 transition-all duration-200 hover:shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Beside Image */}
                <div className="md:col-span-5 w-full">
                  <div
                    onClick={handleOpenNewsPage}
                    className="overflow-hidden border border-gray-200 bg-gray-50 shadow-2xs cursor-pointer group/card rounded-sm"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-auto max-h-[360px] object-cover object-top transition-transform duration-300 group-hover/card:scale-102"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Article Details */}
                <div className="md:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Meta row: Date, Published by [KwaraETF], Categories */}
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-gray-500 mb-3 pb-3 border-b border-gray-100">
                      {article.date && (
                        <>
                          <span className="font-medium text-gray-600">{article.date}</span>
                          <span>&bull;</span>
                        </>
                      )}
                      <span>
                        Published by{' '}
                        <span className="font-bold text-[#066842]">
                          {article.publishedBy}
                        </span>
                      </span>
                      <span>&bull;</span>
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700">
                        {article.category}
                      </span>
                    </div>

                    {/* Clickable Article Title */}
                    <h3
                      style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                      className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug tracking-tight"
                    >
                      <a
                        href="#news"
                        onClick={handleOpenNewsPage}
                        className="hover:text-[#066842] hover:underline cursor-pointer transition-colors"
                      >
                        {article.title}
                      </a>
                    </h3>

                    {/* Excerpt */}
                    <p className="mt-4 text-[15.5px] leading-7 text-gray-700 sm:text-[16px] sm:leading-8">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read More button - Takes user to the News Page */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href="#news"
                      onClick={handleOpenNewsPage}
                      className="inline-flex items-center gap-2 rounded-full border border-[#066842] bg-[#066842] px-6 py-2.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b31b1b] hover:border-[#b31b1b] hover:shadow-md cursor-pointer"
                    >
                      <span>Read more</span>
                      <span>&rarr;</span>
                    </a>

                    <span className="text-xs text-gray-400 font-medium">
                      Latest Featured Dispatch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom All Publications Button */}
          <div className="pt-6 text-center">
            <a
              href="#news"
              onClick={handleOpenNewsPage}
              className="inline-flex items-center gap-2 rounded-full border border-[#066842] px-8 py-3.5 text-sm font-bold text-[#066842] transition-all hover:bg-[#066842] hover:text-white shadow-xs cursor-pointer"
            >
              <span>Explore All News Dispatches &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
