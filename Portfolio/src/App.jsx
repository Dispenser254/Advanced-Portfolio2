// import React from 'react'

import AboutPage from "./components/About"
import BackToTop from "./components/BackToTop"
import ContactPage from "./components/Contact"
import FooterPage from "./components/Footer"
import HomePage from "./components/Home"
import ProjectsPage from "./components/Projects"
import SkillsPage from "./components/Skills"
import Navbar from "./components/navigation/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <SkillsPage />
      <ContactPage />
      <FooterPage />
      <BackToTop />
    </div>
  )
}

export default App