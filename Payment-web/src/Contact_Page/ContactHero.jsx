import React from 'react'

const ContactHero = () => {
  return (
    <div>
                     <div className="container">
                <div className="contact-hero">
                    <h2 className="text-center">CONTACT</h2>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quam aut corrupti Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
            <div className="map">
      <iframe
        title="Google Maps - Newark NJ"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.5656858991!2d-74.26445728824706!3d40.73138423906509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C%20NJ%2C%20USA!5e0!3m2!1sen!2s!4v1691826891864!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  )
}

export default ContactHero
