import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
const ContactHero = ({ loading, error, data }) => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return <div className="text-white text-center py-5">Loading...</div>;
  }

  if (error) {
    return; // you can add an error display if you want
  }

  const { heading, description, s_image } = data || {};
  return (
    <div>
      <div className="container">
        <div className="contact-hero">
          <h1 className="text-center">{heading}</h1>
          <p className="text-center" style={{ fontSize: "18px" }}>{description}</p>
        </div>
      </div>
      <div className="map">
        <iframe
          title="Google Maps - Solapur"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7604.385103190117!2d75.91179214106953!3d17.641037033159854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1splot%20no%2067%20s%20no%20278%2F279%20hotgi%20road%20Solapur%20413003!5e0!3m2!1sen!2sin!4v1744098369688!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>
    </div>
  )
}

export default ContactHero
