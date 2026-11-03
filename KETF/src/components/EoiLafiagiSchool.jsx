import { useState, useRef } from 'react'

const TOTAL_EXPECTED_SECTIONS = 7 // 0% -> 14% -> 29% -> 43% -> 57% -> 71% -> 86%/100%

const APPLICANT_CATEGORIES = [
  'Architectural Firm',
  'Quantity Surveying Firm',
  'Civil/Structural Engineering Firm',
  'Multidisciplinary Consultancy Firm',
  'Other relevant professional consultancy (please specify)',
]

const SCOPE_OF_SERVICES = [
  'Physical inspection and assessment of existing school buildings, facilities and infrastructure.',
  'Identification of infrastructure gaps, structural defects, safety concerns and rehabilitation needs.',
  'Preparation of a preliminary school improvement design, concept plan and relevant drawings.',
  'Preparation of an itemised Bill of Quantities (BOQ) and cost estimates for recommended works.',
  'Submission of a consolidated technical report with prioritised recommendations.',
]

const SECTION_D_QUESTIONS = [
  {
    key: 'q22_physicalInspection',
    num: 22,
    text: "Conduct a physical inspection and needs assessment of the school's existing infrastructure and facilities.",
  },
  {
    key: 'q23_identifyGaps',
    num: 23,
    text: 'Identify infrastructure gaps, rehabilitation needs, safety concerns and proposed new facilities, where necessary.',
  },
  {
    key: 'q24_preliminaryDesign',
    num: 24,
    text: 'Develop a preliminary proposed design, site layout and relevant drawings based on the assessment findings.',
  },
  {
    key: 'q25_prepareBoq',
    num: 25,
    text: 'Prepare an itemised Bill of Quantities (BOQ) and cost estimate for the recommended works.',
  },
  {
    key: 'q26_consolidatedReport',
    num: 26,
    text: "Submit a consolidated technical report documenting the school's existing condition, identified needs, proposed interventions, design recommendations and estimated project costs.",
  },
]

const FORM_SECTIONS = [
  {
    id: 'A',
    code: 'SECTION A',
    title: 'APPLICANT INFORMATION',
    shortLabel: 'Applicant Info',
  },
  {
    id: 'B',
    code: 'SECTION B',
    title: 'PROFESSIONAL REGISTRATION AND QUALIFICATIONS',
    shortLabel: 'Registration',
  },
  {
    id: 'C',
    code: 'SECTION C',
    title: 'RELEVANT EXPERIENCE AND TECHNICAL CAPACITY',
    shortLabel: 'Experience',
  },
  {
    id: 'D',
    code: 'SECTION D',
    title: 'UNDERSTANDING OF THE ASSIGNMENT AND DELIVERABLES',
    shortLabel: 'Deliverables',
  },
  {
    id: 'E',
    code: 'SECTION E',
    title: 'FINANCIAL PROPOSAL',
    shortLabel: 'Financials',
  },
  {
    id: 'F',
    code: 'SECTION F',
    title: 'DECLARATION',
    shortLabel: 'Declaration',
  },
  {
    id: 'G',
    code: 'FINAL STEP',
    title: 'REVIEW & SUBMIT',
    shortLabel: 'Submit',
  },
]

const FEE_COMPONENTS = [
  'Professional fees.',
  'Site inspection and transportation/logistics.',
  'Design and preparation of drawings.',
  'BOQ preparation and cost estimation.',
  'Report preparation and submission.',
  'Applicable taxes and other charges, clearly identified.',
]

const REQUIRED_DOCUMENTS = [
  'Evidence of professional registration and current practising licences.',
  'Certificate of Incorporation or Business Registration.',
  'Company profile or professional profile/CV.',
  'Evidence of relevant previous projects, such as project references, completion certificates or sample work.',
  'Technical approach and proposed timeline.',
  'Detailed financial proposal.',
]

