import { useState, useEffect, useRef } from 'react'

const DEVICES = [
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    category: 'Apple iOS',
    width: 393,
    height: 852,
    radius: 'rounded-[50px]',
    innerRadius: 'rounded-[44px]',
    notchType: 'dynamic-island',
  },
  {
    id: 'samsung-s24',
    name: 'Galaxy S24',
    category: 'Android',
    width: 360,
    height: 780,
    radius: 'rounded-[42px]',
    innerRadius: 'rounded-[36px]',
    notchType: 'punch-hole',
  },
  {
    id: 'pixel-8',
    name: 'Google Pixel 8',
    category: 'Android',
    width: 412,
    height: 915,
    radius: 'rounded-[46px]',
    innerRadius: 'rounded-[40px]',
    notchType: 'punch-hole',
  },
  {
    id: 'iphone-se',
    name: 'iPhone SE',
    category: 'Compact',
    width: 375,
    height: 667,
    radius: 'rounded-[36px]',
    innerRadius: 'rounded-[30px]',
    notchType: 'classic',
  },
]

const QUICK_PAGES = [
  { label: '⚡ Admin Dashboard (Demo)', hash: '#admin' },
  { label: '📰 News & Media (Page 1)', hash: '#news' },
  { label: '📰 News & Media (Page 2)', hash: '#news-page-2' },
  { label: '📰 News & Media (Page 3)', hash: '#news-page-3' },
  { label: '📰 News & Media (Page 4)', hash: '#news-page-4' },
  { label: '📰 News & Media (Page 5)', hash: '#news-page-5' },
  { label: '📰 News & Media (Page 6)', hash: '#news-page-6' },
  { label: '📰 News & Media (Page 7)', hash: '#news-page-7' },
  { label: '📜 The Law (Resources)', hash: '#the-law' },
  { label: '💰 Financials (Resources)', hash: '#financials' },
  { label: '📘 Prospectus (Resources)', hash: '#prospectus' },
  { label: '📊 Quarterly Reports (Resources)', hash: '#quarterly-reports' },
  { label: '📈 Impact Reports (Resources)', hash: '#impact-reports' },
  { label: '🛡️ Audit Reports (Resources)', hash: '#audit-reports' },
  { label: '📋 Policies & Guidelines (Resources)', hash: '#policies-and-guidelines' },
  { label: '🕊️ In Memoriam (Moses Jimoh)', hash: '#news-in-memoriam' },
  { label: '🏛️ Chairman Anniversary Statement', hash: '#news-anniversary-office' },
  { label: '🌐 World Bank Global Forum', hash: '#news-world-bank-abuja' },
  { label: '🏫 Adopt-A-School Drive Launch', hash: '#news-adopt-a-school-drive' },
  { label: '🏠 KwaraETF Home', hash: '#home' },
]

export const MobileSimulator = ({ activeRoute = '#news' }) => {
  // Prevent rendering if already inside an iframe simulator
  const [isIframe, setIsIframe] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDevice, setSelectedDevice] = useState(DEVICES[0])
  const [isLandscape, setIsLandscape] = useState(false)
  const [scale, setScale] = useState(0.85)
  const [currentSimHash, setCurrentSimHash] = useState(activeRoute || '#news')
  const [currentTime, setCurrentTime] = useState('9:41')
  const iframeRef = useRef(null)

  useEffect(() => {
    try {
      setIsIframe(window.self !== window.top)
    } catch {
      setIsIframe(true)
    }

    const updateClock = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, '0')
      const mins = now.getMinutes().toString().padStart(2, '0')
      setCurrentTime(`${hours}:${mins}`)
    }
    updateClock()
    const interval = setInterval(updateClock, 30000)
    return () => clearInterval(interval)
  }, [])

  // Auto-fit scale on small desktop screens
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const h = window.innerHeight
      if (h < 750) setScale(0.7)
      else if (h < 900) setScale(0.8)
      else setScale(0.88)
    }
  }, [isOpen])

  // Sync simulator hash when parent activeRoute changes while closed
  useEffect(() => {
    if (!isOpen && activeRoute) {
      setCurrentSimHash(activeRoute)
    }
  }, [activeRoute, isOpen])

  if (isIframe) return null

  const simWidth = isLandscape ? selectedDevice.height : selectedDevice.width
  const simHeight = isLandscape ? selectedDevice.width : selectedDevice.height

  const handleSelectPage = (newHash) => {
    setCurrentSimHash(newHash)
    if (iframeRef.current) {
      const baseUrl = window.location.origin + window.location.pathname
      iframeRef.current.src = `${baseUrl}${newHash}`
    }
  }

  const handleReload = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.location?.reload()
    }
  }

  return (
    <>
      {/* Floating Trigger Pill */}
      {!isOpen && (
        <aside
          aria-label="Mobile Simulation Tools"
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2 group print:hidden animate-fade-in"
        >
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 rounded-full border-2 border-[#c8b268] bg-[#066842] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#055234] hover:shadow-[#066842]/40 active:scale-95 cursor-pointer ring-4 ring-[#066842]/20"
            title="Open Mobile Simulator to preview News & Resources on smartphones"
          >
            <span className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8b268] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f3df9d]" />
            </span>
            <span className="text-base">📱</span>
            <span className="font-semibold tracking-wide">Mobile Simulator</span>
            <span className="rounded-full bg-[#c8b268] px-2 py-0.5 text-[10px] font-extrabold uppercase text-[#064e3b] shadow-2xs">
              Live
            </span>
          </button>
        </aside>
      )}

      {/* Simulator Modal Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-6 overflow-hidden animate-fade-in select-none"
          onClick={() => setIsOpen(false)}
        >
          {/* Main Simulator Container */}
          <div
            className="relative flex flex-col h-[96vh] max-h-[96vh] w-full max-w-6xl rounded-3xl bg-[#0f172a] border border-slate-700/80 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 bg-slate-900/90 px-4 py-3 sm:px-6">
              {/* Left Brand & Title */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#066842] to-[#c8b268] text-white font-black text-sm shadow-sm">
                  📱
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    KwaraETF Mobile Simulator
                    <span className="hidden sm:inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/30">
                      Viewport Testing
                    </span>
                  </h3>
                  <p className="text-[11px] text-slate-400 hidden sm:block">
                    Simulating mobile screen experience for KwaraETF news dispatches &amp; resources
                  </p>
                </div>
              </div>

              {/* Center Controls: Device, Orientation, Scale, Quick Jump */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* Device Selector */}
                <div className="flex items-center rounded-lg bg-slate-800 p-0.5 border border-slate-700">
                  {DEVICES.map((dev) => (
                    <button
                      key={dev.id}
                      type="button"
                      onClick={() => setSelectedDevice(dev)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                        selectedDevice.id === dev.id
                          ? 'bg-[#066842] text-white shadow-xs'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      {dev.name}
                    </button>
                  ))}
                </div>

                {/* Rotate Orientation */}
                <button
                  type="button"
                  onClick={() => setIsLandscape(!isLandscape)}
                  className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                    isLandscape
                      ? 'border-[#c8b268] bg-[#c8b268]/20 text-[#f3df9d]'
                      : 'border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                  title="Rotate Device"
                >
                  <span>🔄</span>
                  <span className="hidden md:inline">{isLandscape ? 'Landscape' : 'Portrait'}</span>
                </button>

                {/* Scale Selector */}
                <div className="hidden lg:flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300">
                  <span className="text-slate-400">Zoom:</span>
                  {[0.75, 0.85, 1.0].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setScale(s)}
                      className={`px-1.5 py-0.5 rounded cursor-pointer ${
                        scale === s ? 'bg-[#066842] text-white font-bold' : 'hover:text-white'
                      }`}
                    >
                      {Math.round(s * 100)}%
                    </button>
                  ))}
                </div>

                {/* Page Jump Dropdown */}
                <select
                  value={currentSimHash}
                  onChange={(e) => handleSelectPage(e.target.value)}
                  className="rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200 outline-hidden hover:border-[#c8b268] cursor-pointer"
                >
                  {QUICK_PAGES.map((qp) => (
                    <option key={qp.hash} value={qp.hash} className="bg-slate-900 text-white">
                      {qp.label}
                    </option>
                  ))}
                </select>

                {/* Reload Button */}
                <button
                  type="button"
                  onClick={handleReload}
                  className="rounded-lg border border-slate-700 bg-slate-800 p-1.5 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  title="Reload Simulator View"
                  aria-label="Reload simulator iframe"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg bg-red-500/20 border border-red-500/30 p-1.5 text-red-300 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                  title="Close Simulator"
                  aria-label="Close Mobile Simulator"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </header>

            {/* Device Canvas Workspace */}
            <div className="relative flex-1 overflow-auto bg-slate-950 p-4 sm:p-8 flex items-center justify-center">
              {/* Outer Device Chassis Wrapper with Scale transform */}
              <div
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.2s ease, width 0.3s ease, height 0.3s ease',
                }}
                className="relative"
              >
                {/* Smartphone Realistic Chassis */}
                <div
                  style={{
                    width: `${simWidth}px`,
                    height: `${simHeight}px`,
                  }}
                  className={`relative ${selectedDevice.radius} border-[10px] border-[#222834] bg-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_0_2px_rgba(255,255,255,0.15)] ring-1 ring-slate-800 overflow-hidden flex flex-col`}
                >
                  {/* Dynamic Hardware Notch / Island */}
                  {selectedDevice.notchType === 'dynamic-island' && !isLandscape && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-6 w-28 rounded-full bg-black shadow-inner flex items-center justify-between px-2.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#111] ring-1 ring-white/10" />
                      <div className="h-2 w-2 rounded-full bg-emerald-500/60 ring-1 ring-emerald-400/40" />
                    </div>
                  )}

                  {selectedDevice.notchType === 'punch-hole' && !isLandscape && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-3.5 w-3.5 rounded-full bg-black ring-1 ring-white/20 shadow-inner" />
                  )}

                  {/* Device Status Bar */}
                  <div className="relative z-20 flex h-8 w-full items-center justify-between px-6 text-white text-[11px] font-semibold bg-black/95 select-none shrink-0">
                    <span>{currentTime}</span>
                    <div className="flex items-center gap-1.5 text-xs">
                      {/* Signal 5G */}
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                        <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.45.45-.45 1.18 0 1.63.45.45 1.18.45 1.63 0l1.8-1.8C9.31 20.25 10.6 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                      </svg>
                      {/* Wi-Fi */}
                      <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                        <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4zm0 3c3.75 0 7.15 1.48 9.68 3.91L12 18.66 2.32 10.91C4.85 8.48 8.25 7 12 7z" />
                      </svg>
                      {/* Battery 100% */}
                      <div className="flex items-center gap-0.5">
                        <div className="h-2.5 w-5 rounded-xs border border-white p-0.5 flex items-center">
                          <div className="h-full w-full bg-white rounded-2xs" />
                        </div>
                        <div className="h-1 w-0.5 bg-white rounded-r-xs" />
                      </div>
                    </div>
                  </div>

                  {/* Embedded Live Webview Frame */}
                  <div className="relative flex-1 w-full bg-white overflow-hidden">
                    <iframe
                      ref={iframeRef}
                      src={`${window.location.origin}${window.location.pathname}${currentSimHash}`}
                      title="KwaraETF Mobile Live Webview"
                      className="w-full h-full border-0 select-auto"
                      style={{
                        WebkitOverflowScrolling: 'touch',
                      }}
                    />
                  </div>

                  {/* Device Bottom Home Indicator Bar */}
                  <div className="relative z-20 flex h-5 w-full items-center justify-center bg-black/95 select-none shrink-0">
                    <div className="h-1 w-28 rounded-full bg-white/70" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Details */}
            <footer className="flex flex-wrap items-center justify-between border-t border-slate-700/80 bg-slate-900 px-4 py-2 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-slate-200">
                  {selectedDevice.name}
                </span>
                <span>&bull;</span>
                <span>
                  {simWidth} × {simHeight} px
                </span>
                <span>&bull;</span>
                <span className="text-emerald-400">100% Native CSS Media Queries Tested</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Test touches, pagination, and article modals live in real-time
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileSimulator

