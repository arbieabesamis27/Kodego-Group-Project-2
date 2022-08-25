import React from "react";
import "./Contacts.css";
import logo from "../../assets/MagsLogoWhite.png";

export const Contacts = () => {
  return (
    <div id="contacts" className="contacts-container">
      <div className="contacts-container_header">
        <h1>Contacts</h1>
      </div>
      <div className="contacts-container_info">
        <div className="contacts-text_info">
          <img src={logo} />
          <p>Tel: 912-345-6789</p>
          <p>Tel: 0123-4567</p>
          <p>Email: magsautorepairshop@hotmail.com.</p>

          <address>Seaside Blvd, 123, Pasay, 1300 Metro Manila</address>
        </div>
        <div className="contacts-map_info">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.0945144309394!2d120.9776035147884!3d14.536586089843286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cbfb106ffac5%3A0x344ead3613febe20!2s123%20Seaside%20Blvd%2C%20Pasay%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1661306076398!5m2!1sen!2sph"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
