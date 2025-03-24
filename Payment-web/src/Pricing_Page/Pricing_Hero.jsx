import React from 'react';
import Pricing from '../assets/images/pricing/pricinge.png';
import Icon from '../assets/images/icon/hero_star.png';

const Pricing_Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container">
        <div className="pricing-hero">
          <h2 className="text-center">PRICING</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit architecto obcaecati quibusdam sequi nulla.
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
              <h2 className="text-md-start text-sm-center text-center">
                ECONOMICAL PRICING OPTIONS
              </h2>
              <p className="text-md-start text-sm-center text-center p-md-0 p-sm-2 p-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt excepturi enim vero soluta veritatis quis reprehenderit.
              </p>

              {/* Personal Plan */}
              <div className="pric-list">
                <h6>Personal</h6>
                <div className="d-flex justify-content-between gap-md-5 gap-sm-3 gap-3">
                  <div className="d-flex pric-sup align-items-center">
                    <h2>$1.54</h2>
                    <p>/month</p>
                  </div>
                  <p className="p-f-s">
                    Lorem ipsum dolor sit amet, consectetur adipiset quatit. quia?
                  </p>
                </div>
              </div>

              {/* Business Plan */}
              <div className="pric-list second">
                <h6>Business</h6>
                <div className="d-flex justify-content-between gap-md-4 gap-sm-2 gap-2 align-items-center">
                  <div className="d-flex pric-sup">
                    <h2>$4.54</h2>
                    <p>/month</p>
                  </div>
                  <p className="p-f-s">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. quia?
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-md-start text-sm-center text-center pt-lg-4 pt-md-2 pt-sm-0 pt-1">
                <a className="btn-hover1" href="#">Get Started</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing_Hero;
