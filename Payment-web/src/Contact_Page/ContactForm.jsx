import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    mobilenumber: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData); // Log form data before submitting

    try {
      const response = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status); // Log response status

      const result = await response.json();
      console.log("Response result:", result); // Log response data

      if (response.ok) {
        console.log("Form submission successful!"); // Log success
        setStatus("Message submitted successfully!");
        setFormData({
          firstname: "",
          email: "",
          mobilenumber: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Error from server:", result.error); // Log error from backend
        setStatus("Error: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Submission error:", error); // Log any catch block errors
      setStatus("An error occurred while submitting the form.");
    }
  };
  return (
    <div>
      <section className="d-flex justify-content-center">
        <div className="help position-relative">
          <div className="container">
            <div className="row d-flex gap-lg-5 gap-md-3 gap-sm-4 gap-3 justify-content-center">
              {/* Left Side */}
              <div
                className="col-lg-5 col-md-5 help-crd1"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
             style={{padding:'20px'}} >
                <h4>HOW CAN WE HELP?</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  assumenda eligendi debitis sunt sequi tempora corporis, sed id
                  animi eveniet.
                </p>
                <div className="d-flex gap-4 align-items-center">
                  <i className="fa-solid fa-house"></i>
                  <span>Plaza X, XY Floor, XYZ Street</span>
                </div>
                <div className="d-flex gap-4 align-items-center">
                  <i className="fa-solid fa-phone"></i>
                  <span>+123-456-7890</span>
                </div>
                <div className="d-flex gap-4 align-items-center">
                  <i className="fa-solid fa-envelope"></i>
                  <span>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </span>
                </div>
                <h5>OPERATING HOURS</h5>
                <div className="d-flex gap-4 align-items-center">
                  <i className="fa-solid fa-clock"></i>
                  <span>
                    Monday To Friday <br /> 8:00am to 8:00pm AEDT
                  </span>
                </div>
              </div>

              {/* Right Side - Form */}
              <div
                className="col-lg-5 col-md-5 contact-email"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                style={{padding:'20px'}} >
                <h4>EMAIL US</h4>
                <form id="footer-sub" onSubmit={handleSubmit}>
                  <div className="row justify-content-center gap-3">
                    <input
                      type="text"
                      name="firstname"
                      id="name"
                      value={formData.firstname}
                      onChange={handleChange}
                      className="col-md-5 col-sm-12 col-12"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="col-md-5 col-sm-12 col-12"
                      placeholder="Email Address"
                      required
                    />
                    <input
                      type="number"
                      name="mobilenumber"
                      id="number"
                      value={formData.mobilenumber}
                      onChange={handleChange}
                      className="col-md-5 col-sm-12 col-12"
                      placeholder="Phone Number"
                      required
                    />
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="col-md-5 col-sm-12 col-12"
                      placeholder="Subject"
                      required
                    />
                    <textarea
                      className="col-md-12"
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      cols="30"
                      rows="10"
                      placeholder="Write your message here"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    <button className="e-btn btn-hover1" type="submit">
                      Submit
                    </button>
                  </div>
                  {status && <p>{status}</p>}

                </form>
              </div>

              <div id="Succes-box"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
