import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import Proffesional from '../../assets/images/slider/profational2.png';
import Comma from '../../assets/images/slider/Comma.png';


const testimonials = [
  {
    name: 'Johnny Stone',
    role: 'Entrepreneur',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim qui porro perferendis voluptatibus minima...',
  },
  {
    name: 'Stephen Stewart',
    role: 'Entrepreneur',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim qui porro perferendis voluptatibus minima...',
  },
  {
    name: 'Tom Hiddellon',
    role: 'Entrepreneur',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim qui porro perferendis voluptatibus minima...',
  },
];

const AboutTesti = () => {
  return (
    <div>
      <section className="profaessional">
        <div className="container">
          <div className="col-md-12">
            <h2 className="text-center">Trusted By Professionals</h2>
            <p className="text-center pt-3 pb-5 mb-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente vel asperiores vero repudiandae neque!
            </p>

            <div className="prof-size" data-aos="zoom-in-up">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                loop={true}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                className="prof-slider"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="prof-slide position-relative">
                      <div className="d-flex align-items-center justify-content-center">
                        <img src={Proffesional} alt="Professional" className="prof-img-2" />
                      </div>
                      <div>
                        <img src={Comma} alt="Comma" className="prof-img-1" />
                      </div>
                      <p className="text-center p-f-s">{item.text}</p>
                      <div className="prof-star pt-2 pb-2 text-center">
                        <span className="stars text-lg-start">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                          ))}
                        </span>
                      </div>
                      <h5 className="text-center">{item.name}</h5>
                      <p className="text-center pt-2 pb-5 p-f-s">{item.role}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutTesti
