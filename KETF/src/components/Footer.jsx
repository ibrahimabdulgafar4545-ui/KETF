import { Link } from 'react-router-dom'

const socialLinksCol1 = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/KwaraETF',
    color: '#1877F2',
    icon: (
      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/KwaraETF?t=439M0lxNN-RWNo65oiDSpA&s=09',
    color: '#00acee',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/kwaraetf?igsh=bXB5dnA3b2lxY3I1',
    color: '#E4405F',
    icon: (
      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/kwara-state-education-trust-fund/',
    color: '#0A66C2',
    icon: (
      <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
]


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
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Col 1: Brand & Mandate (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" onClick={handleLink('/')} className="inline-block transition-opacity hover:opacity-90">
              <img
                src="/KETF%20logo.png"
                alt="Kwara State Education Trust Fund"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>

            <p className="text-[13.5px] sm:text-sm leading-relaxed text-gray-200 max-w-sm">
              Together, we can build a Kwara where every dream is within reach, and every individual has the chance to thrive. Explore our initiatives, join our community, and be a part of the change. Together, let&apos;s build the future of Kwara.
            </p>

            {/* Social Media Links with Original Brand Colors */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinksCol1.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  style={{ color: item.color }}
                  className="transition-transform duration-200 hover:scale-125 hover:opacity-85"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: General Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4
              style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
              className="text-base sm:text-lg font-bold text-white mb-5 tracking-tight"
            >
              General Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={handleLink('/')}
                  className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#c8b268]"
                >
                  <span className="text-gray-400 text-xs font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/read-more"
                  onClick={handleLink('/read-more')}
                  className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#c8b268]"
                >
                  <span className="text-gray-400 text-xs font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLink('/contact')}
                  className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#c8b268]"
                >
                  <span className="text-gray-400 text-xs font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <a
                  href="#news"
                  onClick={handleLink('#news')}
                  className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#c8b268]"
                >
                  <span className="text-gray-400 text-xs font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
                  <span>News</span>
                </a>
              </li>
              <li>
                <a
                  href="#jobs"
                  onClick={handleLink('#jobs')}
                  className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#c8b268]"
                >
                  <span className="text-gray-400 text-xs font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
                  <span>Jobs</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4
              style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
              className="text-base sm:text-lg font-bold text-white mb-5 tracking-tight"
            >
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#the-law"
                  onClick={handleLink('#the-law')}
                  className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#c8b268]"
                >
                  <span className="text-gray-400 text-xs font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
                  <span>The Law</span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={handleLink('#projects')}
                  className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#c8b268]"
                >
                  <span className="text-gray-400 text-xs font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#donation"
                  onClick={handleLink('#donation')}
                  className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#c8b268]"
                >
                  <span className="text-gray-400 text-xs font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
                  <span>Donations</span>
                </a>
              </li>
              <li>
                <a
                  href="#quarterly-reports"
                  onClick={handleLink('#quarterly-reports')}
                  className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#c8b268]"
                >
                  <span className="text-gray-400 text-xs font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
                  <span>Reports</span>
                </a>
              </li>
              <li>
                <a
                  href="#financials"
                  onClick={handleLink('#financials')}
                  className="group flex items-center gap-2 text-gray-200 transition-colors duration-200 hover:text-[#c8b268]"
                >
                  <span className="text-gray-400 text-xs font-bold transition-transform group-hover:translate-x-0.5">&gt;</span>
                  <span>Financials</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3">
            <h4
              style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
              className="text-base sm:text-lg font-bold text-white mb-5 tracking-tight"
            >
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-gray-200">
              <p className="leading-relaxed text-gray-200">
                10, Ahmadu Bello Way,<br />
                Ilorin,<br />
                Kwara State.
              </p>

              <div className="flex items-center gap-2.5 pt-1">
                <svg className="h-4 w-4 shrink-0 text-[#c8b268]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a
                  href="mailto:education@kwaraetf.org"
                  className="hover:text-[#c8b268] transition-colors"
                >
                  education@kwaraetf.org
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0 text-[#c8b268]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                </svg>
                <a
                  href="tel:07055569383"
                  className="hover:text-[#c8b268] transition-colors"
                >
                  07055569383
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-300">
          <p className="text-center sm:text-left">
            &copy; 2026 Kwara State Education Trust Fund. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-gray-300 transition-all duration-200 hover:bg-[#c8b268] hover:text-[#072417] hover:border-[#c8b268] cursor-pointer"
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
