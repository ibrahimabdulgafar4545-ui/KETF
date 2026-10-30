import { Link } from 'react-router-dom'

const NewsSection = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
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
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left: Portrait Image */}
            <div className="md:col-span-4 w-full">
              <div className="overflow-hidden shadow-xs">
                <img
                  src="/N1.jpeg"
                  alt="Moses Jimoh Adebayo Oyelere"
                  className="w-full h-auto max-h-[300px] md:max-h-none object-cover"
                />
              </div>
            </div>

            {/* Right: Article Details */}
            <div className="md:col-span-8 flex flex-col justify-start">
              
              {/* Title */}
              <h3
                style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                className="text-base sm:text-lg font-bold uppercase tracking-tight text-gray-800 leading-snug mb-3"
              >
                IN MEMORIAM: MOSES JIMOH ADEBAYO OYELERE
              </h3>

              {/* Divider line under title */}
              <div className="w-full h-px bg-gray-200 mb-3" />

              {/* Date with Clock Icon */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-4">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 15" />
                </svg>
                <span>October 26, 2026</span>
              </div>

              {/* Excerpt Body */}
              <p className="text-sm sm:text-[15px] leading-relaxed text-gray-700">
                A Life of Service, A Legacy in Education 1965–2026 Some legacies are written in the institutions we build. Others live on in the people we teach, [...]
              </p>
            </div>
          </div>

          {/* Centered Read More Button */}
          <div className="flex justify-center mt-12 sm:mt-14">
            <Link
              to="/read-more"
              className="inline-block bg-[#a27e46] hover:bg-[#8e6d38] text-white text-xs sm:text-sm font-medium px-8 py-2.5 transition-colors duration-200 shadow-xs hover:shadow-md"
            >
              Read More
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default NewsSection

