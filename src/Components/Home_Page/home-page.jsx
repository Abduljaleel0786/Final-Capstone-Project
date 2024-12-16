import React from 'react'
import Navbar from './Navbar/navbar'
import Footer from './Footer/Footer'
import Card from './CardCity/Card'
import HeroSection from './HeroSection/HeroSection'
import OnlineOrder from './OnlineOrder/OnlineOrder'
import CookerPage from './CookerPage/CookerPage'

const Homepage = () => {
  return (
    <>
       <Navbar />
       <HeroSection />
      < CookerPage/>
       <Card />  
      <OnlineOrder/> 
     

      {/* <Footer /> */}
      {/* <Resturant /> */}

    </>
  )
}

export default Homepage;