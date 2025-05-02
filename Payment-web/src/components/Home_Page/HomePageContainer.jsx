// HomePageContainer.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../../assets/images/index/hero.png";
import Hero1 from "../../assets/images/index/hero_watch.png";
import Hero2 from "../../assets/images/icon/hero_star.png";
import { Link } from "react-router-dom";

const Home_Hero = ({ sections = [] }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { title, description } = sections[0] || {};

  return (
    <section className="hero py-5 bg-light">
      <div className="container">
        <div className="row text-md-start text-center align-items-center">
          <div
            data-aos="fade-up"
            className="col-md-6 d-flex flex-column align-items-md-start align-items-center justify-content-center mb-4 mb-md-0"
          >
            <h1 className="mb-3">{title || "Default Title"}</h1>
            <p className="mb-4" style={{ maxWidth: "500px" }}>
              {description || "Default description..."}
            </p>
            <Link to='/about'
              className="btn btn-primary btn-hover1">
              Get the Card
            </Link>
          </div>

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

const EditHomePage = ({ sections, setSections }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setFormData({ ...sections[index] });
  };

  const handleUpdateClick = () => {
    if (editIndex === null) return;
    const updated = [...sections];
    updated[editIndex] = formData;
    setSections(updated);
    setEditIndex(null);
  };

  const handleCancelClick = () => {
    setEditIndex(null);
    setFormData({ title: "", description: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white shadow-md rounded-md mt-5">
      {sections.map((section, index) => (
        <div key={section.id || index} className="mb-8 border-b pb-4">
          {editIndex === index ? (
            <>
              <div className="mb-4">
                <label className="block font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleUpdateClick}
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={handleCancelClick}
                  className="bg-gray-300 text-black px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mb-2">{section.title}</h2>
              <p className="text-gray-700 mb-2">{section.description}</p>
              <button
                onClick={() => handleEditClick(index)}
                className="bg-black text-white px-4 py-2 rounded"
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const HomePageContainer = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "EMPOWER YOUR FINANCES",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ]);

  return (
    <>
      <Home_Hero sections={sections} />
      <EditHomePage sections={sections} setSections={setSections} />
    </>
  );
};

export default HomePageContainer;
