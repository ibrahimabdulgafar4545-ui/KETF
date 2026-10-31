import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image Container with balanced overlay so the photo is clearly visible */}
      <div className="absolute inset-0 z-0">
        <img
          src="/KETF-hero-img.png"
          alt="Kwara State Education Trust Fund"
          className="h-full w-full object-cover object-center"
        />
        {/* Balanced overlay - keeps the image vivid while ensuring text readability */}
        <div className="absolute inset-0 bg-black/66" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 mt-27 text-center flex flex-col items-center">
        {/* Main Heading with clean Plus Jakarta Sans typography */}
        <h1
          style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
          className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-[1.16] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          Building the Future of Kwara Through Sustainable Investments in Quality Education
        </h1>

        {/* Plain text tagline with pointing arrow */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2">
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200 drop-shadow-sm">
            Join us in building the future
          </p>
          <svg
            className="h-5 w-5 text-gray-300 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>

        {/* Read More Button - navigates to the new page */}
        <div className="mt-3 sm:mt-4">
          <Link
            to="/read-more"
            className="inline-flex items-center justify-center rounded-xl border-[#6a8752] bg-[#066842] px-6 py-2.5 sm:px-7 sm:py-3 text-[14px] sm:text-[15px] font-medium tracking-wide text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#055737] hover:shadow-md active:translate-y-0"
          >
            <span>Read More</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
