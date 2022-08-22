import React from "react";
import "./Footer.css";
import logo from "../../assets/MagsLogoWhite.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>COMPANY INFORMATION</h4>
            <ul className="comp">
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#">Company Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>ONLINE SUPPORT </h4>
            <ul className="support">
              <li>
                <a href="#">Customer care </a>
              </li>
              <li>
                <a href="#">Chat </a>
              </li>
              <li>
                <a href="#">Email Add </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CONTACT US </h4>
            <ul className="contact">
              <li>
                <a href="">45455</a>
              </li>
              <li>
                <a href="">0475586249</a>
              </li>
              <li>
                <a href="">1531 addresss</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="brand-links">
        <div className="mags-logo">
          <a href="#home">
            <img src={logo} />
          </a>
        </div>
        <div class="social-links">
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        &copy; Mag's Auto Repair Philippines. All rights reserve
      </div>
    </div>
  );
};
export default Footer;

// import React from 'react';
