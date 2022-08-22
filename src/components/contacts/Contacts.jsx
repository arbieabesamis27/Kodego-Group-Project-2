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
          <p>
            <address>Seaside Blvd, 123, Pasay, 1300 Metro Manila</address>
          </p>
        </div>
        <div className="contacts-map_info">
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=mall%20of%20asia&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
