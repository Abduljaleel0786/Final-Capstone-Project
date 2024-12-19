import React from 'react'
import Footer from './Footer/Footer'
import Card from './CardCity/Card'
import HeroSection from './HeroSection/HeroSection'
import OnlineOrder from './OnlineOrder/OnlineOrder'
import CookerPage from './CookerPage/CookerPage'
import LunchPage from './LunchPage/LunchPage'
import AboutPage from './AboutPage/AboutPage'

const Homepage = () => {
  return (
    <>

      <HeroSection />
      <CookerPage />
      <Card />
      <OnlineOrder />
      <LunchPage />
      <AboutPage />
      <Footer />

    </>
  )
}

export default Homepage;