import { useState, useEffect } from 'react'
import Navbar from './components/navbar.jsx'
import TheLaw from './components/TheLaw.jsx'
import BoardMembers from './components/BoardMembers.jsx'
import Secretariat from './components/Secretariat.jsx'
import Prospectus from './components/Prospectus.jsx'
import DevelopmentPlan from './components/DevelopmentPlan.jsx'
import AdoptASchool from './components/AdoptASchool.jsx'
import CelebrateWithKwaraETF from './components/CelebrateWithKwaraETF.jsx'
import ScholarshipProgram from './components/ScholarshipProgram.jsx'
import QuarterlyReports from './components/QuarterlyReports.jsx'
import Financials from './components/Financials.jsx'
import AuditReports from './components/AuditReports.jsx'
import ImpactReports from './components/ImpactReports.jsx'
import PoliciesAndGuidelines from './components/PoliciesAndGuidelines.jsx'
import AdministrativeFee from './components/AdministrativeFee.jsx'

const App = () => {
  const [route, setRoute] = useState(() => window.location.hash || '#home')

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#home')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (targetHash) => {
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setRoute(targetHash)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar activeRoute={route} onNavigate={navigate} />

      <main>
        {route === '#the-law' ? (
          <TheLaw onNavigate={navigate} />
        ) : route === '#board-members' ? (
          <BoardMembers />
        ) : route === '#secretariat' ? (
          <Secretariat />
        ) : route === '#prospectus' ? (
          <Prospectus />
        ) : route === '#5-year-development-plan' ? (
          <DevelopmentPlan onNavigate={navigate} />
        ) : route === '#adopt-a-school' ? (
          <AdoptASchool />
        ) : route === '#celebrate-with-kwara-etf' ? (
          <CelebrateWithKwaraETF />
        ) : route === '#scholarship-program' ? (
          <ScholarshipProgram />
        ) : route === '#quarterly-reports' ? (
          <QuarterlyReports />
        ) : route === '#financials' ? (
          <Financials />
        ) : route === '#audit-reports' ? (
          <AuditReports />
        ) : route === '#impact-reports' ? (
          <ImpactReports />
        ) : route === '#policies-and-guidelines' ? (
          <PoliciesAndGuidelines />
        ) : route === '#administrative-fee' ? (
          <AdministrativeFee />
        ) : (
          <div id="home" />
        )}
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'
import VisionSection from './components/VisionSection.jsx'
import BelieveSection from './components/BelieveSection.jsx'
import JoinSection from './components/JoinSection.jsx'
import InitiativesSection from './components/InitiativesSection.jsx'
import NewsSection from './components/NewsSection.jsx'
import NewsletterSection from './components/NewsletterSection.jsx'
import PillarsSection from './components/PillarsSection.jsx'
import ReadMore from './pages/ReadMore.jsx'
import ContactPage from './pages/ContactPage.jsx'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="home">
        <Hero />
        <VisionSection />
        <BelieveSection />
        <InitiativesSection />
        <NewsSection />
        <NewsletterSection />
        <PillarsSection />
        <JoinSection />
      </main>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/about" element={<ReadMore />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
