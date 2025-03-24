import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import AboutHero from '../About_Page/AboutHero'
import AboutFinance from '../About_Page/AboutFinance'
import BannerGateway from '../About_Page/BannerGateway'
import AboutCounter from '../About_Page/AboutCounter'
import AboutTesti from '../About_Page/AboutTesti'

const AboutPage = () => {
  return (
    <div className="bg" style={{backgroundColor:'black'}}>
        <Header/>
        <AboutHero/>
        <AboutFinance/>
        <BannerGateway/>
        <AboutCounter/>
        <AboutTesti/>
        <Footer/>
    </div>
  )
}

export default AboutPage
