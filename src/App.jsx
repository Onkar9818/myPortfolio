import React from 'react'
import Hero from './sections/Hero'
import NavBar from './components/HeroModels/NavBar'
import ShowcaseSection from './sections/ShowcaseSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const App = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
      <Contact />
      <Footer />
    </>
  )
}

export default App