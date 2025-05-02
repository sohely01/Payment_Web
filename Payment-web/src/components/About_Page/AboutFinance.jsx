import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Icon1 from '../../assets/images/icon/graphe.png';
import Icon2 from '../../assets/images/icon/doller.png';
import Icon3 from '../../assets/images/icon/arow.png';

import Logo1 from '../../assets/images/icon/ipsum-1.png';
import Logo2 from '../../assets/images/icon/ipsum-2.png';
import Logo3 from '../../assets/images/icon/ispum-3.png';
import Logo4 from '../../assets/images/icon/ipsum-4.png';

const logos = [Logo1, Logo2, Logo3, Logo4, Logo1, Logo2, Logo3, Logo4]; // <-- Move outside catch

const AboutFinance = ({ loading, error, data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return <div className="text-white text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-danger text-center py-5">Error: {error}</div>;
  }

  const { heading = "No Heading", description = "No Description", sectionData } = data || {};

  let parsedSectionData = [];

  try {
    parsedSectionData = typeof sectionData === "string" ? JSON.parse(sectionData) : sectionData || [];
  } catch (error) {
    console.error("Error parsing sectionData:", error);
  }

  const icons = [Icon1, Icon2, Icon3]; // icons to rotate through if needed

  return (
    <>
      {/* About Finance Section */}
      <section className="finance mt-lg-4 mt-md-2 mt-sm-0 mt-0">
        <div className="container text-center">
          <h1 style={{ lineHeight: '52px', padding: '0px 210px' }}>{heading}</h1>
          <p className="mt-0" style={{ fontSize: "16px" }}>{description}</p>

          <div className="finanes-card row gap-md-0 gap-sm-4 gap-4">
            {parsedSectionData.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-4 d-flex justify-content-center pe-lg-3 pe-md-0 pe-sm-3 pe-3">
                <div className="fin-card" data-aos="flip-up">
                  <figure>
                    {/* Rotate icons for each card */}
                    <img src={icons[index % icons.length]} alt="icon" />
                  </figure>
                  <h4 style={{ fontSize: "22px", fontWeight: "700" }}>{item.heading || "No Title"}</h4>
                  <p className="p-f-s">{item.description || "No description."}</p>
                </div>
              </div>
            ))}
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
              1024: { slidesPerView: 4 },
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

export default AboutFinance;
