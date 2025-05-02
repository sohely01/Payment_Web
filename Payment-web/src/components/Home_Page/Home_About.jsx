import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Card1 from "../../assets/images/index/about_card_img1.svg";
import Card2 from "../../assets/images/index/about_card_img2.svg";
import { Link } from "react-router-dom";

const Home_About = ({ loading, error, data }) => {
  if (loading) {
    return <div className="text-white text-center py-5">Loading...</div>;
  }

  if (error) {
    return; // <div className="text-danger text-center py-5">Error: {error}</div>;
  }

  const { heading, description } = data || {};
  AOS.init({ duration: 1000 });


  return (
    <div>
      <section className="about">
        <div className="container">
          <div className="row text-md-start text-sm-center text-center">
            {/* Left Content */}
            <div className="col-md-6 d-flex justify-content-between">
              <div className="ab_card1" data-aos="flip-left">
                <h3 className="mb-3">
                  {heading || "Loading Heading..."}
                </h3>
                <p className="mb-4" style={{ maxWidth: "500px", color: "white", fontSize: "16px" }}>
                  {description || "Loading description..."}
                </p>
                <div className="d-flex align-items-center justify-content-lg-start justify-content-md-center justify-content-center">
                  <Link to='/about'
                    className="btn-hover1">
                    Learn More
                  </Link>
                  <div className="abut-video">
                    <a className="video-play-button" href="#">
                      <span className="fa-solid fa-play"></span>
                    </a>
                  </div>
                  <div className="p-f-s w-v">Watch Video</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-md-6 d-flex justify-content-center mt-md-0 mt-sm-3 mt-3">
              <div className="ab_card2 d-flex flex-column justify-content-between" data-aos="flip-right">
                <div>
                  <div className="row gap-md-0 gap-sm-3 gap-3">
                    <div className="col-md-5 col-sm-12 col-12">
                      <div className="d-flex justify-content-md-start justify-content-sm-center justify-content-center">
                        <h3 className="count">38</h3>
                        <h3>M+</h3>
                      </div>
                      <p className="p-f-s">Businesses have already joined us!</p>
                    </div>
                    <div className="col-2 p-0 d-flex justify-content-center align-items-center">
                      <hr />
                    </div>
                    <div className="col-md-5 col-sm-12 col-12 p-0">
                      <h3>0%</h3>
                      <p className="p-f-s">Zero percent fee on any transaction.</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex mb-3 mt-4 gap-4 justify-content-md-start justify-content-ms-center justify-content-center">
                  <div className="position-relative">
                    <img src={Card1} alt="about_img1" />
                    <img src={Card2} alt="about_img2" />
                  </div>
                  <div className="ps-2">
                    <span>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    <p>So many people like this service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home_About;
