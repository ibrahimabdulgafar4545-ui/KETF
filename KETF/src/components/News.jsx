import { useState, useEffect, useRef } from 'react'
import { newsArticles } from '../data/newsArticles.js'
import { newsArticlesPage2 } from '../data/newsArticlesPage2.js'
import { newsArticlesPage3 } from '../data/newsArticlesPage3.js'
import { newsArticlesPage6 } from '../data/newsArticlesPage6.js'
import { newsArticlesPage7 } from '../data/newsArticlesPage7.js'

const allDispatches = {
  1: newsArticles,
  2: newsArticlesPage2,
  3: newsArticlesPage3,
  4: [
    {
      id: 'news-anniversary-office',
      title: 'ON THE OCCASION OF MY FIRST ANNIVERSARY IN OFFICE',
      date: 'Official Statement',
      category: 'Executive Address',
      publishedBy: 'KwaraETF',
      excerpt:
        'Today marks one year since I had the honour of being appointed as Chairman of the Kwara State Education Trust Fund a role that has been [...]',
      image: '/news-pg4-1.jpg',
      imageAlt: 'Col. Abdulwahab Ademola Lawal (PhD, rtd)',
      badge: "Chairman's Official Statement",
      targetRoute: '#news-anniversary-office',
    },
    {
      id: 'news-world-bank-abuja',
      title: 'KWARAETF SHOWCASES POLICY LEADERSHIP AT WORLD BANK GLOBAL FORUM IN ABUJA.',
      date: 'October 27, 2025',
      category: 'Global Forum & Policy',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Kwara State Education Trust Fund (KwaraETF) continues to strengthen its national and global footprint in education transformation. The Fund’s Executive Secretary, Oluwadamilola Fatima Amolegbe, featured [...]',
      image: '/news-pg4-2.jpg',
      imageAlt: 'Oluwadamilola Fatima Amolegbe at World Bank Global Forum in Abuja',
      badge: 'World Bank Global Forum Dispatch',
      targetRoute: '#news-world-bank-abuja',
    },
    {
      id: 'news-oyawoye-foundation',
      title: 'OYAWOYE FOUNDATION DONATES ₦10 MILLION TO SUPPORT EDUCATION TRANSFORMATION IN KWARA STATE',
      date: 'October 24, 2025',
      category: 'Philanthropy & Endowments',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Monmodu-Jamiu Oyawoye Foundation Ltd/Gte (MJOF), an Offa-based organisation, well known for her philanthropy, has donated ₦10 million to the Kwara State Education Trust Fund (KwaraETF) [...]',
      image: '/news-pg4-3.jpg',
      imageAlt: 'Oyawoye Foundation Donates ₦10 Million to KwaraETF',
      badge: 'Philanthropic Endowment Dispatch',
      targetRoute: '#news-oyawoye-foundation',
    },
    {
      id: 'news-pta-levy-annual-grants',
      title: 'KWARAETF COMMENDS GOVERNOR ABDULRAZAQ’S APPROVAL OF ANNUAL GRANTS FOR PUBLIC PRIMARY SCHOOLS',
      date: 'October 7, 2025',
      category: 'Policy & Governance',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Kwara State Education Trust Fund (KwaraETF) commends the Kwara State Government, led by His Excellency, Governor AbdulRahman AbdulRazaq, for yet another bold step in [...]',
      image: '/news-pg4-4.jpg',
      imageAlt: 'Bye-Bye PTA Levy - Annual Grants for Public Primary Schools',
      badge: 'Policy Commendation Dispatch',
      targetRoute: '#news-pta-levy-annual-grants',
    },
    {
      id: 'news-induction-new-board-members',
      title: 'KWARAETF STRENGTHENS LEADERSHIP WITH INDUCTION OF NEW BOARD MEMBERS',
      date: 'October 8, 2025',
      category: 'Governance & Leadership',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Kwara State Education Trust Fund (KwaraETF) is pleased to welcome two new members to its Board — Comrade Yusuf Agboola, Chairman of the Nigeria Union [...]',
      image: '/news-pg4-5.jpg',
      imageAlt: 'KwaraETF Strengthens Leadership with Induction of New Board Members',
      badge: 'Board Induction Dispatch',
      targetRoute: '#news-induction-new-board-members',
    },
    {
      id: 'news-unity-school-scholarships',
      title: '‘DREAM COMING TRUE’ FOR GOV ABDULRAZAQ AS KWARA TRUST FUND BANKROLLS SECONDARY EDUCATION OF 12 OUTSTANDING PUPILS IN UNITY SCHOOL',
      date: 'September 17, 2025',
      category: 'Scholarships & Interventions',
      publishedBy: 'KwaraETF',
      excerpt:
        '▪︎ Parents laud Gov for pro-masses initiative ▪︎ How scholarship beneficiaries emerged: Fund Kwara State Education Trust Fund (Kwara-ETF) has awarded its first scholarships to 12 [...]',
      image: '/news-pg4-6.jpg',
      imageAlt: 'Governor AbdulRahman AbdulRazaq with scholarship beneficiaries',
      badge: 'Scholarship Inauguration Dispatch',
      targetRoute: '#news-unity-school-scholarships',
    },
    {
      id: 'news-case-study-administrative-fee',
      title: 'A CASE STUDY: WHY KWARAETF CHARGES AN ADMINISTRATIVE FEE',
      date: 'August 13, 2025',
      category: 'Governance & Policy',
      publishedBy: 'KwaraETF',
      excerpt:
        'A Story from the Field Two years ago, a generous partner funded the renovation of a rural primary school in Kwara State. The classrooms were painted, [...]',
      image: '/news-pg4-7.jpg',
      imageAlt: 'A Case Study: Why KwaraETF Charges an Administrative Fee',
      badge: 'Case Study Dispatch',
      targetRoute: '#news-case-study-administrative-fee',
    },
    {
      id: 'news-first-cohort-12-scholars',
      title: 'KWARAETF WELCOMES FIRST COHORT OF 12 SCHOLARSHIP BENEFICIARIES',
      date: 'September 18, 2025',
      category: 'Scholarships & Initiatives',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Kwara State Education Trust Fund (KwaraETF), in partnership with KwaraLEARN, has officially welcomed the first 12 beneficiaries of its Scholarship Program. The selection followed a [...]',
      image: '/news-pg4-8.jpg',
      imageAlt: 'First Cohort of 12 Scholarship Beneficiaries with KwaraETF and KwaraLEARN',
      badge: 'Scholarship Cohort Dispatch',
      targetRoute: '#news-first-cohort-12-scholars',
    },
    {
      id: 'news-ncee-results-promise-gaps',
      title: 'KWARAETF SHOWS PROMISE AND GAPS AS NCEE RESULTS EMERGE',
      date: 'September 8, 2025',
      category: 'Scholarships & Results',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Kwara State Education Trust Fund (KwaraETF) has released the results of its 2025 National Common Entrance Examination (NCEE) scholarship beneficiaries, highlighting both outstanding achievements and [...]',
      image: '/news-pg4-9.jpg',
      imageAlt: 'KwaraETF Shows Promise and Gaps as NCEE Results Emerge',
      badge: 'NCEE Scholarship Results Dispatch',
      targetRoute: '#news-ncee-results-promise-gaps',
    },
  ],
  5: [
    {
      id: 'news-ncc-board-appointment',
      title: 'KWARAETF CHAIRMAN APPOINTED TO NIGERIAN COMMUNICATIONS COMMISSION BOARD',
      date: 'August 13, 2025',
      category: 'Governance & Appointments',
      publishedBy: 'KwaraETF',
      excerpt:
        'President Bola Ahmed Tinubu has appointed Col. Abdulwahab Lawal (Rtd), Chairman of the Kwara State Education Trust Fund (KwaraETF), to the board of the Nigerian Communications [...]',
      image: '/news-pg5-1.jpg',
      imageAlt: 'Col. Abdulwahab Lawal (Rtd) appointed to NCC Board',
      badge: 'Federal Appointment Dispatch',
      targetRoute: '#news-ncc-board-appointment',
    },
    {
      id: 'news-al-hikmah-donation',
      title: 'FOUNDER OF AL-HIKMAH UNIVERSITY DONATES TO KWARA STATE EDUCATION TRUST FUND, SUPPORTS TOP NATIONAL STUDENTS AND MORE',
      date: 'August 11, 2025',
      category: 'Philanthropy & Endowments',
      publishedBy: 'KwaraETF',
      excerpt:
        'In a compelling testament to his lifelong dedication to expanding access and opportunity, Alhaji Raimi Oladimeji OFR -founder of Al-Hikmah University and Al-Hikmah International Secondary School, [...]',
      image: '/news-pg5-2.jpg',
      imageAlt: 'Founder of Al-Hikmah University Donates to KwaraETF',
      badge: 'Philanthropic Endowment Dispatch',
      targetRoute: '#news-al-hikmah-donation',
    },
    {
      id: 'news-kwaraetf-law-amended',
      title: 'KWARAETF LAW AMENDED: STRENGTHENING TRANSPARENCY AND SUSTAINABLE EDUCATION FUNDING',
      date: 'July 13, 2025',
      category: 'Legislation & Governance',
      publishedBy: 'KwaraETF',
      excerpt:
        'With the gracious assent of His Excellency Governor AbdulRahman AbdulRazaq, the 2nd Amendment to the Kwara State Education Trust Fund (KwaraETF) Law is now in effect [...]',
      image: '/news-pg5-3.jpg',
      imageAlt: 'KwaraETF Law Amended: Strengthening Transparency and Sustainable Education Funding',
      badge: 'Legislative Amendment Dispatch',
      targetRoute: '#news-kwaraetf-law-amended',
    },
    {
      id: 'news-celebrate-aboyeji',
      title: '#CELEBRATEWITHKWARAETF: IYINOLUWA ABOYEJI',
      date: 'June 4, 2025',
      category: 'Community & Fundraising',
      publishedBy: 'KwaraETF',
      excerpt:
        'Another promise kept! What began as a birthday wish from Iyinoluwa Aboyeji, our board member; visionary entrepreneur; co-founder of Andela, Flutterwave and Future Africa became a [...]',
      image: '/news-pg5-4.jpg',
      imageAlt: '#CelebrateWithKwaraETF: Iyinoluwa Aboyeji and supporters',
      badge: 'Community Impact Dispatch',
      targetRoute: '#news-celebrate-aboyeji',
    },
    {
      id: 'news-mock-ncee-top-180',
      title: 'KWARAETF SCHOLARSHIP EXAMINATION: FROM MOCK TO MISSION – TOP 180 PUPILS ANNOUNCED',
      date: 'May 12, 2025',
      category: 'Scholarships & Assessments',
      publishedBy: 'KwaraETF',
      excerpt:
        'Kwara State Education Trust Fund (KwaraETF) in collaboration with KwaraLEARN conducted a Mock NCEE for 640 public school pupils across all LGAs. From this exercise, 180 [...]',
      image: '/news-pg5-5.jpg',
      imageAlt: 'Mock NCEE: Top 180 Pupils Announced',
      badge: 'Scholarship Assessment Dispatch',
      targetRoute: '#news-mock-ncee-top-180',
    },
    {
      id: 'news-public-schools-upgrade',
      title: 'KWARA PUBLIC SCHOOLS UPGRADE AND DEVELOPMENT COMMITTEE: A STEP TOWARDS EDUCATIONAL EXCELLENCE',
      date: 'April 18, 2025',
      category: 'Governance & Infrastructure',
      publishedBy: 'KwaraETF',
      excerpt:
        'On Friday, His Excellency Governor AbdulRahman AbdulRazaq inaugurated the Kwara Public School Upgrade and Development Committee (KPSUDC). The Committee has been established to provide strategic oversight [...]',
      image: '/news-pg5-6.jpg',
      imageAlt: 'Kwara Public Schools Upgrade and Development Committee',
      badge: 'Committee Inauguration Dispatch',
      targetRoute: '#news-public-schools-upgrade',
    },
    {
      id: 'news-celebrate-launch',
      title: 'KWARA STATE EDUCATION TRUST FUND LAUNCHES #CELEBRATEWITHKWARAETF TO DRIVE CITIZEN-LED EDUCATIONAL IMPACT',
      date: 'April 8, 2025',
      category: 'Community & Citizen Impact',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Kwara State Education Trust Fund is pleased to announce the commencement of the #CelebrateWithKwaraETF initiative — a platform that enables individuals to commemorate personal milestones [...]',
      image: '/news-pg5-7.jpg',
      imageAlt: '#CelebrateWithKwaraETF Launch',
      badge: 'Initiative Launch Dispatch',
      targetRoute: '#news-celebrate-launch',
    },
    {
      id: 'news-ncee-scholarship-launch',
      title: 'KWARA STATE EDUCATION TRUST FUND LAUNCHES SCHOLARSHIP INITIATIVE TO SUPPORT TOP-PERFORMING PUPILS',
      date: 'March 24, 2025',
      category: 'Scholarships & Assessments',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Kwara State Education Trust Fund (KwaraETF) has on Saturday, March 22, 2025, launched a new initiative to support top-performing pupils in writing the National Common Entrance Examination (NCEE) [...]',
      image: '/news-pg5-8.jpeg',
      imageAlt: 'Kwara State Education Trust Fund Launches Scholarship Initiative',
      badge: 'Scholarship Initiative Launch Dispatch',
      targetRoute: '#news-ncee-scholarship-launch',
    },
    {
      id: 'news-adopt-a-school-drive',
      title: 'KWARA STATE ETF LAUNCHES ‘ADOPT-A-SCHOOL’ DRIVE TO REVAMP PUBLIC EDUCATON',
      date: 'March 24, 2025',
      category: 'Partnerships & Infrastructure',
      publishedBy: 'KwaraETF',
      excerpt:
        'Kwara State- in a bold move to tackle the infrastructural and digital challenges in public schools across Kwara State, the Kwara State Education Trust Fund (ETF) has announced the official rollout [...]',
      image: '/news-pg5-9.jpg',
      imageAlt: 'Kwara State ETF Launches Adopt-A-School Drive',
      badge: 'Adopt-A-School Rollout Dispatch',
      targetRoute: '#news-adopt-a-school-drive',
    },
  ],
  6: newsArticlesPage6,
  7: newsArticlesPage7,
}

