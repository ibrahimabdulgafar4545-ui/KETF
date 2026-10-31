import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    id: 1,
    title: '5-Year Development Plan',
    href: '#5-year-development-plan',
    image: '/initiative-5year.jpg',
    description:
      'At the Kwara State Education Trust Fund, our 5-Year Development Plan represents a clear and ambitious vision for the future of education in Kwara State. This plan outlines our strategic priorities from 2025 to 2029, focusing on improving school infrastructure, enhancing the quality of teaching and learning, expanding access to education, and fostering innovation across the education sector. We are committed to working with communities, partners, and stakeholders to deliver long-lasting, inclusive, and measurable impact. With this plan, we are building a stronger foundation for students, educators, and the entire Kwara education system — ensuring every child has the opportunity to thrive and succeed.',
  },
  {
    id: 2,
    title: 'Adopt-a-School',
    href: '#adopt-a-school',
    image: '/initiative-adopt-school.jpg',
    description:
      'Adopt-a-School: Transforming Education, One School at a Time. Over 70% of public schools in Kwara need urgent repairs, and fewer than 10% have access to digital tools. The Adopt-a-School initiative empowers individuals and organizations to directly upgrade public schools and improve learning outcomes. Adoption Packages: Bronze – Basic renovations (classrooms, toilets, furniture). Silver – ICT lab, e-learning tools, internet access. Gold – Full transformation (infrastructure, solar, playground, ongoing teacher support). Benefits: Branded installations, media recognition, and ETF impact features. Get Involved: Contact ETF on programs@kwara.fund, choose a school, sign an MoU, and start transforming lives. Let\'s build the future of education — one school at a time.',
  },
  {
    id: 3,
    title: 'Celebrate With KwaraETF',
    href: '#celebrate-with-kwara-etf',
    image: '/initiative-celebrate.jpg',
    description:
      'The #CelebrateWithKwaraETF initiative — a platform that enables individuals to commemorate personal milestones by supporting access to quality education for indigent students across Kwara State.',
  },
  {
    id: 4,
    title: 'KwaraETF Scholarship Program',
    href: '#scholarship-program',
    image: '/initiative-scholarship.jpg',
    description:
      'The KwaraETF Scholarship Examination is conducted to identify top-performing pupils for sponsorship. The scholarship program follows a structured selection process, including a statewide mock exam for top-performing pupils across all 16 Local Government Areas.',
  },
]

const INTERVAL = 6000

const InitiativesSection = ({ onNavigate }) => {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next')
  const [displayed, setDisplayed] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback(
    (index, dir = 'next') => {
      if (animating || index === current) return
      setDirection(dir)
      setAnimating(true)
      setTimeout(() => {
        setDisplayed(index)
        setCurrent(index)
        setAnimating(false)
      }, 300)
    },
    [animating, current]
  )

  const handlePrev = useCallback(() => {
    const prev = (current - 1 + slides.length) % slides.length
    goTo(prev, 'prev')
  }, [current, goTo])

  const handleNext = useCallback(() => {
    const next = (current + 1) % slides.length
    goTo(next, 'next')
  }, [current, goTo])

  // Auto-advance with hover pause
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      handleNext()
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [handleNext, isPaused])

  const handleReadMore = (e, href) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(href)
    } else {
      window.location.hash = href
    }
  }

  const slide = slides[displayed]

  const outClass = animating
    ? direction === 'next'
      ? '-translate-x-4 opacity-0'
      : 'translate-x-4 opacity-0'
    : 'translate-x-0 opacity-100'

  return (
    <section className="w-full bg-[#F4F7FC] py-14 sm:py-20 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading with horizontal lines */}
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-14">
          <div className="flex-1 h-px bg-[#103C20]/25" />
          <h2
            style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
            className="text-2xl sm:text-3xl font-bold text-[#103C20] whitespace-nowrap"
          >
            Initiatives
          </h2>
          <div className="flex-1 h-px bg-[#103C20]/25" />
        </div>

        {/* Slide Box with Arrows */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="bg-white p-5 sm:p-10 lg:p-12 shadow-sm border border-gray-100 rounded-xl sm:rounded-none">
            <div
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center transition-all duration-300 ease-in-out ${outClass}`}
            >
              {/* Left: Image */}
              <div className="md:col-span-5 w-full overflow-hidden rounded-lg sm:rounded-none">
                <a
                  href={slide.href}
                  onClick={(e) => handleReadMore(e, slide.href)}
                  className="cursor-pointer block"
                >
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-56 sm:h-72 md:h-80 object-cover hover:scale-101 transition-transform duration-300"
                  />
                </a>
              </div>

              {/* Right: Content */}
              <div className="md:col-span-7 flex flex-col justify-center">
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                  className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                >
                  <a
                    href={slide.href}
                    onClick={(e) => handleReadMore(e, slide.href)}
                    className="hover:text-[#066842] transition-colors cursor-pointer"
                  >
                    {slide.title}
                  </a>
                </h3>

                <p className="text-sm sm:text-[15px] leading-relaxed text-gray-700 mb-6 sm:mb-8 line-clamp-6 sm:line-clamp-none">
                  {slide.description}
                </p>

                {/* Centered Read More button */}
                <div className="flex justify-center">
                  <a
                    href={slide.href}
                    onClick={(e) => handleReadMore(e, slide.href)}
                    className="inline-block bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs sm:text-sm font-medium px-8 py-2.5 transition-colors duration-200 rounded-md sm:rounded-none shadow-xs cursor-pointer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="hidden sm:flex absolute -left-5 sm:-left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[#103C20] shadow-md border border-gray-200 transition-all hover:bg-[#066842] hover:text-white hover:border-[#066842] active:scale-95 cursor-pointer"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Desktop/Tablet Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="hidden sm:flex absolute -right-5 sm:-right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-[#103C20] shadow-md border border-gray-200 transition-all hover:bg-[#066842] hover:text-white hover:border-[#066842] active:scale-95 cursor-pointer"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile & Desktop Navigation Row: Arrows on Mobile + Centered Dots */}
        <div className="flex items-center justify-between sm:justify-center gap-3 mt-6 sm:mt-8 px-2 sm:px-0">
          {/* Mobile Prev Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="sm:hidden flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#103C20] shadow-xs border border-gray-200 active:bg-gray-100 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? 'w-6 bg-[#0066cc]'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Mobile Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="sm:hidden flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#103C20] shadow-xs border border-gray-200 active:bg-gray-100 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}

export default InitiativesSection
