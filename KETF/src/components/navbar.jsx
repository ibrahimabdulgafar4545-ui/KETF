import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '#about',
    megaTitle: 'About KwaraETF',
    megaDescription:
      'Discover our statutory foundation, leadership board, operational secretariat, and institutional mandate.',
    megaCta: { label: 'Read Our Prospectus', href: '#prospectus' },
    dropdown: [
      {
        label: 'The Law',
        href: '#the-law',
        desc: 'Enabling Act of 2021 & statutory amendments',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v18m-7-4l3-7 3 7H5zm8 0l3-7 3 7h-6z"
          />
        ),
      },
      {
        label: 'Board Members',
        href: '#board-members',
        desc: 'Distinguished trustees providing strategic oversight',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        ),
      },
      {
        label: 'Secretariat',
        href: '#secretariat',
        desc: 'Executive management & day-to-day operations team',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        ),
      },
      {
        label: 'Prospectus',
        href: '#prospectus',
        desc: 'Official overview of mandate & key milestones',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        ),
      },
      {
        label: 'Contact',
        href: '#contact',
        desc: 'Get in touch with our office & support channels',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        ),
      },
    ],
  },
  {
    label: 'Initiatives',
    href: '#initiatives',
    megaTitle: 'Strategic Initiatives',
    megaDescription:
      'High-impact programs transforming classrooms, empowering learners, and mobilizing community partnerships across Kwara State.',
    megaCta: { label: 'Partner / Donate Today', href: '#donation' },
    dropdown: [
      {
        label: '5-Year Development Plan',
        href: '#5-year-development-plan',
        desc: 'Long-term roadmap for sustainable educational growth',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        ),
      },
      {
        label: 'Adopt A School',
        href: '#adopt-a-school',
        desc: 'Partner with us to rehabilitate & equip public schools',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        ),
      },
      {
        label: 'Celebrate With Kwara ETF',
        href: '#celebrate-with-kwara-etf',
        desc: 'Dedicate special milestones to sponsor a child’s future',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        ),
      },
      {
        label: 'KwaraETF Scholarship Program',
        href: '#scholarship-program',
        desc: 'Merit & need-based financial support for students',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        ),
      },
    ],
  },
  {
    label: 'Transparency & Gov.',
    href: '#transparency',
    megaTitle: 'Transparency & Governance',
    megaDescription:
      'Rigorous fiscal stewardship, statutory audit filings, quarterly financial disclosures, and our administrative fee structure.',
    megaCta: { label: 'View Latest Audit', href: '#audit-reports' },
    dropdown: [
      {
        label: 'Quarterly Reports',
        href: '#quarterly-reports',
        desc: 'Published quarterly operational progress & reviews',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        ),
      },
      {
        label: 'Financials',
        href: '#financials',
        desc: 'Detailed income, disbursements & resource allocations',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        ),
      },
      {
        label: 'Audit Reports',
        href: '#audit-reports',
        desc: 'Independent external auditor certifications & opinions',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        ),
      },
      {
        label: 'Impact Reports',
        href: '#impact-reports',
        desc: 'Verifiable data on learning outcomes & beneficiaries',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        ),
      },
      {
        label: 'Policies and Guidelines',
        href: '#policies-and-guidelines',
        desc: 'Operational procedures, ethics & procurement codes',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        ),
      },
      {
        label: 'Administrative Fee',
        href: '#administrative-fee',
        desc: 'Tiered governance & monitoring overhead framework',
        icon: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        ),
      },
    ],
  },
  {
    label: 'Resources',
    href: '#resources',
    megaTitle: 'Media & Resources',
    megaDescription:
      'Stay informed with ongoing school projects, press announcements, career openings, and official merchandise.',
    megaCta: { label: 'Explore Latest News', href: '#news' },
    dropdown: [
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
    ],
  },
]

