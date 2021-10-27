// import "./Mcqmodal.css";
import "./Inputmodal.css";
import React, { useState } from "react";
import Popup from "./Popup";
import "./PopupModal.css";

function Inputmodal() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="inputmodal">
      <div className="popupmodal__input">
        <input
          type="button"
          value="Input"
          onClick={togglePopup}
          className="mcqmodal__input"
        />
      </div>

      {isOpen && (
        <Popup
          content={
            <>
              <b>OPTIONS</b>
              <p className="popupmodal__button">
                <div className="mcqmodal__formQuestion">
                  <h3>Enter the question </h3>
                  <input type="text" placeholder="Write here" />
                </div>
                <div className="button-section">
                  <button className="button submit" type="submit">
                    Submit
                  </button>
                </div>
              </p>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Inputmodal;
