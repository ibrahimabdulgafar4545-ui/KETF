import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────
// SETUP: Go to https://formspree.io, create a free account, create
// a new form, and replace the ID below with your Formspree Form ID.
// Example: if your endpoint is https://formspree.io/f/xbjvnwkq
// then replace 'YOUR_FORM_ID' with 'xbjvnwkq'.
// ─────────────────────────────────────────────────────────────────
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'

const contactInfo = [
  {
    title: 'Visit Us',
    line1: 'Kwara State Education Trust Fund Secretariat',
    line2: 'Ilorin, Kwara State, Nigeria',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Email Us',
    line1: 'info@kwaraetf.org',
    line2: 'support@kwaraetf.org',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: 'Call Us',
    line1: '+234 (0) 800 KWARA ETF',
    line2: 'Mon - Fri, 8:00am - 4:00pm',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
]

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#c8b268]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="text-xs font-semibold tracking-widest text-[#c8b268] uppercase">
            Get In Touch
          </span>
          <h1
            style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
            className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Contact KwaraETF
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-emerald-50/90 leading-relaxed">
            Have questions, partnership inquiries, or ideas on how to support education in Kwara State? We would love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
                Reach Out
              </span>
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900"
              >
                We&apos;re Here to Help
              </h2>
              <p className="mt-3 text-base text-gray-600 leading-relaxed">
                Connect with our team directly through any of our official channels or fill out the form, and we&apos;ll respond promptly.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 bg-white border border-gray-200/80 shadow-xs hover:border-[#066842]/40 transition-colors"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-700 font-medium">{item.line1}</p>
                    <p className="text-xs text-gray-500">{item.line2}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Hours Card */}
            <div className="p-6 bg-gradient-to-br from-emerald-900 to-[#066842] text-white">
              <h3 className="text-base font-bold text-[#f3df9d]">Public Engagement Hours</h3>
              <p className="mt-2 text-sm text-emerald-50/90 leading-relaxed">
                Our secretariat welcomes scheduled visits and donor delegations between 9:00am and 3:00pm, Monday through Thursday.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 border border-gray-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)]">
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                className="text-2xl font-bold text-gray-900"
              >
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Please complete the form below. Required fields are marked with an asterisk (*).
              </p>

              {status === 'success' && (
                <div className="mt-6 p-4 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
                  Thank you! Your message has been sent successfully. Our team will get back to you shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="mt-6 p-4 rounded-md bg-rose-50 border border-rose-200 text-rose-800 text-sm">
                  Something went wrong while submitting the form. Please verify the Formspree endpoint or contact us directly via email.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Amina Mohammed"
                      className="mt-1.5 w-full rounded-xs border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#066842] focus:outline-hidden focus:ring-1 focus:ring-[#066842]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@domain.com"
                      className="mt-1.5 w-full rounded-xs border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#066842] focus:outline-hidden focus:ring-1 focus:ring-[#066842]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234..."
                      className="mt-1.5 w-full rounded-xs border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#066842] focus:outline-hidden focus:ring-1 focus:ring-[#066842]"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Partnership, Adoption, General..."
                      className="mt-1.5 w-full rounded-xs border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#066842] focus:outline-hidden focus:ring-1 focus:ring-[#066842]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your inquiry, project proposal, or feedback..."
                    className="mt-1.5 w-full rounded-xs border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#066842] focus:outline-hidden focus:ring-1 focus:ring-[#066842]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#066842] bg-[#066842] px-8 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b31b1b] hover:border-[#b31b1b] hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                  >
                    <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactPage
