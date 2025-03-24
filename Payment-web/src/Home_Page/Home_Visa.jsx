import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import Visa1 from '../assets/images/index/vesa-back.png'
import Icon1 from '../assets/images/icon/vis-1.png'
import Icon2 from '../assets/images/icon/ves-2.png'
import Icon3 from '../assets/images/icon/ves-3.png'
import Icon4 from '../assets/images/icon/ves-4.png'
import Icon5 from '../assets/images/icon/ves-5.png'
import Card from '../assets/images/index/Card.png'


const Home_Visa = () => {
    const visaIcons = [Icon1, Icon2, Icon3, Icon4, Icon5];

  return (
    <div>
                 <section className="visa">
            <div className="container">
                <div className="visa-bg" data-aos="zoom-in">
                    <figure><img src={Visa1} alt="visa-img" /></figure>
                </div>
                <div className="visa-contant" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h3 className="text-md-start text-sm-center text-center">Replacing complexity with
                                simplicity
                            </h3>
                            <p className="text-md-start text-sm-center text-center p-f-s">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. Iusto doloribus adipisci facere voluptatum, suscipit deserunt,
                                cupiditate
                                facilis impedit assumenda saepe, in vitae labore molestias.</p>
                            <p className="text-md-start text-sm-center text-center p-f-s">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. Nam aut explicabo at qui laudantium.</p>
                            <div className="visa-btn text-sm-center text-md-start text-center">
                                <a className="btn-hover1" href="#">Try PayPath Now</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
      {/* Visa Logo Slider */}
      <div className="visa-logo pt-2 pb-3">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
          }}
        >
          {visaIcons.map((icon, index) => (
            <SwiperSlide key={index}>
              <figure>
                <img src={icon} alt={`visa-icon-${index + 1}`} />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Integrations Count */}
      <div className="d-flex pt-2 justify-content-md-start justify-content-center">
        <h2 className="count">280</h2>
        <h2>+</h2>
        <h6 className="d-flex align-items-center ps-2">Integrations</h6>
      </div>

      {/* Description */}
      <p className="pt-2 pb-3 text-md-start text-sm-center text-center p-f-s">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum laboriosam officiis autem ut sit mollitia blanditiis.
      </p>

      {/* Visa Card Image */}
      <div className="visa-card position-relative mt-3">
        <img src={Card} alt="visa-card" />
      </div>
    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home_Visa
