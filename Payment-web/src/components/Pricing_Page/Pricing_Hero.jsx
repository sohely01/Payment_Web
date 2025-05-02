import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Pricing from '../../assets/images/pricing/pricinge.png';
import Icon from '../../assets/images/icon/hero_star.png';
import PricingEco from "./PricingEco";
import { Link } from "react-router-dom";


const Pricing_Hero = ({ loading, error, data }) => {
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
    <>
      {/* Hero Section */}
      <div className="container">
        <div className="pricing-hero">
          <h1 className="text-center" style={{ lineHeight: '50px' }}>{heading}</h1>
          <p className="text-center" style={{ fontSize: "18px" }}>
            {description}
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="pricing pri-padd">
        <div className="container">
          <div className="row d-flex gap-md-0 gap-sm-3 gap-2">

            {/* Left Image Column */}
            <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center pricing-bg" data-aos="fade-up">
              <div>
                <figure>
                  <img src={Pricing} className="moving" alt="pricing-main" />
                </figure>
                <figure>
                  <img src={Icon} alt="star-icon" />
                </figure>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="col-lg-6 col-md-6 mt-md-0 mt-sm-5 mt-5" data-aos="fade-down">
              <PricingEco />


              {/* CTA Button */}
              <div className="text-md-start text-sm-center text-center pt-lg-4 pt-md-2 pt-sm-0 pt-1">
                <Link to='/contact'
                  className="btn-hover1">Get Started</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing_Hero;
