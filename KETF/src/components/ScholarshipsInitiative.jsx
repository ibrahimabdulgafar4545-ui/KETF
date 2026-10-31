import { useState } from 'react'

const galleryImages = [
  {
    src: '/initiative-scholarship.jpg',
    caption: 'Statewide scholarship examination hall for top-performing pupils across Kwara Local Government Areas',
  },
  {
    src: '/initiative-5year.jpg',
    caption: 'Supported student focusing on excellence during a sponsored learning session',
  },
  {
    src: '/teachers-lounge-lab.jpg',
    caption: 'Equipped digital classroom environment supported by Kwara State Education Trust Fund',
  },
]

const ScholarshipsInitiative = ({ onNavigate }) => {
  const [activeImage, setActiveImage] = useState(0)
  const [selectedAmount, setSelectedAmount] = useState('50000')
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
    <div className="min-h-screen bg-[#F4F7F5]">
      {/* Editorial Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#072417] via-[#064e3b] to-[#084d49] py-16 sm:py-24 text-white">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#5a3210] via-[#c8b268] to-[#066842]" />

        {/* Ambient background rings */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c8b268]">
            <a href="#home" onClick={handleNav('#home')} className="hover:text-white transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="#projects" onClick={handleNav('#projects')} className="hover:text-white transition-colors">
              Projects
            </a>
            <span>/</span>
            <span className="text-white">Scholarships</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1 text-xs font-semibold text-[#c8b268] mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8b268]" />
              <span>Student Sponsorship &amp; Merit Continuity Fund</span>
            </div>
            <h1
              style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight"
            >
              Scholarships
            </h1>
            <p className="mt-4 text-base sm:text-xl text-emerald-50/90 leading-relaxed font-normal max-w-2xl">
              Removing financial barriers and enabling deserving pupils across Kwara State to realize their academic potential.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#084d49] via-[#c8b268] to-[#5a3210]" />
      </section>

      {/* Main Campaign Container */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Narrative, Rationale & Media (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Featured Image Viewer */}
            <div className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm">
              <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-gray-900">
                <img
                  src={galleryImages[activeImage].src}
                  alt="KwaraETF Scholarship"
                  className="h-full w-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <p className="absolute bottom-4 left-4 right-4 text-xs sm:text-sm text-white/95 font-medium leading-snug">
                  {galleryImages[activeImage].caption}
                </p>
              </div>

              {/* Gallery Controls */}
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

            {/* Campaign Statement */}
            <div className="rounded-2xl border border-gray-200/90 bg-white p-7 sm:p-10 shadow-sm">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#066842] mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#066842]" />
                <span>Our Mandate &amp; Commitment</span>
              </div>

              <h2
                style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
                className="text-2xl sm:text-3xl font-black text-[#103C20] mb-4 tracking-tight"
              >
                Expanding Access Through Scholarships
              </h2>

              <div className="mb-6 h-0.5 w-14 bg-[#c8b268]" />

              <div className="space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  The <strong className="text-gray-900">Kwara State Education Trust Fund</strong> is committed to expanding access to quality education for all children in the state.
                </p>
                <p>
                  Through your support, we are able to provide scholarships that remove financial barriers and enable deserving pupils to continue their studies uninterrupted.
                </p>
                <p>
                  Your contribution strengthens our shared vision of building a knowledgeable and empowered future for Kwara.
                </p>
              </div>

              {/* Key Impact Pillars */}
              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-xl bg-[#F0F6F2] p-4 text-center border border-[#066842]/15">
                  <span className="block text-xl font-bold text-[#066842]">Top 180</span>
                  <span className="text-xs font-medium text-gray-600">Performing Pupils Target</span>
                </div>
                <div className="rounded-xl bg-[#F0F6F2] p-4 text-center border border-[#066842]/15">
                  <span className="block text-xl font-bold text-[#103C20]">16 LGAs</span>
                  <span className="text-xs font-medium text-gray-600">Statewide Equal Access</span>
                </div>
                <div className="rounded-xl bg-[#F0F6F2] p-4 text-center border border-[#066842]/15">
                  <span className="block text-xl font-bold text-[#a27e46]">100% Direct</span>
                  <span className="text-xs font-medium text-gray-600">Transparent Fund Routing</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Funding Terminal & Donation Terminal (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-md">
              {/* Terminal Header */}
              <div className="bg-[#072417] p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c8b268]">
                    Scholarship Appeal
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Campaign
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-bold text-white">
                  Sponsor Deserving Scholars
                </h3>
              </div>

              {/* Financial Metrics */}
              <div className="p-6 sm:p-7 space-y-6">
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
                    <span className="block text-base sm:text-lg font-black text-[#066842]">₦ 72,188,820</span>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Target Goal</span>
                  </div>
                </div>

                {/* Progress Bar */}
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

                {/* Contribution Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5">
                    Select Contribution Amount
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['25000', '50000', '100000', '250000', '500000'].map((amt) => (
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

                {/* CTA Action */}
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

            {/* Endowment Note */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 text-sm text-gray-600">
              <p className="font-semibold text-gray-900 mb-1">Corporate &amp; Named Scholarships</p>
              <p className="text-xs leading-relaxed text-gray-500">
                To establish a named endowment or corporate sponsorship package for pupils in your LGA, please email <a href="mailto:info@kwaraetf.gov.ng" className="text-[#066842] font-semibold underline">info@kwaraetf.gov.ng</a>.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Official Pledge Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="bg-[#072417] p-5 text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#c8b268]">
                  Direct Contribution
                </span>
                <h3 className="text-lg font-bold">KETF Scholarship Fund</h3>
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
                  <h4 className="text-lg font-bold text-gray-900">Thank You For Sponsoring a Child!</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Our team has recorded your scholarship pledge. An official statutory acknowledgment and payment tracking receipt will be issued to your email.
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
                  <div className="rounded-xl bg-[#F0F6F2] p-4 border border-[#066842]/15 text-xs space-y-1.5 text-gray-700">
                    <p className="font-bold text-[#103C20] uppercase tracking-wide">Official Scholarship Bank Account:</p>
                    <p><strong>Bank:</strong> First Bank of Nigeria</p>
                    <p><strong>Account Name:</strong> Kwara State Education Trust Fund - Scholarships</p>
                    <p><strong>Account Number:</strong> 2034981130</p>
                    <p className="text-[11px] text-gray-500 pt-1">Reference: <em>Scholarship Merit Fund</em></p>
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

export default ScholarshipsInitiative

