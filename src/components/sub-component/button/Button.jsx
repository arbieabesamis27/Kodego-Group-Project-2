import React from "react";
import "./Button.css";
import arrow from "../../../assets/arrowup.png";

const Button = () => {
  return (
    <div className="arrowup">
      <a href="#home">
        <img src={arrow} />
      </a>
    </div>
  );
};

export default Button;
