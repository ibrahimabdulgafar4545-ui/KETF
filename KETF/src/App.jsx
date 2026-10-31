import { useState, useEffect } from 'react'
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
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
import Jobs from './components/Jobs.jsx'
import FinanceManagerJob from './components/FinanceManagerJob.jsx'
import Projects from './components/Projects.jsx'
import TeachersLoungeInitiative from './components/TeachersLoungeInitiative.jsx'
import ScholarshipsInitiative from './components/ScholarshipsInitiative.jsx'
import News from './components/News.jsx'
import InMemoriamNews from './components/InMemoriamNews.jsx'
import TwoYearsBuildingNews from './components/TwoYearsBuildingNews.jsx'
import GenericNewsArticle from './components/GenericNewsArticle.jsx'
import Hero from './components/Hero.jsx'
import VisionSection from './components/VisionSection.jsx'
import BelieveSection from './components/BelieveSection.jsx'
import JoinSection from './components/JoinSection.jsx'
import InitiativesSection from './components/InitiativesSection.jsx'
import NewsSection from './components/NewsSection.jsx'
import NewsletterSection from './components/NewsletterSection.jsx'
import PillarsSection from './components/PillarsSection.jsx'
import Footer from './components/Footer.jsx'
import ReadMore from './pages/ReadMore.jsx'
import ContactPage from './pages/ContactPage.jsx'

const AppLayout = () => {
  const location = useLocation()
  const routerNavigate = useNavigate()

  // Track active hash route
  const [hashRoute, setHashRoute] = useState(() => window.location.hash || '')

  // Listen to hash changes (browser back/forward or direct hash clicks)
  useEffect(() => {
    const handleHashChange = () => {
      setHashRoute(window.location.hash || '')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Derive the active page cleanly during render
  let route = hashRoute
  if (!route || route === '#home' || route === '#') {
    if (location.pathname === '/read-more' || location.pathname === '/about') {
      route = '#about'
    } else if (location.pathname === '/contact') {
      route = '#contact'
    } else {
      route = '#home'
    }
  }

  // Central navigation handler used by Navbar & page links
  const navigate = (target) => {
    if (!target || target === '/' || target === '#home' || target === '#') {
      window.location.hash = ''
      setHashRoute('')
      if (location.pathname !== '/') {
        routerNavigate('/')
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (target.startsWith('#')) {
      if (location.pathname !== '/') {
        routerNavigate('/')
      }
      window.location.hash = target
      setHashRoute(target)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (target.startsWith('/')) {
      window.location.hash = ''
      setHashRoute('')
      routerNavigate(target)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Unified Global Mega Menu Navbar */}
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
          <AdministrativeFee onNavigate={navigate} />
        ) : route === '#job-finance-manager' ? (
          <FinanceManagerJob onNavigate={navigate} />
        ) : route === '#jobs' ? (
          <Jobs onNavigate={navigate} />
        ) : route === '#projects' ? (
          <Projects onNavigate={navigate} />
        ) : route === '#teachers-lounge-initiative' ? (
          <TeachersLoungeInitiative onNavigate={navigate} />
        ) : route === '#scholarships-initiative' ? (
          <ScholarshipsInitiative onNavigate={navigate} />
        ) : route === '#news-in-memoriam' ? (
          <InMemoriamNews onNavigate={navigate} />
        ) : route === '#news-two-years-of-building-for-impact' ? (
          <TwoYearsBuildingNews onNavigate={navigate} />
        ) : route.startsWith('#news-') ? (
          <GenericNewsArticle articleSlug={route} onNavigate={navigate} />
        ) : route === '#news' ? (
          <News onNavigate={navigate} />
        ) : route === '#contact' || location.pathname === '/contact' ? (
          <ContactPage />
        ) : route === '#about' ||
          route === '#read-more' ||
          location.pathname === '/read-more' ||
          location.pathname === '/about' ? (
          <ReadMore />
        ) : (
          /* Full Home Page */
          <div id="home">
            <Hero />
            <VisionSection />
            <BelieveSection />
            <InitiativesSection />
            <NewsSection onNavigate={navigate} />
            <NewsletterSection />
            <PillarsSection />
            <JoinSection />
          </div>
        )}
      </main>

      {/* Global Executive Footer */}
      <Footer onNavigate={navigate} />
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
