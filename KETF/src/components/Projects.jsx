const projects = [
  {
    id: 1,
    title: "Teachers’ Lounge Initiative",
    category: "Professional Development & CPD",
    image: "/project-teachers-lounge.jpg",
    description:
      "The Teachers' Lounge is a proposed Continuous Professional Development (CPD) hub designed to support and enhance teacher training efforts. It will accommodate up to 100 teachers at a time and reach over 3,000 teachers through scheduled sessions.",
    action: "Donate",
    actionLink: "#teachers-lounge-initiative",
    isPrimary: false,
  },
  {
    id: 2,
    title: "Scholarship – Top 180 performing pupils",
    category: "Merit Sponsorship & KwaraLEARN",
    image: "/initiative-5year.jpg",
    description:
      "This initiative, in partnership with KwaraLEARN seeks to recognize excellence and promote continuity.",
    action: "Donate",
    actionLink: "#scholarships-initiative",
    isPrimary: false,
  },
  {
    id: 3,
    title: "KwaraETF’s Summer School Program",
    category: "Youth Empowerment & Project Tutored",
    image: "/project-summer-school.jpg",
    description:
      "Welcome to the pioneer KwaraETF summer program! Thank you for your interest in participating in Project Tutored. This form is intended to collect your registration and biodata information for the program.",
    action: "Apply Now",
    actionLink: "#contact",
    isPrimary: true,
  },
]

const Projects = ({ onNavigate }) => {
  const handleNav = (target) => (e) => {
    if (onNavigate) {
      if (e && e.preventDefault) e.preventDefault()
      onNavigate(target)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Executive Page Banner */}
      <section className="relative overflow-hidden bg-[#066842] py-16 sm:py-24 text-white">
        {/* Top Accent Gradient Bar */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#5a3210] via-[#c8b268] to-[#084d49]" />

        {/* Ambient background rings */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c8b268]">
            <a href="#home" onClick={handleNav('#home')} className="hover:text-white transition-colors">
              Home
            </a>
            <span>/</span>
            <span>Resources</span>
            <span>/</span>
            <span className="text-white">Projects</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1 text-xs font-semibold text-[#c8b268] mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8b268]" />
              <span>Educational Interventions</span>
            </div>
            <h1
              style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight"
            >
              Our Key Projects
            </h1>
            <p className="mt-4 text-base sm:text-lg text-emerald-50/90 leading-relaxed font-normal">
              Explore our ongoing and proposed infrastructure, capacity-building, and scholarship interventions transforming the landscape of education in Kwara State.
            </p>
          </div>
        </div>

        {/* Bottom Accent Gradient Bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#084d49] via-[#c8b268] to-[#5a3210]" />
      </section>

      {/* Projects Grid Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#066842]/30"
            >
              {/* Image & Badge Area */}
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block rounded-md bg-[#072417]/85 backdrop-blur-xs px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#c8b268] shadow-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3
                    style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
                    className="text-xl font-bold text-[#103C20] leading-snug tracking-tight mb-3 group-hover:text-[#066842] transition-colors"
                  >
                    {project.title}
                  </h3>

                  {/* Gold Divider Accent */}
                  <div className="mb-4 h-0.5 w-10 bg-[#c8b268] transition-all duration-300 group-hover:w-16" />

                  <p className="text-sm leading-relaxed text-gray-600 font-normal">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="p-6 sm:p-7 pt-0">
                <a
                  href={project.actionLink}
                  onClick={handleNav(project.actionLink)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#066842] hover:bg-[#055737] border border-[#6a8752] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-all duration-200 shadow-sm hover:shadow-md active:translate-y-0"
                >
                  <span>{project.action}</span>
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects
