import { useState, useRef, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  {
    label: 'About',
    href: '#about',
    dropdown: [
      { label: 'The Law', href: '#the-law' },
      { label: 'Board Members', href: '#board-members' },
      { label: 'Secretariat', href: '#secretariat' },
      { label: 'Prospectus', href: '#prospectus' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    label: 'Initiatives',
    href: '#initiatives',
    dropdown: [
      { label: '5-Year Development Plan', href: '#5-year-development-plan' },
      { label: 'Adopt A School', href: '#adopt-a-school' },
      { label: 'Celebrate With Kwara ETF', href: '#celebrate-with-kwara-etf' },
      { label: 'KwaraETF Scholarship Program', href: '#scholarship-program' },
    ],
  },
  {
    label: 'Transparency & Gov.',
    href: '#transparency',
    dropdown: [
      { label: 'Quarterly Reports', href: '#quarterly-reports' },
      { label: 'Financials', href: '#financials' },
      { label: 'Audit Reports', href: '#audit-reports' },
      { label: 'Impact Reports', href: '#impact-reports' },
      { label: 'Administrative Fee', href: '#administrative-fee' },
      { label: 'Policies and Guidelines', href: '#policies-and-guidelines' },
    ],
  },
  {
    label: 'Resources',
    href: '#resources',
    dropdown: [
<<<<<<< Updated upstream
      { label: 'Projects', href: '#projects' },
      { label: 'News', href: '#news' },
      { label: 'Jobs', href: '#jobs' },
      { label: 'Shop', href: '#shop' },
=======
      {
        label: 'Projects',
        href: '#projects',
        desc: 'Completed & ongoing infrastructure interventions',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        ),
      },
      {
        label: 'News',
        href: '#news',
        desc: 'Official press releases, stories & event highlights',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        ),
      },
      {
        label: 'Jobs',
        href: '#jobs',
        desc: 'Finance Manager (Ilorin) & career openings',
        featuredJob: {
          title: 'Finance Manager',
          location: 'Ilorin',
          href: '#job-finance-manager',
        },
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        ),
      },
      {
        label: 'Shop',
        href: '#shop',
        desc: 'Official branded publications & support items',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        ),
      },
>>>>>>> Stashed changes
    ],
  },
]

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null)
<<<<<<< Updated upstream
  const navRef = useRef(null)
=======
  const headerRef = useRef(null)

  const activeMegaItem = navLinks.find(
    (item) => item.dropdown && item.label === openDropdown
  )

  const handleLinkClick = (e, href) => {
    setOpenDropdown(null)
    setMobileOpenDropdown(null)
    setMobileMenuOpen(false)
    if (onNavigate) {
      if (e && e.preventDefault) {
        e.preventDefault()
      }
      onNavigate(href)
    }
  }
