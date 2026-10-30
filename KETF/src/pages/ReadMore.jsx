const ReadMore = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <main className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        {/* Section 1: Image & Introduction (50/50 split with matched length) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          
          {/* Image Column */}
          <div className="relative w-full h-full min-h-[400px] lg:min-h-0 overflow-hidden shadow-lg border border-gray-200/80">
            <img
              src="/AboutImg.jpg"
              alt="About Kwara State Education Trust Fund"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Text Column */}
          <div className="flex flex-col justify-center">
            {/* Brand Accent Bar */}
            <div className="mb-5 h-1.5 w-14 rounded-full bg-[#066842]" />

            {/* Main Header */}
            <h1
              style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-[2.6rem] leading-[1.2]"
            >
              Suitable investments in{' '}
              <span className="text-[#066842]">quality education</span> is our priority.
            </h1>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4">
              <p className="text-lg sm:text-[19px] font-medium leading-relaxed text-gray-800">
                We are dedicated to revolutionizing the landscape of education in Kwara. Founded on the belief that education is the cornerstone of progress, we are committed to driving sustainable investments in quality education to shape a brighter future for generations to come.
              </p>

              <p className="text-base sm:text-[16px] leading-relaxed text-gray-600">
                We believe in the power of collaboration and community-driven change. We partner with government agencies, educational institutions, local communities, and stakeholders to design and implement impactful programs that address the diverse needs of our society.
              </p>

              <p className="text-base sm:text-[16px] leading-relaxed text-gray-600">
                Our approach is rooted in sustainability, innovation, and equity. From promoting digital literacy to enhancing teacher training, our initiatives are designed to create a holistic ecosystem where every individual has the opportunity to unlock their full potential.
              </p>

              <p className="border-l-3 border-[#066842] pl-4 text-base sm:text-[16px] font-medium leading-relaxed text-gray-700">
                Join us in our mission to build a Kwara where education knows no bounds—a Kwara where every individual has the chance to thrive and contribute to a brighter future. Together, let’s embark on a journey to shape the future of Kwara through the power of education.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Core Values Grid */}
        <section className="mt-20 border-t border-gray-200/80 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#066842] uppercase">
              Our Principles
            </span>
            <h2
              style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
              className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl"
            >
              Guided by Integrity, Driven by Impact
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Every initiative, partnership, and fund allocation is measured against four foundational commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-gray-200/80 shadow-xs hover:border-[#066842]/40 transition-colors">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Quality Learning</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Modern curricula, well-equipped classrooms, and instructional materials tailored for student success.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200/80 shadow-xs hover:border-[#066842]/40 transition-colors">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Total Transparency</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Open-book reporting, statutory audits, and published quarterly financials accessible to every citizen.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200/80 shadow-xs hover:border-[#066842]/40 transition-colors">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Equity &amp; Inclusion</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Extending high-caliber education to indigent children across all 16 Local Government Areas.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200/80 shadow-xs hover:border-[#066842]/40 transition-colors">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Sustainable Innovation</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Future-proof solar installations, e-learning labs, and maintenance covenants for long-term viability.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Call to Action */}
        <section className="mt-20 overflow-hidden bg-gradient-to-r from-[#064e3b] via-[#066842] to-[#084d49] p-8 text-white sm:p-12 shadow-md">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Be a Catalyst for Educational Transformation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Whether you are an individual alumnus, a corporate entity, or a development partner, your support empowers learners across Kwara State.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#adopt-a-school"
                className="inline-flex items-center gap-2 rounded-full border border-[#c8b268] bg-[#c8b268] px-7 py-3 text-sm font-bold text-[#064e3b] transition-all hover:bg-white hover:text-[#066842]"
              >
                <span>Adopt a School</span>
                <span>&rarr;</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                <span>Contact Our Office</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ReadMore
