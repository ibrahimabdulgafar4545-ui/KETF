import { useState, useEffect, useRef } from 'react'

const DEVICES = [
  { id: 'iphone15', name: 'iPhone 15 Pro', width: 393, height: 852, type: 'ios', bezel: 'rounded-[50px]' },
  { id: 'galaxys24', name: 'Galaxy S24', width: 412, height: 915, type: 'android', bezel: 'rounded-[42px]' },
  { id: 'iphonese', name: 'iPhone SE', width: 375, height: 667, type: 'ios', bezel: 'rounded-[32px]' },
  { id: 'pixel8', name: 'Pixel 8', width: 412, height: 892, type: 'android', bezel: 'rounded-[44px]' },
]

const QUICK_PAGES = [
  { label: 'Home', hash: '#home' },
  { label: 'News (Pg 1)', hash: '#news' },
  { label: 'News (Pg 2)', hash: '#news-page-2' },
  { label: 'News (Pg 4)', hash: '#news-page-4' },
  { label: 'About', hash: '#about' },
  { label: 'Initiatives', hash: '#5-year-development-plan' },
  { label: 'Contact', hash: '#contact' },
]

export const MobileSimulator = ({ activeRoute = '#home', onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDevice, setSelectedDevice] = useState(DEVICES[0])
  const [isLandscape, setIsLandscape] = useState(false)
  const [scale, setScale] = useState(0.85)
  const [currentUrl, setCurrentUrl] = useState('')
  const [simTime, setSimTime] = useState('9:41')
  const iframeRef = useRef(null)

  // Don't render simulator trigger if already inside an iframe
  const isInsideIframe = typeof window !== 'undefined' && window.self !== window.top

  useEffect(() => {
    // Sync current time for realistic status bar
    const updateClock = () => {
      const now = new Date()
      let hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, '0')
      hours = hours % 12 || 12
      setSimTime(`${hours}:${minutes}`)
    }
    updateClock()
    const timer = setInterval(updateClock, 30000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const origin = window.location.origin
      const pathname = window.location.pathname
      const hash = activeRoute && activeRoute !== '#home' ? activeRoute : ''
      setCurrentUrl(`${origin}${pathname}${hash ? hash : ''}`)
    }
  }, [activeRoute, isOpen])

  // Keyboard shortcut to close (ESC)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleDeviceChange = (device) => {
    setSelectedDevice(device)
  }

  const handlePageSelect = (hash) => {
    if (iframeRef.current) {
      try {
        iframeRef.current.contentWindow.location.hash = hash
      } catch (err) {
        // Fallback
        const base = window.location.origin + window.location.pathname
        iframeRef.current.src = `${base}${hash}`
      }
    }
    setCurrentUrl(`${window.location.origin}${window.location.pathname}${hash}`)
  }

  const handleRefresh = () => {
    if (iframeRef.current) {
      try {
        iframeRef.current.contentWindow.location.reload()
      } catch (err) {
        iframeRef.current.src = iframeRef.current.src
      }
    }
  }

  if (isInsideIframe) {
    return null
  }

  const deviceWidth = isLandscape ? selectedDevice.height : selectedDevice.width
  const deviceHeight = isLandscape ? selectedDevice.width : selectedDevice.height

  return (
    <>
      {/* Floating Trigger Pill on Desktop View */}
      {!isOpen && (
        <aside
          aria-label="Mobile Simulation Control"
          className="fixed bottom-6 right-6 z-50 flex items-center shadow-2xl animate-fade-in"
        >
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 rounded-full border border-[#c8b268]/60 bg-[#064e3b] px-4.5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#066842] hover:shadow-emerald-900/40 active:scale-95 cursor-pointer"
            aria-label="Open Mobile Device Simulator"
          >
            {/* Live Indicator Dot */}
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c8b268] opacity-80" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#f3df9d]" />
            </span>

            <div className="flex items-center gap-1.5">
              <svg
                className="h-4.5 w-4.5 text-[#c8b268] transition-transform duration-200 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <rect x="5" y="2" width="14" height="20" rx="3" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
              </svg>
              <span>Mobile Simulator</span>
            </div>

            <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase text-emerald-200">
              Live
            </span>
          </button>
        </aside>
      )}

      {/* Full-screen Mobile Simulator Overlay */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Device Simulator Workspace"
          className="fixed inset-0 z-[100] flex flex-col bg-[#0b0f19] text-gray-100 overflow-hidden animate-fade-in font-sans"
        >
          {/* Top Simulator Control Bar */}
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-800 bg-[#121826]/95 px-4 py-2.5 backdrop-blur-md z-20">
            {/* Left: Brand & Exit */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1.5 rounded-lg border border-gray-700 bg-gray-800/80 px-3 py-1.5 text-xs font-bold text-gray-200 transition-colors hover:bg-red-950/60 hover:text-red-300 hover:border-red-700/60 cursor-pointer"
                title="Exit Simulator (Esc)"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Exit Simulator</span>
              </button>

              <div className="hidden sm:flex items-center gap-2 border-l border-gray-800 pl-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide">
                  KwaraETF Mobile Viewport
                </span>
                <span className="text-[11px] text-gray-400">
                  ({deviceWidth} &times; {deviceHeight}px)
                </span>
              </div>
            </div>

            {/* Center: Device Presets & Orientation */}
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-lg border border-gray-800 bg-gray-900/90 p-0.5">
                {DEVICES.map((dev) => (
                  <button
                    key={dev.id}
                    type="button"
                    onClick={() => handleDeviceChange(dev)}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                      selectedDevice.id === dev.id
                        ? 'bg-[#066842] text-white font-bold shadow-xs'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {dev.name}
                  </button>
                ))}
              </div>

              {/* Rotate Orientation */}
              <button
                type="button"
                onClick={() => setIsLandscape((prev) => !prev)}
                className={`rounded-lg border border-gray-800 p-1.5 text-xs font-medium transition-colors cursor-pointer ${
                  isLandscape
                    ? 'bg-[#066842] text-white border-emerald-600'
                    : 'bg-gray-900 text-gray-400 hover:text-white'
                }`}
                title={isLandscape ? 'Switch to Portrait' : 'Switch to Landscape'}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>

              {/* Zoom Scale Controls */}
              <div className="hidden md:flex items-center gap-1 rounded-lg border border-gray-800 bg-gray-900/90 px-2 py-1 text-xs text-gray-400">
                <span>Zoom:</span>
                {[0.75, 0.85, 1].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setScale(s)}
                    className={`px-1.5 py-0.5 rounded text-[11px] font-bold cursor-pointer transition-colors ${
                      scale === s ? 'text-[#c8b268] bg-black/40' : 'hover:text-white'
                    }`}
                  >
                    {Math.round(s * 100)}%
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Quick Page Jumps */}
            <div className="flex items-center gap-1.5">
              <span className="hidden xl:inline text-xs text-gray-500 font-medium mr-1">
                Jump to:
              </span>
              <div className="flex items-center gap-1 overflow-x-auto max-w-[280px] sm:max-w-none">
                {QUICK_PAGES.map((page) => (
                  <button
                    key={page.label}
                    type="button"
                    onClick={() => handlePageSelect(page.hash)}
                    className="rounded-md border border-gray-800 bg-gray-900/80 px-2 py-1 text-[11px] font-medium text-gray-300 transition-colors hover:border-[#c8b268]/60 hover:text-white cursor-pointer"
                  >
                    {page.label}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={handleRefresh}
                  className="rounded-md border border-gray-800 bg-gray-900/80 p-1 text-gray-400 hover:text-white cursor-pointer"
                  title="Reload Simulator"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          {/* Main Simulator Viewport Area */}
          <main className="relative flex-1 overflow-auto flex items-center justify-center p-4 sm:p-8 bg-radial from-[#151c2d] to-[#090d16]">
            {/* Background Subtle Grid Texture */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, #374151 1px, transparent 0)',
                backgroundSize: '28px 28px',
              }}
            />

            {/* Smartphone Device Frame */}
            <div
              style={{
                transform: `scale(${scale})`,
                transformOrigin: 'center center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              className="relative shrink-0 shadow-[0_25px_80px_rgba(0,0,0,0.85)] ring-1 ring-white/10"
            >
              {/* Device Chassis Outer Border */}
              <div
                className={`relative overflow-hidden border-[12px] border-[#1f2430] bg-black shadow-2xl ${selectedDevice.bezel}`}
                style={{
                  width: `${deviceWidth + 24}px`,
                  height: `${deviceHeight + 24}px`,
                }}
              >
                {/* Side Button Accents (Left Volume & Right Power) */}
                <div className="absolute -left-[14px] top-28 h-12 w-[3px] rounded-l bg-gray-600/70" />
                <div className="absolute -left-[14px] top-44 h-12 w-[3px] rounded-l bg-gray-600/70" />
                <div className="absolute -right-[14px] top-32 h-16 w-[3px] rounded-r bg-gray-600/70" />

                {/* Simulated Screen Inner Container */}
                <div
                  className={`relative flex flex-col h-full w-full overflow-hidden bg-white ${
                    selectedDevice.type === 'ios' ? 'rounded-[38px]' : 'rounded-[30px]'
                  }`}
                >
                  {/* Native Mobile Status Bar */}
                  <div className="relative z-30 flex h-11 w-full items-center justify-between px-6 bg-white/95 text-gray-900 border-b border-gray-100 select-none">
                    {/* Clock */}
                    <span className="text-[13px] font-bold tracking-tight text-gray-800">
                      {simTime}
                    </span>

                    {/* Dynamic Island / Camera Punch Hole */}
                    {selectedDevice.type === 'ios' ? (
                      <div className="flex items-center gap-2 rounded-full bg-black px-3.5 py-1 shadow-xs">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#10141f] border border-gray-700" />
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                    ) : (
                      <div className="h-3.5 w-3.5 rounded-full bg-black mx-auto ring-1 ring-gray-700" />
                    )}

                    {/* Cellular, WiFi, Battery Icons */}
                    <div className="flex items-center gap-1.5 text-gray-700">
                      {/* Signal */}
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 17h3v4H2v-4zm6-5h3v9H8v-9zm6-4h3v13h-3V8zm6-5h3v18h-3V3z" />
                      </svg>
                      {/* WiFi */}
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3c-4.97 0-9.46 2.01-12.73 5.27l1.41 1.41C3.36 6.99 7.42 5.17 12 5.17c4.58 0 8.64 1.82 11.32 4.51l1.41-1.41C21.46 5.01 16.97 3 12 3zm0 4.34c-3.67 0-6.99 1.49-9.41 3.91l1.41 1.41c1.99-1.99 4.74-3.23 7.99-3.23s6.01 1.24 8 3.23l1.41-1.41c-2.42-2.42-5.74-3.91-9.41-3.91zm0 4.34c-2.37 0-4.52.96-6.08 2.52l6.08 6.08 6.08-6.08C16.52 12.64 14.37 11.68 12 11.68z" />
                      </svg>
                      {/* Battery 100% */}
                      <div className="flex items-center gap-0.5">
                        <div className="flex h-3 w-5.5 items-center rounded-xs border border-gray-800 p-0.5">
                          <div className="h-full w-full rounded-2xs bg-[#066842]" />
                        </div>
                        <div className="h-1.5 w-0.5 rounded-r-xs bg-gray-700" />
                      </div>
                    </div>
                  </div>

                  {/* Simulated Browser Web View (Interactive Iframe) */}
                  <div className="relative flex-1 w-full overflow-hidden bg-white">
                    <iframe
                      ref={iframeRef}
                      src={currentUrl || window.location.href}
                      title="KwaraETF Mobile Live Preview"
                      className="h-full w-full border-0 bg-white"
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>

                  {/* Native iOS Bottom Swipe / Home Bar Indicator */}
                  <div className="relative z-30 flex h-6 w-full items-center justify-center bg-white/95">
                    <div className="h-1 w-32 rounded-full bg-gray-400/80 transition-colors hover:bg-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Bottom Quick Help Tip */}
          <footer className="border-t border-gray-800/80 bg-[#121826] px-4 py-2 text-center text-xs text-gray-400">
            <span className="font-semibold text-emerald-400">Pro-tip:</span> Tap the hamburger menu (&#9776;) inside the phone screen to test the mobile navigation, dropdowns, and home page sections.
          </footer>
        </div>
      )}
    </>
  )
}

export default MobileSimulator

