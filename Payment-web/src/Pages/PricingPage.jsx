import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Pricing_Hero from '../Pricing_Page/Pricing_Hero'
import PricingFaq from '../Pricing_Page/PricingFaq'

const PricingPage = () => {
  return (
    <div className="bg" style={{backgroundColor:'black'}}>
       <Header/>
       <Pricing_Hero/>
       <PricingFaq/>
       <Footer/>
    </div>
  )
}

export default PricingPage
