import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Icon1 from '../assets/images/icon/graphe.png';
import Icon2 from '../assets/images/icon/doller.png';
import Icon3 from '../assets/images/icon/arow.png';

import Logo1 from '../assets/images/icon/ipsum-1.png';
import Logo2 from '../assets/images/icon/ipsum-2.png';
import Logo3 from '../assets/images/icon/ispum-3.png';
import Logo4 from '../assets/images/icon/ipsum-4.png';

const Home_Finance = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo1, Logo2, Logo3, Logo4];

  return (
    <>
      {/* About Finance Section */}
      <section className="finance mt-lg-4 mt-md-2 mt-sm-0 mt-0">
        <div className="container text-center">
          <h2>UNLOCKING THE POWER OF DIGITAL PAYMENTS</h2>
          <p className="mt-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus et
            dolorem error aspernatur nulla. Ipsa architecto, cupiditate deleniti
            maiores aut nostrum alias ullam esse eligendi corrupti. Odit natus
            illum fuga?
            
          </p>

          <div className="finanes-card row gap-md-0 gap-sm-4 gap-4">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-4 d-flex justify-content-center pe-lg-3 pe-md-0 pe-sm-3 pe-3">
              <div className="fin-card" data-aos="flip-up">
                <figure>
                  <img src={Icon1} alt="graph icon" />
                </figure>
                <h4>Market Share</h4>
                <p className="p-f-s">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique dicta corrupti nihil?
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-4 d-flex justify-content-center pe-lg-3 pe-md-0 pe-sm-3 pe-3">
              <div className="fin-card" data-aos="flip-up">
                <figure>
                  <img src={Icon2} alt="dollar icon" />
                </figure>
                <h4>Easy Payment</h4>
                <p className="p-f-s">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                  itaque nam pariatur.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-4 d-flex justify-content-center">
              <div className="fin-card" data-aos="flip-up">
                <figure>
                  <img src={Icon3} alt="arrow icon" />
                </figure>
                <h4>Awesome Services</h4>
                <p className="p-f-s">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci rem quos corrupti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Slider Section */}
      <div className="ispsum-logo py-4">
        <div className="container">
          <hr />
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            modules={[Autoplay]}
            className="logo_ispsum_slider"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <a href="#">
                  <figure>
                    <img src={logo} alt={`logo-${index}`} />
                  </figure>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Home_Finance;