const Navbar = ({ activeRoute = '#home', onNavigate }) => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null)
  const headerRef = useRef(null)

  const activeMegaItem = navLinks.find(
    (item) => item.dropdown && item.label === openDropdown
  )

  const handleLinkClick = (e, href) => {
    if (onNavigate) {
      if (e && e.preventDefault) {
        e.preventDefault()
      }
      onNavigate(href)
    }
    setOpenDropdown(null)
    setMobileOpenDropdown(null)
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      onMouseLeave={() => setOpenDropdown(null)}
      className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-xs"
    >
      {/* Top Accent Gradient Strip */}
      <div className="h-4 w-full bg-gradient-to-r from-[#5a3210] via-[#136f2d] to-[#084d49]" />

      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-[1fr_auto_1fr] lg:px-8"
      >
        {/* Left: Logo - navigates to Home */}
        <div className="flex items-center justify-start">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            aria-label="Kwara State Education Trust Fund home"
            className="shrink-0 py-3 cursor-pointer"
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
            const isActiveParent =
              activeRoute === item.href ||
              (hasDropdown &&
                item.dropdown.some((sub) => sub.href === activeRoute))

            return (
              <li
                key={item.label}
                className="relative flex items-center"
                onMouseEnter={() =>
                  setOpenDropdown(hasDropdown ? item.label : null)
                }
              >
                {/* Subtle vertical divider between items */}
                {index > 0 && (
                  <span aria-hidden="true" className="h-5 w-px bg-gray-100" />
                )}

                {hasDropdown ? (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === item.label ? null : item.label
                      )
                    }
                    aria-expanded={isOpen}
                    className={`relative inline-flex cursor-pointer items-center gap-1.5 px-5 py-6 text-[14.5px] font-semibold transition-colors ${
                      isOpen || isActiveParent
                        ? 'text-[#0a7a3e]'
                        : 'text-[#b91c1c] hover:text-[#0a7a3e]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0a7a3e]' : 'opacity-75'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.4"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>

                    {/* Active / Open Bottom Indicator Bar */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-[#066842] transition-all duration-200 ${
                        isOpen || isActiveParent
                          ? 'scale-x-100 opacity-100'
                          : 'scale-x-0 opacity-0'
                      }`}
                    />
                  </button>
                ) : item.href === '/' ? (
                  <Link
                    to="/"
                    onClick={(e) => handleLinkClick(e, '#home')}
                    className="px-5 py-6 text-[14.5px] font-semibold text-[#b91c1c] transition-colors hover:text-[#0a7a3e]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative px-5 py-6 text-[14.5px] font-semibold transition-colors ${
                      isActiveParent
                        ? 'text-[#0a7a3e]'
                        : 'text-[#b91c1c] hover:text-[#0a7a3e]'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 bottom-0 h-0.5 rounded-full bg-[#066842] transition-all duration-200 ${
                        isActiveParent
                          ? 'scale-x-100 opacity-100'
                          : 'scale-x-0 opacity-0'
                      }`}
                    />
                  </a>
                )}
              </li>
            )
          })}
        </ul>

        {/* Right: Donate CTA + Mobile Hamburger */}
        <div className="flex items-center justify-end gap-3">
          <a
            href="#donation"
            onClick={(e) => handleLinkClick(e, '#donation')}
            className="group hidden items-center gap-2.5 rounded-full border border-[#6a8752] bg-[#066842] px-5 py-2 text-[14.5px] font-medium tracking-wide text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#055737] hover:shadow-md active:translate-y-0 sm:inline-flex"
          >
            <span>Donate / Support</span>
            <svg
              className="h-5 w-5 shrink-0 text-[#c8b268] transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <circle cx="13.5" cy="5.5" r="3" />
              <path d="M20.6 12.2c-.5-.3-1.2-.2-1.6.2l-2.5 2.4H12c-.6 0-1-.4-1-1s.4-1 1-1h2.8c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2H9.2c-1.3 0-2.5.5-3.4 1.4L4 13.6V19h9.8c1.1 0 2.1-.4 2.9-1.2l4.2-4c.5-.4.4-1.2-.3-1.6z" />
            </svg>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 hover:text-[#0a7a3e] lg:hidden"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Global Mega Menu Drawer */}
      {activeMegaItem && (
        <div
          onMouseEnter={() => setOpenDropdown(activeMegaItem.label)}
          onMouseLeave={() => setOpenDropdown(null)}
          className="absolute top-full right-0 left-0 border-b border-gray-200 bg-white shadow-xl transition-all"
        >
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left Column: Mega Category Context Card */}
              <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#064e3b] via-[#066842] to-[#084d49] p-7 text-white shadow-xs">
                <div>
                  <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wider text-[#f3df9d] uppercase">
                    {activeMegaItem.label} Overview
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
                    {activeMegaItem.megaTitle || activeMegaItem.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-emerald-50/90">
                    {activeMegaItem.megaDescription}
                  </p>
                </div>

                {activeMegaItem.megaCta && (
                  <div className="mt-6 pt-5 border-t border-white/20">
                    <a
                      href={activeMegaItem.megaCta.href}
                      onClick={(e) => handleLinkClick(e, activeMegaItem.megaCta.href)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#f3df9d] hover:text-white transition-colors"
                    >
                      <span>{activeMegaItem.megaCta.label}</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Dynamic Sub-links Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeMegaItem.dropdown.map((subItem) => (
                  <a
                    key={subItem.label}
                    href={subItem.href}
                    onClick={(e) => handleLinkClick(e, subItem.href)}
                    className="group flex items-start gap-4 rounded-xl border border-gray-100 bg-[#fbfdfc] p-4.5 transition-all duration-200 hover:border-[#c8b268] hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#066842] transition-colors group-hover:bg-[#066842] group-hover:text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        {subItem.icon}
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[15px] font-bold text-gray-900 group-hover:text-[#066842] transition-colors">
                        {subItem.label}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">
                        {subItem.desc}
                      </p>
                      {subItem.featuredJob && (
                        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-800">
                          <span>{subItem.featuredJob.title}</span>
                          <span>&bull;</span>
                          <span>{subItem.featuredJob.location}</span>
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-200 bg-white lg:hidden max-h-[82vh] overflow-y-auto shadow-xl">
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
                      className={`flex w-full items-center justify-between py-3.5 text-left text-[15px] font-semibold transition-colors ${
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isMobileOpen && (
                      <div className="mb-3 space-y-1.5 rounded-xl bg-[#f8faf9] p-2.5">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => handleLinkClick(e, subItem.href)}
                            className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-white"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-[#066842]">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                {subItem.icon}
                              </svg>
                            </div>
                            <div>
                              <p className="text-[14px] font-semibold text-gray-800">
                                {subItem.label}
                              </p>
                              <p className="text-[12px] text-gray-500">
                                {subItem.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                )
              }

              if (item.href === '/') {
                return (
                  <li key={item.label}>
                    <Link
                      to="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 text-[15px] font-semibold text-[#b91c1c] hover:text-[#0a7a3e]"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              }

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="block py-3.5 text-[15px] font-semibold text-[#b91c1c] hover:text-[#0a7a3e]"
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Mobile Donate / Support CTA */}
          <div className="px-4 pt-1 pb-4 sm:hidden">
            <a
              href="#donation"
              onClick={(e) => handleLinkClick(e, '#donation')}
              className="flex w-full items-center justify-center gap-2.5 rounded-full border border-[#6a8752] bg-[#066842] px-5 py-2.5 text-[14.5px] font-medium tracking-wide text-white shadow-sm transition-colors hover:bg-[#055737]"
            >
              <span>Donate / Support</span>
              <svg className="h-5 w-5 shrink-0 text-[#c8b268]" viewBox="0 0 24 24" fill="currentColor">
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
