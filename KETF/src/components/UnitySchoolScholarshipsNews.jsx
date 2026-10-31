import { useState } from 'react'

const socialShareLinks = [
  {
    name: 'Facebook',
    brandColor: '#1877F2',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkwaraetf.org%2Fdream-coming-true-gov-abdulrazaq-12-scholarships%2F',
    icon: (
      <svg className="h-4 w-auto fill-[#1877F2]" viewBox="0 0 320 512" aria-hidden="true">
        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
      </svg>
    ),
  },
  {
    name: 'X',
    brandColor: '#000000',
    url: 'https://twitter.com/intent/tweet?text=%E2%80%98DREAM+COMING+TRUE%E2%80%99+FOR+GOV+ABDULRAZAQ+AS+KWARA+TRUST+FUND+BANKROLLS+SECONDARY+EDUCATION+OF+12+OUTSTANDING+PUPILS+IN+UNITY+SCHOOL+%26%238211%3B+Kwara+State+Education+Trust+Fund.&url=https%3A%2F%2Fkwaraetf.org%2Fdream-coming-true-gov-abdulrazaq-12-scholarships%2F',
    icon: (
      <svg className="h-3.5 w-3.5 fill-[#000000]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    brandColor: '#0A66C2',
    url: 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fkwaraetf.org%2Fdream-coming-true-gov-abdulrazaq-12-scholarships%2F',
    icon: (
      <svg className="h-3.5 w-auto fill-[#0A66C2]" viewBox="0 0 448 512" aria-hidden="true">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    brandColor: '#E60023',
    url: 'https://pinterest.com/pin/find/?url=https%3A%2F%2Fkwaraetf.org%2Fdream-coming-true-gov-abdulrazaq-12-scholarships%2F',
    icon: (
      <svg className="h-4 w-auto fill-[#E60023]" viewBox="0 0 496 512" aria-hidden="true">
        <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.5 6.9-28.1.6-2.5.2-4.9-1.9-7.4-11.3-13.8-18.5-38.9-18.5-62.6 0-59.5 45.4-115.1 121.7-115.1 66.5 0 110.1 45.4 110.1 107.6 0 71.7-36 122.9-83.3 122.9-25.2 0-44.1-20.8-38.1-46.3 7.2-30.5 21.2-63.4 21.2-85.4 0-19.7-10.6-36.1-32.4-36.1-25.7 0-46.4 26.6-46.4 62.2 0 22.7 7.7 38 7.7 38s-26.1 110.5-30.7 130c-5.4 22.9-2.2 56.4-.3 78.5C65.5 431.1 0 351.4 0 256 0 114.6 114.6 0 256 0s256 114.6 256 256z" />
      </svg>
    ),
  },
]

const UnitySchoolScholarshipsNews = ({ onNavigate }) => {
  const [liked, setLiked] = useState(false)

  const handleBackToNews = (e) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate('#news-page-4')
    } else {
      window.location.hash = '#news-page-4'
    }
  }

  // Social Share Bar
  const renderShareBar = () => (
    <div className="flex items-center justify-between border-y border-gray-200/80 bg-[#f4f7f9] px-4 py-2.5 sm:px-6">
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

      <button
        type="button"
        onClick={() => setLiked((prev) => !prev)}
        className="group inline-flex items-center gap-1.5 text-xs transition-colors cursor-pointer"
        aria-label="Like this publication"
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
      {/* Top Hero Banner */}
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
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-100/80 uppercase">
            <a
              href="#news-page-4"
              onClick={handleBackToNews}
              className="transition-colors hover:text-[#f3df9d]"
            >
              News
            </a>
            <span>/</span>
            <span className="text-[#f3df9d]">Scholarships &amp; Interventions</span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl leading-tight">
            ‘DREAM COMING TRUE’ FOR GOV ABDULRAZAQ AS KWARA TRUST FUND BANKROLLS SECONDARY EDUCATION OF 12 OUTSTANDING PUPILS IN UNITY SCHOOL
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-emerald-100/95 font-medium">
            <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1">
              ▪︎ Parents laud Gov for pro-masses initiative
            </span>
            <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1">
              ▪︎ How scholarship beneficiaries emerged: Fund
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-200/90 bg-white shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12 space-y-8">
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 pb-5 border-b border-gray-100">
            <div className="flex items-center gap-1.5 font-medium text-gray-700">
              <svg className="h-4 w-4 text-[#066842]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>September 17, 2025</span>
            </div>
            <span>&bull;</span>
            <div className="flex items-center gap-1">
              <span>Published by</span>
              <span className="font-bold text-[#066842]">KwaraETF</span>
            </div>
            <span>&bull;</span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 font-semibold text-[#066842]">
              Scholarships &amp; Interventions
            </span>
          </div>

          {/* TOP SOCIAL SHARE BAR */}
          {renderShareBar()}

          {/* Featured Framed Photograph */}
          <div className="overflow-hidden border border-gray-200 bg-gray-50 shadow-xs">
            <img
              src="/news-pg4-6.jpg"
              alt="Governor AbdulRahman AbdulRazaq with scholarship beneficiaries"
              className="w-full h-auto max-h-[520px] object-cover object-top"
            />
          </div>

          {/* Opening Paragraphs */}
          <div className="space-y-6 text-[16px] leading-8 sm:text-[17px] sm:leading-[1.95] text-gray-700">
            <p className="font-medium text-gray-900 text-lg sm:text-xl">
              Kwara State Education Trust Fund (Kwara-ETF) has awarded its first scholarships to 12 outstanding pupils from public schools who would have their secondary school studies fully bankrolled under the Fund.
            </p>

            <p>
              The development brought immeasurable joy to Governor AbdulRahman AbdulRazaq, who saw it as a dream come true for him and the people barely two years after the Fund took off.
            </p>

            <p>
              Established via a 2021 legislation to run under a trustee drawn majorly from the private sector and community concerns, the Education Trust Fund has attracted considerable support from philanthropists and other bodies.
            </p>

            <p>
              Speaking at a brief orientation programme for the inaugural beneficiaries who met the thresholds, Governor AbdulRazaq said the task of developing the education system in Nigeria is expensive and should be a collective business.
            </p>

            <p>
              He called on well-to-do individuals and foundations to support public school funding in the area of infrastructure or fund students who meet certain criteria of exceptional brilliance and commitment to academic excellence.
            </p>

            <p>
              The lucky 12 were picked based on excellent performance at various screening stages conducted by the Kwara ETF. The scholarship will cover their school expenses for their secondary school education.
            </p>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Governor AbdulRazaq Remarks */}
          <div className="space-y-5">
            <blockquote className="rounded-r-xl border-l-4 border-[#066842] bg-[#f7faf8] p-6 italic text-gray-800 shadow-2xs space-y-4">
              <p className="text-[16px] sm:text-[17px] leading-relaxed">
                &ldquo;We urge members of the public to also donate and adopt students. Don’t just leave the responsibility to the government and the PTAs (Parents Teachers Associations). Educating our children is our collective responsibility.&rdquo;
              </p>
              <p className="text-[16px] sm:text-[17px] leading-relaxed">
                &ldquo;Education belongs to all of us. It is our business. But we have seen over the years that governments alone can’t fully fund education. We need to engage through other means.&rdquo;
              </p>
              <p className="text-[16px] sm:text-[17px] leading-relaxed">
                &ldquo;We have, therefore, gone through the education trust fund to fill in the gaps. What you have seen here today is a module where some students were selected through a very rigorous and transparent process to benefit from scholarship.&rdquo;
              </p>
              <cite className="mt-3 block text-xs font-bold text-[#066842] not-italic">
                &mdash; His Excellency, Mallam AbdulRahman AbdulRazaq, Governor of Kwara State
              </cite>
            </blockquote>

            <p className="text-[16px] leading-8 sm:text-[17px] sm:leading-[1.95] text-gray-700">
              AbdulRazaq hailed the selection process and congratulated the winners.
            </p>

            <blockquote className="rounded-r-xl border-l-4 border-[#c8b268] bg-[#fdfbf7] p-6 italic text-gray-800 shadow-2xs space-y-4">
              <p className="text-[16px] sm:text-[17px] leading-relaxed">
                &ldquo;I am truly excited that these pupils are from humble backgrounds. They did not cut corners to make the list. They were chosen through a transparent process. This is just the beginning. We will keep tracking them to the university level,&rdquo; he added.
              </p>
              <p className="text-[16px] sm:text-[17px] leading-relaxed font-semibold text-gray-900 not-italic">
                &ldquo;Our government will also donate more funds into this Trust Fund.&rdquo;
              </p>
            </blockquote>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Selection Methodology: Executive Secretary Oluwadamilola Amolegbe */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold tracking-tight text-gray-900">
              How Scholarship Beneficiaries Emerged: Merit-Based Selection
            </h3>

            <p className="text-[16px] leading-8 sm:text-[17px] sm:leading-[1.95] text-gray-700">
              Executive Secretary for Kwara ETF, Oluwadamilola Amolegbe, said the 12 pupils emerged from the initial shortlist of 640 pupils based on merit.
            </p>

            <blockquote className="rounded-r-xl border-l-4 border-[#084d49] bg-[#f4f8f7] p-6 italic text-gray-800 shadow-2xs space-y-4">
              <p className="text-[16px] sm:text-[17px] leading-relaxed">
                &ldquo;We started the selection process by setting exams for all the primary six pupils who were beneficiaries of the digital literacy programme of KwaraLEARN. And we got 640 top performing ones, out of whom we first selected 180 pupils,&rdquo; she explained.
              </p>
              <p className="text-[16px] sm:text-[17px] leading-relaxed">
                &ldquo;After sponsoring them for the NCEE exams (National Common Entrance Examination), we selected twenty per cent of them (36 pupils) who performed well. Then, we picked the top performers among them, cutting from across the local government areas, and who also got admission into unity school.&rdquo;
              </p>
              <cite className="mt-3 block text-xs font-bold text-[#084d49] not-italic">
                &mdash; Oluwadamilola Amolegbe, Executive Secretary, KwaraETF
              </cite>
            </blockquote>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Programme Monitoring: Zainab Abdulsalam */}
          <div className="space-y-5">
            <p className="text-[16px] leading-8 sm:text-[17px] sm:leading-[1.95] text-gray-700">
              Zainab Abdulsalam, the programme manager for the office, said they are committed to the vision of Kwara ETF to build the future of the state through sustainable investments in quality education.
            </p>

            <blockquote className="rounded-r-xl border-l-4 border-[#066842] bg-[#f7faf8] p-6 italic text-gray-800 shadow-2xs space-y-4">
              <p className="text-[16px] sm:text-[17px] leading-relaxed">
                &ldquo;These are our pupils, who, we believe, represent the face of an average Kwaran. They are here having this opportunity to get amazing exposure that leads to unlimited opportunities for them,&rdquo; she said.
              </p>
              <p className="text-[16px] sm:text-[17px] leading-relaxed">
                &ldquo;We intend to track them, monitor their performances, and make sure that at the end of the day all the investments that Kwara has made in education through KwaraLEARN, Kwara ETF and Ministry of Education are paying up in tangible ways that we can see, not just in numbers but by the success of the students.&rdquo;
              </p>
              <cite className="mt-3 block text-xs font-bold text-[#066842] not-italic">
                &mdash; Zainab Abdulsalam, Programme Manager, KwaraETF
              </cite>
            </blockquote>
          </div>

          <div className="h-px w-full bg-gray-200" />

          {/* Parents' Reaction: Maxwell Kolawole */}
          <div className="space-y-5">
            <p className="text-[16px] leading-8 sm:text-[17px] sm:leading-[1.95] text-gray-700">
              Maxwell Kolawole, one of the parents of the lucky pupils from Ekiti Local Government, said the pick means that the government has taken off his burden of paying the school fees and other expenses, commending Governor AbdulRazaq for the gesture.
            </p>

            <p className="text-[16px] leading-8 sm:text-[17px] sm:leading-[1.95] text-gray-700">
              He lauded the selection process that he described as transparent and impressive.
            </p>

            <blockquote className="rounded-r-xl border-l-4 border-emerald-600 bg-[#f7faf8] p-5 italic text-gray-800 shadow-2xs">
              <p className="text-[16px] sm:text-[17px] leading-relaxed">
                &ldquo;This is truly a pro-masses initiative, and we are grateful to the Governor and his administration.&rdquo;
              </p>
              <cite className="mt-3 block text-xs font-bold text-[#066842] not-italic">
                &mdash; Maxwell Kolawole, Parent (Ekiti LGA)
              </cite>
            </blockquote>
          </div>

          {/* Official Press Release Sign-off Box */}
          <div className="rounded-none border border-emerald-900/10 bg-[#fbfdfc] p-7 sm:p-9 space-y-3">
            <p className="font-bold text-gray-900 text-base">
              Rafiu Ajakaye
            </p>
            <p className="text-sm font-semibold text-[#066842]">
              Chief Press Secretary to the Governor
            </p>
            <p className="text-xs text-gray-500">
              September 17, 2025 &bull; Government House, Ilorin, Kwara State
            </p>
          </div>

          {/* BOTTOM SOCIAL SHARE BAR */}
          {renderShareBar()}

          {/* Footer Back Link */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
            <a
              href="#news-page-4"
              onClick={handleBackToNews}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs font-semibold text-gray-700 shadow-2xs hover:border-[#066842] hover:text-[#066842] transition-colors"
            >
              <span>&larr;</span>
              <span>Back to News</span>
            </a>

            <span className="text-xs text-gray-400">
              Official Press Release
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default UnitySchoolScholarshipsNews
