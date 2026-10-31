import { useState, useEffect } from 'react'

const allDispatches = {
  1: [
    {
      id: 'news-in-memoriam',
      title: 'IN MEMORIAM: Moses Jimoh Adebayo Oyelere',
      date: 'October 26, 2026',
      category: 'In Memoriam',
      publishedBy: 'KwaraETF',
      excerpt:
        'A Life of Service, A Legacy in Education 1965–2026 Some legacies are written in the institutions we build. Others live on in the people we teach, […]',
      image: '/N1.png',
      imageAlt: 'Moses Jimoh Adebayo Oyelere',
      badge: 'Official In Memoriam Dispatch',
      targetRoute: '#news-in-memoriam',
    },
    {
      id: 'news-two-years-of-building-for-impact',
      title: 'TWO YEARS OF BUILDING FOR IMPACT',
      date: 'October 20, 2026',
      category: "Chairman's Review",
      publishedBy: 'KwaraETF',
      excerpt:
        'Two years ago, I had the honour of being entrusted with the responsibility of serving as Chairman of the Kwara State Education Trust Fund. As I […]',
      image: '/N2.png',
      imageAlt: 'Two Years of Building for Impact',
      badge: "Chairman's Biennial Review",
      targetRoute: '#news-two-years-of-building-for-impact',
    },
    {
      id: 'news-emir-of-lafiagi-commits-20-million',
      title: 'EMIR OF LAFIAGI COMMITS #20 MILLION TO DRIVE TRANSFORMATION OF LAFIAGI SECONDARY SCHOOL',
      date: 'October 12, 2026',
      category: 'Community Matching Fund',
      publishedBy: 'KwaraETF',
      excerpt:
        'Community-led matching fund targets ₦40 million in additional support to create initial ₦60 million project fund LAFIAGI, KWARA STATE — His Royal Highness, Alhaji (Dr.) Mohammed […]',
      image: '/N3.png',
      imageAlt: 'Emir of Lafiagi Commits #20 Million',
      badge: 'Matching Fund Pilot Dispatch',
      targetRoute: '#news-emir-of-lafiagi-commits-20-million',
    },
    {
      id: 'news-kwaraetf-welcomes-safe-school-programme',
      title: 'KWARAETF WELCOMES NATIONWIDE SAFE SCHOOL PROGRAMME, REAFFIRMS COMMITMENT TO SAFER LEARNING ENVIRONMENTS',
      date: 'September 20, 2026',
      category: 'School Safety',
      publishedBy: 'KwaraETF',
      excerpt:
        'The launch of the Nationwide Safe School Programme by the Inspector-General of Police, IGP Olatunji Disu, marks an important step in strengthening the safety and security […]',
      image: '/N4.png',
      imageAlt: 'Nationwide Safe School Programme',
      badge: 'Safe School Accord Dispatch',
      targetRoute: '#news-kwaraetf-welcomes-safe-school-programme',
    },
    {
      id: 'news-beyond-the-classroom-summer',
      title: 'BEYOND THE CLASSROOM: HOW KWARA TURNED SUMMER INTO AN OPPORTUNITY TO LEARN, CREATE AND INNOVATE',
      date: 'September 15, 2026',
      category: 'Summer Innovation',
      publishedBy: 'KwaraETF',
      excerpt:
        'While schools were on holiday, thousands of young Kwarans were learning new skills, exploring technology, developing their creativity and discovering new possibilities for the future. For […]',
      image: '/N5.png',
      imageAlt: 'Beyond the Classroom Summer Learning',
      badge: 'Digital Literacy & Innovation',
      targetRoute: '#news-beyond-the-classroom-summer',
    },
    {
      id: 'news-from-policy-to-partnerships-world-bank',
      title: 'FROM POLICY TO PARTNERSHIPS: KWARAETF CONTINUES EDUCATION REFORM CONVERSATION AT WORLD BANK FORUM',
      date: 'September 5, 2026',
      category: 'Global Policy Forum',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Kwara State Education Trust Fund (KwaraETF) continued its engagement with the World Bank’s human capital development conversations as the Fund’s Executive Secretary, Oluwadamilola Fatima Amolegbe, […]',
      image: '/N6.png',
      imageAlt: 'World Bank Forum Abuja',
      badge: 'Policy & Human Capital Dispatch',
      targetRoute: '#news-from-policy-to-partnerships-world-bank',
    },
    {
      id: 'news-kwaraetf-concludes-2026-summer-school',
      title: 'KWARAETF CONCLUDES 2026 SUMMER SCHOOL, CELEBRATING LEARNING, LEADERSHIP AND CREATIVITY AMONG YOUNG KWARANS',
      date: 'August 28, 2026',
      category: 'Summer School Report',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Kwara State Education Trust Fund (KwaraETF) has concluded its 2026 Summer School, a structured holiday learning programme that brought together academic enrichment, leadership development, public […]',
      image: '/N7.png',
      imageAlt: 'KwaraETF Concludes 2026 Summer School',
      badge: 'Youth Leadership & Skills',
      targetRoute: '#news-kwaraetf-concludes-2026-summer-school',
    },
    {
      id: 'news-celebrating-donald-first-places',
      title: 'CELEBRATING DONALD: THREE TERMS. THREE FIRST PLACES. ONE EXCEPTIONAL YEAR.',
      date: 'August 15, 2026',
      category: 'Scholarship Spotlight',
      publishedBy: 'KwaraETF',
      excerpt:
        'Some results deserve more than a number. Throughout the 2025/2026 academic session, Emmanuel Donald Olamilekan, a KwaraETF Scholarship beneficiary from Ifelodun LGA, consistently stood out as […]',
      image: '/N8.png',
      imageAlt: 'Donald Academic Distinction',
      badge: 'Scholarship Distinction Feature',
      targetRoute: '#news-celebrating-donald-first-places',
    },
    {
      id: 'news-first-scholarship-cohort-academic-performance',
      title: 'KWARAETF REPORTS 2025/2026 ACADEMIC PERFORMANCE OF FIRST SCHOLARSHIP COHORT',
      date: 'August 10, 2026',
      category: 'Cohort Evaluation',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Kwara State Education Trust Fund (KwaraETF) has concluded its academic performance review of the first cohort of beneficiaries under its Scholarship Programme for the 2025/2026 […]',
      image: '/N9.png',
      imageAlt: 'First Scholarship Cohort Performance Report',
      badge: 'Annual Cohort Review',
      targetRoute: '#news-first-scholarship-cohort-academic-performance',
    },
  ],
  2: [
    {
      id: 'dispatch-2-1',
      title: 'Kwara State Education Trust Fund Inaugurates Central Secretariat in Ilorin',
      date: 'October 14, 2026',
      category: 'Institutional Update',
      publishedBy: 'KwaraETF',
      excerpt:
        'The Board of Trustees has officially ratified the operational deployment of the central secretariat to coordinate strategic donor partnerships, transparent procurement filings, and school interventions across the 16 Local Government Areas.',
      image: '/Hero-img1.jpg',
      imageAlt: 'Kwara State Education Trust Fund Secretariat',
      badge: 'Institutional Secretariat Dispatch',
      targetRoute: '#news',
    },
  ],
  3: [
    {
      id: 'dispatch-3-1',
      title: 'Public-Private Partnership Accord Signed for Public School Solar Infrastructure',
      date: 'September 28, 2026',
      category: 'Infrastructure Interventions',
      publishedBy: 'KwaraETF',
      excerpt:
        'In alignment with the 5-Year Strategic Development Plan, KwaraETF executes formal partnership agreements with renewable power providers to electrify priority community secondary schools.',
      image: '/initiative-adopt-school.jpg',
      imageAlt: 'School Solar Infrastructure Accord',
      badge: 'Public-Private Partnership Notice',
      targetRoute: '#news',
    },
  ],
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
  6: [
    {
      id: 'dispatch-6-1',
      title: 'Adoption Framework Guidelines Issued for Corporate and Diaspora Donors',
      date: 'August 12, 2026',
      category: 'Partnership Guidelines',
      publishedBy: 'KwaraETF',
      excerpt:
        'KwaraETF releases the standardized Bronze, Silver, and Gold school adoption framework, clarifying memorandum terms, naming rights, and institutional monitoring protocols.',
      image: '/initiative-celebrate.jpg',
      imageAlt: 'Adopt-A-School Framework',
      badge: 'Framework Guideline Publication',
      targetRoute: '#news',
    },
  ],
  7: [
    {
      id: 'dispatch-7-1',
      title: 'Gazette Notice: Establishment & Foundation Charter of the Kwara Education Trust Fund',
      date: 'July 24, 2026',
      category: 'Statutory Record',
      publishedBy: 'KwaraETF',
      excerpt:
        'Official archival publication of the founding charter establishing an autonomous, transparent trust vehicle to catalyze private-sector investments into Kwara public schools.',
      image: '/AboutImg.jpg',
      imageAlt: 'Foundation Charter of KwaraETF',
      badge: 'Statutory Foundation Gazette',
      targetRoute: '#news',
    },
  ],
}

