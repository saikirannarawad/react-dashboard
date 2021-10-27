import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import Inputmodal from "./Inputmodal";
import Mcqmodal from "./Mcqmodal";
import Popup from "./Popup";
import "./PopupModal.css";

function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="popupmodal__input">
        <input type="button" value="+" onClick={togglePopup} />
      </div>

      {isOpen && (
        <Popup
          content={
            <>
              <b>OPTIONS</b>
              <p className="popupmodal__button">
                <Mcqmodal />
                <Inputmodal />
              </p>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default PopupModal;
