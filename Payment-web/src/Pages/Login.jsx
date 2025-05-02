import React from "react";
import Logo from '../assets/images/stan.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Logo1 from '../assets/images/logo_1.svg'
import Logo2 from '../assets/images/logo_2.svg'
import Logo3 from '../assets/images/logo_3.svg'


const Login = () => {
  const carouselData = [
    {
      img: Logo1,
      title: "Card Tokenization",
      description:
        "Card tokenization will encrypt and replace sensitive data such as 16-digit card numbers, names, expiry dates, and security codes with a ‘token’.",
    },
    {
      img: Logo2,
      title: "Bulk Penny drop",
      description:
        "Now trigger multiple Penny drop requests by bulk uploading Excel workbook",
    },
    {
      img: Logo3,
      title: "EasyCollect on Excel",
      description:
        "EasyCollect is now available as Excel plugin to easily manage and share payment links",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row" style={{ minHeight: "100vh" }}>
        {/* Left Section */}
        <div
          className="col-md-4 d-none d-md-block"
          style={{
            backgroundColor: "#091B49",
            minHeight: "100vh",
          }}
        >
          <h1 className="nm" style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>Stanpe</h1>

          <h3 className="g" style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>What's New</h3>


          <div id="tokenCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselData.map((item, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="d-flex flex-column align-items-center justify-content-center text-center p-4">
                    <img
                      src={item.img}
                      // alt={item.title}
                      style={{ width: "137px", height: "164px", marginBottom: "20px" }}
                    />
                    <h3 style={{ fontWeight: "bold", color: 'white', marginTop: '5px' }}>{item.title}</h3>
                    <p style={{ maxWidth: "500px", color: 'white', marginTop: '5px', fontSize: '16px', fontWeight: '400' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls (optional) */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#tokenCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" />
              <span className="visually-hidden" style={{ color: 'white' }}>Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#tokenCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" />
              <span className="visually-hidden" style={{ color: 'white' }}>Next</span>
            </button>
          </div>

        </div>

        {/* Right Section */}
        <div
          className="col-md-8 d-flex justify-content-center"
          style={{
            backgroundColor: "#fff",
            minHeight: "100vh",
            paddingTop: "40px", // This pushes the form down from top
          }}
        >
          <div
            className="p-4"
            style={{
              width: "90%",
              maxWidth: "500px",
              borderRadius: "12px",
            }}
          >
            <div className="text-center mb-4 signINBTN">
              <h1
                style={{
                  fontSize: "32px",
                  color: "black",
                  fontFamily: "sans-serif",
                }}
              >
                Login
              </h1>
              <p style={{ fontSize: "16px" }}>
                Use your Stanpe credentials to login.
              </p>
            </div>

            <form>
              <div className="mb-4 mt-5">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontSize: "16px" }}
                >
                  Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  style={{ border: "1px solid gray" }}
                />
              </div>

              <div className="mb-4 mt-3">
                <label
                  htmlFor="password"
                  className="form-label"
                  style={{ fontSize: "16px" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  style={{ border: "1px solid gray" }}
                />
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{
                    borderRadius: "12px",
                    height: "40px",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </button>
              </div>
            </form>

            <p className="login mt-5" style={{ fontSize: "12px" }}>
              Don’t have an account with Stanpe?
              <Link to="/signup">
                <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                  {" "}
                  Sign Up
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
