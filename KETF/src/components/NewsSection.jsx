const NewsSection = ({ onNavigate }) => {
  const handleOpenMemorial = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('#news-in-memoriam')
    } else {
      window.location.hash = '#news-in-memoriam'
    }
  }

  return (
    <section id="news" className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading with horizontal divider lines */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <div className="flex-1 h-px bg-[#103C20]/25" />
          <h2
            style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
            className="text-2xl sm:text-3xl font-bold text-[#103C20] whitespace-nowrap tracking-tight"
          >
            News
          </h2>
          <div className="flex-1 h-px bg-[#103C20]/25" />
        </div>

        {/* News Article Box */}
        <div className="mx-auto max-w-4xl border border-gray-200 bg-white p-6 sm:p-9 shadow-xs hover:border-[#c8b268]/80 transition-all duration-200 hover:shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Portrait Image N1.png beside the text */}
            <div className="md:col-span-5 w-full">
              <div
                onClick={handleOpenMemorial}
                className="overflow-hidden border border-gray-200 bg-gray-50 shadow-2xs cursor-pointer group/card"
              >
                <img
                  src="/N1.png"
                  alt="Moses Jimoh Adebayo Oyelere"
                  className="w-full h-auto max-h-[360px] md:max-h-none object-cover object-top transition-transform duration-300 group-hover/card:scale-102"
                />
              </div>
            </div>

            {/* Right: Article Details */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                {/* Meta row: Date, Published by [KwaraETF], Categories */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-gray-500 mb-3 pb-3 border-b border-gray-100">
                  <span className="font-medium text-gray-600">October 26, 2026</span>
                  <span>&bull;</span>
                  <span>
                    Published by{' '}
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="font-bold text-[#066842] hover:text-[#b31b1b] hover:underline cursor-pointer transition-colors"
                    >
                      KwaraETF
                    </a>
                  </span>
                  <span>&bull;</span>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-700">
                    Categories
                  </span>
                </div>

                {/* Clickable Article Title */}
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                  className="text-lg sm:text-xl font-bold uppercase tracking-tight text-gray-900 leading-snug mb-3"
                >
                  <a
                    href="#news-in-memoriam"
                    onClick={handleOpenMemorial}
                    className="hover:text-[#066842] hover:underline cursor-pointer transition-colors"
                  >
                    IN MEMORIAM: Moses Jimoh Adebayo Oyelere
                  </a>
                </h3>

                {/* Excerpt Body */}
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-700">
                  A Life of Service, A Legacy in Education 1965–2026 Some legacies are written in the institutions we build. Others live on in the people we teach, [&hellip;]
                </p>
              </div>

              {/* Clickable Read More button */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                <a
                  href="#news-in-memoriam"
                  onClick={handleOpenMemorial}
                  className="inline-flex items-center gap-2 rounded-full border border-[#066842] bg-[#066842] hover:bg-[#b31b1b] hover:border-[#b31b1b] text-white text-xs sm:text-sm font-semibold px-7 py-2.5 transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
                >
                  <span>Read more</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default NewsSection
