const VisionSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] py-14 sm:py-24 lg:py-32">
      {/* Subtle decorative background ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] sm:h-[500px] w-[500px] sm:w-[750px] rounded-full bg-[#066842]/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Architectural Statement Card */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-14 lg:p-20 shadow-[0_20px_60px_-15px_rgba(6,104,66,0.08)]">
          {/* Top Tri-Color Brand Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#5a3210] via-[#c8b268] to-[#066842]" />

          {/* Large decorative quotation watermark in background */}
          <div
            className="pointer-events-none absolute -top-4 -left-4 select-none text-7xl sm:text-9xl font-serif text-[#066842]/5 leading-none"
            aria-hidden="true"
          >
            “
          </div>
          <div
            className="pointer-events-none absolute -bottom-10 -right-4 select-none text-7xl sm:text-9xl font-serif text-[#066842]/5 leading-none"
            aria-hidden="true"
          >
            ”
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#066842]/8 border border-[#066842]/20 px-3.5 py-1 sm:px-4 sm:py-1.5 mb-5 sm:mb-8 transition-colors duration-200">
              <span className="h-1.5 w-1.5 rounded-full bg-[#066842]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#066842]">
                Our Vision
              </span>
            </div>

            {/* Lead-in phrase */}
            <p className="text-sm sm:text-lg md:text-xl font-medium text-[#C43413] tracking-wide">
              Our vision is of a Kwara where the beacon of
            </p>

            {/* Main Statement Title */}
            <h2
              style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
              className="mt-2.5 sm:mt-4 text-2xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tight text-[#103C20] leading-[1.15] uppercase"
            >
              ACCESSIBLE AND QUALITY EDUCATION
            </h2>

            {/* Architectural Gold Divider */}
            <div className="my-5 sm:my-8 flex items-center justify-center gap-3">
              <div className="h-px w-10 sm:w-16 bg-[#c8b268]" />
              <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rotate-45 bg-[#c8b268]" />
              <div className="h-px w-10 sm:w-16 bg-[#c8b268]" />
            </div>

            {/* Supporting impact statement */}
            <p className="max-w-2xl text-sm sm:text-base md:text-[19px] font-normal text-[#58595A] leading-relaxed">
              illuminates the way forward for all, empowering individuals to realize their fullest potential and contribute meaningfully to a thriving society.
            </p>
          </div>

          {/* Subtle bottom corner accent notches */}
          <div className="pointer-events-none absolute bottom-0 left-0 h-3 sm:h-4 w-3 sm:w-4 border-b-2 border-l-2 border-[#c8b268]/50" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-3 sm:h-4 w-3 sm:w-4 border-b-2 border-r-2 border-[#c8b268]/50" />
        </div>
      </div>
    </section>
  )
}

export default VisionSection
