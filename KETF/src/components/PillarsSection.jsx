const pillars = [
  {
    id: '01',
    title: 'COMMITMENT',
    description:
      'We are dedicated to making sustainable investments in quality education. This commitment ensures that our initiatives have a lasting impact, benefiting current and future generations of students in Kwara.',
    // Green Theme
    bgGradient: 'from-[#066842] to-[#04432a]',
    accentColor: '#c8b268',
    iconBg: 'bg-white/10',
    shadowHover: 'hover:shadow-[#066842]/30',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      />
    ),
  },
  {
    id: '02',
    title: 'ACCESSIBILITY',
    description:
      'We aim to create a future where education is accessible to all. They prioritize inclusivity, working to remove barriers and ensure that every individual in Kwara has the opportunity to access quality education, regardless of background or circumstance.',
    // Ochre / Gold Theme
    bgGradient: 'from-[#b48a34] to-[#8c671f]',
    accentColor: '#ffffff',
    iconBg: 'bg-white/10',
    shadowHover: 'hover:shadow-[#b48a34]/30',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    ),
  },
  {
    id: '03',
    title: 'INNOVATION',
    description:
      'We seek to power innovation in education. They envision a future where education becomes a driving force behind innovation and endless opportunities for all. Through innovative approaches and initiatives, they strive to revolutionize the educational landscape in Kwara, fostering creativity, critical thinking, and problem-solving skills among students.',
    // Deep Ocean Blue Theme
    bgGradient: 'from-[#135a8a] to-[#0c3e61]',
    accentColor: '#c8b268',
    iconBg: 'bg-white/10',
    shadowHover: 'hover:shadow-[#135a8a]/30',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.508 1.333 1.508 2.316V18"
      />
    ),
  },
]

const PillarsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFBFD] py-20 sm:py-28 lg:py-32">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[900px] rounded-full bg-gray-100/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b ${pillar.bgGradient} p-8 sm:p-10 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${pillar.shadowHover}`}
            >
              {/* Background watermark index number */}
              <div
                className="pointer-events-none absolute -right-2 -bottom-4 select-none text-8xl font-black text-white/5 transition-opacity duration-300 group-hover:text-white/10"
                aria-hidden="true"
              >
                {pillar.id}
              </div>

              {/* Top Accent Strip */}
              <div
                className="absolute top-0 inset-x-0 h-1 bg-white/20 transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: pillar.accentColor }}
              />

              {/* Card Header */}
              <div>
                {/* Icon & Index Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${pillar.iconBg} backdrop-blur-xs border border-white/15 text-white transition-transform duration-300 group-hover:scale-110`}
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {pillar.icon}
                    </svg>
                  </div>
                  <span className="text-xs font-mono font-bold tracking-widest text-white/40 group-hover:text-white/70 transition-colors">
                    {pillar.id}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{ fontFamily: "'Montserrat', 'Plus Jakarta Sans', sans-serif" }}
                  className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase mb-4"
                >
                  {pillar.title}
                </h3>

                {/* Divider Accent */}
                <div className="mb-6 h-0.5 w-12 bg-white/30 transition-all duration-300 group-hover:w-16 group-hover:bg-white/60" />

                {/* Description */}
                <p className="text-sm sm:text-[15px] leading-relaxed text-white/90 font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Subtle Corner Accent */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50 group-hover:text-white/80 transition-colors">
                <span className="uppercase tracking-widest font-semibold text-[11px]">Core Pillar</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PillarsSection