const News = ({ onNavigate, initialPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [readingArticle, setReadingArticle] = useState(null)
  const listTopRef = useRef(null)

  // Listen to hash to sync page number if user navigates to #news-page-4 or similar
  useEffect(() => {
    if (window.location.hash.startsWith('#news-page-')) {
      const page = parseInt(window.location.hash.replace('#news-page-', ''), 10)
      if (page >= 1 && page <= 7) {
        setCurrentPage(page)
      }
    } else if (window.location.hash === '#news-pg4') {
      setCurrentPage(4)
    }
  }, [])

  const handleOpenArticle = (e, article) => {
    if (e && e.preventDefault) e.preventDefault()
    const target = article.targetRoute || article.slug
    if (target) {
      if (onNavigate) {
        onNavigate(target)
      } else {
        window.location.hash = target
      }
    } else {
      setReadingArticle(article)
    }
  }

  const handleSelectArticle = (article) => {
    const target = article.targetRoute || article.slug || '#news'
    if (onNavigate) {
      onNavigate(target)
    } else {
      window.location.hash = target
    }
  }

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum)
    if (pageNum === 1) {
      if (onNavigate) onNavigate('#news')
      else window.location.hash = '#news'
    } else {
      if (onNavigate) onNavigate('#news-page-' + pageNum)
      else window.location.hash = '#news-page-' + pageNum
    }
    const feedHeader = document.getElementById('news-feed-top')
    if (feedHeader) {
      feedHeader.scrollIntoView({ behavior: 'smooth' })
    } else if (listTopRef.current) {
      listTopRef.current.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 380, behavior: 'smooth' })
    }
  }

  const currentArticles = allDispatches[currentPage] || []
  return (
    <section className="min-h-screen bg-[#f8faf9] pb-20 sm:pb-24">
      {/* Hero Banner */}
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

        <div className="relative mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="animate-fade-up mx-auto max-w-3xl">
            <span className="inline-block rounded-full border border-[#c8b268]/50 bg-white/10 px-3.5 py-1 text-[11px] sm:text-xs font-semibold tracking-widest text-[#f3df9d] uppercase">
              Resources &bull; Media &amp; Press
            </span>
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              News &amp; Announcements
            </h1>
            <div className="mx-auto mt-3 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-3 text-sm leading-relaxed text-emerald-50/90 sm:text-lg sm:mt-5">
              Official updates, special memorandums, press briefings, and stories from the Kwara State Education Trust Fund.
            </p>
          </div>
        </div>
      </div>

      <div id="news-feed-top" ref={listTopRef} className="mx-auto mt-8 sm:mt-12 max-w-5xl px-3 sm:px-6 lg:px-8 space-y-6 sm:space-y-10">
        {/* News Feed Header */}
        <div className="flex flex-row items-center justify-between gap-3 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              Latest Publications
            </h2>
            <p className="mt-0.5 text-xs sm:text-sm text-gray-600 line-clamp-1 sm:line-clamp-none">
              Stay informed with official dispatches, educational reforms, and stories from KwaraETF.
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-[#fdf8eb] border border-[#c8b268]/50 px-3 py-1 text-[11px] sm:text-xs font-bold text-[#8c6d23]">
            Page {currentPage} of 7
          </span>
        </div>

        {/* Current Page Articles */}
        {currentArticles.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-200 bg-white p-8 sm:p-12 text-center shadow-2xs">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-[#066842]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <h3 className="mt-4 text-base font-semibold text-gray-800">
              No publications on Page {currentPage}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Archival dispatches for this section will appear here once published.
            </p>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-10">
            {currentArticles.map((article, idx) => (
              <article
                key={article.id || idx}
                className="group border border-gray-200 bg-white shadow-xs transition-all duration-200 hover:border-[#c8b268]/80 hover:shadow-md overflow-hidden rounded-xl sm:rounded-none"
              >
                {/* Subtle top gradient bar */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${
                    idx % 2 === 0
                      ? 'from-[#066842] via-[#c8b268] to-[#084d49]'
                      : 'from-[#c8b268] via-[#066842] to-[#c8b268]'
                  }`}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 p-4 sm:p-9 lg:p-10 items-start">
                  {/* Beside Image */}
                  <div className="md:col-span-5 w-full">
                    <div
                      onClick={(e) => handleOpenArticle(e, article)}
                      className="relative overflow-hidden border border-gray-200 bg-gray-50 shadow-2xs cursor-pointer group/img rounded-lg sm:rounded-sm aspect-[16/10] sm:aspect-auto"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full sm:h-auto sm:max-h-[360px] object-cover object-top transition-transform duration-300 group-hover/img:scale-102"
                        loading="lazy"
                      />
                      {article.badge && (
                        <div className="sm:hidden absolute bottom-2 left-2 rounded bg-black/75 backdrop-blur-xs px-2 py-0.5 text-[10px] font-semibold text-white">
                          {article.badge}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="md:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      {/* Date & Published By & Categories Bar */}
                      <div className="flex flex-wrap items-center gap-y-1.5 gap-x-2 text-[11px] sm:text-xs text-gray-500 pb-2.5 border-b border-gray-100">
                        {article.date && (
                          <>
                            <div className="flex items-center gap-1 font-medium text-gray-600">
                              <svg
                                className="h-3 w-3 text-[#066842]"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span>{article.date}</span>
                            </div>
                            <span>&bull;</span>
                          </>
                        )}

                        <div className="flex items-center gap-1">
                          <span>Published by</span>
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="font-bold text-[#066842] hover:text-[#b91c1c] hover:underline cursor-pointer transition-colors"
                          >
                            {article.publishedBy || 'KwaraETF'}
                          </a>
                        </div>

                        <span>&bull;</span>

                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10.5px] font-semibold text-gray-700">
                          {article.category || 'Categories'}
                        </span>
                      </div>

                      {/* Article Title */}
                      <h3 className="mt-3 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 leading-snug">
                        <a
                          href={article.slug || '#'}
                          onClick={(e) => handleOpenArticle(e, article)}
                          className="hover:text-[#066842] hover:underline cursor-pointer transition-colors"
                        >
                          {article.title}
                        </a>
                      </h3>

                      {/* Body Excerpt */}
                      <p className="mt-2.5 text-[14px] leading-relaxed text-gray-700 sm:mt-4 sm:text-[16px] sm:leading-8">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <div className="mt-5 sm:mt-8 pt-4 sm:pt-5 border-t border-gray-100 flex items-center justify-between">
                      <a
                        href={article.slug || '#'}
                        onClick={(e) => handleOpenArticle(e, article)}
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#066842] bg-[#066842] px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b31b1b] hover:border-[#b31b1b] hover:shadow-md cursor-pointer"
                      >
                        <span>Read more</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination Bar: Mobile Optimized Two-Row Layout, Desktop Single Row */}
        <div className="pt-6 pb-4 border-t border-gray-200/90 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Status info */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
            <span className="inline-block h-2 w-2 rounded-full bg-[#066842]" />
            <span>
              Showing page <strong className="text-[#066842] font-bold">{currentPage}</strong> of <strong className="text-gray-800 font-bold">7</strong>
            </span>
          </div>

          {/* Numbered & Prev/Next Controls */}
          <nav aria-label="News Pagination" className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2.5">
            {/* Page Buttons: 1, 2, 3, 4, 5, 6, 7 */}
            <div className="flex items-center justify-center gap-1 sm:gap-2 w-full sm:w-auto">
              {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => handlePageChange(page)}
                  className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 cursor-pointer ${
                    currentPage === page
                      ? 'bg-[#066842] text-white shadow-sm ring-2 ring-[#c8b268]/50 ring-offset-1 border border-[#066842]'
                      : 'border border-gray-200 bg-white text-gray-700 hover:border-[#066842]/60 hover:bg-emerald-50/50 hover:text-[#066842] shadow-2xs'
                  }`}
                  aria-current={currentPage === page ? 'page' : undefined}
                  aria-label={`Page ${page}`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Prev & Next Buttons: Side-by-side on mobile, flanking on desktop */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {/* Prev Button */}
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex-1 sm:flex-none inline-flex h-9 sm:h-10 items-center justify-center gap-1.5 rounded-lg border border-[#066842]/30 bg-white px-3 sm:px-3.5 text-xs sm:text-sm font-bold text-[#066842] transition-all duration-200 hover:bg-[#066842] hover:text-white hover:border-[#066842] shadow-2xs disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 cursor-pointer"
                aria-label="Previous page"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Prev</span>
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={() => handlePageChange(Math.min(7, currentPage + 1))}
                disabled={currentPage === 7}
                className="flex-1 sm:flex-none inline-flex h-9 sm:h-10 items-center justify-center gap-1.5 rounded-lg border border-[#066842]/30 bg-white px-3 sm:px-3.5 text-xs sm:text-sm font-bold text-[#066842] transition-all duration-200 hover:bg-[#066842] hover:text-white hover:border-[#066842] shadow-2xs disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 cursor-pointer"
                aria-label="Next page"
              >
                <span>Next</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Interactive Article Reader Modal for Pages 2 to 7 */}
      {readingArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-xs animate-fade-in"
          onClick={() => setReadingArticle(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-4 sm:p-10 shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49] rounded-t-2xl" />

            <div className="flex items-start justify-between border-b border-gray-100 pb-3 sm:pb-4">
              <div>
                <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[11px] sm:text-xs font-bold text-[#066842]">
                  {readingArticle.category}
                </span>
                <span className="ml-2 sm:ml-3 text-[11px] sm:text-xs text-gray-500 font-medium">
                  {readingArticle.date}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setReadingArticle(null)}
                className="rounded-full p-1.5 sm:p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer"
                aria-label="Close article modal"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <h2 className="mt-3 text-xl sm:text-3xl font-extrabold text-gray-900 leading-snug sm:leading-tight">
              {readingArticle.title}
            </h2>

            <div className="mt-2.5 sm:mt-4 flex items-center gap-2 text-[11px] sm:text-xs text-gray-500">
              <span>Published by</span>
              <span className="font-bold text-[#066842]">{readingArticle.publishedBy}</span>
              <span>&bull;</span>
              <span>Official Institutional Release</span>
            </div>

            <div className="mt-4 sm:mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full max-h-[300px] sm:max-h-[420px] object-cover object-top"
              />
            </div>

            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-lg">
              {readingArticle.fullContent ? (
                readingArticle.fullContent.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="leading-7 sm:leading-8">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="leading-7 sm:leading-8">{readingArticle.excerpt}</p>
              )}
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setReadingArticle(null)}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#066842] bg-[#066842] px-5 py-2 sm:px-6 sm:py-2.5 text-xs font-bold text-white transition-all hover:bg-[#b31b1b] hover:border-[#b31b1b] cursor-pointer"
              >
                <span>&larr; Return to News</span>
              </button>
              <span className="text-[11px] sm:text-xs text-gray-400 font-medium">
                KwaraETF
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default News
