import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingFaq = ({ loading, error, data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { heading, description } = data || {};

  let parsedSectionData = [];

  try {
    const rawData =
      typeof data?.sectionData === "string"
        ? JSON.parse(data.sectionData)
        : data?.sectionData;

    parsedSectionData = Array.isArray(rawData) ? rawData : [];
  } catch (error) {
    console.error("Error parsing sectionData:", error);
    parsedSectionData = [];
  }


  if (loading) {
    return <div className="text-white text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-danger text-center py-5">Error: {error}</div>;
  }

  return (
    <section className="question">
      <div className="container">
        <div className="row">
          <div
            className="question-text col-lg-6 col-md-6 tab-center"
            data-aos="fade-up"
          >
            <h1 className="text-lg-start text-md-start text-sm-center text-center">
              {heading}
            </h1>
            <p
              className="text-lg-start text-md-start text-sm-center text-center mt-md-3 mt-3"
              style={{ fontSize: "18px" }}
            >
              {description}
            </p>
            {/* <div className="text-lg-start text-md-start text-sm-center text-center ">
              <a className="btn-hover1" href="/faq">
                More FAQs
              </a>
            </div> */}
          </div>

          <div
            className="question-collapes col-lg-6 col-md-6 mt-md-0 mt-sm-3 mt-3"
            data-aos="zoom-in"
          >
            <div className="accordion" id="accordionExample">
              {parsedSectionData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h5 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                      onClick={() => toggleAccordion(index)}
                      style={{ fontSize: "16px", fontWeight: "600" }}>
                      {item.heading}
                    </button>
                  </h5>
                  <div
                    className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
                  >
                    <div className="accordion-body">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFaq;
