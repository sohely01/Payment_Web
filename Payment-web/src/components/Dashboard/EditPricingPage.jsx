import React, { useState } from 'react';

const EditPricingPage = () => {
  const [dynamicForm, setDynamicForm] = useState([]);

  const handleAddClick = () => {
    setDynamicForm((prev) => [
      ...prev,
      { key: Date.now(), input1: '', input2: '' },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedForm = [...dynamicForm];
    updatedForm[index][field] = value;
    setDynamicForm(updatedForm);
  };

  const handleSaveChanges = () => {
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div className="modal fade" tabIndex="-1" id="exampleModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>

            <div className="border m-2 p-2">
              <div className="d-flex justify-content-between">
                <label className="mb-3">Section Data</label>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleAddClick}
                >
                  Add
                </button>
              </div>

              {dynamicForm.map((item, i) => (
                <div key={item.key} className="mb-3 mt-3 me-2 ms-2">
                  <input
                    className="m-1 p-1 form-control"
                    type="text"
                    placeholder={`Input 1 - ${i + 1}`}
                    value={item.input1}
                    onChange={(e) =>
                      handleInputChange(i, 'input1', e.target.value)
                    }
                  />
                  <input
                    className="m-1 p-1 form-control"
                    type="text"
                    placeholder={`Input 2 - ${i + 1}`}
                    value={item.input2}
                    onChange={(e) =>
                      handleInputChange(i, 'input2', e.target.value)
                    }
                  />
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSaveChanges}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPricingPage;
