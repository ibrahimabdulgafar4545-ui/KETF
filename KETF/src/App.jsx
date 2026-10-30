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
      </main>
    </div>
  )
}

export default App
