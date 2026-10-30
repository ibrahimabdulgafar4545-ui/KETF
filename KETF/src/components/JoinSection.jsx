import { Link } from 'react-router-dom'

const JoinSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#066842] py-20 sm:py-28 lg:py-32">
      {/* Decorative top accent stripe matching navbar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#5a3210] via-[#c8b268] to-[#084d49]" />

      {/* Background subtle pattern - large faint rings */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full border border-white/5" />
        <div className="absolute -left-16 -top-16 h-[350px] w-[350px] rounded-full border border-white/5" />
        <div className="absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full border border-white/5" />
        <div className="absolute -right-16 -bottom-16 h-[350px] w-[350px] rounded-full border border-white/5" />
        {/* Gold accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#c8b268]/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Gold accent dash */}
        <div className="mx-auto mb-6 h-px w-16 bg-[#c8b268]" />

        {/* Eyebrow label */}
        <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#c8b268]">
          Be Part of the Change
        </p>

        {/* Main statement */}
        <p
          style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
          className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-white/90"
        >
          The journey towards our vision begins with each of us. Whether you are a student, parent, educator, policymaker, or concerned citizen, your support and involvement are crucial in shaping the future of education in Kwara State.
        </p>

        {/* Gold accent dash */}
        <div className="mx-auto mt-6 mb-10 h-px w-16 bg-[#c8b268]" />

        {/* Contact Us Button */}
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 rounded-full border border-[#c8b268]/60 bg-transparent px-8 py-3.5 text-[14.5px] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#c8b268] hover:border-[#c8b268] hover:text-[#103C20] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0"
        >
          <span>Contact Us</span>
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Bottom accent stripe */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#084d49] via-[#c8b268] to-[#5a3210]" />
    </section>
  )
}

export default JoinSection
