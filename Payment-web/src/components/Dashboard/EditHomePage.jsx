import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EditHomePage = () => {
  const [sections, setSections] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    id: null,
    heading: "",
    description: "",
    sectionData: "",
  });
  const [dynamicForm, setDynamicForm] = useState([]);
  const modalRef = useRef();

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const res = await axios.post("http://localhost:8989/api/v1/findAllsection");
      if (res.data?.status === "success") {
        const targetIds = [1, 7, 9, 37, 14, 24]; // ✅ Only include these IDs
        const parsedData = res.data.data
          .filter(item => targetIds.includes(Number(item.id))) // ✅ Convert id to number
          .map((item) => {
            let parsedSectionData = [];
            try {
              parsedSectionData = item.sectionData
                ? JSON.parse(item.sectionData)
                : [];
            } catch (err) {
              console.warn("Invalid JSON in sectionData:", item.sectionData);
            }
            return { ...item, sectionData: parsedSectionData };
          });

        setSections(parsedData);
      } else {
        alert("Failed to load sections");
      }
    } catch (err) {
      console.error("Error fetching sections:", err);
    }
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    const section = sections[index];

    const formatted = section.sectionData.map((item, i) => ({
      key: Date.now() + i,
      input1: item.heading || '',
      input2: item.description || '',
    }));

    setDynamicForm(formatted);
    setFormData({ ...section });

    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  const handleInputChange = (index, field, value) => {
    const updatedForm = [...dynamicForm];
    updatedForm[index][field] = value;
    setDynamicForm(updatedForm);
  };

  const handleAddCard = () => {
    setDynamicForm([
      ...dynamicForm,
      { key: Date.now(), input1: "", input2: "" },
    ]);
  };

  const handleRemoveCard = (index) => {
    const updatedForm = [...dynamicForm];
    updatedForm.splice(index, 1);
    setDynamicForm(updatedForm);
  };

  const handleUpdateClick = async () => {
    try {
      const updatedSectionData = dynamicForm.map((item) => ({
        heading: item.input1,
        description: item.input2,
      }));

      const res = await axios.post("http://localhost:8989/api/v1/updatesection", {
        id: formData.id,
        heading: formData.heading,
        description: formData.description,
        sectionData: JSON.stringify(updatedSectionData),
      });

      if (res.data?.status === "success") {
        const updatedSections = [...sections];
        updatedSections[editIndex] = {
          ...formData,
          sectionData: updatedSectionData,
        };
        setSections(updatedSections);

        const modal = window.bootstrap.Modal.getInstance(modalRef.current);
        modal.hide();

        setEditIndex(null);
        setFormData({
          id: null,
          heading: "",
          description: "",
          sectionData: "",
        });
        setDynamicForm([]);

        alert("Section updated successfully!");
      } else {
        alert(res.data.message || "Failed to update section");
      }
    } catch (err) {
      console.error("Error updating section:", err);
      alert("Error updating section.");
    }
  };

  const handleCancel = () => {
    const modal = window.bootstrap.Modal.getInstance(modalRef.current);
    modal.hide();
    setEditIndex(null);
    setFormData({
      id: null,
      heading: "",
      description: "",
      sectionData: "",
    });
    setDynamicForm([]);
  };

  return (
    <div className="container mt-5">
      <h2>Edit Sections</h2>

      <p style={{ textAlign: 'center', fontSize: "33px", color: "#db9b1e", fontWeight: 'bold' }}>This is a  Home Screen</p>
      <div className="container" style={{ display: 'flex', justifyContent: "end" }}>
        <div className="box">
          <div className="col-md-12">


            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Edit Screen
              </button>
              <ul className="dropdown-menu">
                <li>

                  <a className="dropdown-item" style={{ color: "white" }}>Home</a></li>

                <li>   <Link to='/editabout'
                  className="dropdown-item" style={{ color: "white" }}>About</Link></li>


                <li>   <Link to='/editfeature'
                  className="dropdown-item" style={{ color: "white" }}>Feature</Link></li>


                <li>   <Link to='/editpricing'
                  className="dropdown-item" style={{ color: "white" }}>Pricing</Link></li>

                <li>   <Link to='/editcontact'
                  className="dropdown-item" style={{ color: "white" }}>Contact</Link></li>





              </ul>
            </div>

          </div>
        </div>
      </div>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th style={{ textAlign: 'center', fontWeight: 'bold' }}>Heading</th>
            <th style={{ textAlign: 'center', fontWeight: 'bold' }}>Description</th>
            <th style={{ textAlign: 'center', fontWeight: 'bold' }}>Section Data</th>
            <th style={{ textAlign: 'center', fontWeight: 'bold' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section, index) => (
            <tr key={index}>
              <td>{section.heading}</td>
              <td>{section.description}</td>
              <td>
                {Array.isArray(section.sectionData)
                  ? section.sectionData.map((item, i) => (
                    <div key={i}>
                      <strong>{item.heading}</strong>
                      <p style={{ margin: "5px" }}>{item.description}</p>
                    </div>
                  ))
                  : <em>No data</em>}
              </td>
              <td style={{ textAlign: 'center' }}>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEditClick(index)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <div
        className="modal fade"
        ref={modalRef}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Section</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCancel}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label>Heading</label>
                <input
                  type="text"
                  className="form-control"
                  value={formData.heading}
                  onChange={(e) =>
                    setFormData({ ...formData, heading: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label>Description</label>
                <textarea
                  className="form-control"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div className="container">
                <div className="box">
                  <div className="col-md-12" style={{ display: "flex", justifyContent: 'end' }}>
                    <button className="btn btn-success" onClick={handleAddCard}>
                      Add Card
                    </button>
                  </div>
                </div>
              </div>



              <h6>Section Data Cards</h6>
              {dynamicForm.map((item, index) => (
                <div key={item.key} className="border rounded p-3 mb-3">
                  <input
                    type="text"
                    placeholder="Heading"
                    className="form-control mb-2"
                    value={item.input1}
                    onChange={(e) =>
                      handleInputChange(index, "input1", e.target.value)
                    }
                  />
                  <textarea
                    placeholder="Description"
                    className="form-control mb-2"
                    value={item.input2}
                    onChange={(e) =>
                      handleInputChange(index, "input2", e.target.value)
                    }
                  />
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemoveCard(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}

            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handleUpdateClick}
              >
                Update Section
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHomePage;
