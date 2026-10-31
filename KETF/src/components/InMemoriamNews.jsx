import { useState } from 'react'

const socialShareLinks = [
  {
    name: 'Facebook',
    brandColor: '#1877F2',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkwaraetf.org%2Fin-memoriam-moses-jimoh-adebayo-oyelere%2F',
    icon: (
      <svg className="h-3.5 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#1877F2]" viewBox="0 0 320 512" aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    name: 'X',
    brandColor: '#000000',
    url: 'https://twitter.com/intent/tweet?text=IN+MEMORIAM%3A+Moses+Jimoh+Adebayo+Oyelere+%26%238211%3B+Kwara+State+Education+Trust+Fund.+https%3A%2F%2Fkwaraetf.org%2Fin-memoriam-moses-jimoh-adebayo-oyelere%2F',
    icon: (
      <svg className="h-3 w-3 fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#000000]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    brandColor: '#0A66C2',
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fkwaraetf.org%2Fin-memoriam-moses-jimoh-adebayo-oyelere%2F',
    icon: (
      <svg className="h-3 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#0A66C2]" viewBox="0 0 448 512" aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    brandColor: '#E60023',
    url: 'https://pinterest.com/pin/find/?url=https%3A%2F%2Fkwaraetf.org%2Fin-memoriam-moses-jimoh-adebayo-oyelere%2F',
    icon: (
      <svg className="h-3.5 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#E60023]" viewBox="0 0 496 512" aria-hidden="true">
        <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.5 6.9-28.1.6-2.5.2-4.9-1.9-7.4-11.3-13.8-18.5-38.9-18.5-62.6 0-59.5 45.4-115.1 121.7-115.1 66.5 0 110.1 45.4 110.1 107.6 0 71.7-36 122.9-83.3 122.9-25.2 0-44.1-20.8-38.1-46.3 7.2-30.5 21.2-63.4 21.2-85.4 0-19.7-10.6-36.1-32.4-36.1-25.7 0-46.4 26.6-46.4 62.2 0 22.7 7.7 38 7.7 38s-26.1 110.5-30.7 130c-5.4 22.9-2.2 56.4-.3 78.5C65.5 431.1 0 351.4 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256z" />
      </svg>
    ),
  },
]

const InMemoriamNews = ({ onNavigate }) => {
  const [liked, setLiked] = useState(false)

  const handleBackToNews = (e) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('#news')
    } else {
      window.location.hash = '#news'
    }
  }

  // Social Share Bar with exact 4 logos and official brand colors
  const renderShareBar = () => (
    <div className="flex items-center justify-between border-y border-gray-200/80 bg-[#f4f7f9] px-4 py-2.5 sm:px-6">
      {/* Left: Share text + 4 exact social icon logos in their official brand colors */}
      <div className="flex items-center gap-4 sm:gap-5">
        <span className="text-[14px] font-medium text-gray-800">
          Share
        </span>
        <div className="flex items-center gap-4">
          {socialShareLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${item.name}`}
              className="group flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right: Green outline heart + count */}
      <button
        type="button"
        onClick={() => setLiked((prev) => !prev)}
        className="group inline-flex items-center gap-1.5 text-xs transition-colors cursor-pointer"
        aria-label="Like this post"
      >
        <svg
          className={`h-4.5 w-4.5 transition-transform duration-150 group-hover:scale-110 ${
            liked
              ? 'fill-[#16a34a] text-[#16a34a]'
              : 'fill-none text-[#16a34a]'
          }`}
          viewBox="0 0 24 24"
          strokeWidth="1.8"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <span className={`text-[13px] font-semibold ${liked ? 'text-[#066842]' : 'text-gray-500'}`}>
          {liked ? '1' : '0'}
        </span>
      </button>
    </div>
  )

  return (
    <article className="min-h-screen bg-[#f8faf9] pb-24">
      {/* Top Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#066842] to-[#084d49] text-white">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#c8b268]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl"
          style={{ animationDelay: '2.5s' }}
        />

        <div className="relative mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-100/80 uppercase">
            <a
              href="#news"
              onClick={handleBackToNews}
              className="transition-colors hover:text-[#f3df9d]"
            >
              News
            </a>
            <span>/</span>
            <span className="text-[#f3df9d]">In Memoriam</span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
            IN MEMORIAM: Moses Jimoh Adebayo Oyelere
          </h1>
          <p className="mt-2 text-base sm:text-lg font-medium text-[#f3df9d]">
            A Life of Service, A Legacy in Education (1965–2026)
          </p>
          <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />

          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-emerald-100/90">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#c8b268]" />
              <span>
                Published by{' '}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="font-bold text-white hover:underline cursor-pointer"
                >
                  KwaraETF
                </a>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-[#f3df9d]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>October 26, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-0.5 text-xs text-white">
                Special Tribute
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* TOP SOCIAL SHARE BAR */}
        {renderShareBar()}

        {/* Featured Portrait Banner */}
        <div className="border border-gray-200 bg-white p-4 sm:p-6 shadow-xs flex justify-center">
          <div className="max-w-md w-full overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
            <img
              src="/N1.png"
              alt="Mr Moses Jimoh Adebayo Oyelere"
              className="w-full h-auto object-cover object-top"
            />
            <div className="p-3 text-center bg-gray-50 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-700">
                Mr Moses Jimoh Adebayo Oyelere (1965–2026)
              </p>
              <p className="text-[11px] text-gray-500">
                Pioneer Board Member, Kwara State Education Trust Fund &bull; Former Director, TESCOM
              </p>
            </div>
          </div>
        </div>

        {/* Main Editorial Text Card */}
        <div className="border border-gray-200 bg-white p-7 sm:p-12 shadow-xs space-y-8 text-gray-800">
          {/* Introductory Tribute */}
          <div className="space-y-5 text-[17px] leading-8 sm:text-[18px] sm:leading-[1.95] text-gray-800">
            <p className="border-l-4 border-[#066842] pl-5 font-medium italic text-gray-900 bg-emerald-50/40 py-2">
              &ldquo;Some legacies are written in the institutions we build. Others live on in the people we teach, the values we uphold, and the generations whose futures we help shape.&rdquo;
            </p>

            <p>
              The passing of <strong>Mr Moses Jimoh Adebayo Oyelere</strong> on 14 October 2026 is a moment of profound sadness for his family, colleagues, the education community and the Kwara State Education Trust Fund (KwaraETF), where he served as a pioneer member of the Board.
            </p>

            <p>
              An educator, examiner and author, Mr Oyelere dedicated a significant part of his professional life to education and academic development. His career reflected a commitment to strengthening the foundations upon which future generations build their ambitions.
            </p>

            <p>
              At KwaraETF, we remember him not only as a pioneer member of the Board but also as a colleague appointed to the Fund’s Programmes &amp; Partnerships Committee on 18 July 2026. His appointment reflected his continued involvement in the collective responsibility of advancing the Fund’s educational mission.
            </p>

            <p>
              His passing, just days before the formal inauguration of the committee to which he had been appointed, makes his loss particularly poignant for the institution and those who serve it.
            </p>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Section: A Pioneer in KwaraETF’s Journey */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#066842]">
              A Pioneer in KwaraETF’s Journey
            </h2>
            <div className="mt-4 space-y-4 text-[16px] leading-8 text-gray-700 sm:text-[17px] sm:leading-8">
              <p>
                Institutions are shaped not only by their mandates but also by the people who help bring their vision to life. In its formative years, KwaraETF benefited from the participation and service of individuals who contributed to establishing its governance, direction and institutional identity.
              </p>
              <p>
                Mr Oyelere was among those pioneer Board members, representing the Teaching Service Commission (TESCOM). His service forms part of the Fund’s institutional history and its continuing commitment to supporting education across Kwara State.
              </p>
              <p>
                His association with KwaraETF placed him within an important chapter in the State’s efforts to mobilise resources, build partnerships and create sustainable support for education. Establishing an institution requires commitment, collective responsibility and a belief in what it can become. Those who serve during its formative years become part of its enduring story.
              </p>
              <p>
                As KwaraETF has continued to develop its programmes and partnerships, the foundations established during its early years have remained an important part of its institutional journey.
              </p>
              <p>
                We recognise Mr Oyelere as one of the individuals whose service forms part of that journey and whose contribution deserves to be remembered.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Section: Service Through the Programmes & Partnerships Committee */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#066842]">
              Service Through the Programmes &amp; Partnerships Committee
            </h2>
            <div className="mt-4 space-y-4 text-[16px] leading-8 text-gray-700 sm:text-[17px] sm:leading-8">
              <p>
                On 18 July 2026, Mr Oyelere was appointed to KwaraETF’s Programmes &amp; Partnerships Committee, an important structure established to advance the Fund’s programme priorities and partnerships in pursuit of improved educational outcomes across Kwara State.
              </p>
              <p>
                The committee’s work connects strategic direction with programme development and collaboration, helping to translate the Fund’s mandate into meaningful educational interventions.
              </p>
              <p>
                His appointment reflected the continued value of his experience and his place in the collective effort to strengthen the Fund’s programmes and partnerships.
              </p>
              <p>
                Tragically, Mr Oyelere passed away on 14 October 2026, just three days before the committee’s formal inauguration on 17 October 2026. He was therefore unable to attend the inauguration of the committee to which he had been appointed.
              </p>
              <p>
                This timing lends a particular poignancy to his passing. A new chapter of service was about to begin, and he was meant to be part of it.
              </p>
              <p>
                For KwaraETF, his passing is not simply the loss of a former Board member. It is the loss of a colleague whose appointment reflected the institution’s continued recognition of his place in its work and whose contribution formed part of its broader commitment to educational development.
              </p>
              <p>
                His absence at the committee’s inauguration is a reminder that institutional progress is built by people whose service, experience and commitment matter, even when they are no longer present to witness the work unfold.
              </p>
              <p>
                As the committee proceeds with its mandate, we remember Mr Oyelere and acknowledge his place among those appointed to contribute to its work.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Section: A Life Dedicated to Learning and Public Service */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#066842]">
              A Life Dedicated to Learning and Public Service
            </h2>
            <div className="mt-4 space-y-4 text-[16px] leading-8 text-gray-700 sm:text-[17px] sm:leading-8">
              <p>
                Mr Oyelere’s professional journey was rooted in education. As an educator, examiner and author, he contributed to the wider enterprise of teaching, learning and academic development. His career culminated in his retirement from public service as a Director at the Teaching Service Commission (TESCOM).
              </p>
              <p>
                His professional experience connected him to different dimensions of the education system, from teaching and academic assessment to educational administration. These are important parts of the work required to sustain standards, support learners and strengthen the institutions responsible for delivering education.
              </p>
              <p>
                His journey reflects the contribution of education professionals whose knowledge and experience help shape the systems upon which learners depend.
              </p>
              <p>
                Education is ultimately an investment in people. Behind every classroom, examination, textbook and learning opportunity are individuals whose work helps make progress possible. Mr Oyelere’s professional life was connected to this important endeavour.
              </p>
              <p>
                His passing reminds us that educational progress depends not only on policies, programmes and funding, but also on the dedication of people who commit their knowledge and experience to the service of others.
              </p>
              <p>
                It also reinforces the importance of preserving the stories of those who have contributed to education, recognising their service and ensuring that their place in institutional history is not forgotten.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Section: A Legacy That Continues */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#066842]">
              A Legacy That Continues
            </h2>
            <div className="mt-4 space-y-4 text-[16px] leading-8 text-gray-700 sm:text-[17px] sm:leading-8">
              <p>
                At KwaraETF, we understand that improving education extends beyond any single individual or generation. It is a collective endeavour, built over time by people who believe that every child deserves the opportunity to learn, grow and fulfil their potential.
              </p>
              <p>
                Mr Oyelere’s service as a pioneer Board member representing TESCOM, alongside his appointment to the Programmes &amp; Partnerships Committee, forms part of this continuing story.
              </p>
              <p>
                As the Fund advances its mission, we remember those who participated in its journey and acknowledge the place they hold in its history. Their service reminds us of the importance of institutional continuity and the responsibility of those who follow to sustain and build upon the work of their predecessors.
              </p>
              <p>
                Although Mr Oyelere did not live to participate in the formal inauguration of the committee to which he had been appointed, his appointment remains part of the record of his service to KwaraETF.
              </p>
              <p>
                We honour his contribution to the institution, his professional commitment to education and his place in the continuing story of efforts to improve educational outcomes across Kwara State.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Section: Our Condolences */}
          <div className="rounded-none border border-emerald-900/10 bg-[#fbfdfc] p-7 sm:p-9 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              Our Condolences
            </h2>
            <p className="text-[16px] leading-8 text-gray-700 sm:text-[17px] sm:leading-8">
              The Board and Management of the Kwara State Education Trust Fund extend their heartfelt condolences to the family, friends, colleagues and associates of Mr Moses Jimoh Adebayo Oyelere.
            </p>
            <p className="text-[16px] leading-8 text-gray-700 sm:text-[17px] sm:leading-8">
              We acknowledge his years of service to education, his contribution to KwaraETF as a pioneer Board member and his appointment to the Programmes &amp; Partnerships Committee.
            </p>
            <p className="text-[16px] leading-8 text-gray-700 sm:text-[17px] sm:leading-8 font-medium text-gray-900">
              We pray that Almighty God grants him eternal rest and gives his loved ones the strength and comfort to bear this profound loss.
            </p>
            <p className="text-[16px] leading-8 text-gray-700 sm:text-[17px] sm:leading-8 italic text-emerald-950 font-serif">
              May his memory remain a blessing, and may his commitment to education and public service continue to inspire all those entrusted with shaping the future of Kwara State.
            </p>
            <div className="pt-4 border-t border-gray-200 font-semibold text-gray-900 text-sm">
              <p>The Board and Management</p>
              <p className="text-[#066842]">Kwara State Education Trust Fund (KwaraETF)</p>
            </div>
          </div>

          {/* BOTTOM SOCIAL SHARE BAR */}
          {renderShareBar()}

          {/* Footer Back Link */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <a
              href="#news"
              onClick={handleBackToNews}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs font-semibold text-gray-700 shadow-2xs hover:border-[#066842] hover:text-[#066842] transition-colors"
            >
              <span>&larr;</span>
              <span>Back to All News</span>
            </a>

            <span className="text-xs text-gray-400">
              KwaraETF News Dispatch
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default InMemoriamNews

