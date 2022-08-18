import React from "react";
import "./Cta.css";

const Cta = ({ buttonRef, showModal }) => {
  return (
    <div>
      <button ref={buttonRef} onClick={showModal}>
        Book Schedule
      </button>
    </div>
  );
};

export default Cta;
