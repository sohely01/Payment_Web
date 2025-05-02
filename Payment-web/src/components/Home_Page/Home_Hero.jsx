import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero2 from "../../assets/images/icon/hero_star.png";
import Hero from "../../assets/images/credit.svg"

const Home_Hero = ({ loading, error, data }) => {
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
    <section className="hero py-5">
      <div className="container">
        <div className="row text-md-start text-center align-items-center">

          {/* Left Content */}
          <div
            data-aos="fade-up"
            className="col-md-6 d-flex flex-column align-items-md-start align-items-center justify-content-center mb-4 mb-md-0"
          >
            <h1 className="mb-3 text-white">{heading || "No Heading"}</h1>
            <h3 className="mb-4" style={{ color: "white" }}>
              {description || "No description available."}
            </h3>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-down"
            className="col-md-6 position-relative d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: "300px" }}

          >
            {s_image && <img src={Hero} width="60%" alt="Section Visual" />}


            {/* Star Icon */}
            <img
              src={Hero2}
              alt="hero star icon"
              className="position-absolute"
              style={{
                bottom: "10%",
                right: "10%",
                maxWidth: "30px",
                zIndex: 4,
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home_Hero;
