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
          <p>Email: magsautorepairshop@hotmail.com</p>
        </div>
        {/* <div className="contacts-map_info">
          <div class="mapouter">
            <div class="gmap_canvas">
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
              <a href="https://123movies-to.org">123movies</a>
              <br />
              <a href="https://www.embedgooglemap.net">google map embed</a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Contacts;
