import "./Mcqmodal.css";
import React, { useState } from "react";
import Popup from "./Popup";
import "./PopupModal.css";

function Mcqmodal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState([{}]);

  // mcq toggle
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;

    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, {}]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mcqmodal">
      <div className="popupmodal__input">
        <input
          type="button"
          value="Mcq"
          onClick={togglePopup}
          className="mcqmodal__input"
        />
      </div>

      {isOpen && (
        <Popup
          content={
            <>
              <div className="mcqmodal__title">
                <h1>Mcq-Modal</h1>
              </div>
              <div className="mcqmodal__form">
                <form>
                  <div className="mcqmodal__formQuestion">
                    <h3>Enter the question </h3>
                    <input type="text" placeholder="Write here" />
                  </div>
                  {formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                      <label>Options</label>
                      <input
                        type="text"
                        name="name"
                        value={element.options}
                        onChange={(e) => handleChange(index, e)}
                      />

                      {index ? (
                        <button
                          type="button"
                          className="button remove"
                          onClick={() => removeFormFields(index)}
                        >
                          Remove
                        </button>
                      ) : null}
                    </div>
                  ))}
                  <div className="button-section">
                    <button
                      className="button add"
                      type="button"
                      onClick={() => addFormFields()}
                    >
                      Add
                    </button>
                    <button className="button submit" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Mcqmodal;
