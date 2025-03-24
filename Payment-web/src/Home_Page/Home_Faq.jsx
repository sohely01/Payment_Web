import React, { useState } from 'react';

const faqData = [
  {
    question: 'How does microfinancing work?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam possimus minima, saepe praesentium expedita non error...',
  },
  {
    question: 'What types of businesses are eligible for this service?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit perferendis quibusdam tempore...',
  },
  {
    question: 'How long does it take to receive funds?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus ullam ab consequuntur assumenda nisi...',
  },
  {
    question: 'How can I contact with support?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium molestias illo quisquam esse...',
  },
];

const Home_Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="question">
      <div className="container">
        <div className="row">
          <div
            className="question-text col-lg-6 col-md-6 tab-center"
            data-aos="fade-up"
          >
            <h2 className="text-lg-start text-md-start text-sm-center text-center">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-lg-start text-md-start text-sm-center text-center mt-md-3 mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              deleniti harum sint porro atque!
            </p>
            <div className="text-lg-start text-md-start text-sm-center text-center ">
              <a className="btn-hover1" href="/faq">
                More FAQs
              </a>
            </div>
          </div>

          <div
            className="question-collapes col-lg-6 col-md-6 mt-md-0 mt-sm-3 mt-3"
            data-aos="zoom-in"
          >
            <div className="accordion" id="accordionExample">
              {faqData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h5 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${
                        openIndex === index ? '' : 'collapsed'
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.question}
                    </button>
                  </h5>
                  <div
                    className={`accordion-collapse collapse ${
                      openIndex === index ? 'show' : ''
                    }`}
                  >
                    <div className="accordion-body">
                      <p>{item.answer}</p>
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

export default Home_Faq;
