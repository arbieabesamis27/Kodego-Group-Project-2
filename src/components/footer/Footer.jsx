import React from "react";
import "./Footer.css";
import logo from "../../assets/MagsLogoWhite.png";
import Container from "../sub-component/modal-container/Container";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="row-item">
          <div className="footer-col">
            <h4>COMPANY INFORMATION</h4>
            <ul className="comp">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>ONLINE SUPPORT </h4>
            <ul className="support">
              <li>
                <a href="#contacts">Customer care </a>
              </li>
              <li>
                <a href="#home">Chat </a>
              </li>
              <li>
                <a href="#contacts">Email Add </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CONTACT US </h4>
            <ul className="contact">
              <li>
                <a href="tel:555-666-7777">45455</a>
              </li>
              <li>
                <a href="tel:555-666-7777">0475586249</a>
              </li>
              <li>
                <a href="#contacts">
                  Seaside Blvd, 123, Pasay, 1300 Metro Manila
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="brand-links">
        <div className="mags-logo">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/">
            <i className="fa-brands fa-linkedin-in"></i>
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
