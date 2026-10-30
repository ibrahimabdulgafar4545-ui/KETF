import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────
// SETUP: Go to https://formspree.io, create a free account, create
// a form and replace YOUR_FORM_ID below with your actual form ID.
// e.g.  "https://formspree.io/f/abcdefgh"
// ─────────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Anti-spam: must stay empty
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot check – if filled, silently reject (it's a bot)
    if (form.honeypot) return

    setStatus('loading')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '', honeypot: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Page Header Banner */}
      <div className="relative w-full bg-[#066842] py-14 sm:py-20 overflow-hidden">
        {/* Top accent strip matching rest of site */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#5a3210] via-[#c8b268] to-[#084d49]" />

        {/* Faint ring decorations */}
        <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full border border-white/5" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full border border-white/5" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-4 h-px w-12 bg-[#c8b268]" />
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8b268]">
            Kwara State Education Trust Fund
          </p>
          <h1
            style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white"
          >
            Contact Us
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/75 max-w-xl mx-auto">
            Reach out to us — we&apos;d love to hear from you.
          </p>
          <div className="mx-auto mt-5 h-px w-12 bg-[#c8b268]" />
        </div>

        {/* Bottom accent strip */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#084d49] via-[#c8b268] to-[#5a3210]" />
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div>
          {/* Contact Form */}
          <div className="border border-gray-200 bg-white p-8 sm:p-10 shadow-xs">
            <div className="mb-6 h-1 w-10 bg-[#066842]" />
            <h2
              style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
              className="text-xl sm:text-2xl font-bold text-gray-900 mb-6"
            >
              Send Us a Message
            </h2>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center bg-[#066842]/10 text-[#066842]">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-gray-600 max-w-sm">Thank you for reaching out. We will get back to you as soon as possible.</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 inline-flex items-center gap-2 rounded-md border border-[#6a8752] bg-[#066842] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#055737] cursor-pointer"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot – hidden from real users, catches bots */}
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] opacity-0 pointer-events-none"
                />

                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#066842] focus:bg-white focus:ring-1 focus:ring-[#066842]/30"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#066842] focus:bg-white focus:ring-1 focus:ring-[#066842]/30"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#066842] focus:bg-white focus:ring-1 focus:ring-[#066842]/30"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="resize-none border border-gray-300 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#066842] focus:bg-white focus:ring-1 focus:ring-[#066842]/30"
                  />
                </div>

                {/* Error State */}
                {status === 'error' && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                {/* Submit */}
                <div className="flex items-center justify-between pt-1 flex-wrap gap-3">
                  <p className="text-xs text-gray-500">
                    <span className="text-red-500">*</span> Required fields. Spam submissions are automatically filtered.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center gap-2.5 rounded-md border border-[#6a8752] bg-[#066842] px-7 py-3 text-[14px] font-medium tracking-wide text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#055737] hover:shadow-md active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactPage
