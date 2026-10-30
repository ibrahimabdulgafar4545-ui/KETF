import { Link } from 'react-router-dom'

const BelieveSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-28 lg:py-32">
      {/* Subtle background ambient glow */}
      <div
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#066842]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 xl:gap-20">

          {/* Left: Editorial Content (7 cols) */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Category Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#066842]/8 border border-[#066842]/20 px-4 py-1.5 mb-6 self-start">
              <span className="h-1.5 w-1.5 rounded-full bg-[#066842]" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#066842]">
                Our Commitment
              </span>
            </div>

            {/* Main Headline */}
            <h2
              style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
              className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#103C20] leading-[1.18] uppercase"
            >
              We Believe in the{' '}
              <span className="text-[#066842] relative inline-block">
                Transformative Power
              </span>{' '}
              of Education
            </h2>

            {/* Gold Divider Accent */}
            <div className="mt-5 mb-7 flex items-center gap-3">
              <div className="h-0.5 w-14 bg-[#c8b268]" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#c8b268]" />
              <div className="h-px w-20 bg-gray-200" />
            </div>

            {/* Body Copy */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-normal">
                Through our commitment to excellence and inclusivity, we strive to create a brighter tomorrow for every individual in Kwara. Join us as we embark on a journey to shape the future through education, innovation, and sustainable development.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600 font-normal">
                Together, we can build a Kwara where every dream is within reach, and every individual has the chance to thrive. Explore our initiatives, join our community, and be a part of the change. Together, let's build the future of Kwara.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-2">
              <Link
                to="/read-more"
                className="group inline-flex items-center gap-3 rounded-md border border-[#6a8752] bg-[#066842] px-8 py-3.5 text-[14.5px] font-semibold tracking-wide text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#055737] hover:shadow-lg hover:shadow-[#066842]/20 active:translate-y-0"
              >
                <span>Read More</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: Architectural Image Frame (5 cols) */}
          <div className="relative lg:col-span-5">
            {/* Background offset card/frame in brand gold & deep green */}
            <div
              className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-[#066842]/10 via-[#c8b268]/10 to-transparent -rotate-1 hidden sm:block"
              aria-hidden="true"
            />
            
            {/* Corner geometric border accent */}
            <div
              className="absolute -top-3 -right-3 h-16 w-16 border-t-2 border-r-2 border-[#c8b268] z-20 hidden sm:block"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-3 -left-3 h-16 w-16 border-b-2 border-l-2 border-[#066842] z-20 hidden sm:block"
              aria-hidden="true"
            />

            {/* Main Image Container */}
            <div className="relative z-10 overflow-hidden rounded-xl border border-gray-200/80 bg-white p-2 sm:p-2.5 shadow-xl shadow-gray-200/60">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="/Hero-img1.jpg"
                  alt="Students of Kwara State"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>

              {/* Bottom Subtle Brand Accent Line */}
              <div className="mt-2.5 h-1 w-full bg-gradient-to-r from-[#5a3210] via-[#c8b268] to-[#066842] rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BelieveSection
