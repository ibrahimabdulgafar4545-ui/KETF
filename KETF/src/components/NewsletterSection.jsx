import { useState } from 'react'

const NewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setStatus('loading')
    // Simulated smooth subscribe feedback
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 600)
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#F2F6F3] py-16 sm:py-20 lg:py-24">
      {/* Subtle organic background motifs */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#c8b268]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#066842]/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Distinct Floating Newsletter Capsule Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#066842]/15 bg-white p-8 sm:p-12 lg:p-14 shadow-[0_16px_40px_-10px_rgba(6,104,66,0.07)] text-center">

          {/* Top Gold Accent Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-transparent via-[#c8b268] to-transparent" />

          {/* Mail Emblem */}
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#066842]/8 text-[#066842] border border-[#066842]/15 shadow-inner">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>

          {/* Title */}
          <h2
            style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#103C20]"
          >
            Subscribe to our Newsletter
          </h2>

          {/* Decorative Divider */}
          <div className="mx-auto my-4 flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-[#c8b268]" />
            <div className="h-1 w-1 rounded-full bg-[#066842]" />
            <div className="h-px w-8 bg-[#c8b268]" />
          </div>

          <p className="mx-auto max-w-lg text-sm sm:text-base text-gray-600 mb-8 leading-relaxed">
            Stay informed with the latest updates, stories, and educational milestones from the Kwara State Education Trust Fund.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="mx-auto max-w-md rounded-2xl border border-[#066842]/20 bg-[#066842]/5 p-6 text-center animate-fadeIn">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#066842] text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-semibold text-[#103C20]">Thank you for subscribing!</p>
              <p className="text-xs text-gray-600 mt-1">You will receive our updates directly in your inbox.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 text-xs font-semibold text-[#066842] underline hover:text-[#055737]"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
              <div className="relative flex flex-col sm:flex-row items-stretch rounded-2xl sm:rounded-full bg-[#F8FAFC] border-2 border-gray-200/90 p-1.5 transition-all duration-200 focus-within:border-[#066842] focus-within:bg-white focus-within:shadow-lg focus-within:shadow-[#066842]/5">
                {/* Email Input */}
                <div className="relative flex-1 flex items-center pl-4 sm:pl-5 pr-3 py-2 sm:py-0">
                  <svg
                    className="h-5 w-5 text-gray-400 shrink-0 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-Mail Address"
                    className="w-full bg-transparent text-sm sm:text-base text-gray-900 placeholder:text-gray-400 outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center rounded-xl sm:rounded-full bg-[#066842] hover:bg-[#055737] px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="4" className="opacity-25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                      </svg>
                      <span>Subscribing...</span>
                    </span>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>

              {/* Anti-spam privacy assurance */}
              <p className="mt-3 text-[12px] text-gray-400">
                We respect your privacy. No spam, ever.
              </p>
            </form>
          )}

        </div>
      </div>
    </section>
  )
}

export default NewsletterSection

