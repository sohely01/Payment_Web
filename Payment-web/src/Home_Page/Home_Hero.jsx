import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../assets/images/index/hero.png";
import Hero1 from "../assets/images/index/hero_watch.png";
import Hero2 from "../assets/images/icon/hero_star.png";

const Home_Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero py-5">
      <div className="container">
        <div className="row text-md-start text-center align-items-center">
          {/* Left Side Content */}
          <div
            data-aos="fade-up"
            className="col-md-6 d-flex flex-column align-items-md-start align-items-center justify-content-center mb-4 mb-md-0"
          >
            <h1 className="mb-3">EMPOWER YOUR FINANCES</h1>
            <p className="mb-4" style={{ maxWidth: "500px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <a className="btn btn-primary btn-hover1" href="/about">
              Get the Card
            </a>
          </div>

          {/* Right Side Images */}
          <div
            data-aos="fade-down"
            className="col-md-6 position-relative d-flex flex-column justify-content-center align-items-center"
          >
            <img
              src={Hero}
              alt="hero main"
              className="mb-3"
              style={{ maxWidth: "80%", zIndex: 3 }}
            />
            <img
              src={Hero1}
              alt="hero watch"
              className="mb-3 position-absolute"
              style={{ top: "50%", left: "60%", maxWidth: "40%", zIndex: 2 }}
            />
            <img
              src={Hero2}
              alt="hero star icon"
              className="position-absolute"
              style={{
                bottom: "20%",
                right: "20%",
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
