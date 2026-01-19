import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import TeFooter from './Components/TeFooter'
import TechEaseLanding from './Components/TechEaseLanding'
import CaseStudies from './Components/Case-Studies'
import EcommerceCarousel from './Components/TechEaseServices '
import FAQComponent from './Components/FAQComponent'
import ForgeBrilliancePage from './Components/ForgeBrilliancePage'
import Phases from './Components/Phases'
import ServicesGrid from './Components/ServicesGrid'
import ContactForm from './Components/ContactForm'
import TechSphere from './Components/TechSphere'
import PrivacyPolicy from './Components/PrivacyPolicy'
import TermsAndConditions from './Components/TermsAndConditions'

function App() {
  const [showForm, setShowForm] = useState(false)

  // Home page component
  const HomePage = () => (
    <>
      <button
        className="bg-[#D5FF3F] cursor-pointer md:hidden font-medium text-xl fixed z-50 w-full bottom-0 text-black px-8 py-2 hover:bg-lime-300 transition-colors"
        onClick={() => setShowForm(true)}
      >
        Book Strategy Call Now
      </button>

      <TechEaseLanding />
      <TechSphere />
      {/* <EcommerceCarousel /> */}
      <CaseStudies />
      <ServicesGrid />
      <Phases />
      <ForgeBrilliancePage />
      <FAQComponent />
      <TeFooter />
    </>
  )

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  )
}

export default App