>>>>>>> Stashed changes

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="relative z-50 border-b border-gray-200 bg-white shadow-xs">
      {/* Top Accent Gradient Strip */}
      <div className="h-4 w-full bg-gradient-to-r from-[#5a3210] via-[#136f2d] to-[#084d49]" />

      <nav
        ref={navRef}
        aria-label="Main navigation"
        className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-8"
      >
        {/* Left: Logo */}
        <div className="flex items-center justify-start">
          <a
            href="#home"
            aria-label="Kwara State Education Trust Fund home"
            className="shrink-0 py-3"
          >
            <img
              src="/KETF%20logo.png"
              alt="Kwara State Education Trust Fund"
              className="h-12 w-auto sm:h-14"
            />
          </a>
        </div>

        {/* Center: 5 Main Navigation Links */}
        <ul className="hidden lg:flex lg:items-stretch lg:justify-center">
          {navLinks.map((item, index) => {
            const hasDropdown = Boolean(item.dropdown)
            const isOpen = openDropdown === item.label

            return (
              <li
                key={item.label}
                className="relative flex items-center"
                onMouseEnter={() => hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
              >
                {/* Subtle vertical divider between items */}
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="h-5 w-px bg-gray-100"
                  />
                )}

                {hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown((prev) =>
                          prev === item.label ? null : item.label
                        )
                      }
                      aria-expanded={isOpen}
                      className={`cursor-pointer px-5 py-6 text-[14.5px] font-semibold transition-colors ${
                        isOpen
                          ? 'text-[#0a7a3e]'
                          : 'text-[#b91c1c] hover:text-[#0a7a3e]'
                      }`}
                    >
                      {item.label}
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 w-52 bg-[#f3f3f3] shadow-md transition-all duration-150 ${
                        isOpen
                          ? 'visible translate-y-0 opacity-100'
                          : 'invisible -translate-y-1 opacity-0'
                      }`}
<<<<<<< Updated upstream
                    >
                      <ul className="divide-y divide-gray-200/90">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <a
                              href={subItem.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-6 py-4 text-[14.5px] leading-relaxed font-normal text-gray-600 transition-colors hover:bg-[#e5e5e5] hover:text-[#b2964e]"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
=======
                    />
                  </button>
                ) : item.href === '/' ? (
                  <Link to="/" onClick={(e) => handleLinkClick(e, "#home")} className="px-5 py-6 text-[14.5px] font-semibold text-[#b91c1c] transition-colors hover:text-[#0a7a3e]"
                  >
                    {item.label}
                  </Link>
>>>>>>> Stashed changes
                ) : (
                  <a
                    href={item.href}
                    className="px-5 py-6 text-[14.5px] font-semibold text-[#b91c1c] transition-colors hover:text-[#0a7a3e]"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            )
          })}
        </ul>

        {/* Right: Donate / Support CTA + Mobile Menu Button */}
        <div className="col-start-3 flex items-center justify-end gap-3">
          <a
            href="#donation"
            className="hidden sm:inline-flex items-center gap-2.5 rounded-full border border-[#6a8752] bg-[#066842] px-5 py-2.5 text-[14px] font-medium tracking-wide text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#055737] hover:shadow-md active:translate-y-0"
          >
            <span>Donate / Support</span>
            <svg
              className="h-5 w-5 shrink-0 text-[#c8b268]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              {/* Coin */}
              <circle cx="13.5" cy="5.5" r="3" />
              {/* Cupped Hand */}
              <path d="M20.6 12.2c-.5-.3-1.2-.2-1.6.2l-2.5 2.4H12c-.6 0-1-.4-1-1s.4-1 1-1h2.8c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2H9.2c-1.3 0-2.5.5-3.4 1.4L4 13.6V19h9.8c1.1 0 2.1-.4 2.9-1.2l4.2-4c.5-.4.4-1.2-.3-1.6z" />
            </svg>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-[#0a7a3e] lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <ul className="divide-y divide-gray-100 px-4 py-2">
            {navLinks.map((item) => {
              const hasDropdown = Boolean(item.dropdown)
              const isMobileOpen = mobileOpenDropdown === item.label

              if (hasDropdown) {
                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileOpenDropdown((prev) =>
                          prev === item.label ? null : item.label
                        )
                      }
                      className={`flex w-full items-center justify-between py-3 text-left text-[15px] font-semibold transition-colors ${
                        isMobileOpen ? 'text-[#0a7a3e]' : 'text-[#b91c1c]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          isMobileOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isMobileOpen && (
                      <ul className="mb-2 divide-y divide-gray-200/70 rounded-xs bg-[#f2f2f2]">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <a
                              href={subItem.href}
                              onClick={() => {
                                setMobileOpenDropdown(null)
                                setMobileMenuOpen(false)
                              }}
                              className="block px-5 py-3 text-[14px] text-gray-600 transition-colors hover:bg-[#e5e5e5] hover:text-[#b2964e]"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              }

<<<<<<< Updated upstream
=======
              if (item.href === '/') {
                return (
                  <li key={item.label}>
                    <Link to="/" onClick={(e) => handleLinkClick(e, "#home")}
                      className="block py-3 text-[15px] font-semibold text-[#b91c1c] hover:text-[#0a7a3e]"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              }

>>>>>>> Stashed changes
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-[15px] font-semibold text-[#b91c1c] hover:text-[#0a7a3e]"
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Mobile Donate / Support CTA */}
          <div className="px-4 pb-4 pt-1 sm:hidden">
            <a
              href="#donation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2.5 rounded-full border border-[#6a8752] bg-[#066842] px-5 py-2.5 text-[14.5px] font-medium tracking-wide text-white shadow-sm transition-colors hover:bg-[#055737]"
            >
              <span>Donate / Support</span>
              <svg
                className="h-5 w-5 shrink-0 text-[#c8b268]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <circle cx="13.5" cy="5.5" r="3" />
                <path d="M20.6 12.2c-.5-.3-1.2-.2-1.6.2l-2.5 2.4H12c-.6 0-1-.4-1-1s.4-1 1-1h2.8c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2H9.2c-1.3 0-2.5.5-3.4 1.4L4 13.6V19h9.8c1.1 0 2.1-.4 2.9-1.2l4.2-4c.5-.4.4-1.2-.3-1.6z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
