import React from "react";
import Container from "../sub-component/modal-container/Container";
import "./Header.css";

const onSubmit = (event) => {
  event.preventDefault(event);
};

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container_hero-image">
        <div className="header-container_heading ">
          <div className="header-container_heading-text text-focus-in">
            <h1>Top service is our motive.</h1>
            <p>Because you deserve the best.</p>
          </div>
          <div className="header-container_heading-book slide-in-bottom">
            <Container onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
