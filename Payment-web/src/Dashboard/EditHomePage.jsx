import React, { useState } from 'react';

const EditHomePage = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: 'EMPOWER YOUR FINANCES',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      title: 'GROW YOUR SAVINGS',
      description:
        'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setFormData({ ...sections[index] });
  };

  const handleUpdateClick = () => {
    const updatedSections = [...sections];
    updatedSections[editIndex] = formData;
    setSections(updatedSections);
    setEditIndex(null);
  };

  const handleCancelClick = () => {
    setFormData({ title: '', description: '' });
    setEditIndex(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (

 <div>
    <div className="container">
        <div className="box_edit">
            <div className="col-md-6">
            <div className="p-4 max-w-3xl mx-auto bg-white shadow-md rounded-md">
      {sections.map((section, index) => (
        <div key={section.id} className="mb-8 border-b pb-4">
          {editIndex === index ? (
            <>
              <div className="mb-4">
                <label className="block font-medium">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border p-2 w-full rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium">Description:</label>
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
                  className="text-white px-4 py-2 rounded"
                  style={{ backgroundColor: 'black' }}
                >
                  Update
                </button>
                <button
                  onClick={handleCancelClick}
                  className="text-white px-4 py-2 rounded"
                  style={{ backgroundColor: 'black' }}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold">{section.title}</h2>
              <p className="text-gray-700 mb-2">{section.description}</p>
              <button
                onClick={() => handleEditClick(index)}
                className="text-white px-4 py-2 rounded"
                style={{ backgroundColor: 'black' }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
            </div>
        </div>
    </div>
 
    </div>
  );
};

export default EditHomePage;