const formatFileSize = (bytes) => {
  if (!bytes) return ''
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

const EoiLafiagiSchool = ({ onNavigate }) => {
  const formContainerRef = useRef(null)

  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState({})
  const [errors, setErrors] = useState({})
  const [stepDConfirmedNotice, setStepDConfirmedNotice] = useState(false)

  const [formData, setFormData] = useState({
    // Section A (1 - 9)
    q1_firmName: '',
    q2_category: 'Architectural Firm',
    q2_otherCategory: '',
    q3_officeAddress: '',
    q4_telephone: '',
    q5_email: '',
    q6_contactName: '',
    q7_contactDesignation: '',
    q8_yearEstablished: '',
    q9_legalStatus: '',

    // Section B (10 - 15)
    q10_professionalBodies: '',
    q11_registrationNumbers: '',
    q12_keyPersonnelQualifications: '',
    q13_keyPersonnelRegistrationDetails: '',
    q14_licenceFile: null,
    q15_incorporationFile: null,

    // Section C (16 - 21)
    q16_relevantExperience: '',
    q17_threeProjectsDetails: '',
    q18_companyProfileFile: null,
    q19_proposedProfessionalsRoles: '',
    q20_proposedApproach: '',
    q21_estimatedTimeline: '',

    // Section D (22 - 26)
    q22_physicalInspection: '',
    q23_identifyGaps: '',
    q24_preliminaryDesign: '',
    q25_prepareBoq: '',
    q26_consolidatedReport: '',

    // Section E (27 - 29)
    q27_totalFee: '',
    q28_feeBreakdown: '',
    q29_financialProposalFile: null,

    // Section F (Declaration)
    consent: false,
    decl_repName: '',
    decl_designation: '',
    decl_firmName: '',
    decl_date: '',
    decl_signature: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [referenceId, setReferenceId] = useState('')

  const progressPercent =
    isSubmitting || isSubmitted
      ? 100
      : Math.round((currentStep / TOTAL_EXPECTED_SECTIONS) * 100)

  const formatNaira = (raw) => {
    const digits = String(raw).replace(/[^\d]/g, '')
    if (!digits) return ''
    return Number(digits).toLocaleString('en-NG')
  }

  const scrollToForm = () => {
    if (formContainerRef.current) {
      const y =
        formContainerRef.current.getBoundingClientRect().top +
        window.scrollY -
        105
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
    setStepDConfirmedNotice(false)
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  const validateStep = (stepIndex) => {
    const newErrors = {}

    if (stepIndex === 0) {
      if (!formData.q1_firmName.trim()) {
        newErrors.q1_firmName = 'This field is required. Please input your name.'
      }
      if (!formData.q2_category) {
        newErrors.q2_category = 'This field is required. Please select a category.'
      }
      if (
        formData.q2_category ===
          'Other relevant professional consultancy (please specify)' &&
        !formData.q2_otherCategory.trim()
      ) {
        newErrors.q2_otherCategory =
          'Please specify your consultancy category.'
      }
      if (!formData.q3_officeAddress.trim()) {
        newErrors.q3_officeAddress =
          'This field is required. Please enter the street address.'
      }
      if (!formData.q4_telephone.trim()) {
        newErrors.q4_telephone =
          'This field is required. Please enter your telephone number.'
      }
      if (!formData.q5_email.trim()) {
        newErrors.q5_email =
          'This field is required. Please enter your email address.'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.q5_email.trim())) {
        newErrors.q5_email = 'Please enter a valid email address.'
      }
      if (!formData.q6_contactName.trim()) {
        newErrors.q6_contactName =
          'This field is required. Please enter the name of the contact person.'
      }
      if (!formData.q7_contactDesignation.trim()) {
        newErrors.q7_contactDesignation =
          'This field is required. Please enter the designation of the contact person.'
      }
      if (!formData.q8_yearEstablished.trim()) {
        newErrors.q8_yearEstablished =
          'This field is required. Please enter the year of establishment.'
      }
      if (!formData.q9_legalStatus.trim()) {
        newErrors.q9_legalStatus =
          'This field is required. Please state the legal status of the applicant.'
      }
    }

    if (stepIndex === 1) {
      if (!formData.q10_professionalBodies.trim()) {
        newErrors.q10_professionalBodies =
          'This field is required. Please state the relevant professional body/bodies.'
      }
      if (!formData.q11_registrationNumbers.trim()) {
        newErrors.q11_registrationNumbers =
          'This field is required. Please provide registration number(s).'
      }
      if (!formData.q12_keyPersonnelQualifications.trim()) {
        newErrors.q12_keyPersonnelQualifications =
          'This field is required. Please list key personnel and their qualifications.'
      }
      if (!formData.q13_keyPersonnelRegistrationDetails.trim()) {
        newErrors.q13_keyPersonnelRegistrationDetails =
          'This field is required. Please provide registration details for each key personnel.'
      }
      if (!formData.q14_licenceFile) {
        newErrors.q14_licenceFile =
          'This file is required. Please upload evidence of professional registration / practising licence.'
      }
      if (!formData.q15_incorporationFile) {
        newErrors.q15_incorporationFile =
          'This file is required. Please upload Certificate of Incorporation or Business Registration.'
      }
    }

    if (stepIndex === 2) {
      if (!formData.q16_relevantExperience.trim()) {
        newErrors.q16_relevantExperience =
          'This field is required. Please describe your relevant experience.'
      }
      if (!formData.q17_threeProjectsDetails.trim()) {
        newErrors.q17_threeProjectsDetails =
          'This field is required. Please provide details of relevant projects undertaken.'
      }
      if (!formData.q18_companyProfileFile) {
        newErrors.q18_companyProfileFile =
          'This file is required. Please upload your company profile or professional CV.'
      }
      if (!formData.q19_proposedProfessionalsRoles.trim()) {
        newErrors.q19_proposedProfessionalsRoles =
          'This field is required. Please identify key professionals and their respective roles.'
      }
      if (!formData.q20_proposedApproach.trim()) {
        newErrors.q20_proposedApproach =
          'This field is required. Please describe your proposed approach.'
      }
      if (!formData.q21_estimatedTimeline.trim()) {
        newErrors.q21_estimatedTimeline =
          'This field is required. Please state your estimated completion timeline.'
      }
    }

    if (stepIndex === 3) {
      SECTION_D_QUESTIONS.forEach((q) => {
        if (!formData[q.key]) {
          newErrors[q.key] = 'This selection is required. Please choose Yes or No.'
        }
      })
    }

    if (stepIndex === 4) {
      if (!formData.q27_totalFee.trim()) {
        newErrors.q27_totalFee =
          'This field is required. Please enter your proposed total professional fee.'
      }
      if (!formData.q28_feeBreakdown.trim()) {
        newErrors.q28_feeBreakdown =
          'This field is required. Please provide a breakdown of the proposed fee.'
      }
      if (!formData.q29_financialProposalFile) {
        newErrors.q29_financialProposalFile =
          'This file is required. Please upload your detailed financial proposal.'
      }
    }

    if (stepIndex === 5) {
      if (!formData.consent) {
        newErrors.consent =
          'You must accept the declaration before proceeding.'
      }
      if (!formData.decl_repName.trim()) {
        newErrors.decl_repName =
          'This field is required. Please enter the name of the authorised representative.'
      }
      if (!formData.decl_designation.trim()) {
        newErrors.decl_designation =
          'This field is required. Please enter the designation.'
      }
      if (!formData.decl_firmName.trim()) {
        newErrors.decl_firmName =
          'This field is required. Please enter the name of the firm/practice.'
      }
      if (!formData.decl_date) {
        newErrors.decl_date =
          'This field is required. Please select the date of submission.'
      }
      if (!formData.decl_signature.trim()) {
        newErrors.decl_signature =
          'This field is required. Please type your full name as electronic confirmation.'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmitApplication = () => {
    if (isSubmitting) return
    setIsSubmitting(true)
    scrollToForm()
    // Simulated electronic submission
    setTimeout(() => {
      const ref = `KETF-EOI-LSS-${Date.now().toString().slice(-6)}`
      setReferenceId(ref)
      setIsSubmitting(false)
      setIsSubmitted(true)
      scrollToForm()
    }, 2200)
  }

  const handleNext = () => {
    // Final Review step → submit
    if (currentStep === FORM_SECTIONS.length - 1) {
      handleSubmitApplication()
      return
    }

    const isValid = validateStep(currentStep)
    if (!isValid) {
      scrollToForm()
      return
    }

    setCompletedSteps((prev) => ({ ...prev, [currentStep]: true }))
    setCurrentStep((prev) => prev + 1)
    setStepDConfirmedNotice(false)
    scrollToForm()
  }

  const handlePrevious = () => {
    if (currentStep > 0 && !isSubmitting) {
      setErrors({})
      setStepDConfirmedNotice(false)
      setCurrentStep((prev) => prev - 1)
      scrollToForm()
    }
  }

  const renderFieldError = (fieldKey) => {
    if (!errors[fieldKey]) return null
    return (
      <div
        role="alert"
        className="mt-2 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50/90 px-3.5 py-2 text-xs font-medium text-red-700"
      >
        <svg
          className="h-4 w-4 shrink-0 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <span>{errors[fieldKey]}</span>
      </div>
    )
  }

  const renderFileUpload = (fieldKey, labelNum, labelText) => {
    const selectedFile = formData[fieldKey]
    const hasError = Boolean(errors[fieldKey])

    return (
      <div>
        <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
          <span className="text-[#066842] font-bold">{labelNum}.</span>{' '}
          {labelText} <span className="text-red-600">*</span>
        </label>

        <div
          className={`mt-2.5 flex flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-3 rounded-xl border border-dashed p-3.5 transition-colors ${
            hasError
              ? 'border-red-300 bg-red-50/30'
              : selectedFile
              ? 'border-emerald-300 bg-emerald-50/40'
              : 'border-gray-300 bg-[#fbfdfc] hover:border-[#066842]'
          }`}
        >
          <div className="flex flex-col items-stretch sm:flex-row sm:items-center gap-2.5 sm:gap-3 min-w-0">
            <label className="inline-flex w-full sm:w-auto justify-center shrink-0 cursor-pointer items-center gap-2 rounded-lg bg-[#066842] px-4 py-2.5 text-xs font-semibold tracking-wide text-white shadow-2xs transition-all duration-200 hover:bg-[#055737] active:scale-98">
              <svg
                className="h-4 w-4 text-[#f3df9d]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              <span>Choose File</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files && e.target.files[0]
                  if (file) {
                    updateField(fieldKey, file)
                  }
                }}
              />
            </label>

            {selectedFile ? (
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-gray-800">
                  {selectedFile.name}
                </p>
                <p className="text-[11px] text-emerald-700 font-medium">
                  {formatFileSize(selectedFile.size)} &bull; Ready to attach
                </p>
              </div>
            ) : (
              <span className="text-xs text-gray-500 text-center sm:text-left">
                No file chosen (PDF, DOC, DOCX, JPG or PNG)
              </span>
            )}
          </div>

          {selectedFile && (
            <button
              type="button"
              onClick={() => updateField(fieldKey, null)}
              className="inline-flex self-end sm:self-auto cursor-pointer items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
            >
              Remove
            </button>
          )}
        </div>

        {renderFieldError(fieldKey)}
      </div>
    )
  }

  const inputBaseClass = (fieldKey) =>
    `mt-2 block w-full rounded-xl border px-3.5 py-3 sm:px-4 text-[16px] sm:text-sm text-gray-900 placeholder:text-gray-400 shadow-2xs transition-all focus:outline-none focus:ring-2 ${
      errors[fieldKey]
        ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-500/20'
        : 'border-gray-200 bg-[#fbfdfc] hover:border-gray-300 focus:border-[#066842] focus:bg-white focus:ring-[#066842]/15'
    }`

  const activeSectionMeta = FORM_SECTIONS[currentStep]

  return (
    <section className="min-h-screen overflow-x-hidden bg-[#f6f9f7] pb-16 sm:pb-24">
      {/* Executive Procurement Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#072417] via-[#066842] to-[#084d49] text-white">
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-[#c8b268]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="animate-float-slow pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl"
          style={{ animationDelay: '2s' }}
        />

        <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-18 lg:px-8">
          <h1 className="text-[21px] leading-[1.3] font-extrabold tracking-tight text-white sm:mt-2 sm:text-4xl lg:text-[40px] lg:leading-[1.18]">
            Consultancy Services for Lafiagi Secondary School Needs Assessment,
            Proposed Design and Bill of Quantities
          </h1>

          <div className="mt-3.5 sm:mt-4 h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-[#c8b268] to-[#f3df9d]" />

          <div className="mt-6 sm:mt-7 flex flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4 border-t border-white/15 pt-5 sm:pt-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-y-2.5 sm:gap-x-6 text-[13px] sm:text-sm text-emerald-50/95">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-[#f3df9d]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Lafiagi, Kwara State</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 shrink-0 text-[#f3df9d]"
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
                <span>
                  Deadline: <strong className="text-white">Friday, 27 November 2026</strong>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToForm}
              className="inline-flex w-full sm:w-auto justify-center cursor-pointer items-center gap-2 rounded-full bg-[#c8b268] px-5 py-3 sm:py-2.5 text-[13px] sm:text-sm font-bold text-[#072417] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d8c47c] hover:shadow-lg active:scale-98"
            >
              <span>Proceed to EOI Application Form</span>
              <svg
                className="h-4 w-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.4"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main EOI Notice & Guidelines Content */}
      <div className="mx-auto mt-6 sm:mt-10 max-w-5xl px-3.5 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Invitation Overview Card */}
        <div className="rounded-2xl border border-gray-200/90 bg-white p-4 sm:p-10 shadow-xs space-y-6 sm:space-y-8">
          <div className="border-l-4 border-[#066842] pl-3.5 sm:pl-5 py-1">
            <p className="text-[14.5px] sm:text-base leading-relaxed text-gray-700">
              The Kwara State Education Trust Fund (KwaraETF) invites qualified
              and appropriately registered built-environment professionals and
              consultancy firms to submit Expressions of Interest for the
              provision of professional consultancy services for the assessment
              and proposed improvement of Lafiagi Secondary School, Lafiagi,
              Kwara State.
            </p>
          </div>

          {/* Scope of Services */}
          <div>
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-[#066842]">
                <svg
                  className="h-4.5 w-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </span>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900">
                Scope of Services
              </h2>
            </div>
            <p className="mt-2.5 text-sm font-medium text-gray-600">
              The assignment will include:
            </p>
            <div className="mt-3.5 sm:mt-4 grid gap-3 sm:grid-cols-2">
              {SCOPE_OF_SERVICES.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 sm:gap-3.5 rounded-xl border border-gray-100 bg-[#f9fbfa] p-3.5 sm:p-4 transition-colors hover:border-emerald-200 hover:bg-white ${
                    idx === SCOPE_OF_SERVICES.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#066842] text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <p className="text-[13.5px] sm:text-sm leading-relaxed text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Application Requirements Side-by-Side */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {/* Eligibility Requirements */}
            <div className="rounded-2xl border border-emerald-100 bg-gradient-to-b from-emerald-50/50 to-white p-4 sm:p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#066842] text-white">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <h2 className="text-base sm:text-lg font-bold text-gray-900">
                  Eligibility Requirements
                </h2>
              </div>
              <div className="mt-3.5 sm:mt-4 space-y-3 text-[13.5px] sm:text-sm leading-relaxed text-gray-700">
                <p>
                  Interested applicants must demonstrate relevant professional
                  qualifications, current registration with applicable
                  professional bodies, experience in similar assignments and the
                  capacity to undertake the required technical work.
                </p>
                <p>
                  Relevant expertise should include architecture, quantity
                  surveying and civil/structural engineering. Multidisciplinary
                  consultancy firms and suitably qualified lead consultants may
                  apply.
                </p>
              </div>
            </div>

            {/* Application Requirements */}
            <div className="rounded-2xl border border-[#c8b268]/35 bg-gradient-to-b from-[#fdfaf0] to-white p-4 sm:p-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5a3210] text-[#f3df9d]">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </svg>
                </span>
                <h2 className="text-base sm:text-lg font-bold text-gray-900">
                  Application Requirements
                </h2>
              </div>
              <div className="mt-3.5 sm:mt-4 space-y-3 text-[13.5px] sm:text-sm leading-relaxed text-gray-700">
                <p>
                  Applicants will be required to provide their professional or
                  company profile, evidence of relevant qualifications and
                  registrations, details of similar assignments, proposed
                  methodology, work plan, completion timeline and professional
                  fee proposal.
                </p>
              </div>
            </div>
          </div>

          {/* How to Apply Banner - Executive KwaraETF Rich Gradient */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-[#064e3b] via-[#066842] to-[#044c30] p-5 sm:p-8 text-white shadow-lg">
            {/* Ambient luxury glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#c8b268]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-emerald-400/15 blur-3xl"
            />

            <div className="relative flex flex-col gap-5 sm:gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-3 sm:space-y-3.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#c8b268] animate-pulse" />
                  <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#f3df9d]">
                    How to Apply
                  </h2>
                </div>
                <ul className="space-y-2.5 text-[13.5px] sm:text-sm text-emerald-50/95 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8b268]" />
                    <span>
                      Interested and eligible applicants should submit their
                      applications electronically through the official KwaraETF
                      website.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8b268]" />
                    <span>
                      Applicants are advised to ensure that all required
                      information and supporting documents are submitted before
                      the deadline.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8b268]" />
                    <span>
                      The selection process will be conducted in accordance with
                      applicable procurement requirements.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative w-full sm:w-auto shrink-0 rounded-xl border border-white/20 bg-black/25 px-4 py-3.5 sm:px-5 sm:py-4 backdrop-blur-md shadow-inner">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#c8b268]">
                  Application Deadline
                </p>
                <p className="mt-1 sm:mt-1.5 text-base sm:text-lg font-extrabold text-white tracking-tight">
                  Friday, 27 November 2026
                </p>
              </div>
            </div>

            <div className="relative mt-5 sm:mt-6 border-t border-white/15 pt-4 text-xs sm:text-sm font-semibold text-[#f3df9d]">
              Kwara State Education Trust Fund (KwaraETF) Investing in
              Education. Building the Future.
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* MULTI-STEP EOI APPLICATION PORTAL                                 */}
        {/* ================================================================= */}
        <div
          ref={formContainerRef}
          id="eoi-application-form"
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md"
        >
          {/* Official Form Header Banner */}
          <div className="border-b border-gray-200 bg-gradient-to-r from-[#072417] via-[#066842] to-[#084d49] px-4 py-5 sm:px-10 sm:py-7 text-white">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/15 px-2.5 py-1 sm:px-3 text-[10px] sm:text-[11px] font-bold tracking-widest text-[#f3df9d] uppercase">
              Electronic Submission Portal
            </div>
            <h2 className="mt-2.5 sm:mt-3 text-[16px] leading-snug sm:text-2xl font-extrabold tracking-tight text-white">
              KWARA STATE EDUCATION TRUST FUND (KWARAETF) EXPRESSION OF INTEREST
              (EOI) APPLICATION FORM
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-emerald-50/90">
              <strong className="text-[#f3df9d]">Assignment:</strong>{' '}
              Professional Consultancy Services for the Needs Assessment,
              Proposed Design and Preparation of a Bill of Quantities for
              Lafiagi Secondary School, Lafiagi, Kwara State.
            </p>
          </div>

          {/* Progress Bar & Interactive Section Stepper */}
          <div className="border-b border-gray-100 bg-[#f9fbfa] px-4 py-4 sm:px-10 sm:py-5">
            <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center rounded-md bg-[#066842] px-2.5 py-0.5 text-xs font-bold text-white">
                  {progressPercent}%
                </span>
                <span className="text-xs font-semibold text-gray-600">
                  Application Completion &bull; {activeSectionMeta.code}
                </span>
              </div>
              <span className="text-[11.5px] sm:text-xs font-medium text-gray-500">
                Fields marked with <span className="text-red-600 font-bold">*</span> are required
              </span>
            </div>

            {/* Smooth Animated Progress Track */}
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200/80">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#066842] via-[#138a59] to-[#c8b268] transition-all duration-500 ease-out"
                style={{ width: `${Math.max(progressPercent, 4)}%` }}
              />
            </div>
          </div>

          {/* Active Section Form Body */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleNext()
            }}
            noValidate
            className="p-4 sm:p-10"
          >
            {/* Active Section Title Header */}
            <div className={`mb-6 sm:mb-8 items-center justify-between border-b border-gray-100 pb-3.5 sm:pb-4 ${isSubmitted ? 'hidden' : 'flex'}`}>
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#066842]">
                  {activeSectionMeta.code}
                </span>
                <h3 className="mt-1 text-base sm:text-xl font-extrabold text-gray-900 leading-snug">
                  {activeSectionMeta.code}: {activeSectionMeta.title}
                </h3>
              </div>
            </div>

            {/* ============================================================= */}
            {/* SECTION A: APPLICANT INFORMATION (Questions 1 - 9)            */}
            {/* ============================================================= */}
            {currentStep === 0 && (
              <div className="space-y-5 sm:space-y-6">
                {/* 1 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">1.</span> Name of
                    Consultancy Firm / Applicant{' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.q1_firmName}
                    onChange={(e) => updateField('q1_firmName', e.target.value)}
                    placeholder="Your firm / applicant name"
                    className={inputBaseClass('q1_firmName')}
                  />
                  {renderFieldError('q1_firmName')}
                </div>

                {/* 2 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">2.</span>{' '}
                    Category of Applicant{' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <div className="relative mt-2">
                    <select
                      value={formData.q2_category}
                      onChange={(e) =>
                        updateField('q2_category', e.target.value)
                      }
                      className={`${inputBaseClass('q2_category')} mt-0 appearance-none pr-10 cursor-pointer`}
                    >
                      {APPLICANT_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="pointer-events-none absolute right-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#066842]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  {renderFieldError('q2_category')}

                  {formData.q2_category ===
                    'Other relevant professional consultancy (please specify)' && (
                    <div className="mt-3">
                      <input
                        type="text"
                        value={formData.q2_otherCategory}
                        onChange={(e) =>
                          updateField('q2_otherCategory', e.target.value)
                        }
                        placeholder="Please specify your professional consultancy category"
                        className={inputBaseClass('q2_otherCategory')}
                      />
                      {renderFieldError('q2_otherCategory')}
                    </div>
                  )}
                </div>

                {/* 3 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">3.</span> Office
                    Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.q3_officeAddress}
                    onChange={(e) =>
                      updateField('q3_officeAddress', e.target.value)
                    }
                    placeholder="Street address, city, and state"
                    className={inputBaseClass('q3_officeAddress')}
                  />
                  {renderFieldError('q3_officeAddress')}
                </div>

                {/* 4 & 5 Grid on desktop */}
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                      <span className="text-[#066842] font-bold">4.</span>{' '}
                      Telephone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.q4_telephone}
                      onChange={(e) =>
                        updateField('q4_telephone', e.target.value)
                      }
                      placeholder="Telephone Number"
                      className={inputBaseClass('q4_telephone')}
                    />
                    {renderFieldError('q4_telephone')}
                  </div>

                  <div>
                    <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                      <span className="text-[#066842] font-bold">5.</span> Email
                      Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.q5_email}
                      onChange={(e) => updateField('q5_email', e.target.value)}
                      placeholder="example@gmail.com"
                      className={inputBaseClass('q5_email')}
                    />
                    {renderFieldError('q5_email')}
                  </div>
                </div>

                {/* 6 & 7 Grid on desktop */}
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                      <span className="text-[#066842] font-bold">6.</span> Name
                      of Contact Person <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.q6_contactName}
                      onChange={(e) =>
                        updateField('q6_contactName', e.target.value)
                      }
                      placeholder="Name of Contact Person"
                      className={inputBaseClass('q6_contactName')}
                    />
                    {renderFieldError('q6_contactName')}
                  </div>

                  <div>
                    <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                      <span className="text-[#066842] font-bold">7.</span>{' '}
                      Designation of Contact Person{' '}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.q7_contactDesignation}
                      onChange={(e) =>
                        updateField('q7_contactDesignation', e.target.value)
                      }
                      placeholder="e.g., Managing Partner / Principal Consultant"
                      className={inputBaseClass('q7_contactDesignation')}
                    />
                    {renderFieldError('q7_contactDesignation')}
                  </div>
                </div>

                {/* 8 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">8.</span> Year of
                    Establishment (for firms){' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.q8_yearEstablished}
                    onChange={(e) =>
                      updateField('q8_yearEstablished', e.target.value)
                    }
                    placeholder="e.g., 2016 (or N/A if individual practitioner)"
                    className={inputBaseClass('q8_yearEstablished')}
                  />
                  {renderFieldError('q8_yearEstablished')}
                </div>

                {/* 9 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">9.</span> Legal
                    Status of Applicant (e.g., registered business, incorporated
                    company or individual professional practitioner){' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.q9_legalStatus}
                    onChange={(e) =>
                      updateField('q9_legalStatus', e.target.value)
                    }
                    placeholder="State legal status of applicant"
                    className={inputBaseClass('q9_legalStatus')}
                  />
                  {renderFieldError('q9_legalStatus')}
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* SECTION B: PROFESSIONAL REGISTRATION (Questions 10 - 15)      */}
            {/* ============================================================= */}
            {currentStep === 1 && (
              <div className="space-y-5 sm:space-y-6">
                {/* 10 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">10.</span>{' '}
                    Relevant Professional Body/Bodies (e.g., ARCON, NIQS, COREN,
                    as applicable). <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.q10_professionalBodies}
                    onChange={(e) =>
                      updateField('q10_professionalBodies', e.target.value)
                    }
                    placeholder="e.g., ARCON, NIQS, COREN"
                    className={inputBaseClass('q10_professionalBodies')}
                  />
                  {renderFieldError('q10_professionalBodies')}
                </div>

                {/* 11 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">11.</span>{' '}
                    Registration Number(s) of the Firm and/or Relevant
                    Professionals, where applicable.{' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.q11_registrationNumbers}
                    onChange={(e) =>
                      updateField('q11_registrationNumbers', e.target.value)
                    }
                    placeholder="Enter registration number(s)"
                    className={inputBaseClass('q11_registrationNumbers')}
                  />
                  {renderFieldError('q11_registrationNumbers')}
                </div>

                {/* 12 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">12.</span> Names
                    and Professional Qualifications of Key Personnel Proposed
                    for the Assignment. <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.q12_keyPersonnelQualifications}
                    onChange={(e) =>
                      updateField(
                        'q12_keyPersonnelQualifications',
                        e.target.value
                      )
                    }
                    placeholder="List names and qualifications of proposed key personnel"
                    className={inputBaseClass('q12_keyPersonnelQualifications')}
                  />
                  {renderFieldError('q12_keyPersonnelQualifications')}
                </div>

                {/* 13 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">13.</span>{' '}
                    Professional Registration Details of Each Key Personnel,
                    including the relevant professional body and registration
                    number. <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.q13_keyPersonnelRegistrationDetails}
                    onChange={(e) =>
                      updateField(
                        'q13_keyPersonnelRegistrationDetails',
                        e.target.value
                      )
                    }
                    placeholder="Provide each personnel's name, professional body, and registration number..."
                    className={inputBaseClass(
                      'q13_keyPersonnelRegistrationDetails'
                    )}
                  />
                  {renderFieldError('q13_keyPersonnelRegistrationDetails')}
                </div>

                {/* 14 */}
                {renderFileUpload(
                  'q14_licenceFile',
                  14,
                  'Upload Evidence of Relevant Professional Registration and Current Practising Licences, where applicable.'
                )}

                {/* 15 */}
                {renderFileUpload(
                  'q15_incorporationFile',
                  15,
                  'Upload Certificate of Incorporation or Business Registration, where applicable.'
                )}
              </div>
            )}

            {/* ============================================================= */}
            {/* SECTION C: RELEVANT EXPERIENCE (Questions 16 - 21)            */}
            {/* ============================================================= */}
            {currentStep === 2 && (
              <div className="space-y-5 sm:space-y-6">
                {/* 16 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">16.</span>{' '}
                    Briefly describe your firm’s or professional practice’s
                    relevant experience in building assessments, school
                    infrastructure projects, architectural design, preparation
                    of Bills of Quantities, cost estimation or similar
                    assignments. <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.q16_relevantExperience}
                    onChange={(e) =>
                      updateField('q16_relevantExperience', e.target.value)
                    }
                    placeholder="Describe your relevant technical experience..."
                    className={inputBaseClass('q16_relevantExperience')}
                  />
                  {renderFieldError('q16_relevantExperience')}
                </div>

                {/* 17 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">17.</span>{' '}
                    Provide details of up to three (3) relevant projects
                    completed or undertaken within the last five (5) years,
                    including: <span className="text-red-600">*</span>
                  </label>
                  <ul className="mt-2 mb-2.5 grid gap-1.5 rounded-xl border border-gray-100 bg-[#f8faf9] px-3.5 py-3 sm:px-4 text-xs text-gray-600 sm:grid-cols-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-xs bg-[#066842]" />
                      <span>Project name and location.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-xs bg-[#066842]" />
                      <span>Scope of services provided.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-xs bg-[#066842]" />
                      <span>Client/organisation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-xs bg-[#066842]" />
                      <span>Year of execution or completion.</span>
                    </li>
                    <li className="flex items-start gap-2 sm:col-span-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-xs bg-[#066842]" />
                      <span>Applicant’s role in the project.</span>
                    </li>
                  </ul>
                  <textarea
                    rows={5}
                    value={formData.q17_threeProjectsDetails}
                    onChange={(e) =>
                      updateField('q17_threeProjectsDetails', e.target.value)
                    }
                    placeholder="Detail up to three (3) relevant projects..."
                    className={inputBaseClass('q17_threeProjectsDetails')}
                  />
                  {renderFieldError('q17_threeProjectsDetails')}
                </div>

                {/* 18 */}
                {renderFileUpload(
                  'q18_companyProfileFile',
                  18,
                  'Upload a company profile or professional CV/profile demonstrating relevant experience.'
                )}

                {/* 19 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">19.</span>{' '}
                    Identify the key professionals proposed for this assignment
                    and their respective roles.{' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.q19_proposedProfessionalsRoles}
                    onChange={(e) =>
                      updateField(
                        'q19_proposedProfessionalsRoles',
                        e.target.value
                      )
                    }
                    placeholder="Identify proposed key professionals and assigned roles..."
                    className={inputBaseClass('q19_proposedProfessionalsRoles')}
                  />
                  {renderFieldError('q19_proposedProfessionalsRoles')}
                </div>

                {/* 20 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">20.</span>{' '}
                    Briefly describe your proposed approach to conducting the
                    school needs assessment and delivering the required outputs.{' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.q20_proposedApproach}
                    onChange={(e) =>
                      updateField('q20_proposedApproach', e.target.value)
                    }
                    placeholder="Your response"
                    className={inputBaseClass('q20_proposedApproach')}
                  />
                  {renderFieldError('q20_proposedApproach')}
                </div>

                {/* 21 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">21.</span> State
                    your estimated timeline for completing the assignment, from
                    the site visit to submission of the final deliverables.{' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.q21_estimatedTimeline}
                    onChange={(e) =>
                      updateField('q21_estimatedTimeline', e.target.value)
                    }
                    placeholder="Your estimated timeline"
                    className={inputBaseClass('q21_estimatedTimeline')}
                  />
                  {renderFieldError('q21_estimatedTimeline')}
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* SECTION D: UNDERSTANDING OF THE ASSIGNMENT (Questions 22 - 26)*/}
            {/* ============================================================= */}
            {currentStep === 3 && (
              <div className="space-y-5 sm:space-y-6">
                <p className="rounded-xl border border-emerald-100 bg-emerald-50/50 px-3.5 py-3 sm:px-4 text-[13.5px] sm:text-sm font-medium text-emerald-950">
                  Applicants should confirm their capacity to undertake the
                  following:
                </p>

                {SECTION_D_QUESTIONS.map((item) => {
                  const currentVal = formData[item.key]
                  const hasError = Boolean(errors[item.key])

                  return (
                    <div
                      key={item.key}
                      className={`rounded-xl border p-4 sm:p-5 transition-colors ${
                        hasError
                          ? 'border-red-300 bg-red-50/20'
                          : 'border-gray-200/90 bg-[#fbfdfc]'
                      }`}
                    >
                      <p className="text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                        <span className="text-[#066842] font-bold">
                          {item.num}.
                        </span>{' '}
                        {item.text} <span className="text-red-600">*</span>
                      </p>

                      <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
                        {['Yes', 'No'].map((opt) => {
                          const isSelected = currentVal === opt
                          return (
                            <label
                              key={opt}
                              className={`inline-flex w-full sm:w-auto sm:min-w-[110px] justify-center sm:justify-start cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 sm:py-2.5 text-sm font-semibold transition-all ${
                                isSelected
                                  ? 'border-[#066842] bg-emerald-50 text-[#066842] shadow-2xs'
                                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name={item.key}
                                value={opt}
                                checked={isSelected}
                                onChange={() => updateField(item.key, opt)}
                                className="sr-only"
                              />
                              <span
                                className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                                  isSelected
                                    ? 'border-[#066842] bg-[#066842]'
                                    : 'border-gray-300 bg-white'
                                }`}
                              >
                                {isSelected && (
                                  <span className="h-2 w-2 rounded-full bg-white" />
                                )}
                              </span>
                              <span>{opt}</span>
                            </label>
                          )
                        })}
                      </div>

                      {renderFieldError(item.key)}
                    </div>
                  )
                })}
              </div>
            )}

            {/* ============================================================= */}
            {/* SECTION E: FINANCIAL PROPOSAL (Questions 27 - 29)             */}
            {/* ============================================================= */}
            {currentStep === 4 && (
              <div className="space-y-5 sm:space-y-6">
                {/* 27 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900">
                    <span className="text-[#066842] font-bold">27.</span>{' '}
                    Proposed Total Professional Fee (₦).{' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <div className="relative mt-2">
                    <span className="pointer-events-none absolute left-0 top-0 flex h-full w-11 sm:w-12 items-center justify-center rounded-l-xl border-r border-gray-200 bg-emerald-50 text-base font-bold text-[#066842]">
                      ₦
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={formData.q27_totalFee}
                      onChange={(e) =>
                        updateField('q27_totalFee', formatNaira(e.target.value))
                      }
                      placeholder="Professional Fee (₦)"
                      className={`${inputBaseClass('q27_totalFee')} mt-0 pl-14 sm:pl-15 font-semibold tracking-wide`}
                    />
                  </div>
                  {formData.q27_totalFee && !errors.q27_totalFee && (
                    <p className="mt-1.5 text-xs font-medium text-emerald-700">
                      Total proposed fee: ₦{formData.q27_totalFee}
                    </p>
                  )}
                  {renderFieldError('q27_totalFee')}
                </div>

                {/* 28 */}
                <div>
                  <label className="block text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                    <span className="text-[#066842] font-bold">28.</span>{' '}
                    Provide a breakdown of the proposed fee, showing the
                    applicable cost components, such as:{' '}
                    <span className="text-red-600">*</span>
                  </label>
                  <ul className="mt-2 mb-2.5 grid gap-1.5 rounded-xl border border-[#c8b268]/30 bg-[#fdfaf0] px-3.5 py-3 sm:px-4 text-xs text-gray-700 sm:grid-cols-2">
                    {FEE_COMPONENTS.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-xs bg-[#c8b268]" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <textarea
                    rows={5}
                    value={formData.q28_feeBreakdown}
                    onChange={(e) =>
                      updateField('q28_feeBreakdown', e.target.value)
                    }
                    placeholder="Enter your proposed fee breakdown and total amount."
                    className={inputBaseClass('q28_feeBreakdown')}
                  />
                  {renderFieldError('q28_feeBreakdown')}
                </div>

                {/* 29 */}
                {renderFileUpload(
                  'q29_financialProposalFile',
                  29,
                  'Upload a detailed financial proposal indicating the total cost, fee breakdown, assumptions and any exclusions.'
                )}
              </div>
            )}

            {/* ============================================================= */}
            {/* SECTION F: DECLARATION                                        */}
            {/* ============================================================= */}
            {currentStep === 5 && (
              <div className="space-y-6 sm:space-y-7">
                {/* Consent */}
                <div>
                  <p className="text-[14px] sm:text-[14.5px] font-semibold text-gray-900">
                    Consent <span className="text-red-600">*</span>
                  </p>
                  <label
                    className={`mt-2.5 flex cursor-pointer items-start gap-3 sm:gap-3.5 rounded-xl border p-3.5 sm:p-4 transition-all ${
                      errors.consent
                        ? 'border-red-300 bg-red-50/30'
                        : formData.consent
                        ? 'border-[#066842] bg-emerald-50/60'
                        : 'border-gray-200 bg-[#fbfdfc] hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => updateField('consent', e.target.checked)}
                      className="sr-only"
                    />
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                        formData.consent
                          ? 'border-[#066842] bg-[#066842]'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      {formData.consent && (
                        <svg
                          className="h-3.5 w-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="text-[13.5px] sm:text-sm leading-relaxed text-gray-700">
                      I/We hereby declare that the information provided in this
                      application and all supporting documents submitted are
                      true and accurate to the best of my/our knowledge. I/We
                      understand that any material misrepresentation may result
                      in disqualification in accordance with applicable
                      procurement requirements.
                    </span>
                  </label>
                  {renderFieldError('consent')}
                </div>

                {/* Authorised Representative Panel */}
                <div className="rounded-2xl border border-gray-200 border-l-4 border-l-[#c8b268] bg-[#fafbfa] p-4 sm:p-7">
                  <div className="mb-4 sm:mb-5 flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#072417] text-[#f3df9d]">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
                        />
                      </svg>
                    </span>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-800">
                      Authorised Signatory
                    </h4>
                  </div>

                  <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-[14px] font-semibold text-gray-900">
                        Name of Authorised Representative:{' '}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.decl_repName}
                        onChange={(e) =>
                          updateField('decl_repName', e.target.value)
                        }
                        placeholder="Full name"
                        className={inputBaseClass('decl_repName')}
                      />
                      {renderFieldError('decl_repName')}
                    </div>

                    <div>
                      <label className="block text-[14px] font-semibold text-gray-900">
                        Designation: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.decl_designation}
                        onChange={(e) =>
                          updateField('decl_designation', e.target.value)
                        }
                        placeholder="e.g., Managing Director"
                        className={inputBaseClass('decl_designation')}
                      />
                      {renderFieldError('decl_designation')}
                    </div>

                    <div>
                      <label className="block text-[14px] font-semibold text-gray-900">
                        Name of Firm/Practice:{' '}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.decl_firmName}
                        onChange={(e) =>
                          updateField('decl_firmName', e.target.value)
                        }
                        placeholder={formData.q1_firmName || 'Firm / practice name'}
                        className={inputBaseClass('decl_firmName')}
                      />
                      {renderFieldError('decl_firmName')}
                    </div>

                    <div>
                      <label className="block text-[14px] font-semibold text-gray-900">
                        Date of Submission:{' '}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.decl_date}
                        onChange={(e) => updateField('decl_date', e.target.value)}
                        className={`${inputBaseClass('decl_date')} cursor-pointer`}
                      />
                      {renderFieldError('decl_date')}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-[14px] font-semibold text-gray-900 leading-snug">
                        Signature or Authorised Electronic Confirmation:{' '}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.decl_signature}
                        onChange={(e) =>
                          updateField('decl_signature', e.target.value)
                        }
                        placeholder="Type your full name to sign electronically"
                        className={`${inputBaseClass('decl_signature')} italic`}
                        style={{
                          fontFamily: formData.decl_signature
                            ? "'Brush Script MT', 'Segoe Script', cursive"
                            : undefined,
                          fontSize: formData.decl_signature ? '1.15rem' : undefined,
                        }}
                      />
                      {renderFieldError('decl_signature')}
                    </div>
                  </div>
                </div>

                {/* Documents To Be Uploaded */}
                <div className="rounded-2xl border border-emerald-100 bg-white p-4 sm:p-7">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-gray-900">
                    Documents to be Uploaded
                  </h4>
                  <p className="mt-1 text-[13.5px] sm:text-sm text-gray-600">
                    Applicants should submit the following, as applicable:
                  </p>
                  <ol className="mt-4 space-y-2.5">
                    {REQUIRED_DOCUMENTS.map((doc, idx) => (
                      <li key={doc} className="flex items-start gap-3 text-[13.5px] sm:text-sm text-gray-700">
                        <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-bold text-[#066842] ring-1 ring-emerald-200">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{doc}</span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-5 sm:mt-6 flex items-start gap-2.5 sm:gap-3 rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 sm:p-4">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                    <p className="text-[13px] sm:text-sm font-semibold leading-relaxed text-amber-950">
                      Submission Note: Submission of an Expression of Interest
                      does not constitute an award of contract or a commitment
                      by KwaraETF to engage any applicant. Applications will be
                      evaluated in accordance with the Fund’s applicable
                      procurement procedures.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ============================================================= */}
            {/* FINAL STEP: REVIEW & SUBMIT                                   */}
            {/* ============================================================= */}
            {currentStep === 6 && !isSubmitted && (
              <div className="space-y-5">
                {isSubmitting ? (
                  <div className="flex items-start sm:items-center gap-3 rounded-xl border border-gray-200 bg-[#f7f9f8] px-4 py-4 sm:px-5">
                    <svg
                      className="mt-0.5 sm:mt-0 h-5 w-5 shrink-0 animate-spin text-[#066842]"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-80"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        Submitting...
                      </p>
                      <p className="text-xs leading-relaxed text-gray-500">
                        Uploading your documents and securely transmitting your
                        application. Please do not close this page.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-[13.5px] sm:text-sm text-gray-600 leading-relaxed">
                      Please review your application summary below. Use{' '}
                      <strong>Previous</strong> to go back and make
                      changes, then click <strong>Submit</strong>.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        ['Applicant', formData.q1_firmName],
                        [
                          'Category',
                          formData.q2_category ===
                          'Other relevant professional consultancy (please specify)'
                            ? formData.q2_otherCategory
                            : formData.q2_category,
                        ],
                        ['Contact Person', `${formData.q6_contactName} (${formData.q7_contactDesignation})`],
                        ['Email / Phone', `${formData.q5_email} • ${formData.q4_telephone}`],
                        ['Professional Bodies', formData.q10_professionalBodies],
                        ['Estimated Timeline', formData.q21_estimatedTimeline],
                        ['Proposed Total Fee', formData.q27_totalFee ? `₦${formData.q27_totalFee}` : ''],
                        ['Authorised Signatory', `${formData.decl_repName} — ${formData.decl_designation}`],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="min-w-0 rounded-xl border border-gray-100 bg-[#f9fbfa] px-3.5 py-3 sm:px-4"
                        >
                          <p className="text-[10.5px] font-bold uppercase tracking-wider text-gray-500">
                            {label}
                          </p>
                          <p className="mt-0.5 break-words sm:truncate text-sm font-semibold text-gray-900">
                            {value || '—'}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 px-3.5 py-3 sm:px-4">
                      <p className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-800">
                        Attached Documents
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {[
                          formData.q14_licenceFile,
                          formData.q15_incorporationFile,
                          formData.q18_companyProfileFile,
                          formData.q29_financialProposalFile,
                        ]
                          .filter(Boolean)
                          .map((f) => (
                            <li
                              key={f.name + f.size}
                              className="flex min-w-0 items-center gap-2 text-sm text-gray-800"
                            >
                              <svg
                                className="h-4 w-4 shrink-0 text-emerald-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.4"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                              <span className="truncate">{f.name}</span>
                              <span className="shrink-0 text-xs text-gray-500">
                                ({formatFileSize(f.size)})
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* ============================================================= */}
            {/* SUBMISSION SUCCESS                                            */}
            {/* ============================================================= */}
            {isSubmitted && (
              <div className="py-4 sm:py-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/60">
                  <svg
                    className="h-9 w-9 text-[#066842]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.4"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg sm:text-2xl font-extrabold text-gray-900">
                  Expression of Interest Submitted Successfully
                </h3>
                <p className="mx-auto mt-2 max-w-xl break-words text-sm leading-relaxed text-gray-600">
                  Thank you, <strong>{formData.q1_firmName}</strong>. Your
                  application for the Lafiagi Secondary School consultancy has
                  been received. A confirmation will be sent to{' '}
                  <strong>{formData.q5_email}</strong>.
                </p>
                <div className="mx-auto mt-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#c8b268]/50 bg-[#fdfaf0] px-4 py-1.5 text-xs font-bold tracking-wide text-[#5a3210]">
                  <span className="truncate">Reference: {referenceId}</span>
                </div>
                <div className="mt-7">
                  <button
                    type="button"
                    onClick={() => onNavigate && onNavigate('#home')}
                    className="inline-flex w-full sm:w-auto justify-center cursor-pointer items-center gap-2 rounded-xl bg-[#066842] px-6 py-3 sm:py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#055737] hover:shadow-md active:scale-98"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            )}

            {/* Wizard Navigation Footer */}
            {!isSubmitted && (
            <div className="mt-8 sm:mt-10 flex items-center justify-between gap-3 border-t border-gray-100 pt-5 sm:pt-6">
              {currentStep > 0 ? (
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={isSubmitting}
                  className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 sm:px-5 text-sm font-semibold text-[#066842] shadow-2xs transition-all hover:border-[#066842] hover:bg-emerald-50/40 active:scale-98 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:bg-white"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep === FORM_SECTIONS.length - 1 ? (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#b91c1c] px-6 py-2.5 sm:px-7 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#991b1b] hover:shadow-md active:scale-98 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:bg-[#b91c1c] disabled:hover:shadow-sm"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                  {!isSubmitting && (
                    <svg
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#066842] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#055737] hover:shadow-md active:scale-98"
                >
                  <span>Next</span>
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
            </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default EoiLafiagiSchool

