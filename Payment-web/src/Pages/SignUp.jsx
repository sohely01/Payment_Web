import React from "react";
import Logo from "../assets/images/stan.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Logo1 from '../assets/images/logo_1.svg'
import Logo2 from '../assets/images/logo_2.svg'
import Logo3 from '../assets/images/logo_3.svg'
import { FaCheckCircle } from "react-icons/fa";




const SignUp = () => {

  const features = [
    "Accept payments via 150+ modes",
    "Plug & play APIs",
    "Quick onboarding",
    "Dedicated relationship manager",
    "24x7 technical support",
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

          <h3 className="g" style={{ display: 'flex', justifyContent: 'center', color: 'white', fontSize: "16px" }}>Why Choose Easebuzz Payment Solution?
          </h3>

          <div className="mt-4">
            <ul
              className="list-unstyled d-flex flex-column align-items-center"
              style={{ gap: "12px", marginTop: "20px" }}
            >
              {features.map((item, index) => (
                <li
                  key={index}
                  className="d-flex align-items-center"
                  style={{ color: "white", fontSize: "16px" }}
                >
                  <FaCheckCircle className="me-2" color="green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="tokenCarousel" className="carousel slide" data-bs-ride="carousel">


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
          <div className="d-flex align-items-center my-4">
            <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }}></div>
            <h4 className="mx-3 mb-0" style={{ color: 'white', marginTop: '5px' }}>Need help? Contact us</h4>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'black' }}></div>
          </div>

          <div className="info d-flex justify-content-between align-items-center my-4 px-3">
            {/* Left Side - Phone */}
            <div className="d-flex align-items-center gap-2">
              <FaPhoneAlt style={{ color: 'black' }} />
              <span className="s" style={{ color: 'white' }}>18008918297 (Toll-Free)</span>
            </div>

            {/* Right Side - Email */}
            <div className="d-flex align-items-center gap-2">
              <FaEnvelope style={{ color: 'black' }} />
              <span className="a" style={{ color: 'white' }}>support@easebuzz.in</span>
            </div>
          </div>

        </div>

        {/* Right Section */}
        <div
          className="col-md-8 d-flex justify-content-center"
          style={{
            backgroundColor: "#fff",
            minHeight: "100vh",
            paddingTop: "40px", // pushes the form from the top
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
                Sign Up
              </h1>
            </div>

            <form>
              <div className="mb-4">
                <label
                  htmlFor="brandName"
                  className="form-label"
                  style={{ fontSize: "16px" }}
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  id="brandName"
                  placeholder="Enter your brand name"
                  style={{ border: "1px solid gray" }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontSize: "16px" }}
                >
                  Business Email ID
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your business email"
                  style={{ border: "1px solid gray" }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="form-label"
                  style={{ fontSize: "16px" }}
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  style={{ border: "1px solid gray" }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="form-label"
                  style={{ fontSize: "16px" }}
                >
                  Create Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Create a password"
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
                    marginTop: '15px'
                  }}
                >
                  SEND OTP
                </button>
              </div>
            </form>

            <div className="text-center mb-3" style={{ fontSize: "16px" }}>
              or
            </div>

            <button
              className="btn btn-light w-100 border d-flex align-items-center justify-content-center gap-2"
              style={{
                borderRadius: "12px",
                height: "40px",
              }}
            >
              <FontAwesomeIcon icon={faGoogle} />
              Continue with Google
            </button>

            <p className="login mt-5" style={{ fontSize: "12px" }}>
              Already have an account?
              <Link to="/login">
                <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                  {" "}
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
