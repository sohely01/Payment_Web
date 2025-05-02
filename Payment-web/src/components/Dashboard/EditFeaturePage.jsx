import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const EditFeaturePage = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      heading: "Feature One",
      description: "Description for feature one",
      sectionData: "Extra section data here",
    },
    {
      id: 2,
      heading: "Feature Two",
      description: "Description for feature two",
      sectionData: "Extra section data here too",
    },
  ]);

  const [editingSection, setEditingSection] = useState(null);
  const [editedHeading, setEditedHeading] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const modalRef = useRef(null);

  const handleEdit = (index) => {
    const section = sections[index];
    setEditingSection({ ...section, index });
    setEditedHeading(section.heading);
    setEditedDescription(section.description);

    // Show the modal
    const modal = new window.bootstrap.Modal(modalRef.current);
    modal.show();
  };

  const handleSave = () => {
    if (editingSection !== null) {
      const updatedSections = [...sections];
      updatedSections[editingSection.index] = {
        ...editingSection,
        heading: editedHeading,
        description: editedDescription,
      };
      setSections(updatedSections);
    }

    // Close modal manually
    const modal = window.bootstrap.Modal.getInstance(modalRef.current);
    modal.hide();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto shadow rounded" style={{ border: "1px solid black" }}>
        <table className="min-w-full border border-gray-300 border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 border text-left">Heading</th>
              <th className="px-6 py-3 border text-left">Description</th>
              <th className="px-6 py-3 border text-left">Section Data</th>
              <th className="px-6 py-3 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section, idx) => (
              <tr key={section.id}>
                <td className="px-6 py-4 border">{section.heading}</td>
                <td className="px-6 py-4 border">{section.description}</td>
                <td className="px-6 py-4 border">{section.sectionData}</td>
                <td className="px-6 py-4 border flex justify-center">
                  <button
                    onClick={() => handleEdit(idx)}
                    className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <div className="modal fade" id="editModal" tabIndex="-1" aria-hidden="true" ref={modalRef}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Section</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: 'bold' }}>Heading</label>
                <input
                  type="text"
                  className="form-control"
                  value={editedHeading}
                  onChange={(e) => setEditedHeading(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: 'bold' }}>Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button className="btn btn-primary" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFeaturePage;
