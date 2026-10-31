import { useState } from 'react'

const socialShareLinks = [
  {
    name: 'Facebook',
    brandColor: '#1877F2',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkwaraetf.org%2Fkwaraetf-chairman-appointed-ncc-board%2F',
    icon: (
      <svg className="h-4 w-auto fill-[#1877F2]" viewBox="0 0 320 512" aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    name: 'X',
    brandColor: '#000000',
    url: 'https://twitter.com/intent/tweet?text=KWARAETF+CHAIRMAN+APPOINTED+TO+NIGERIAN+COMMUNICATIONS+COMMISSION+BOARD+%26%238211%3B+Kwara+State+Education+Trust+Fund.&url=https%3A%2F%2Fkwaraetf.org%2Fkwaraetf-chairman-appointed-ncc-board%2F',
    icon: (
      <svg className="h-3.5 w-3.5 fill-[#000000]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    brandColor: '#0A66C2',
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fkwaraetf.org%2Fkwaraetf-chairman-appointed-ncc-board%2F',
    icon: (
      <svg className="h-3.5 w-auto fill-[#0A66C2]" viewBox="0 0 448 512" aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    brandColor: '#E60023',
    url: 'https://pinterest.com/pin/find/?url=https%3A%2F%2Fkwaraetf.org%2Fkwaraetf-chairman-appointed-ncc-board%2F',
    icon: (
      <svg className="h-4 w-auto fill-[#E60023]" viewBox="0 0 496 512" aria-hidden="true">
        <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.5 6.9-28.1.6-2.5.2-4.9-1.9-7.4-11.3-13.8-18.5-38.9-18.5-62.6 0-59.5 45.4-115.1 121.7-115.1 66.5 0 110.1 45.4 110.1 107.6 0 71.7-36 122.9-83.3 122.9-25.2 0-44.1-20.8-38.1-46.3 7.2-30.5 21.2-63.4 21.2-85.4 0-19.7-10.6-36.1-32.4-36.1-25.7 0-46.4 26.6-46.4 62.2 0 22.7 7.7 38 7.7 38s-26.1 110.5-30.7 130c-5.4 22.9-2.2 56.4-.3 78.5C65.5 431.1 0 351.4 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256z" />
      </svg>
    ),
  },
]

const NccBoardAppointmentNews = ({ onNavigate }) => {
  const [liked, setLiked] = useState(false)

  const handleBackToNews = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('#news-page-5')
    } else {
      window.location.hash = '#news-page-5'
    }
  }

  return (
    <article className="min-h-screen bg-[#fcfcfd] text-[#1c1d1f]">
      {/* Top Breadcrumb & Return Ribbon */}
      <div className="border-b border-[#066842]/15 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <a
            href="#news-page-5"
            onClick={handleBackToNews}
            className="inline-flex items-center gap-2 rounded-full border border-[#066842]/30 bg-[#066842]/5 px-4 py-1.5 text-xs font-semibold text-[#066842] transition-all hover:bg-[#066842] hover:text-white"
          >
            <span>&larr; Back to News</span>
          </a>

          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span className="hidden sm:inline">Dispatch Category:</span>
            <span className="rounded-md bg-emerald-50 px-2.5 py-0.5 font-bold text-[#066842] border border-emerald-200/60">
              Governance &amp; Appointments
            </span>
          </div>
        </div>
      </div>

      {/* Hero Header Banner */}
      <header className="relative border-b border-[#066842]/20 bg-gradient-to-b from-[#066842]/10 via-[#066842]/5 to-transparent py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Metadata chips */}
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#066842] px-3 py-1 font-semibold text-white shadow-xs">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              August 13, 2025
            </span>
            <span className="rounded-full border border-gray-200 bg-white px-3 py-1 font-medium text-gray-600 shadow-2xs">
              Published by <strong className="text-gray-900">KwaraETF</strong>
            </span>
            <span className="rounded-full border border-[#c8b268]/40 bg-[#c8b268]/15 px-3 py-1 font-medium text-[#7a641f]">
              Federal Board Appointment
            </span>
          </div>

          <h1
            style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
            className="text-2xl font-extrabold tracking-tight text-[#103C20] sm:text-4xl lg:text-5xl leading-tight"
          >
            KWARAETF CHAIRMAN APPOINTED TO NIGERIAN COMMUNICATIONS COMMISSION BOARD
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            President Bola Ahmed Tinubu has appointed Col. Abdulwahab Lawal (Rtd), Chairman of the Kwara State Education Trust Fund (KwaraETF), to the board of the Nigerian Communications Commission (NCC).
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Framed Featured Article Image */}
        <figure className="mb-12 overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-md">
          <div className="overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
            <img
              src="/news-pg5-1.jpg"
              alt="Col. Abdulwahab Ademola Lawal (PhD, Rtd) appointed to Nigerian Communications Commission Board"
              className="w-full max-h-[560px] object-cover object-top transition-transform duration-300 hover:scale-101"
            />
          </div>
          <figcaption className="mt-3 text-center text-xs text-gray-500 italic">
            Col. Abdulwahab Ademola Lawal (PhD, Rtd) — Chairman of the Kwara State Education Trust Fund (KwaraETF).
          </figcaption>
        </figure>

        {/* Editorial Body */}
        <section className="space-y-6 text-base leading-8 text-gray-800 sm:text-lg sm:leading-9">
          <div className="rounded-xl border-l-4 border-[#066842] bg-[#066842]/5 p-5 text-sm sm:text-base leading-relaxed text-[#103C20] font-medium">
            President Bola Ahmed Tinubu has appointed Col. Abdulwahab Lawal (Rtd), Chairman of the Kwara State Education Trust Fund (KwaraETF), to the board of the Nigerian Communications Commission (NCC).
          </div>

          <p>
            The announcement, released by the State House on August 12, 2025, named Idris Olorunnimbe as Chairman of the NCC Board, with Dr. Aminu Maida continuing as Executive Vice Chairman/Chief Executive Officer.
          </p>

          <p>
            Other members of the board include Abraham Oshidami (Executive Commissioner, Technical Services), Rimini Makama (Executive Commissioner, Stakeholder Management), Hajia Maryam Bayi, Senator Lekan Mustafa, Chris Okorie, and Princess Oforitsenere Emiko.
          </p>

          <p>
            The NCC serves as Nigeria's principal telecommunications regulator, responsible for licensing, spectrum management, infrastructure development, and consumer protection in the communications sector.
          </p>

          <p>
            Col. Lawal's appointment reflects his longstanding public service record and is expected to strengthen the Commission's governance while broadening opportunities for digital inclusion and development nationwide.
          </p>
        </section>

        {/* Author / Sign-off Footer Box */}
        <div className="mt-14 rounded-2xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#066842] text-white font-bold text-lg">
                KE
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Kwara State Education Trust Fund</h4>
                <p className="text-xs text-gray-500">Official Communication &amp; Press Secretariat</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setLiked(!liked)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                liked
                  ? 'bg-rose-50 border border-rose-200 text-rose-600'
                  : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <svg className={`h-4 w-4 ${liked ? 'fill-rose-500 text-rose-500' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{liked ? 'Acknowledged' : 'Acknowledge Dispatch'}</span>
            </button>
          </div>

          {/* Social Share Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Share Official Dispatch:
            </span>
            <div className="flex items-center gap-2">
              {socialShareLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-2xs transition-transform hover:-translate-y-0.5 hover:shadow-xs"
                  title={`Share on ${item.name}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <a
            href="#news-page-5"
            onClick={handleBackToNews}
            className="inline-flex items-center gap-2 rounded-full border border-[#066842] bg-[#066842] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#b31b1b] hover:border-[#b31b1b] hover:shadow-md"
          >
            <span>&larr; Back to News</span>
          </a>
        </div>
      </main>
    </article>
  )
}

export default NccBoardAppointmentNews
