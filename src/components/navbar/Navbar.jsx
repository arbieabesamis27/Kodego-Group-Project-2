import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/MagsLogo - Desktop.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">home</a>
    </p>
    <p>
      <a href="#about">about us</a>
    </p>
    <p>
      <a href="#services">services</a>
    </p>
    <p>
      <a href="#contacts">contacts</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <a href="#home">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-book">
        <button type="button">Book Schedule</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#020202"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#020202"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container shadow-drop-tr">
            <div className="navbar-menu_container-links ">
              <Menu />
              <div className="navbar-menu_container-links-book">
                <button type="button">Book Schedule</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
