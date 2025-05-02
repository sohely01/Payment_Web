

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Icons
import Icon1 from "../../assets/images/icon/graphe.png";
import Icon2 from "../../assets/images/icon/doller.png";
import Icon3 from "../../assets/images/icon/arow.png";

// Logos
import Logo1 from "../../assets/images/icon/ipsum-1.png";
import Logo2 from "../../assets/images/icon/ipsum-2.png";
import Logo3 from "../../assets/images/icon/ispum-3.png";
import Logo4 from "../../assets/images/icon/ipsum-4.png";

const Home_Finance = ({ loading, error, data }) => {


  const logos = [Logo1, Logo2, Logo3, Logo4, Logo1, Logo2, Logo3, Logo4];
  const icons = [Icon1, Icon2, Icon3];


  if (loading) {
    return <div className="text-white text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-danger text-center py-5">Error: {error}</div>;
  }

  const { heading, description, sectionData } = data || {};
  let parsedSectionData = [];

  try {
    parsedSectionData = typeof data?.sectionData === "string"
      ? JSON.parse(data.sectionData)
      : data?.sectionData || [];
  } catch (error) {
    console.error("Error parsing sectionData:", error);
  }

  AOS.init({ duration: 1000 });

  return (
    <>
      {/* About Finance Section */}
      <section className="finance mt-lg-4 mt-md-2 mt-sm-0 mt-5">
        <div className="container text-center">
          <h1 className="mb-3" style={{ padding: '0px 210px' }}>{heading || "Loading..."}</h1>
          <h3 className="mb-12" style={{ color: "white", fontSize: "16px" }}>
            {description || "Loading description..."}
          </h3>

          <div className="finanes-card row gap-md-0 gap-sm-4 gap-4">

            {Array.isArray(parsedSectionData) &&
              parsedSectionData?.map((item, index) => {
                const icon = icons[index % icons.length];
                const isLastRow = index >= sectionData.length - 3;

                return (
                  <div
                    key={index}
                    className={`col-lg-4 col-md-4 d-flex justify-content-center pe-lg-3 pe-md-0 pe-sm-3 pe-3 ${isLastRow ? "mt-5" : ""
                      }`}
                  >
                    <div className="fin-card" data-aos="flip-up" style={{ margin: '15px' }}>
                      <figure>
                        <img src={icon} alt={`${item.heading} icon`} />
                      </figure>
                      <h4 style={{ fontSize: "22px", fontWeight: 'bold' }}>{item.heading}</h4>
                      <p className="p-f-s" style={{ fontSize: "16px" }}>{item.description}</p>
                    </div>
                  </div>
                );
              })}
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

export default Home_Finance;