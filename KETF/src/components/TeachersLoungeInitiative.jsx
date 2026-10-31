import { useState } from 'react'

const galleryImages = [
  {
    src: '/project-teachers-lounge.jpg',
    caption: 'Kwara educators and teaching faculty during a professional development summit',
  },
  {
    src: '/teachers-lounge-lab.jpg',
    caption: 'Equipped digital workstation lab designed for modern instructional tools and teacher drop-ins',
  },
]

const TeachersLoungeInitiative = ({ onNavigate }) => {
  const [activeImage, setActiveImage] = useState(0)
  const [selectedAmount, setSelectedAmount] = useState('25000')
  const [customAmount, setCustomAmount] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [donorName, setDonorName] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleNav = (target) => (e) => {
    if (onNavigate) {
      if (e && e.preventDefault) e.preventDefault()
      onNavigate(target)
    }
  }

  const handleDonateSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Banner */}
      <section className="relative overflow-hidden bg-[#066842] py-14 sm:py-20 text-white">
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#5a3210] via-[#c8b268] to-[#084d49]" />

        {/* Ambient background rings */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full border border-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full border border-white/10" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c8b268]">
            <a href="#home" onClick={handleNav('#home')} className="hover:text-white transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="#projects" onClick={handleNav('#projects')} className="hover:text-white transition-colors">
              Projects
            </a>
            <span>/</span>
            <span className="text-white">Teachers’ Lounge Initiative</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1 text-xs font-semibold text-[#c8b268] mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8b268]" />
              <span>Capital Project &amp; Teacher Training Hub</span>
            </div>
            <h1
              style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight"
            >
              Teachers’ Lounge Initiative
            </h1>
            <p className="mt-3 text-base sm:text-lg text-emerald-50/90 leading-relaxed font-normal">
              A flagship Continuous Professional Development (CPD) facility supporting educator excellence across Kwara State.
            </p>
          </div>
        </div>

        {/* Bottom Accent Gradient Line */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#084d49] via-[#c8b268] to-[#5a3210]" />
      </section>

      {/* Main Campaign Layout */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Visual Gallery & Detailed Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Interactive Image Gallery */}
            <div className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-gray-900">
                <img
                  src={galleryImages[activeImage].src}
                  alt="Teachers Lounge Initiative"
                  className="h-full w-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <p className="absolute bottom-4 left-4 right-4 text-xs sm:text-sm text-white/95 font-medium leading-snug">
                  {galleryImages[activeImage].caption}
                </p>
              </div>

              {/* Gallery Controls & Thumbnails */}
              <div className="flex items-center justify-between p-4 bg-[#FAFBFD] border-t border-gray-100">
                <div className="flex items-center gap-2">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={img.src}
                      onClick={() => setActiveImage(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeImage === idx
                          ? 'w-7 bg-[#066842]'
                          : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                    className="p-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-[#066842] hover:text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActiveImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                    className="p-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-[#066842] hover:text-white transition-colors"
                    aria-label="Next image"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Campaign Narrative */}
            <div className="rounded-2xl border border-gray-200/90 bg-white p-7 sm:p-9 shadow-sm">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#066842] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#066842]" />
                <span>Project Overview &amp; Mandate</span>
              </div>

              <h2
                style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
                className="text-2xl sm:text-3xl font-black text-[#103C20] mb-5 tracking-tight"
              >
                About the Initiative
              </h2>

              {/* Gold Divider */}
              <div className="mb-6 h-0.5 w-14 bg-[#c8b268]" />

              <div className="space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  The <strong className="text-gray-900">Teachers’ Lounge</strong> is a proposed Continuous Professional Development (CPD) hub designed to support and enhance teacher training efforts across Kwara State.
                </p>
                <p>
                  It will accommodate up to <strong>100 teachers at a time</strong> and reach over <strong>3,000 teachers</strong> through structured, high-impact scheduled training sessions.
                </p>
                <p>
                  The space will also remain open for individual drop-ins, providing educators with direct, unrestricted access to contemporary learning resources, digital tools, high-speed connectivity, and ongoing professional peer support.
                </p>
              </div>

              {/* Strategic Capacity Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div className="rounded-xl bg-[#F4F7FC] p-4 text-center border border-gray-100">
                  <span className="block text-2xl font-black text-[#103C20]">100</span>
                  <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Capacity per session</span>
                </div>
                <div className="rounded-xl bg-[#F4F7FC] p-4 text-center border border-gray-100">
                  <span className="block text-2xl font-black text-[#066842]">3,000+</span>
                  <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Teachers reached annually</span>
                </div>
                <div className="rounded-xl bg-[#F4F7FC] p-4 text-center border border-gray-100">
                  <span className="block text-2xl font-black text-[#c8b268]">Drop-in</span>
                  <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Digital tools &amp; resources</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Funding Terminal & Donation Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-md">
              {/* Card Header Strip */}
              <div className="bg-[#072417] p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c8b268]">
                    Funding Campaign
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Appeal
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-bold text-white">
                  Support the Teachers’ Lounge
                </h3>
              </div>

              {/* Progress & Financial Metrics */}
              <div className="p-6 sm:p-7 space-y-6">
                {/* 3-Column Stats Counter */}
                <div className="grid grid-cols-3 divide-x divide-gray-200 text-center pb-2">
                  <div className="px-2">
                    <span className="block text-lg sm:text-xl font-black text-[#103C20]">₦ 0</span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Raised</span>
                  </div>
                  <div className="px-2">
                    <span className="block text-lg sm:text-xl font-black text-[#103C20]">0</span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Donations</span>
                  </div>
                  <div className="px-2">
                    <span className="block text-lg sm:text-xl font-black text-[#066842]">₦ 51,007,000</span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Target Goal</span>
                  </div>
                </div>

                {/* Progress Bar Track */}
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5 font-medium">
                    <span>Fundraising Progress</span>
                    <span className="font-bold text-[#066842]">0% of target</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden border border-gray-200/80">
                    <div
                      className="h-full bg-gradient-to-r from-[#066842] to-[#c8b268] transition-all duration-500"
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>

                {/* Amount Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                    Select Contribution Amount
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['10000', '25000', '50000', '100000', '250000'].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amt)
                          setCustomAmount('')
                        }}
                        className={`rounded-lg py-2.5 text-xs font-bold transition-all ${
                          selectedAmount === amt && !customAmount
                            ? 'bg-[#066842] text-white shadow-xs'
                            : 'bg-gray-50 border border-gray-200 text-gray-800 hover:bg-gray-100'
                        }`}
                      >
                        ₦ {parseInt(amt).toLocaleString()}
                      </button>
                    ))}
                    <input
                      type="number"
                      placeholder="Custom"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setSelectedAmount('')
                      }}
                      className={`rounded-lg border px-2.5 py-2 text-xs font-semibold text-center outline-none transition-all ${
                        customAmount
                          ? 'border-[#066842] ring-1 ring-[#066842] bg-white'
                          : 'border-gray-200 bg-gray-50 text-gray-800'
                      }`}
                    />
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#066842] hover:bg-[#055737] px-6 py-4 text-base font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                >
                  <span>Donate Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Security Footnote */}
                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Official KETF Statutory Trust Account</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-600">
              <p className="font-semibold text-gray-900 mb-1">Corporate &amp; Institutional Partnerships</p>
              <p className="text-xs leading-relaxed text-gray-500">
                For endowment inquiries, MoUs, or CSR partnerships on this facility, contact our secretariat at <a href="mailto:info@kwaraetf.gov.ng" className="text-[#066842] font-semibold underline">info@kwaraetf.gov.ng</a>.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Donation Modal / Official Bank Account Drawer */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="bg-[#072417] p-5 text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c8b268]">
                  Direct Contribution
                </span>
                <h3 className="text-lg font-bold">KETF Statutory Fund</h3>
              </div>
              <button
                onClick={() => {
                  setIsModalOpen(false)
                  setIsSubmitted(false)
                }}
                className="rounded-lg p-1 text-gray-400 hover:bg-white/10 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Thank You For Your Pledge!</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Our secretariat has recorded your support intention. We will be in touch with the official statutory receipt.
                  </p>
                  <button
                    onClick={() => {
                      setIsModalOpen(false)
                      setIsSubmitted(false)
                    }}
                    className="mt-5 rounded-lg bg-[#066842] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#055737]"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDonateSubmit} className="space-y-4">
                  <div className="rounded-xl bg-[#F4F7FC] p-4 border border-gray-100 text-xs space-y-1.5 text-gray-700">
                    <p className="font-bold text-[#103C20] uppercase tracking-wide">Statutory Bank Account Details:</p>
                    <p><strong>Bank:</strong> First Bank of Nigeria</p>
                    <p><strong>Account Name:</strong> Kwara State Education Trust Fund</p>
                    <p><strong>Account Number:</strong> 2034981123</p>
                    <p className="text-[11px] text-gray-500 pt-1">Reference: <em>Teachers Lounge - CPD Hub</em></p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        placeholder="Full Name / Organization"
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs outline-none focus:border-[#066842]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs outline-none focus:border-[#066842]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#066842] py-3 text-xs font-bold text-white hover:bg-[#055737] shadow-sm transition-all"
                  >
                    Confirm &amp; Record Pledge (₦ {parseInt(customAmount || selectedAmount || '0').toLocaleString()})
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeachersLoungeInitiative

