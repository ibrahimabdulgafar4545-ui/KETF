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
