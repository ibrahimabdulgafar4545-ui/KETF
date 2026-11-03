import { useState } from 'react'

const DONATION_DATA = [
  {
    id: 'don-1',
    donor: "Alumni Class of '14",
    tag: 'Alumni',
    category: 'One-time',
    context: '10-Year Reunion Drive • 8 mins ago',
    allocation: 'STEM Lab Robotics Fund',
    amount: '$12,500.00',
    status: 'Completed',
    initials: 'AC',
    initialsBg: 'bg-slate-900 text-white',
  },
  {
    id: 'don-2',
    donor: 'HopeBridge PTA Council',
    tag: 'Parent',
    category: 'One-time',
    context: 'Fall Book Fair Match • 32 mins ago',
    allocation: 'Library Endowment',
    amount: '$4,250.00',
    status: 'Completed',
    initials: 'PT',
    initialsBg: 'bg-emerald-100 text-emerald-900',
  },
  {
    id: 'don-3',
    donor: 'Dr. Lawrence & May Chen',
    tag: 'Endowment',
    category: 'Monthly',
    context: 'Tech Scholarship Sponsor • 2 hours ago',
    allocation: 'First-Gen Tuition Aid',
    amount: '$500.00',
    frequency: '/mo',
    status: 'Active Recurring',
    initials: 'TS',
    initialsBg: 'bg-amber-100 text-amber-900',
  },
  {
    id: 'don-4',
    donor: 'NextGen Computing Corp',
    tag: 'Corporate',
    category: 'Corporate',
    context: 'Corporate STEM Grant • 4 hours ago',
    allocation: 'Chromebook Lab Fleet',
    amount: '$10,000.00',
    status: 'Completed',
    initials: 'NG',
    initialsBg: 'bg-blue-100 text-blue-900',
  },
]

