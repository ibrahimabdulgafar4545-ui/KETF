import { Link } from 'react-router-dom'

const Footer = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLink = (target) => (e) => {
    scrollToTop()
    if (onNavigate) {
      if (e && e.preventDefault) e.preventDefault()
      onNavigate(target)
    }
  }

  return (
    <footer className="relative w-full overflow-hidden bg-[#072417] text-white">
      {/* Top Brand Accent Stripe */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#5a3210] via-[#c8b268] to-[#066842]" />

      {/* Subtle background ambient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-[#066842]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-[#c8b268]/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">

          {/* Col 1: Brand & Mandate (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" onClick={handleLink('/')} className="inline-block transition-opacity hover:opacity-90">
              <img
                src="/KETF%20logo.png"
                alt="Kwara State Education Trust Fund"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-sm leading-relaxed text-gray-300 max-w-sm">
              The Kwara State Education Trust Fund (KETF) is committed to mobilizing sustainable resources, driving impactful investments, and ensuring accessible, quality education for every child in Kwara State.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-xs text-[#c8b268]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8b268]" />
              <span>Statutory Body of Kwara State</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4
              style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8b268] mb-5"
            >
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={handleLink('/')}
                  className="text-gray-300 transition-colors duration-200 hover:text-white hover:translate-x-1 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/read-more"
                  onClick={handleLink('/read-more')}
                  className="text-gray-300 transition-colors duration-200 hover:text-white hover:translate-x-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#5-year-development-plan"
                  onClick={handleLink('#5-year-development-plan')}
                  className="text-gray-300 transition-colors duration-200 hover:text-white hover:translate-x-1 inline-block"
                >
                  5-Year Plan
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLink('/contact')}
                  className="text-gray-300 transition-colors duration-200 hover:text-white hover:translate-x-1 inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Initiatives (3 cols) */}
          <div className="lg:col-span-3">
            <h4
              style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8b268] mb-5"
            >
              Strategic Initiatives
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="#5-year-development-plan"
                  onClick={handleLink('#5-year-development-plan')}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-[#c8b268]" />
                  <span>5-Year Development Plan</span>
                </a>
              </li>
              <li>
                <a
                  href="#adopt-a-school"
                  onClick={handleLink('#adopt-a-school')}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-[#c8b268]" />
                  <span>Adopt-a-School Initiative</span>
                </a>
              </li>
              <li>
                <a
                  href="#celebrate-with-kwara-etf"
                  onClick={handleLink('#celebrate-with-kwara-etf')}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-[#c8b268]" />
                  <span>Celebrate With KwaraETF</span>
                </a>
              </li>
              <li>
                <a
                  href="#scholarship-program"
                  onClick={handleLink('#scholarship-program')}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-[#c8b268]" />
                  <span>Scholarship Examination</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Secretariat (3 cols) */}
          <div className="lg:col-span-3">
            <h4
              style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8b268] mb-5"
            >
              Secretariat
            </h4>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 shrink-0 text-[#c8b268] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Kwara State Education Trust Fund, Ilorin, Kwara State, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-[#c8b268]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:info@kwaraetf.gov.ng" className="hover:text-white transition-colors">
                  info@kwaraetf.gov.ng
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-[#c8b268]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                </svg>
                <span>+234 800 000 0000</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Kwara State Education Trust Fund (KETF). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-gray-300 transition-all duration-200 hover:bg-[#c8b268] hover:text-[#072417] hover:border-[#c8b268]"
          >
            <span>Back to top</span>
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
