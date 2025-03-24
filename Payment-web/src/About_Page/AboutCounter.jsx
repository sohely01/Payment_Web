import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import World from '../assets/images/about/round-word.jpg';
import Behind from '../assets/images/about/behind2.jpg';
import Behind2 from '../assets/images/about/behind.jpg';

const AboutCounter = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div>
      <section className="round-word">
        <div className="container">
          <div className="row gap-lg-0 gap-md-0 gap-sm-4 gap-4">
            <div
              className="col-lg-6 col-md-6 d-flex align-items-lg-start align-items-md-start align-items-ms-center align-items-center justify-content-center flex-column"
              data-aos="fade-up"
              ref={ref}
            >
              <h2 className="text-lg-start text-md-start text-sm-center text-center">
                WE ARE ROUND THE WORLD
              </h2>

              <p className="text-lg-start text-md-start text-sm-center text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ea asperiores, iusto
                repellendus explicabo fuga quisquam.
              </p>

              {/* First row of counters */}
              <div className="d-flex gap-3">
                <div className="sticker">
                  <div className="d-flex">
                    <h3 className="count">
                      {inView && <CountUp end={100} duration={2} />}
                    </h3>
                    <h3>K+</h3>
                  </div>
                  <span>Active User</span>
                </div>

                <div className="sticker st-bg">
                  <div className="d-flex">
                    <h3 className="count">
                      {inView && <CountUp end={400} duration={2} />}
                    </h3>
                    <h3>K+</h3>
                  </div>
                  <span>App Download</span>
                </div>
              </div>

              {/* Second row of counters */}
              <div className="d-flex gap-3 mt-3">
                <div className="sticker st-bg">
                  <div className="d-flex">
                    <h3 className="count">
                      {inView && <CountUp end={90} duration={2} />}
                    </h3>
                    <h3>%</h3>
                  </div>
                  <span>Satisfied User</span>
                </div>

                <div className="sticker">
                  <div className="d-flex">
                    <h3 className="count">
                      {inView && <CountUp end={200} duration={2} />}
                    </h3>
                    <h3>+</h3>
                  </div>
                  <span>Partners Joined</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center"
              data-aos="fade-down"
            >
              <figure><img src={World} alt="img" /></figure>
            </div>
          </div>
        </div>
      </section>

      {/* Behind Section (unchanged) */}
      <section className="behind b-back">
        <div className="container">
          <h2 className="text-center">HOW'S BEHIND</h2>
          <p className="b-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nam recusandae vel! thanks</p>
          <div className="row gap-md-0 gap-sm-4 gap-4 mt-3">
            <div className="col-lg-6 col-md-6 d-flex" data-aos="flip-up">
              <div><img src={Behind} alt="img" /></div>
              <div className="ps-4">
                <h4>Pamela Brown</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolore voluptate aut?</p>
                <div className="b-icon">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex" data-aos="flip-up">
              <div>
                <figure><img src={Behind2} alt="img" /></figure>
              </div>
              <div className="ps-4">
                <h4>Emma White</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolore voluptate aut?</p>
                <div className="b-icon">
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCounter;