// Single Standardized Executive News Card Component (Exact format of 1st news on page 1)
const NewsArticleCard = ({ article, onSelectArticle }) => {
  const handleClick = (e) => {
    e.preventDefault()
    onSelectArticle(article)
  }

  return (
    <article className="group border border-gray-200 bg-white shadow-xs transition-all duration-200 hover:border-[#c8b268]/80 hover:shadow-md overflow-hidden">
      {/* Top Brand Accent Gradient Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#066842] via-[#c8b268] to-[#084d49]" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-9 lg:p-10 items-start">
        {/* Left Column: Framed Image */}
        <div className="md:col-span-5 w-full">
          <div
            onClick={handleClick}
            className="relative overflow-hidden border border-gray-200 bg-gray-50 shadow-2xs cursor-pointer group/img"
          >
            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              className="w-full h-auto max-h-[380px] object-cover object-top transition-transform duration-300 group-hover/img:scale-102"
            />
          </div>
        </div>

        {/* Right Column: Details & Copy */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 pb-3 border-b border-gray-100">
              {article.date && (
                <>
                  <div className="flex items-center gap-1.5 font-medium text-gray-600">
                    <svg className="h-4 w-4 text-[#066842]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{article.date}</span>
                  </div>
                  <span>&bull;</span>
                </>
              )}

              <div className="flex items-center gap-1">
                <span>Published by</span>
                <span className="font-bold text-[#066842] hover:text-[#b31b1b] cursor-pointer transition-colors">
                  {article.publishedBy || 'KwaraETF'}
                </span>
              </div>

              <span>&bull;</span>

              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-700">
                {article.category || 'News'}
              </span>
            </div>

            {/* Article Headline */}
            <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 leading-snug">
              <a
                href={article.targetRoute || '#'}
                onClick={handleClick}
                className="hover:text-[#066842] hover:underline cursor-pointer transition-colors"
              >
                {article.title}
              </a>
            </h3>

            {/* Body Excerpt */}
            <p className="mt-4 text-[16px] leading-8 text-gray-700 sm:text-[17px] sm:leading-[1.95]">
              {article.excerpt}
            </p>
          </div>

          {/* Bottom Action Row */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <a
              href={article.targetRoute || '#'}
              onClick={handleClick}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#066842] bg-[#066842] px-7 py-3 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b31b1b] hover:border-[#b31b1b] hover:shadow-md cursor-pointer self-start sm:self-auto"
            >
              <span>Read more</span>
              <span>&rarr;</span>
            </a>

            <span className="text-xs text-gray-400 font-medium">
              {article.badge || 'Official Dispatch'}
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

const News = ({ onNavigate, initialPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(initialPage)

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

  const handleSelectArticle = (article) => {
    const target = article.targetRoute || '#news'
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
      if (onNavigate) onNavigate(`#news-page-${pageNum}`)
      else window.location.hash = `#news-page-${pageNum}`
    }
    const feedHeader = document.getElementById('news-feed-top')
    if (feedHeader) {
      feedHeader.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 380, behavior: 'smooth' })
    }
  }

  const currentArticles = allDispatches[currentPage] || []

  return (
    <section className="min-h-screen bg-[#f8faf9] pb-24">
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

        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <div className="animate-fade-up mx-auto max-w-3xl">
            <span className="inline-block rounded-full border border-[#c8b268]/50 bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest text-[#f3df9d] uppercase">
              Resources &bull; Media &amp; Press
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              News &amp; Announcements
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />
            <p className="mt-5 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Official updates, special memorandums, press briefings, and stories from the Kwara State Education Trust Fund.
            </p>
          </div>
        </div>
      </div>

      <div id="news-feed-top" className="mx-auto mt-12 max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* News Feed Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-gray-200 pb-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              {currentPage === 1 ? 'Latest Publications' : `Publications & Archives — Page ${currentPage}`}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Official dispatches, gazette notices, and executive statements from KwaraETF.
            </p>
          </div>
          <span className="self-start sm:self-auto rounded-full bg-[#fdf8eb] border border-[#c8b268]/50 px-3.5 py-1 text-xs font-bold text-[#8c6d23]">
            {currentPage === 1 ? 'Featured Update' : `Archive Page ${currentPage} of 7`}
          </span>
        </div>

        {/* Dynamic Page Content: Formatted in the 1st news first page format for all */}
        <div className="space-y-10">
          {currentArticles.map((article) => (
            <NewsArticleCard
              key={article.id}
              article={article}
              onSelectArticle={handleSelectArticle}
            />
          ))}
        </div>

        {/* Redesigned Executive Pagination Bar */}
        <div className="pt-8 pb-4 border-t border-gray-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Status info */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium order-2 sm:order-1">
            <span className="inline-block h-2 w-2 rounded-full bg-[#066842]" />
            <span>
              Showing page <strong className="text-[#066842] font-bold">{currentPage}</strong> of <strong className="text-gray-800 font-bold">7</strong>
            </span>
          </div>

          {/* Numbered Controls */}
          <nav aria-label="News Pagination" className="order-1 sm:order-2 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {/* Prev Button */}
            <button
              type="button"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="inline-flex h-9 sm:h-10 items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 sm:px-3 text-xs font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-[#066842] hover:border-[#066842]/40 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-2xs"
              aria-label="Previous page"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Page Buttons: 1, 2, 3, 4, 5, 6, 7 */}
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

            {/* Next Button */}
            <button
              type="button"
              onClick={() => handlePageChange(Math.min(7, currentPage + 1))}
              disabled={currentPage === 7}
              className="inline-flex h-9 sm:h-10 items-center gap-1.5 rounded-lg border border-[#066842]/30 bg-white px-3 sm:px-3.5 text-xs sm:text-sm font-bold text-[#066842] transition-all duration-200 hover:bg-[#066842] hover:text-white hover:border-[#066842] shadow-2xs disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 cursor-pointer"
              aria-label="Next page"
            >
              <span>Next page</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default News
