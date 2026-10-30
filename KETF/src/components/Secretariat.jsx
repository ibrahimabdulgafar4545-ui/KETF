const secretariatStaff = [
  {
    id: 'sec-1',
    name: 'Oluwadamilola Amolegbe',
    role: 'Executive Secretary',
    image: '/Sec1.png',
    featured: true,
  },
  {
    id: 'sec-2',
    name: 'Teslimat Alakoso',
    role: 'Human Resource Officer',
    image: '/Sec2.png',
  },
  {
    id: 'sec-3',
    name: 'Zainab Abdulsalam',
    role: 'Program Manager',
    image: '/Sec3.png',
  },
  {
    id: 'sec-4',
    name: 'Abdulbaqi Sadiq Esq.',
    role: 'Legal and Compliance Officer',
    image: '/Sec4.png',
  },
  {
    id: 'sec-5',
    name: 'Zainab Lawal-Rabana',
    role: 'Administrative Officer',
    image: '/Sec5.png',
  },
]

const CertificateFrameCard = ({ person, index, isLead = false }) => {
  return (
    <article
      className={`animate-fade-up group relative rounded-sm bg-white p-3.5 shadow-md ring-1 ring-[#c8b268]/55 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-[#066842]/60 sm:p-4 ${
        isLead ? 'mx-auto w-full max-w-sm' : 'w-full'
      }`}
      style={{ animationDelay: `${140 + index * 90}ms` }}
    >
      {/* Inner Certificate Double-Line Gold Frame */}
      <div className="relative flex h-full flex-col border border-[#c8b268]/75 bg-gradient-to-b from-[#fffdf8] via-white to-[#fcfaf3] p-4 sm:p-5">
        {/* 4 Classic Certificate Corner Filigree Brackets */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1.5 left-1.5 h-4 w-4 border-t-2 border-l-2 border-[#b29446]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1.5 right-1.5 h-4 w-4 border-t-2 border-r-2 border-[#b29446]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1.5 left-1.5 h-4 w-4 border-b-2 border-l-2 border-[#b29446]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-1.5 bottom-1.5 h-4 w-4 border-r-2 border-b-2 border-[#b29446]"
        />

        {/* Framed Official Portrait */}
        <div className="relative aspect-[4/4.6] w-full overflow-hidden border border-[#d9c998] bg-[#f4f5f4] shadow-inner">
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Ornamental Seal Divider */}
        <div className="relative my-4 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c8b268] to-[#c8b268]"
          />
          <span
            aria-hidden="true"
            className="mx-2.5 flex h-6 w-6 items-center justify-center rounded-full border border-[#c8b268] bg-[#fdf8eb] text-[#066842] shadow-2xs transition-colors duration-300 group-hover:bg-[#066842] group-hover:text-[#f3df9d]"
          >
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 15.4l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 2z" />
            </svg>
          </span>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c8b268] to-[#c8b268]"
          />
        </div>

        {/* Official Nameplate */}
        <div className="flex flex-1 flex-col items-center justify-center px-1 pb-1 text-center">
          <h2 className="text-lg leading-snug font-bold tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-[#066842] sm:text-[19px]">
            {person.name}
          </h2>

          <p className="mt-1.5 text-xs font-semibold tracking-widest text-[#8c6d23] uppercase sm:text-[12.5px]">
            {person.role}
          </p>
        </div>
      </div>
    </article>
  )
}

const Secretariat = () => {
  const leadOfficer = secretariatStaff[0]
  const teamOfficers = secretariatStaff.slice(1)

  return (
    <section className="min-h-screen bg-[#f8faf9] pb-24">
      {/* Page Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#066842] to-[#084d49] text-white">
        {/* Decorative Ambient Glows */}
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#c8b268]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl"
          style={{ animationDelay: '2.5s' }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="animate-fade-up mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The Secretariat
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              The dedicated management and operational team driving day-to-day
              program execution, legal compliance, administration, and
              impactful educational delivery across Kwara State.
            </p>
          </div>
        </div>
      </div>

      {/* Executive Leadership + Officers Certificate Hierarchy */}
      <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Row: Featured Executive Secretary */}
        <div className="mb-12 flex flex-col items-center">
          <CertificateFrameCard person={leadOfficer} index={0} isLead />

          {/* Subtle Organizational Connector Line on Desktop */}
          <div
            aria-hidden="true"
            className="hidden h-10 w-px bg-gradient-to-b from-[#c8b268] to-gray-300 lg:block"
          />
          <div
            aria-hidden="true"
            className="hidden h-px w-3/4 bg-gradient-to-r from-transparent via-[#c8b268]/70 to-transparent lg:block"
          />
        </div>

        {/* Second Row: 4 Secretariat Officers */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamOfficers.map((officer, idx) => (
            <CertificateFrameCard
              key={officer.id}
              person={officer}
              index={idx + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Secretariat

