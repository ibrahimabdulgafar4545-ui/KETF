import { useState, useEffect, useMemo } from 'react'

const STORAGE_KEYS = {
  DONATIONS: 'kwaraetf_donations_ledger',
  INQUIRIES: 'kwaraetf_inquiries',
  ANNOUNCEMENTS: 'kwaraetf_admin_announcements',
  CAMPAIGN: 'kwaraetf_spotlight_campaign',
}

const DEFAULT_CAMPAIGN = {
  title: 'Adopt-A-School & Public Infrastructure Drive',
  description:
    'Targeted interventions for classroom upgrades, digital learning tools, and school rehabilitation across Kwara State public schools.',
  category: 'Infrastructure & Scholarships',
  goal: 50000000, // ₦50M
  daysRemaining: 45,
  partnerCampus: 'Kwara State Public Primary & Secondary Schools',
}

export const AdminDashboard = ({ onNavigate }) => {
  // Navigation & UI state
  const [activeMenu, setActiveMenu] = useState('overview')
  const [donationFilter, setDonationFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [actionNotice, setActionNotice] = useState('')

  // Modals state
  const [showDonationModal, setShowDonationModal] = useState(false)
  const [showInquiryModal, setShowInquiryModal] = useState(null)
  const [showPostModal, setShowPostModal] = useState(false)
  const [activeReceipt, setActiveReceipt] = useState(null)
  const [editingCampaign, setEditingCampaign] = useState(false)

  // Real Persistent State
  const [donations, setDonations] = useState([])
  const [inquiries, setInquiries] = useState([])
  const [announcements, setAnnouncements] = useState([])
  const [campaign, setCampaign] = useState(DEFAULT_CAMPAIGN)

  // Form states for adding items
  const [donationForm, setDonationForm] = useState({
    donor: '',
    category: 'One-time',
    allocation: 'Scholarship Intervention Fund',
    amount: '',
    context: 'Direct Portal Contribution',
    tag: 'Donor',
  })

  const [postForm, setPostForm] = useState({
    title: '',
    category: 'Official Announcement',
    author: 'KwaraETF Secretariat',
    summary: '',
    status: 'Published',
  })

  const [campaignForm, setCampaignForm] = useState(DEFAULT_CAMPAIGN)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedDonations = localStorage.getItem(STORAGE_KEYS.DONATIONS)
      if (storedDonations) {
        setDonations(JSON.parse(storedDonations))
      }

      const storedInquiries = localStorage.getItem(STORAGE_KEYS.INQUIRIES)
      if (storedInquiries) {
        setInquiries(JSON.parse(storedInquiries))
      }

      const storedAnnouncements = localStorage.getItem(STORAGE_KEYS.ANNOUNCEMENTS)
      if (storedAnnouncements) {
        setAnnouncements(JSON.parse(storedAnnouncements))
      }

      const storedCampaign = localStorage.getItem(STORAGE_KEYS.CAMPAIGN)
      if (storedCampaign) {
        const parsed = JSON.parse(storedCampaign)
        setCampaign(parsed)
        setCampaignForm(parsed)
      }
    } catch (err) {
      console.error('Failed to load local storage state:', err)
    }
  }, [])

  // Sync helpers
  const saveDonations = (items) => {
    setDonations(items)
    localStorage.setItem(STORAGE_KEYS.DONATIONS, JSON.stringify(items))
  }

  const saveInquiries = (items) => {
    setInquiries(items)
    localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(items))
  }

  const saveAnnouncements = (items) => {
    setAnnouncements(items)
    localStorage.setItem(STORAGE_KEYS.ANNOUNCEMENTS, JSON.stringify(items))
  }

  const saveCampaign = (c) => {
    setCampaign(c)
    localStorage.setItem(STORAGE_KEYS.CAMPAIGN, JSON.stringify(c))
  }

  const triggerNotice = (msg) => {
    setActionNotice(msg)
    setTimeout(() => setActionNotice(''), 3000)
  }

  const handleReturnHome = (e) => {
    if (e) e.preventDefault()
    if (onNavigate) {
      onNavigate('#home')
    } else {
      window.location.hash = '#home'
    }
  }

  // Formatting helpers
  const formatNaira = (val) => {
    const num = Number(val) || 0
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(num)
  }

  // Calculated Real KPIs
  const totalFundsRaised = useMemo(() => {
    return donations.reduce((sum, item) => sum + (Number(item.numericAmount) || 0), 0)
  }, [donations])

  const uniqueDonorsCount = useMemo(() => {
    const unique = new Set(donations.map((d) => d.donor?.trim().toLowerCase()).filter(Boolean))
    return unique.size
  }, [donations])

  const unreadInquiriesCount = useMemo(() => {
    return inquiries.filter((inq) => inq.status !== 'Resolved').length
  }, [inquiries])

  // Filtered donations list
  const filteredDonations = useMemo(() => {
    return donations.filter((item) => {
      const matchesFilter =
        donationFilter === 'All' ? true : item.category === donationFilter
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        q === ''
          ? true
          : (item.donor || '').toLowerCase().includes(q) ||
            (item.allocation || '').toLowerCase().includes(q)
      return matchesFilter && matchesSearch
    })
  }, [donations, donationFilter, searchQuery])

  // Add donation handler
  const handleAddDonation = (e) => {
    e.preventDefault()
    if (!donationForm.donor.trim() || !donationForm.amount) {
      triggerNotice('Please provide a donor name and amount')
      return
    }

    const cleanNum = Number(String(donationForm.amount).replace(/[^0-9.]/g, '')) || 0
    const initials = donationForm.donor
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join('')

    const newRecord = {
      id: 'don-' + Date.now(),
      donor: donationForm.donor.trim(),
      tag: donationForm.tag || 'Donor',
      category: donationForm.category,
      context: donationForm.context || 'Direct Contribution',
      allocation: donationForm.allocation,
      amount: formatNaira(cleanNum),
      numericAmount: cleanNum,
      status: 'Verified',
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      initials: initials || 'KW',
      initialsBg: 'bg-emerald-800 text-white',
    }

    const updated = [newRecord, ...donations]
    saveDonations(updated)
    setDonationForm({
      donor: '',
      category: 'One-time',
      allocation: 'Scholarship Intervention Fund',
      amount: '',
      context: 'Direct Portal Contribution',
      tag: 'Donor',
    })
    setShowDonationModal(false)
    triggerNotice(`Logged ${formatNaira(cleanNum)} donation from ${newRecord.donor}`)
  }

  // Delete donation handler
  const handleDeleteDonation = (id) => {
    if (window.confirm('Are you sure you want to delete this donation record?')) {
      const updated = donations.filter((d) => d.id !== id)
      saveDonations(updated)
      triggerNotice('Donation record removed')
    }
  }

  // Add announcement handler
  const handleAddPost = (e) => {
    e.preventDefault()
    if (!postForm.title.trim()) {
      triggerNotice('Please enter an announcement title')
      return
    }

    const newPost = {
      id: 'post-' + Date.now(),
      title: postForm.title.trim(),
      category: postForm.category,
      author: postForm.author.trim() || 'KwaraETF Secretariat',
      summary: postForm.summary.trim(),
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      status: postForm.status || 'Published',
      reads: 0,
    }

    const updated = [newPost, ...announcements]
    saveAnnouncements(updated)
    setPostForm({
      title: '',
      category: 'Official Announcement',
      author: 'KwaraETF Secretariat',
      summary: '',
      status: 'Published',
    })
    setShowPostModal(false)
    triggerNotice('Announcement published to editorial queue')
  }

  // Delete announcement
  const handleDeletePost = (id) => {
    const updated = announcements.filter((p) => p.id !== id)
    saveAnnouncements(updated)
    triggerNotice('Announcement deleted')
  }

  // Inquiry actions
  const handleResolveInquiry = (id) => {
    const updated = inquiries.map((inq) =>
      inq.id === id ? { ...inq, status: inq.status === 'Resolved' ? 'Pending' : 'Resolved' } : inq
    )
    saveInquiries(updated)
    triggerNotice('Inquiry status updated')
  }

  const handleDeleteInquiry = (id) => {
    const updated = inquiries.filter((inq) => inq.id !== id)
    saveInquiries(updated)
    if (showInquiryModal?.id === id) setShowInquiryModal(null)
    triggerNotice('Inquiry removed')
  }

  // Campaign progress percentage
  const campaignPercent = Math.min(
    100,
    Math.round(((totalFundsRaised || 0) / (campaign.goal || 1)) * 100)
  )

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
              <div className="h-10 w-10 rounded-xl bg-[#066842] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[22px] text-[#c8b268]">
                  account_balance
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[15px] text-slate-900 tracking-tight leading-none group-hover:text-[#066842] transition-colors">
                  KwaraETF Admin
                </span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mt-1">
                  Trust Fund Console
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
                Management
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                LIVE
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
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                <span>Overview</span>
              </button>

              {/* Donations & Endowments */}
              <button
                type="button"
                onClick={() => {
                  setActiveMenu('donations')
                  setMobileSidebarOpen(false)
                }}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all text-left cursor-pointer text-sm ${
                  activeMenu === 'donations'
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                  <span className="truncate">Donations &amp; Endowments</span>
                </div>
                {donations.length > 0 && (
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    {donations.length}
                  </span>
                )}
              </button>

              {/* Inquiries */}
              <button
                type="button"
                onClick={() => {
                  setActiveMenu('inquiries')
                  setMobileSidebarOpen(false)
                }}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all text-left cursor-pointer text-sm ${
                  activeMenu === 'inquiries'
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="material-symbols-outlined text-[20px]">contact_mail</span>
                  <span className="truncate">Citizen &amp; School Inquiries</span>
                </div>
                {unreadInquiriesCount > 0 && (
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-[11px] font-bold">
                    {unreadInquiriesCount}
                  </span>
                )}
              </button>

              {/* Announcements & CMS */}
              <button
                type="button"
                onClick={() => {
                  setActiveMenu('blog')
                  setMobileSidebarOpen(false)
                }}
                className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all text-left cursor-pointer text-sm ${
                  activeMenu === 'blog'
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="material-symbols-outlined text-[20px]">campaign</span>
                  <span className="truncate">Announcements &amp; News</span>
                </div>
                {announcements.length > 0 && (
                  <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                    {announcements.length}
                  </span>
                )}
              </button>

              {/* Campaigns */}
              <button
                type="button"
                onClick={() => {
                  setActiveMenu('campaigns')
                  setMobileSidebarOpen(false)
                }}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl transition-all text-left cursor-pointer text-sm ${
                  activeMenu === 'campaigns'
                    ? 'bg-slate-900 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">military_tech</span>
                <span className="truncate">Spotlight Campaign</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Bottom Institutional Info Card */}
        <div className="p-5 m-4 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/40 border border-slate-200/80 shadow-2xs flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#066842] text-[20px]">verified</span>
            <span className="text-xs font-bold text-slate-900">Statutory Trust Fund</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Kwara State Education Trust Fund Law No. 3 (2021) as amended. All records securely stored.
          </p>
          <button
            onClick={handleReturnHome}
            className="mt-1 inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-white text-xs font-bold text-slate-700 hover:text-[#066842] hover:border-[#066842] border border-slate-200/90 shadow-2xs transition-all cursor-pointer"
          >
            <span>&larr; Back to Public Website</span>
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
                placeholder="Search donors, allocations, inquiries..."
                type="text"
              />
            </div>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3 sm:gap-4 pl-4">
            <button
              onClick={() => setShowDonationModal(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#066842] text-white font-semibold text-xs sm:text-sm hover:bg-[#055234] transition-colors shadow-sm cursor-pointer active:scale-95"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span className="hidden sm:inline">Record Donation</span>
            </button>

            <button
              onClick={() => setShowPostModal(true)}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-colors cursor-pointer active:scale-95"
              type="button"
              title="Draft Announcement"
            >
              <span className="material-symbols-outlined text-[18px]">post_add</span>
              <span className="hidden md:inline">Post</span>
            </button>

            {/* Institutional Pill */}
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-[#c8b268] flex items-center justify-center text-sm font-bold shadow-xs">
                KETF
              </div>
              <div className="hidden md:flex flex-col text-left">
                <span className="text-sm font-bold text-slate-900 leading-tight">
                  KwaraETF Admin
                </span>
                <span className="text-[11px] font-semibold text-slate-400 leading-tight">
                  Secretariat
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
                  KwaraETF Activity Dashboard
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[2.25rem] font-extrabold tracking-tight text-slate-900 leading-tight">
                  Management Console
                </h1>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  Real-time ledger for trust fund donations, citizen and school inquiries, campaign goals, and public announcements.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => {
                    const dataStr =
                      'data:text/json;charset=utf-8,' +
                      encodeURIComponent(
                        JSON.stringify({ donations, inquiries, announcements }, null, 2)
                      )
                    const dl = document.createElement('a')
                    dl.setAttribute('href', dataStr)
                    dl.setAttribute('download', 'kwaraetf_data_export.json')
                    dl.click()
                    triggerNotice('Ledger backup exported as JSON')
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm shadow-2xs hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer active:scale-95"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] text-slate-500">
                    download
                  </span>
                  <span>Export Data</span>
                </button>

                <a
                  href="#home"
                  onClick={handleReturnHome}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-sm hover:bg-slate-800 transition-all cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#c8b268]">
                    visibility
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
                    Total Funds &amp; Endowments
                  </span>
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <span className="material-symbols-outlined text-[20px]">
                      account_balance
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                    {formatNaira(totalFundsRaised)}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500">
                      {donations.length} recorded contribution{donations.length === 1 ? '' : 's'}
                    </span>
                  </div>
                </div>

                <div className="w-full pt-2">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 rounded-full transition-all duration-700"
                      style={{ width: `${Math.min(100, Math.max(5, campaignPercent))}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Card 2: Inquiries */}
              <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_6px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300 border border-slate-200/90">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-slate-600">
                    Citizen &amp; School Inquiries
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
                      {unreadInquiriesCount}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">Pending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">
                      {inquiries.length} total message{inquiries.length === 1 ? '' : 's'}
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 font-medium">
                  <span>Contact Form Sync</span>
                  <span className="font-bold text-emerald-700">Active</span>
                </div>
              </div>

              {/* Card 3: Active Donors */}
              <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_6px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300 border border-slate-200/90">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-slate-600">
                    Active Donors &amp; Partners
                  </span>
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
                    <span className="material-symbols-outlined text-[20px]">group</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                    {uniqueDonorsCount}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">
                      Unique philanthropic contributors
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 font-medium">
                  <span>Donor Types</span>
                  <span className="font-bold text-slate-900">Alumni, Corporate, Public</span>
                </div>
              </div>

              {/* Card 4: Published News / CMS */}
              <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.03),0_6px_16px_rgba(0,0,0,0.02)] flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300 border border-slate-200/90">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-semibold text-slate-600">
                    Announcements &amp; Stories
                  </span>
                  <div className="p-2.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-100">
                    <span className="material-symbols-outlined text-[20px]">
                      campaign
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                      {announcements.length}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">Custom Posts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">
                      Editorial queue entries
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 font-medium">
                  <span>Public Dispatches</span>
                  <span className="font-bold text-slate-900">7 Pages Live</span>
                </div>
              </div>
            </section>

            {/* Spotlight Campaign Card */}
            <section className="bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_28px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col lg:flex-row border border-slate-200/90">
              <div className="lg:w-5/12 min-h-[240px] lg:min-h-full relative overflow-hidden bg-[#064e3b] flex items-center justify-center p-8 text-white">
                <div className="space-y-4 max-w-sm text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#f3df9d] text-xs font-bold border border-[#c8b268]/40">
                    <span className="w-2 h-2 rounded-full bg-[#c8b268]" />
                    Spotlight Educational Drive
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                    {campaign.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                    {campaign.description}
                  </p>
                </div>
              </div>

              <div className="lg:w-7/12 p-8 lg:p-10 flex flex-col justify-between space-y-7">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                      Target: {formatNaira(campaign.goal)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-amber-900 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-xl text-xs font-bold shrink-0">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      {campaign.daysRemaining} days remaining
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-500">
                    {campaign.partnerCampus}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tabular-nums">
                        {formatNaira(totalFundsRaised)}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-500">
                        recorded of {formatNaira(campaign.goal)} target
                      </span>
                    </div>
                    <span className="text-sm font-bold text-emerald-700">
                      {campaignPercent}% Achieved
                    </span>
                  </div>

                  <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden p-0.5">
                    <div
                      className="bg-[#066842] h-full rounded-full transition-all duration-700 ease-out shadow-xs"
                      style={{ width: `${Math.min(100, Math.max(0, campaignPercent))}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold">
                      <span>{uniqueDonorsCount} Donors</span>
                    </div>
                    <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-800 text-xs sm:text-sm font-semibold">
                      <span>{donations.length} Contributions</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setEditingCampaign(!editingCampaign)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-slate-800 transition-all shadow-xs cursor-pointer active:scale-95"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">tune</span>
                      <span>{editingCampaign ? 'Close' : 'Adjust Campaign Goal'}</span>
                    </button>
                    <button
                      onClick={() => setShowDonationModal(true)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#066842] text-white font-bold text-xs sm:text-sm hover:bg-[#055234] transition-all cursor-pointer active:scale-95 shadow-xs"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">add</span>
                      <span>Record Gift</span>
                    </button>
                  </div>
                </div>

                {/* Inline Campaign Editor */}
                {editingCampaign && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      saveCampaign(campaignForm)
                      setEditingCampaign(false)
                      triggerNotice('Campaign details updated')
                    }}
                    className="mt-4 p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-4"
                  >
                    <h4 className="font-bold text-sm text-slate-900">Update Campaign Targets</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          Campaign Title
                        </label>
                        <input
                          type="text"
                          value={campaignForm.title}
                          onChange={(e) =>
                            setCampaignForm({ ...campaignForm, title: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          Funding Target (₦)
                        </label>
                        <input
                          type="number"
                          value={campaignForm.goal}
                          onChange={(e) =>
                            setCampaignForm({
                              ...campaignForm,
                              goal: Number(e.target.value) || 0,
                            })
                          }
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-xs"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setEditingCampaign(false)}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 rounded-lg bg-[#066842] text-white text-xs font-bold"
                      >
                        Save Targets
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </section>

            {/* Core Two-Column Administrative Hub (60% / 40%) */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (60%): Live Donation Stream Table */}
              <div className="lg:col-span-7 bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04),0_12px_28px_rgba(0,0,0,0.03)] p-6 lg:p-8 space-y-7 border border-slate-200/90">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      Donations &amp; Endowments Ledger
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Direct contributions, alumni gifts, and corporate sponsorships
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
                        <th className="py-3.5 px-6 font-bold">Donor / Benefactor</th>
                        <th className="py-3.5 px-4 font-bold">Allocation Fund</th>
                        <th className="py-3.5 px-4 font-bold text-right">Amount</th>
                        <th className="py-3.5 px-4 font-bold">Status</th>
                        <th className="py-3.5 px-6 font-bold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {filteredDonations.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="py-14 text-center">
                            <div className="max-w-sm mx-auto flex flex-col items-center gap-3">
                              <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                <span className="material-symbols-outlined text-[24px]">
                                  inbox
                                </span>
                              </div>
                              <h4 className="font-bold text-slate-800 text-sm">
                                No donation records yet
                              </h4>
                              <p className="text-xs text-slate-500">
                                Click below to record a donation, endowment pledge, or alumni gift.
                              </p>
                              <button
                                type="button"
                                onClick={() => setShowDonationModal(true)}
                                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#066842] text-white text-xs font-bold hover:bg-[#055234] shadow-xs cursor-pointer"
                              >
                                <span className="material-symbols-outlined text-[16px]">add</span>
                                <span>Record First Donation</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredDonations.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
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
                                      {item.tag || item.category}
                                    </span>
                                  </div>
                                  <span className="text-xs text-slate-400 truncate mt-0.5">
                                    {item.context} • {item.date}
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
                              </span>
                            </td>
                            <td className="py-4.5 px-4">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold whitespace-nowrap">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                                {item.status}
                              </span>
                            </td>
                            <td className="py-4.5 px-6 text-right">
                              <div className="flex items-center justify-end gap-1">
                                <button
                                  onClick={() => setActiveReceipt(item)}
                                  className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                                  title="View Receipt"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined text-[20px]">
                                    receipt_long
                                  </span>
                                </button>
                                <button
                                  onClick={() => handleDeleteDonation(item.id)}
                                  className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                                  title="Delete Record"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined text-[20px]">
                                    delete
                                  </span>
                                </button>
                              </div>
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
                    Showing {filteredDonations.length} of {donations.length} records
                  </span>
                  <button
                    onClick={() => setShowDonationModal(true)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#066842] hover:text-[#055234] transition-colors cursor-pointer self-start sm:self-auto"
                    type="button"
                  >
                    <span>+ Add New Entry</span>
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
                          Citizen &amp; School Inquiries
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          Submissions from public Contact Us page
                        </p>
                      </div>
                      {unreadInquiriesCount > 0 && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold shrink-0">
                          {unreadInquiriesCount} Pending
                        </span>
                      )}
                    </div>

                    <div className="space-y-4">
                      {inquiries.length === 0 ? (
                        <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-2">
                          <span className="material-symbols-outlined text-slate-400 text-[28px]">
                            mail
                          </span>
                          <p className="text-xs font-semibold text-slate-700">
                            No incoming inquiries right now.
                          </p>
                          <p className="text-[11px] text-slate-500">
                            When users submit messages via the public Contact Us form, they will automatically appear here.
                          </p>
                        </div>
                      ) : (
                        inquiries.map((inq) => (
                          <div
                            key={inq.id}
                            className={`p-4.5 rounded-2xl transition-all space-y-3 border ${
                              inq.status === 'Resolved'
                                ? 'bg-slate-50/50 border-slate-200 opacity-70'
                                : 'bg-slate-50/90 hover:bg-slate-50 border-slate-200/80'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="space-y-0.5 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-slate-900 text-sm truncate">
                                    {inq.name}
                                  </span>
                                  {inq.email && (
                                    <span className="text-[11px] text-slate-400 truncate">
                                      ({inq.email})
                                    </span>
                                  )}
                                </div>
                                <span className="text-xs font-semibold text-slate-700 block truncate">
                                  {inq.subject || 'General Inquiry'}
                                </span>
                              </div>
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 ${
                                  inq.status === 'Resolved'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {inq.status || 'Pending'}
                              </span>
                            </div>

                            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                              {inq.message}
                            </p>

                            <div className="flex items-center justify-between pt-1">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => setShowInquiryModal(inq)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all cursor-pointer active:scale-95"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined text-[14px]">
                                    visibility
                                  </span>
                                  <span>View</span>
                                </button>
                                {inq.email && (
                                  <a
                                    href={`mailto:${inq.email}?subject=RE: ${encodeURIComponent(
                                      inq.subject || 'KwaraETF Inquiry'
                                    )}`}
                                    className="px-3 py-1.5 rounded-xl bg-white text-slate-700 border border-slate-200 text-xs font-semibold hover:bg-slate-100 transition-all"
                                  >
                                    Reply
                                  </a>
                                )}
                              </div>
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => handleResolveInquiry(inq.id)}
                                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                                    inq.status === 'Resolved'
                                      ? 'text-emerald-700 hover:text-emerald-900'
                                      : 'text-slate-400 hover:text-emerald-700'
                                  }`}
                                  title={
                                    inq.status === 'Resolved'
                                      ? 'Mark as Pending'
                                      : 'Mark as Handled'
                                  }
                                  type="button"
                                >
                                  <span className="material-symbols-outlined text-[20px]">
                                    check_circle
                                  </span>
                                </button>
                                <button
                                  onClick={() => handleDeleteInquiry(inq.id)}
                                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
                                  title="Delete"
                                  type="button"
                                >
                                  <span className="material-symbols-outlined text-[20px]">
                                    delete
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* News & Announcements CMS */}
                  <div className="pt-5 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                          Announcements Queue
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          Draft notices and secretariat press statements
                        </p>
                      </div>
                      <button
                        onClick={() => setShowPostModal(true)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#066842] text-white text-xs font-bold hover:bg-[#055234] transition-colors shadow-2xs cursor-pointer active:scale-95"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">edit_document</span>
                        <span>New Post</span>
                      </button>
                    </div>

                    <div className="space-y-3">
                      {announcements.length === 0 ? (
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-1">
                          <p className="text-xs font-semibold text-slate-700">
                            No custom announcements drafted yet.
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Click 'New Post' to create your first announcement draft.
                          </p>
                        </div>
                      ) : (
                        announcements.map((post) => (
                          <div
                            key={post.id}
                            className="p-4 rounded-2xl bg-slate-50/80 hover:bg-slate-50 flex items-center justify-between gap-4 border border-slate-200/70 transition-all"
                          >
                            <div className="space-y-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                                  {post.category}
                                </span>
                                <span className="text-xs text-slate-400 truncate">
                                  {post.date} • {post.author}
                                </span>
                              </div>
                              <h5 className="text-sm font-bold text-slate-900 truncate">
                                {post.title}
                              </h5>
                            </div>
                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-red-600 transition-all shrink-0 cursor-pointer shadow-2xs"
                              title="Delete announcement"
                              type="button"
                            >
                              <span className="material-symbols-outlined text-[18px]">
                                delete
                              </span>
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Record Donation Modal */}
      {showDonationModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-fade-in"
          onClick={() => setShowDonationModal(false)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl border border-slate-200 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#066842] text-[24px]">
                  payments
                </span>
                <h4 className="font-extrabold text-slate-900 text-lg">Record Real Donation</h4>
              </div>
              <button
                type="button"
                onClick={() => setShowDonationModal(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <form onSubmit={handleAddDonation} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Donor / Benefactor Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Offa Community Development Assn or Dr. A. Bello"
                  value={donationForm.donor}
                  onChange={(e) => setDonationForm({ ...donationForm, donor: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:bg-white focus:border-slate-900"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Amount (₦) *
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 500000"
                    value={donationForm.amount}
                    onChange={(e) => setDonationForm({ ...donationForm, amount: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:bg-white focus:border-slate-900"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Category</label>
                  <select
                    value={donationForm.category}
                    onChange={(e) => setDonationForm({ ...donationForm, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:bg-white focus:border-slate-900"
                  >
                    <option value="One-time">One-time Gift</option>
                    <option value="Monthly">Monthly Partner</option>
                    <option value="Corporate">Corporate / Philanthropic</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Allocation Initiative / Fund
                </label>
                <select
                  value={donationForm.allocation}
                  onChange={(e) => setDonationForm({ ...donationForm, allocation: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:bg-white focus:border-slate-900"
                >
                  <option value="Scholarship Intervention Fund">
                    Scholarship Intervention Fund
                  </option>
                  <option value="Adopt-A-School Public Infrastructure">
                    Adopt-A-School Public Infrastructure
                  </option>
                  <option value="Teachers Lounge & Capacity Building">
                    Teachers Lounge &amp; Capacity Building
                  </option>
                  <option value="STEM & Digital Literacy Expansion">
                    STEM &amp; Digital Literacy Expansion
                  </option>
                  <option value="General KwaraETF Endowment">General KwaraETF Endowment</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Reference Context / Note
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alumni 1998 Set donation or Bank Transfer Ref"
                  value={donationForm.context}
                  onChange={(e) => setDonationForm({ ...donationForm, context: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:bg-white focus:border-slate-900"
                />
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowDonationModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#066842] text-white text-xs font-bold hover:bg-[#055234] shadow-sm cursor-pointer"
                >
                  Save to Ledger
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* New Post Modal */}
      {showPostModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-fade-in"
          onClick={() => setShowPostModal(false)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl border border-slate-200 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#066842] text-[24px]">
                  campaign
                </span>
                <h4 className="font-extrabold text-slate-900 text-lg">New Announcement</h4>
              </div>
              <button
                type="button"
                onClick={() => setShowPostModal(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <form onSubmit={handleAddPost} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Headline *</label>
                <input
                  type="text"
                  placeholder="e.g. KwaraETF Announces 2026 Bursary Application Window"
                  value={postForm.title}
                  onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:bg-white focus:border-slate-900"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Category</label>
                  <select
                    value={postForm.category}
                    onChange={(e) => setPostForm({ ...postForm, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                  >
                    <option value="Official Announcement">Official Announcement</option>
                    <option value="Scholarship Dispatch">Scholarship Dispatch</option>
                    <option value="Infrastructure Upgrade">Infrastructure Upgrade</option>
                    <option value="Press Statement">Press Statement</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Author</label>
                  <input
                    type="text"
                    value={postForm.author}
                    onChange={(e) => setPostForm({ ...postForm, author: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Summary / Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Key briefing points or public release statement..."
                  value={postForm.summary}
                  onChange={(e) => setPostForm({ ...postForm, summary: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:bg-white focus:border-slate-900"
                />
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowPostModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#066842] text-white text-xs font-bold hover:bg-[#055234] shadow-sm cursor-pointer"
                >
                  Save Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Inquiry Detail Modal */}
      {showInquiryModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4 animate-fade-in"
          onClick={() => setShowInquiryModal(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-white p-7 shadow-2xl border border-slate-200 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#066842] text-[24px]">mail</span>
                <h4 className="font-extrabold text-slate-900 text-lg">Inquiry Details</h4>
              </div>
              <button
                type="button"
                onClick={() => setShowInquiryModal(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase">Sender</span>
                <p className="font-bold text-slate-900 text-base">{showInquiryModal.name}</p>
                <p className="text-xs text-slate-500">{showInquiryModal.email}</p>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase">Subject</span>
                <p className="font-semibold text-slate-800">
                  {showInquiryModal.subject || 'General Inquiry'}
                </p>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase">Date</span>
                <p className="text-xs text-slate-600">{showInquiryModal.date}</p>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-semibold uppercase">Message</span>
                <div className="mt-1 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed max-h-48 overflow-y-auto whitespace-pre-wrap">
                  {showInquiryModal.message}
                </div>
              </div>
            </div>

            <div className="pt-3 flex gap-2">
              {showInquiryModal.email && (
                <a
                  href={`mailto:${showInquiryModal.email}?subject=RE: ${encodeURIComponent(
                    showInquiryModal.subject || 'KwaraETF Inquiry'
                  )}`}
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 text-center shadow-xs"
                >
                  Reply via Email
                </a>
              )}
              <button
                type="button"
                onClick={() => {
                  handleResolveInquiry(showInquiryModal.id)
                  setShowInquiryModal(null)
                }}
                className="px-4 py-2.5 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold hover:bg-emerald-200 cursor-pointer"
              >
                {showInquiryModal.status === 'Resolved' ? 'Re-open' : 'Mark Handled'}
              </button>
              <button
                type="button"
                onClick={() => handleDeleteInquiry(showInquiryModal.id)}
                className="px-4 py-2.5 rounded-xl bg-red-50 text-red-700 text-xs font-bold hover:bg-red-100 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Official Receipt Modal */}
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
                <span className="material-symbols-outlined text-[#066842] text-[24px]">
                  receipt
                </span>
                <h4 className="font-extrabold text-slate-900 text-lg">Official Trust Fund Receipt</h4>
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
                <span className="text-slate-500">Receipt Ref:</span>
                <span className="font-mono text-xs font-bold text-slate-800">
                  KETF-{activeReceipt.id?.slice(-8).toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Donor / Benefactor:</span>
                <span className="font-bold text-slate-900">{activeReceipt.donor}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Fund Allocation:</span>
                <span className="font-semibold text-slate-800">{activeReceipt.allocation}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Amount:</span>
                <span className="font-extrabold text-[#066842] text-lg">
                  {activeReceipt.amount}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Date:</span>
                <span className="font-medium text-slate-700">{activeReceipt.date}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Status:</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  {activeReceipt.status || 'Verified'}
                </span>
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  window.print()
                }}
                className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 shadow-sm cursor-pointer"
              >
                Print Receipt
              </button>
              <button
                type="button"
                onClick={() => setActiveReceipt(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 cursor-pointer"
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
