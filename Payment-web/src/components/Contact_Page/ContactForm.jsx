import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = ({ loading, error, data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const { heading, description, sectionData } = data || {};

  // Parse sectionData safely
  let parsedSectionData = [];
  try {
    parsedSectionData = typeof sectionData === "string" ? JSON.parse(sectionData) : sectionData || [];
  } catch (error) {
    console.error("Error parsing sectionData:", error);
  }

  if (loading) {
    return <div className="text-white text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-danger text-center py-5">Error: {error}</div>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("http://localhost:8989/api/v1/addmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Error: " + (result.error || "Unknown server error"));
      }
    } catch (error) {
      setStatus("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="d-flex justify-content-center">
      <div className="help position-relative w-100">
        <div className="container">
          <div className="row d-flex gap-lg-5 gap-md-3 gap-sm-4 gap-3 justify-content-center">

            {/* Left Side - Contact Info */}
            <div
              className="col-lg-5 col-md-5 help-crd1"
              data-aos="fade-down"
              style={{ padding: "20px" }}
            >
              <h4 style={{ fontSize: "22px", fontWeight: "700" }}>{heading}</h4>
              <p className="fv" style={{ fontSize: "16px" }}>{description}</p>

              {/* Dynamic sectionData Mapping */}
              {Array.isArray(parsedSectionData) && parsedSectionData.length > 0 && (
                <div className="d-flex flex-column gap-3">
                  {parsedSectionData.map((item, index) => (
                    <div key={index} className="d-flex gap-4 align-items-center">
                      {index === 0 && <i className="fa-solid fa-house"></i>}
                      {index === 1 && <i className="fa-solid fa-phone"></i>}
                      {index === 2 && <i className="fa-solid fa-envelope"></i>}
                      <span>
                        {index === 2 ? (
                          <a href={`${item.description}`} style={{ color: "white" }}>
                            {item.description}
                          </a>
                        ) : (
                          item.description
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Static Operating Hours */}
              <h5 className="mt-4">OPERATING HOURS</h5>
              <div className="d-flex gap-4 align-items-center">
                <i className="fa-solid fa-clock"></i>
                <span>
                  Monday to Friday <br /> 8:00am to 8:00pm
                </span>
              </div>
            </div>

            {/* Right Side - Form */}
            <div
              className="col-lg-5 col-md-5 contact-email"
              data-aos="fade-down"
              style={{ padding: "20px" }}
            >
              <h4>EMAIL US</h4>
              <form id="footer-sub" onSubmit={handleSubmit}>
                <div className="row gap-3">
                  <div className="col-md-5 col-sm-12">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-5 col-sm-12">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-5 col-sm-12">
                    <input
                      type="number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-5 col-sm-12">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                      className="form-control"
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here"
                      rows="5"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <button className="e-btn btn-hover1" type="submit">
                    Submit
                  </button>
                </div>

                {status && (
                  <p
                    className="text-center mt-3"
                    style={{ color: status.includes("successfully") ? "green" : "red" }}
                  >
                    {status}
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