export const AdminDashboard = ({ onNavigate }) => {
  const [activeMenu, setActiveMenu] = useState('overview')
  const [donationFilter, setDonationFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [activeReceipt, setActiveReceipt] = useState(null)
  const [actionNotice, setActionNotice] = useState('')

  const triggerNotice = (msg) => {
    setActionNotice(msg)
    setTimeout(() => setActionNotice(''), 3000)
  }

  const filteredDonations = DONATION_DATA.filter((item) => {
    const matchesFilter =
      donationFilter === 'All' ? true : item.category === donationFilter
    const matchesSearch =
      searchQuery === ''
        ? true
        : item.donor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.allocation.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const handleReturnHome = (e) => {
    if (e) e.preventDefault()
    if (onNavigate) {
      onNavigate('#home')
    } else {
      window.location.hash = '#home'
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 antialiased flex flex-col selection:bg-emerald-500/20 selection:text-emerald-900">
      {/* Toast Notification Bar */}
      {actionNotice && (
        <div className="fixed top-5 right-5 z-50 animate-fade-up rounded-2xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white shadow-2xl flex items-center gap-2.5 border border-slate-700/80">
          <span className="material-symbols-outlined text-[20px] text-emerald-400">
            check_circle
          </span>
          <span>{actionNotice}</span>
        </div>
      )}

      {/* Mobile Backdrop */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Fixed Left Navigation Rail */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-white border-r border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] z-50 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col">
          {/* Header Brand */}
          <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100">
            <button
              onClick={handleReturnHome}
              className="flex items-center gap-3 text-left group cursor-pointer"
              title="Return to Public Website"
            >
              <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[22px] text-emerald-400">
                  school
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[15px] text-slate-900 tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                  HopeBridge Academy
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">
                  School &amp; Blog CMS
                </span>
              </div>
            </button>

            {/* Close button on mobile */}
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(false)}
              className="p-1.5 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-800 lg:hidden cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="px-4 py-6">
            <div className="px-3 pb-3 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
                Main Menu
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                ADMIN
              </span>
            </div>

            <nav className="flex flex-col gap-1.5">
              {/* Overview */}
              <button
                type="button"
                onClick={() => {
                  setActiveMenu('overview')
                  setMobileSidebarOpen(false)
                }}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all text-left cursor-pointer text-sm ${
                  activeMenu === 'overview'
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  dashboard
                </span>
                <span>Overview</span>
              </button>

              {/* Donations & Alumni Pledges */}
              <button
                type="button"
                onClick={() => {
                  setActiveMenu('donations')
                  setMobileSidebarOpen(false)
                  triggerNotice('Navigated to Donations Ledger')
                }}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all text-left cursor-pointer text-sm ${
                  activeMenu === 'donations'
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  school
                </span>
                <span className="truncate">Donations &amp; Alumni Pledges</span>
              </button>

              {/* Inquiries */}
              <button
                type="button"
                onClick={() => {
                  setActiveMenu('inquiries')
                  setMobileSidebarOpen(false)
                  triggerNotice('Opening Admissions Inquiries Feed')
                }}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all text-left cursor-pointer text-sm ${
                  activeMenu === 'inquiries'
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="material-symbols-outlined text-[20px]">
                    contact_mail
                  </span>
                  <span className="truncate">Parent &amp; Student Inquiries</span>
                </div>
                <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-[11px] font-bold">
                  14
                </span>
              </button>

              {/* Blog Stories CMS */}
              <button
                type="button"
                onClick={() => {
                  setActiveMenu('blog')
                  setMobileSidebarOpen(false)
                  triggerNotice('Opening School Stories & Editorial Queue')
                }}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all text-left cursor-pointer text-sm ${
                  activeMenu === 'blog'
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  article
                </span>
                <span className="truncate">Blog &amp; School Stories CMS</span>
              </button>

              {/* Campaigns */}
              <button
                type="button"
                onClick={() => {
                  setActiveMenu('campaigns')
                  setMobileSidebarOpen(false)
                  triggerNotice('Campaigns & Scholarships Filtered')
                }}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all text-left cursor-pointer text-sm ${
                  activeMenu === 'campaigns'
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  military_tech
                </span>
                <span className="truncate">Campaigns &amp; Scholarships</span>
              </button>

              {/* Settings */}
              <button
                type="button"
                onClick={() => {
                  setActiveMenu('settings')
                  setMobileSidebarOpen(false)
                  triggerNotice('System Settings modal')
                }}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all text-left cursor-pointer text-sm ${
                  activeMenu === 'settings'
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  settings
                </span>
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Status Card */}
        <div className="p-5 m-4 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/40 border border-slate-200/80 shadow-2xs flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">
              verified
            </span>
            <span className="text-xs font-bold text-slate-900">
              501(c)(3) Endowment Active
            </span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Academic Year 2024–25 ledger synced. Title I matching funds active.
          </p>
          <button
            onClick={handleReturnHome}
            className="mt-1 inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-white text-xs font-bold text-slate-700 hover:text-emerald-700 hover:border-emerald-600 border border-slate-200/90 shadow-2xs transition-all cursor-pointer"
          >
            <span>&larr; Back to Public Site</span>
          </button>
        </div>
      </aside>

      {/* Main Wrapper with Left Sidebar Offset */}
      <div className="lg:pl-72 flex-1 flex flex-col">
        {/* Top Header Rail */}
        <header className="fixed top-0 left-0 lg:left-72 right-0 h-20 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_1px_4px_rgba(0,0,0,0.02)] z-40 flex items-center justify-between px-6 lg:px-10">
          {/* Mobile Menu Button + Search Bar */}
          <div className="flex items-center gap-3 lg:gap-5 flex-1 max-w-xl">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 lg:hidden cursor-pointer"
              aria-label="Open navigation menu"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>

            <div className="relative w-full flex items-center">
              <span className="material-symbols-outlined absolute left-3.5 text-slate-400 text-[20px] pointer-events-none">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all shadow-2xs"
                placeholder="Search student pledges, alumni gifts, blog articles..."
                type="text"
              />
            </div>

            <div className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-600 whitespace-nowrap text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px] text-slate-500">
                calendar_today
              </span>
              <span>Today: Nov 2, 2026</span>
            </div>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3 sm:gap-4 pl-4">
            <button
              onClick={() => triggerNotice('Opening New Gift Form...')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-700 transition-colors shadow-sm cursor-pointer active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span className="hidden sm:inline">Record School Gift</span>
            </button>

            <button
              onClick={() => triggerNotice('3 unread system alerts')}
              aria-label="Notifications"
              className="relative p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">
                notifications
              </span>
              <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-white text-[10px] font-bold leading-none ring-2 ring-white">
                3
              </span>
            </button>

            {/* Profile Pill */}
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold shadow-xs ring-2 ring-emerald-500/30">
                EV
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-sm font-bold text-slate-900 leading-tight">
                  Elena Vance
                </span>
                <span className="text-[11px] font-semibold text-slate-400 leading-tight">
                  Lead Admin
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="relative pt-24 lg:pt-28 pb-20 w-full min-h-screen">
          <div className="max-w-[1520px] mx-auto px-6 lg:px-10 flex flex-col space-y-9 lg:space-y-11">
            {/* Executive Greeting & Global Quick Actions */}
            <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Operational Telemetry Live
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-extrabold tracking-tight text-slate-900 leading-tight">
                  Good morning, Elena 👋
                </h1>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Here is what happened across campus campaigns, tuition aid gifts, parent inquiries, and school blog stories today.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => triggerNotice('Exporting CSV Summary Report...')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm shadow-2xs hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer active:scale-95"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] text-slate-500">
                    download
                  </span>
                  <span>Export Report</span>
                </button>

                <a
                  href="#home"
                  onClick={handleReturnHome}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-sm hover:bg-slate-800 transition-all cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px] text-emerald-400">
                    school
                  </span>
                  <span>View Public Site</span>
                </a>
              </div>
            </section>

            {/* 4-Card Executive KPI Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Card 1: Fund Raised */}
              <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_6px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group border border-slate-200/90">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-slate-600">
                    Total Tuition Aid &amp; Fund Raised
                  </span>
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <span className="material-symbols-outlined text-[20px]">
                      account_balance
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                    $184,250
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      <span className="material-symbols-outlined text-[14px]">
                        trending_up
                      </span>
                      +18.4%
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      vs. last term
                    </span>
                  </div>
                </div>

                <div className="w-full pt-2">
                  <svg
                    className="w-full h-8 text-emerald-600"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 24"
                  >
                    <path
                      d="M0 20 Q 25 15, 50 18 T 80 8 T 100 4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M0 20 Q 25 15, 50 18 T 80 8 T 100 4 L 100 24 L 0 24 Z"
                      fill="currentColor"
                      fillOpacity="0.08"
                    />
                  </svg>
                </div>
              </div>

              {/* Card 2: Inquiries */}
              <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_6px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300 border border-slate-200/90">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-slate-600">
                    Parent &amp; Community Inquiries
                  </span>
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-100">
                    <span className="material-symbols-outlined text-[20px]">
                      mark_email_unread
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                      14
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      Unread
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                      3 Flagged Admissions
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      Scholarships
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 font-medium">
                  <span>Average response time</span>
                  <span className="font-bold text-slate-900">35 mins</span>
                </div>
              </div>

              {/* Card 3: Alumni Sponsors */}
              <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_6px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300 border border-slate-200/90">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-slate-600">
                    Active Alumni &amp; Sponsors
                  </span>
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
                    <span className="material-symbols-outlined text-[20px]">
                      loyalty
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                    842
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_upward
                      </span>
                      +46
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      new alumni sponsors
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 font-medium">
                  <span>Pledge Fulfillment</span>
                  <span className="font-bold text-slate-900">98.4%</span>
                </div>
              </div>

              {/* Card 4: Published Stories */}
              <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_6px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300 border border-slate-200/90">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-slate-600">
                    Published Blog &amp; Stories
                  </span>
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-100">
                    <span className="material-symbols-outlined text-[20px]">
                      menu_book
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                      24
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      Live Stories
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                      <span className="material-symbols-outlined text-[14px]">
                        edit_note
                      </span>
                      3 In Review
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      +12.4k views
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 font-medium">
                  <span>Top Post Engagement</span>
                  <span className="font-bold text-slate-900">4.8k reads</span>
                </div>
              </div>
            </section>

            {/* Featured Spotlight Campaign Card */}
            <section className="bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_28px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col lg:flex-row border border-slate-200/90">
              <div className="lg:w-5/12 min-h-[280px] lg:min-h-full relative overflow-hidden bg-slate-900">
                <img
                  alt="STEM Lab & Digital Library Expansion Students"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdiN9cwAOVKbW-1d-T73rEmsH1eZuBJoxpelOhTThqe6MmZZKASq5KxlU0g6l0gSfSFad7GUWyjUvpkB1IxrMsmKShKoEXMwwySva-x1KUnbD2Ol_umSTsY7qpN_YxglFYwHKUVG3fc3fzOPKPHY4Md7KbXttrvduGvef1e3LKFXfUWddPG7BcRVqaJ-9J4dA-CVhm5FdruPlIErUaQAhVPOJYP2kaAVw84wuCcA0E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent lg:hidden" />
                <div className="absolute bottom-5 left-5 lg:hidden">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    Academic Priority
                  </span>
                </div>
              </div>

              <div className="lg:w-7/12 p-8 lg:p-10 flex flex-col justify-between space-y-7">
                <div className="space-y-4">
                  <div className="hidden lg:flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      Goal Nearing (91%)
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-semibold text-slate-500">
                      HopeBridge Partner Campus • Fall Campaign
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      STEM Lab &amp; Digital Library Expansion 2024-2025
                    </h2>
                    <span className="inline-flex items-center gap-1.5 text-amber-900 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-xl text-xs font-bold shrink-0">
                      <span className="material-symbols-outlined text-[16px]">
                        schedule
                      </span>
                      6 days remaining
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                    Modernizing science labs and providing Chromebooks &amp; robotics kits for 650 middle and high school students across underserved regional partner schools.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                        $68,400
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-500">
                        pledged of $75,000 goal
                      </span>
                    </div>
                    <span className="text-sm font-bold text-emerald-700">
                      91% Funded
                    </span>
                  </div>

                  <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden p-0.5">
                    <div
                      className="bg-emerald-600 h-full rounded-full transition-all duration-1000 ease-out shadow-xs"
                      style={{ width: '91%' }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-slate-500">
                        group
                      </span>
                      <span>312 Donors</span>
                    </div>
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-slate-500">
                        analytics
                      </span>
                      <span>$219 Avg Gift</span>
                    </div>
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold">
                      <span className="material-symbols-outlined text-[18px] text-slate-500">
                        menu_book
                      </span>
                      <span>650 Students</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => triggerNotice('Opening Campaign Manager...')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-xs cursor-pointer active:scale-95"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        tune
                      </span>
                      <span>Manage</span>
                    </button>
                    <button
                      onClick={() => triggerNotice('Drafting Blog Story...')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all cursor-pointer active:scale-95"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        post_add
                      </span>
                      <span>Publish Update</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Two-Column Administrative Hub (60% / 40%) */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (60%): Live Donation Stream Table */}
              <div className="lg:col-span-7 bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_28px_rgba(0,0,0,0.03)] p-6 lg:p-8 space-y-7 border border-slate-200/90">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      Recent School Donations &amp; Alumni Pledges
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Real-time feed across payment gateways and ledger deposits
                    </p>
                  </div>

                  {/* Filter Tabs */}
                  <div className="flex items-center p-1.5 bg-slate-100 rounded-xl gap-1 self-start sm:self-auto overflow-x-auto border border-slate-200/60">
                    {['All', 'One-time', 'Monthly', 'Corporate'].map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setDonationFilter(tab)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer whitespace-nowrap ${
                          donationFilter === tab
                            ? 'font-bold bg-white text-slate-900 shadow-xs'
                            : 'font-medium text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transaction List / Table */}
                <div className="overflow-x-auto -mx-6 lg:-mx-8">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50/80 text-slate-500 text-[11px] font-bold uppercase tracking-wider border-y border-slate-200/80">
                        <th className="py-3.5 px-6 font-bold">
                          Donor / Source
                        </th>
                        <th className="py-3.5 px-4 font-bold">
                          Campaign Allocation
                        </th>
                        <th className="py-3.5 px-4 font-bold text-right">
                          Amount
                        </th>
                        <th className="py-3.5 px-4 font-bold">Status</th>
                        <th className="py-3.5 px-6 font-bold text-right">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {filteredDonations.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="py-12 text-center text-slate-400 text-sm">
                            No transactions found for filter "{donationFilter}".
                          </td>
                        </tr>
                      ) : (
                        filteredDonations.map((item) => (
                          <tr
                            key={item.id}
                            className="hover:bg-slate-50/70 transition-colors"
                          >
                            <td className="py-4.5 px-6">
                              <div className="flex items-center gap-3.5">
                                <div
                                  className={`w-10 h-10 rounded-full ${item.initialsBg} flex items-center justify-center text-xs font-bold shrink-0 shadow-2xs`}
                                >
                                  {item.initials}
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-slate-900 truncate">
                                      {item.donor}
                                    </span>
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-bold text-slate-600">
                                      {item.tag}
                                    </span>
                                  </div>
                                  <span className="text-xs text-slate-400 truncate mt-0.5">
                                    {item.context}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-4.5 px-4 text-slate-600 text-sm font-medium">
                              {item.allocation}
                            </td>
                            <td className="py-4.5 px-4 text-right">
                              <span className="font-bold text-slate-900 tabular-nums text-sm sm:text-base">
                                {item.amount}
                                {item.frequency && (
                                  <span className="text-slate-400 font-normal text-xs">
                                    {item.frequency}
                                  </span>
                                )}
                              </span>
                            </td>
                            <td className="py-4.5 px-4">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                                {item.status}
                              </span>
                            </td>
                            <td className="py-4.5 px-6 text-right">
                              <button
                                onClick={() => {
                                  setActiveReceipt(item)
                                  triggerNotice(`Viewing receipt for ${item.donor}`)
                                }}
                                className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                                title="View Receipt"
                                type="button"
                              >
                                <span className="material-symbols-outlined text-[20px]">
                                  receipt_long
                                </span>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Action Footer */}
                <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    Showing {filteredDonations.length} of 184 transactions this month
                  </span>
                  <button
                    onClick={() => triggerNotice('Loading full ledger stream...')}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer self-start sm:self-auto"
                    type="button"
                  >
                    <span>View all 184 transactions</span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column (40%): Direct Contact Inquiries Feed & Story CMS */}
              <div className="lg:col-span-5 bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_28px_rgba(0,0,0,0.03)] p-6 lg:p-8 space-y-8 flex flex-col justify-between border border-slate-200/90">
                <div className="space-y-8">
                  {/* Parent Inquiries Block */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                          Parent &amp; Admissions Inquiries
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          Portal submissions &amp; scholarship requests
                        </p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold shrink-0">
                        3 Urgent
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* Inquiry 1 */}
                      <div className="p-4.5 rounded-2xl bg-slate-50/80 hover:bg-slate-50 transition-all space-y-3 border border-slate-200/70">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900 text-sm truncate">
                                Patricia &amp; Marcus Hayes
                              </span>
                              <span className="text-xs text-slate-400">
                                (9th Grade)
                              </span>
                            </div>
                            <span className="text-xs font-semibold text-slate-700 block truncate">
                              Need-Based Tuition Aid Application
                            </span>
                          </div>
                          <div className="flex flex-col items-end shrink-0 gap-1">
                            <span className="text-[11px] text-slate-400 font-medium">
                              14m ago
                            </span>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-red-100 text-red-800 text-[10px] font-bold">
                              Admissions Aid
                            </span>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                          "We have submitted the W2 verification for our daughter's STEM honors scholarship application..."
                        </p>

                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => triggerNotice('Opening Reply Window for Hayes family...')}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all cursor-pointer active:scale-95"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[14px]">
                                reply
                              </span>
                              Review &amp; Reply
                            </button>
                            <button
                              onClick={() => triggerNotice('Forwarded to Aid Board Review')}
                              className="px-3 py-1.5 rounded-xl bg-white text-slate-700 border border-slate-200 text-xs font-semibold hover:bg-slate-100 transition-all cursor-pointer"
                              type="button"
                            >
                              Forward to Board
                            </button>
                          </div>
                          <button
                            onClick={() => triggerNotice('Marked as Handled')}
                            className="text-slate-400 hover:text-emerald-700 p-1 transition-colors cursor-pointer"
                            title="Mark as Handled"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              check_circle
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Inquiry 2 */}
                      <div className="p-4.5 rounded-2xl bg-slate-50/80 hover:bg-slate-50 transition-all space-y-3 border border-slate-200/70">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1 min-w-0">
                            <span className="font-bold text-slate-900 text-sm truncate block">
                              Dr. Emily Thornton
                            </span>
                            <span className="text-xs font-semibold text-slate-700 block truncate">
                              Corporate Robotics Mentorship Offer
                            </span>
                          </div>
                          <div className="flex flex-col items-end shrink-0 gap-1">
                            <span className="text-[11px] text-slate-400 font-medium">
                              1h ago
                            </span>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                              STEM Partner
                            </span>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                          "Our engineering team at Micron is keen to run Saturday coding clinics and provide 15 refurbished workstations..."
                        </p>

                        <div className="flex items-center gap-2.5 pt-1">
                          <button
                            onClick={() => triggerNotice('Calendar invite sent to Dr. Thornton')}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-100 transition-all cursor-pointer active:scale-95 shadow-2xs"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[15px] text-slate-500">
                              calendar_month
                            </span>
                            Schedule Call
                          </button>
                          <button
                            onClick={() => triggerNotice('Opening draft email')}
                            className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-all cursor-pointer"
                            type="button"
                          >
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* School Blog & Story CMS */}
                  <div className="pt-5 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                          School Blog &amp; Story CMS
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          Recent articles &amp; donor editorial queue
                        </p>
                      </div>
                      <button
                        onClick={() => triggerNotice('Creating New Story Draft...')}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-2xs cursor-pointer active:scale-95"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          edit_document
                        </span>
                        <span>New Post</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      {/* Story 1 */}
                      <div className="p-4 rounded-2xl bg-slate-50/80 hover:bg-slate-50 flex items-center justify-between gap-4 border border-slate-200/70 transition-all">
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                              Published
                            </span>
                            <span className="text-xs text-slate-400 truncate">
                              By Principal Vance • 4.8k reads
                            </span>
                          </div>
                          <h5 className="text-sm font-bold text-slate-900 truncate">
                            How Donor Pledges Funded Our New Robotics Arena
                          </h5>
                        </div>
                        <button
                          onClick={() => triggerNotice('Editing "New Robotics Arena" Story')}
                          className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-500 transition-all shrink-0 cursor-pointer shadow-2xs"
                          title="Edit Story"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            edit
                          </span>
                        </button>
                      </div>

                      {/* Story 2 */}
                      <div className="p-4 rounded-2xl bg-slate-50/80 hover:bg-slate-50 flex items-center justify-between gap-4 border border-slate-200/70 transition-all">
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-bold">
                              Review
                            </span>
                            <span className="text-xs text-slate-400 truncate">
                              By Student Council • 2 days ago
                            </span>
                          </div>
                          <h5 className="text-sm font-bold text-slate-900 truncate">
                            Student Spotlight: Maria's Journey to State Honors
                          </h5>
                        </div>
                        <button
                          onClick={() => triggerNotice('Reviewing Student Spotlight Draft')}
                          className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-500 transition-all shrink-0 cursor-pointer shadow-2xs"
                          title="Review Story"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            rate_review
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-5 border-t border-slate-100">
                  <button
                    onClick={() => triggerNotice('Opening Full Inquiries & Editorial Center...')}
                    className="w-full py-3 px-4 text-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-2xs"
                    type="button"
                  >
                    <span>Open Full Inquiries &amp; Stories Hub</span>
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Demo Receipt Modal */}
      {activeReceipt && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-fade-in"
          onClick={() => setActiveReceipt(null)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl border border-slate-200 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-emerald-600 text-[24px]">
                  receipt
                </span>
                <h4 className="font-extrabold text-slate-900 text-lg">Official Donation Receipt</h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveReceipt(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Donor Name:</span>
                <span className="font-bold text-slate-900">{activeReceipt.donor}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Allocation Fund:</span>
                <span className="font-semibold text-slate-800">{activeReceipt.allocation}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Gift Amount:</span>
                <span className="font-extrabold text-emerald-700 text-lg">{activeReceipt.amount}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Status:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  {activeReceipt.status}
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Tax Deductible:</span>
                <span className="font-bold text-slate-900">501(c)(3) Eligible</span>
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  triggerNotice(`Receipt PDF downloaded for ${activeReceipt.donor}`)
                  setActiveReceipt(null)
                }}
                className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 shadow-sm"
              >
                Download PDF Receipt
              </button>
              <button
                type="button"
                onClick={() => setActiveReceipt(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
