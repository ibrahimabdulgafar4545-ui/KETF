const News = ({ onNavigate }) => {
  const handleOpenArticle = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('#news-in-memoriam')
    } else {
      window.location.hash = '#news-in-memoriam'
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

      <div className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* News Feed Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Latest Publications
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Stay informed with official dispatches and tributes from KwaraETF.
            </p>
          </div>
          <span className="self-start sm:self-auto rounded-full bg-[#fdf8eb] border border-[#c8b268]/50 px-3.5 py-1 text-xs font-bold text-[#8c6d23]">
            Recent Updates
          </span>
        </div>

        {/* Featured News Article Card */}
        <article className="group border border-gray-200 bg-white shadow-xs transition-all duration-200 hover:border-[#c8b268]/80 hover:shadow-md overflow-hidden">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49]" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-9 lg:p-10 items-start">
            {/* Beside Image: N1.png */}
            <div className="md:col-span-5 w-full">
              <div
                onClick={handleOpenArticle}
                className="relative overflow-hidden border border-gray-200 bg-gray-50 shadow-2xs cursor-pointer group/img"
              >
                <img
                  src="/N1.png"
                  alt="Moses Jimoh Adebayo Oyelere"
                  className="w-full h-auto max-h-[380px] object-cover object-top transition-transform duration-300 group-hover/img:scale-102"
                />
              </div>
            </div>

            {/* Content Details */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                {/* Date & Published By & Categories Bar */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 pb-3 border-b border-gray-100">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 font-medium text-gray-600">
                    <svg className="h-4 w-4 text-[#066842]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>October 26, 2026</span>
                  </div>

                  <span>&bull;</span>

                  {/* Published by [KwaraETF] (Clickable with placeholder) */}
                  <div className="flex items-center gap-1">
                    <span>Published by</span>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="font-bold text-[#066842] hover:text-[#b31b1b] hover:underline cursor-pointer transition-colors"
                    >
                      KwaraETF
                    </a>
                  </div>

                  <span>&bull;</span>

                  {/* Categories */}
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-700">
                    Categories
                  </span>
                </div>

                {/* Article Title (Clickable, routes to In Memoriam page) */}
                <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 leading-snug">
                  <a
                    href="#news-in-memoriam"
                    onClick={handleOpenArticle}
                    className="hover:text-[#066842] hover:underline cursor-pointer transition-colors"
                  >
                    IN MEMORIAM: Moses Jimoh Adebayo Oyelere
                  </a>
                </h3>

                {/* Body Excerpt */}
                <p className="mt-4 text-[16px] leading-8 text-gray-700 sm:text-[17px] sm:leading-[1.95]">
                  A Life of Service, A Legacy in Education 1965–2026 Some legacies are written in the institutions we build. Others live on in the people we teach, [&hellip;]
                </p>
              </div>

              {/* Read More Button (Clickable, routes to In Memoriam page) */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <a
                  href="#news-in-memoriam"
                  onClick={handleOpenArticle}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#066842] bg-[#066842] px-7 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b31b1b] hover:border-[#b31b1b] hover:shadow-md cursor-pointer"
                >
                  <span>Read more</span>
                  <span>&rarr;</span>
                </a>

                <span className="text-xs text-gray-400 font-medium">
                  Official In Memoriam Dispatch
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default News
