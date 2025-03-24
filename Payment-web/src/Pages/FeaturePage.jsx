import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import FeatureHero from '../Feature_page/FeatureHero'
import FeatureServices from '../Feature_page/FeatureServices'
import FeatureCore from '../Feature_page/FeatureCore'
import FeatureVisa from '../Feature_page/FeatureVisa'

const FeaturePage = () => {
  return (
    <div className="bg" style={{backgroundColor:'black'}}>
        <Header/>
        <FeatureHero/>
        <FeatureServices/>
        <FeatureCore/>
        <FeatureVisa/>
        <Footer/>
    </div>
  )
}

export default FeaturePage
