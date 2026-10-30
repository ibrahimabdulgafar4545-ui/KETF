import Navbar from '../components/navbar.jsx'

const ReadMore = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      <Navbar />

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

        {/* Section 2: Mission & Vision (Simple, Elegant Architectural Split) */}
        <section className="mt-14 sm:mt-18">
          <div className="border border-gray-200/90 bg-white p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-18 md:divide-x md:divide-gray-200/80">
              {/* Our Mission */}
              <div className="flex flex-col justify-start">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-1 w-6 bg-[#066842]" />
                  <h2
                    style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                    className="text-lg sm:text-xl font-bold tracking-wider text-[#066842] uppercase"
                  >
                    OUR MISSION
                  </h2>
                </div>
                <p className="text-base sm:text-[17px] leading-relaxed text-gray-700">
                  Building the future of Kwara through sustainable investments in quality education.
                </p>
              </div>

              {/* Our Vision */}
              <div className="flex flex-col justify-start md:pl-12 lg:pl-16">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-1 w-6 bg-[#c8b268]" />
                  <h2
                    style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                    className="text-lg sm:text-xl font-bold tracking-wider text-[#066842] uppercase"
                  >
                    OUR VISION
                  </h2>
                </div>
                <p className="text-base sm:text-[17px] leading-relaxed text-gray-700">
                  A Kwara where accessible and inclusive education will power innovation and endless opportunities for all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Core Values (Same Unified Border with Architectural Accent Lines) */}
        <section className="mt-12 sm:mt-16">
          <div className="border border-gray-200/90 bg-white p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
            {/* Header */}
            <div className="flex items-center gap-3 mb-10 pb-5 border-b border-gray-200/80">
              <span className="h-1 w-8 bg-[#066842]" />
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                className="text-xl sm:text-2xl font-bold tracking-wider text-[#066842] uppercase"
              >
                OUR CORE VALUES
              </h2>
            </div>

            {/* 4 Values inside the same border */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-14">
              
              {/* 1. EXCELLENCE */}
              <div className="border-l-2 border-[#066842] pl-5">
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                  className="text-base sm:text-lg font-bold tracking-wide text-gray-900 uppercase"
                >
                  EXCELLENCE:
                </h3>
                <p className="mt-2.5 text-base text-gray-700 leading-relaxed">
                  We are committed to excellence in all aspects of our operations, from program design and implementation to monitoring and evaluation. We strive to achieve the highest standards of quality and effectiveness in everything.
                </p>
              </div>

              {/* 2. EQUITY */}
              <div className="border-l-2 border-[#c8b268] pl-5">
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                  className="text-base sm:text-lg font-bold tracking-wide text-gray-900 uppercase"
                >
                  EQUITY:
                </h3>
                <p className="mt-2.5 text-base text-gray-700 leading-relaxed">
                  We believe that every child deserves access to a quality education, regardless of their background or circumstances. We are dedicated to promoting equity in education and reducing disparities in learning outcomes.
                </p>
              </div>

              {/* 3. PARTNERSHIP */}
              <div className="border-l-2 border-[#066842] pl-5">
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                  className="text-base sm:text-lg font-bold tracking-wide text-gray-900 uppercase"
                >
                  PARTNERSHIP:
                </h3>
                <p className="mt-2.5 text-base text-gray-700 leading-relaxed">
                  We recognize that achieving our goals requires collaboration and partnership with a wide range of stakeholders, including government agencies, civil society organizations, schools, communities, and the private sector. We are committed to working together with partners to maximise our impact and reach.
                </p>
              </div>

              {/* 4. INNOVATION */}
              <div className="border-l-2 border-[#c8b268] pl-5">
                <h3
                  style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                  className="text-base sm:text-lg font-bold tracking-wide text-gray-900 uppercase"
                >
                  INNOVATION:
                </h3>
                <p className="mt-2.5 text-base text-gray-700 leading-relaxed">
                  We embrace innovation and creativity as drivers of positive change in education. We are continuously exploring new approaches and technologies to improve teaching and learning outcomes and to address the evolving needs of learners in Kwara State.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Our 5-Year Development Plan */}
        <section className="mt-12 sm:mt-16 mb-16 sm:mb-24">
          <div className="border border-gray-200/90 bg-white p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1 w-8 bg-[#066842]" />
              <h2
                style={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
                className="text-xl sm:text-2xl font-bold tracking-wider text-[#066842] uppercase"
              >
                OUR 5-YEAR DEVELOPMENT PLAN
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-base sm:text-[16.5px] leading-relaxed text-gray-700">
              <p>
                At the Kwara State Education Trust Fund, our 5-Year Development Plan represents a clear and ambitious vision for the future of education in Kwara State. This plan outlines our strategic priorities from 2025 to 2029, focusing on improving school infrastructure, enhancing the quality of teaching and learning, expanding access to education, and fostering innovation across the education sector.
              </p>
              <p>
                We are committed to working with communities, partners, and stakeholders to deliver long-lasting, inclusive, and measurable impact. With this plan, we are building a stronger foundation for students, educators, and the entire Kwara education system—ensuring every child has the opportunity to thrive and succeed.
              </p>
            </div>

            {/* Download PDF Button with Hover Bounce, Small Radius & Adobe Reader Icon Swap */}
            <div className="mt-8 pt-2">
              <a
                href="#download-plan"
                className="group inline-flex items-center gap-3 rounded-md px-6 py-3 text-[14.5px] font-medium tracking-wide text-white transition-all duration-200 ease-out bg-[#066842] border border-[#6a8752] hover:bg-[#F20F00] hover:border-[#F20F00] hover:-translate-y-1 hover:shadow-md active:translate-y-0"
              >
                <span>Download PDF</span>

                {/* Default State: Download Icon */}
                <svg
                  className="h-4 w-4 block group-hover:hidden transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>

                {/* Hover State: Exact Adobe Reader Logo provided */}
                <img
                  src="/adobe-reader.png"
                  alt="Adobe Reader"
                  className="h-4 w-auto object-contain hidden group-hover:block transition-all"
                />
              </a>
            </div>

          </div>
        </section>

      </main>
    </div>
  )
}

export default ReadMore
