import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import ContactHero from '../Contact_Page/ContactHero'
import ContactForm from '../Contact_Page/ContactForm'

const ContactPage = () => {
  return (
    <div className="bg" style={{backgroundColor:'black'}}>
         <Header/>
         <ContactHero/>
         <ContactForm/>
         <Footer/>
    </div>
  )
}

export default ContactPage
