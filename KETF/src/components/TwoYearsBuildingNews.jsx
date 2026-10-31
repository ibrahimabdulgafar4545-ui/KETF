import { useState } from 'react'

const socialShareLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkwaraetf.org%2Ftwo-years-of-building-for-impact%2F',
    icon: (
      <svg className="h-3.5 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#1877F2]" viewBox="0 0 320 512" aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    name: 'X',
    url: 'https://twitter.com/intent/tweet?text=TWO+YEARS+OF+BUILDING+FOR+IMPACT+%26%238211%3B+Kwara+State+Education+Trust+Fund.+https%3A%2F%2Fkwaraetf.org%2Ftwo-years-of-building-for-impact%2F',
    icon: (
      <svg className="h-3 w-3 fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#000000]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fkwaraetf.org%2Ftwo-years-of-building-for-impact%2F',
    icon: (
      <svg className="h-3 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#0A66C2]" viewBox="0 0 448 512" aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    url: 'https://pinterest.com/pin/find/?url=https%3A%2F%2Fkwaraetf.org%2Ftwo-years-of-building-for-impact%2F',
    icon: (
      <svg className="h-3.5 w-auto fill-[#8c97a8] transition-colors duration-200 group-hover:fill-[#E60023]" viewBox="0 0 496 512" aria-hidden="true">
        <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.5 6.9-28.1.6-2.5.2-4.9-1.9-7.4-11.3-13.8-18.5-38.9-18.5-62.6 0-59.5 45.4-115.1 121.7-115.1 66.5 0 110.1 45.4 110.1 107.6 0 71.7-36 122.9-83.3 122.9-25.2 0-44.1-20.8-38.1-46.3 7.2-30.5 21.2-63.4 21.2-85.4 0-19.7-10.6-36.1-32.4-36.1-25.7 0-46.4 26.6-46.4 62.2 0 22.7 7.7 38 7.7 38s-26.1 110.5-30.7 130c-5.4 22.9-2.2 56.4-.3 78.5C65.5 431.1 0 351.4 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256z" />
      </svg>
    ),
  },
]

const TwoYearsBuildingNews = ({ onNavigate }) => {
  const [liked, setLiked] = useState(false)

  const handleBackToNews = (e) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('#news')
    } else {
      window.location.hash = '#news'
    }
  }

  // Social Share Bar matching the exact reference: Share f 𝕏 in P ♡ 0
  const renderShareBar = () => (
    <div className="flex items-center justify-between border-y border-gray-200/80 bg-[#f4f7f9] px-4 py-2.5 sm:px-6">
      {/* Left: Share text + 4 exact social icon logos in muted grey like reference */}
      <div className="flex items-center gap-3.5">
        <span className="text-[14px] font-medium text-gray-800">
          Share
        </span>
        <div className="flex items-center gap-3">
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
        <span className={`text-[13px] ${liked ? 'font-semibold text-[#16a34a]' : 'font-normal text-gray-500'}`}>
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
            <span className="text-[#f3df9d]">Chairman&apos;s Review</span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
            TWO YEARS OF BUILDING FOR IMPACT
          </h1>
          <p className="mt-2 text-base sm:text-lg font-medium text-[#f3df9d]">
            A Biennial Review of Institutional Growth, Strategic Stewardship &amp; Educational Impact
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
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-0.5 text-xs text-white">
                Categories
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* TOP SOCIAL SHARE BAR */}
        {renderShareBar()}

        {/* Featured Meeting Image Banner: N2.png */}
        <div className="border border-gray-200 bg-white p-4 sm:p-6 shadow-xs flex justify-center">
          <div className="max-w-2xl w-full overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
            <img
              src="/N2.png"
              alt="Col. Abdulwahab Ademola Lawal (PhD, rtd) presiding at KwaraETF meeting"
              className="w-full h-auto object-cover object-center"
            />
            <div className="p-3 text-center bg-gray-50 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-800">
                Col. Abdulwahab Ademola Lawal (PhD, rtd)
              </p>
              <p className="text-[11px] text-gray-500">
                Chairman, Board of Trustees &bull; Kwara State Education Trust Fund
              </p>
            </div>
          </div>
        </div>

        {/* Main Article Body */}
        <div className="border border-gray-200 bg-white p-7 sm:p-12 shadow-xs space-y-6 text-gray-800">
          <div className="space-y-6 text-[17px] leading-8 sm:text-[18px] sm:leading-[1.95] text-gray-800">
            <p className="border-l-4 border-[#066842] pl-5 font-medium italic text-gray-900 bg-emerald-50/40 py-2.5">
              Two years ago, I had the honour of being entrusted with the responsibility of serving as Chairman of the Kwara State Education Trust Fund. As I complete my second year, I look back with gratitude at a year defined by stronger institutions, deeper partnerships, new opportunities and a growing determination to make education financing a shared responsibility.
            </p>

            <p>
              If our first year was about laying the institutional foundation, this second year has been about strengthening that foundation, expanding our reach and translating our strategy into greater impact.
            </p>

            <p>
              The year brought an important transition in the composition of our Board. Mrs. Kemi Mary Adeosun, who represented the public service on the Board, retired from service after her years of dedicated contribution. Her retirement marked the end of an important chapter. We subsequently welcomed Mrs. Olufunke Mercy Shittu, representing the Office of the Head of Service; Mrs. Rebecca Bake Olanrewaju, representing the Ministry of Education and Human Capital Development; and Hon. Abdullahi Danladi, representing ALGON. Their inclusion has strengthened the institutional depth and diversity of perspectives on the Board. We remain grateful to Mrs. Adeosun for her service and contribution to KwaraETF.
            </p>

            <p>
              Our resource mobilisation efforts also gained momentum. We secured the ₦200 million grant from the Kwara State Government and received a significant ₦10 million contribution from the Monmodu-Jamiu Oyawoye Foundation Ltd/Gte (MJOF).
            </p>

            <p>
              We also strengthened our stewardship of the Fund’s resources, with ₦158.6 million deployed across Treasury Bills, fixed deposits and commercial paper, with a projected yield of approximately ₦15.9 million. This reflects our commitment to ensuring that resources entrusted to KwaraETF are prudently managed and positioned to generate additional resources for education.
            </p>

            <p>
              We saw an inspiring demonstration of what individual leadership and collective giving can achieve through Celebrate KwaraETF, initiated around the birthday of Board member Iyinoluwa Aboyeji. Iyin committed to match public contributions to education in Kwara up to ₦35 million, and the campaign has so far mobilised ₦7 million from members of the public. Beyond the funds raised, it reinforced an important principle: that citizens can play an active role in shaping the future of education in their State.
            </p>

            <p>
              Our partnership ecosystem continued to grow with AlumUnite coming on board, while we launched Giving Tuesday and advanced the Lafiagi Education Matching Grant as another innovative approach to mobilising collective support for public education. The initiative received a significant boost when His Royal Highness, the Emir of Lafiagi, committed ₦20 million towards the campaign, demonstrating the power of leadership, community ownership and philanthropy in supporting public education.
            </p>

            <p>
              Our national engagement also expanded significantly. KwaraETF was invited to participate in the World Bank’s Entertaining Change Forum in Abuja, contributing to conversations around policy, partnerships and advocacy. We also participated in the Sub-National Investment Roundtable at the Presidential Villa, bringing education financing into broader national conversations on investment and development.
            </p>

            <p>
              We were further invited by the Federal Ministry of Education and TETFund to participate in the North-Central Zonal National Commercialisation Intelligence and Ecosystem Engagement Workshop in Jos, engaging with policymakers, researchers, academia, industry and other stakeholders around the connection between education, research, innovation and economic opportunity.
            </p>

            <p>
              As our work grew, so did our commitment to accountability and learning. We introduced the KwaraETF Annual Impact Report, creating a structured way to document our work, communicate our results and demonstrate the value of the resources entrusted to us.
            </p>

            <p>
              We also began looking more closely at what our own programmes were telling us about the education system. Through our Insights from the Field work, we examined the experience of our scholarship beneficiaries and raised important questions about the relationship between examination performance and actual learning — reminding us that identifying brilliant pupils is only one part of the task; understanding and addressing learning gaps is another.
            </p>

            <p>
              Our Board Retreat subsequently provided an important opportunity to step back, reflect on our progress, interrogate our priorities and align around the next phase of the Fund’s development.
            </p>

            <p>
              At the programme level, our scholarship beneficiaries completed their first year, while we launched the KwaraETF Summer School, creating opportunities for young Kwarans to learn, create, develop practical skills and build confidence beyond the traditional classroom.
            </p>

            <p>
              I was also honoured to join the Kwara State Security Strategy Committee, contributing to wider conversations around the safety and wellbeing of our communities and, particularly, our children.
            </p>

            <p>
              None of these milestones belongs to one person. They are the result of collective effort — a committed Board, a dedicated Secretariat, supportive government, partners willing to collaborate, donors willing to give, and stakeholders across Kwara who continue to engage with our mission.
            </p>

            <p>
              I remain deeply grateful to His Excellency, Governor AbdulRahman AbdulRazaq, for the confidence reposed in me and his continued support for education; to my fellow Board members; our Executive Secretary and Secretariat; our consultants, partners and donors; and to every individual who believes that investing in education is investing in the future of our State.
            </p>

            <p className="font-semibold text-gray-900">
              Two years on, KwaraETF is stronger in its partnerships, broader in its reach, more accountable in its reporting and clearer in its strategic direction.
            </p>

            <p className="text-xl font-bold text-[#066842]">
              There is still much to do.
            </p>

            <p>
              But we have built something important — a platform that brings government, institutions, businesses, communities and citizens together around the shared responsibility of investing in the future of our children.
            </p>

            <p>
              The work continues, with gratitude for how far we have come and renewed determination for how far we can still go.
            </p>
          </div>

          {/* Official Sign-off Card */}
          <div className="mt-10 border-t border-gray-200 pt-8">
            <div className="rounded-lg border border-gray-100 bg-[#fbfdfc] p-6 sm:p-8">
              <h4 className="text-lg font-bold text-gray-900">
                Col. Abdulwahab Ademola Lawal (PhD, rtd)
              </h4>
              <p className="text-sm font-semibold text-[#066842]">
                Chairman, Board of Trustees
              </p>
              <p className="text-xs text-gray-500">
                Kwara State Education Trust Fund (KwaraETF)
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SOCIAL SHARE BAR */}
        {renderShareBar()}

        {/* Back to News Button */}
        <div className="flex justify-between items-center pt-4">
          <a
            href="#news"
            onClick={handleBackToNews}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 shadow-2xs transition-all hover:border-[#066842] hover:text-[#066842] cursor-pointer"
          >
            <span>&larr;</span>
            <span>Back to All News</span>
          </a>

          <a
            href="#news-in-memoriam"
            onClick={(e) => {
              e.preventDefault()
              if (onNavigate) onNavigate('#news-in-memoriam')
              else window.location.hash = '#news-in-memoriam'
            }}
            className="text-xs font-semibold text-[#066842] hover:underline cursor-pointer"
          >
            Next: IN MEMORIAM &rarr;
          </a>
        </div>
      </div>
    </article>
  )
}

export default TwoYearsBuildingNews
