import React from "react";
import "./Services.css";

// Images
import logo1 from "./images/nut.png";
import logo2 from "./images/drop.png";
import logo3 from "./images/inspection.png";
import logo4 from "./images/lightning.png";
import logo5 from "./images/AnC.png";
import logo6 from "./images/engine.png";

const Services = () => {
  return (
    <div className="servicesContainer">
      <div className="wrapper container d-flex flex-column justify-content-center align-items-center">
        <h1 className="servicesTitle">Services</h1>

        <div className="servicesItem container">
          <div className="item1 group">
            <img src={logo1} alt="logo" />
            <div className="item_overlay">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="./contacts" className="item_link">
                Book an Appointment
              </a>
            </div>

            <p className="title">General Repair</p>
          </div>

          <div className="item2 group">
            <img src={logo2} alt="logo" />
            <div className="item_overlay">
              <p className="description">
                Oil is the lifeblood of your engine. It reduces friction,
                lessens wear, provides lubrication, forms a seal between the
                pistons, rings and cylinder walls while helping to cool engine
                parts.
              </p>
              <a href="./contacts" className="item_link">
                Book an Appointment
              </a>
            </div>

            <p className="title">Oil Change</p>
          </div>

          <div className="item3 group">
            <img src={logo3} alt="logo" />
            <div className="item_overlay">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="./contacts" className="item_link">
                Book an Appointment
              </a>
            </div>

            <p className="title">Nys Inspection</p>
          </div>

          <div className="item4 group">
            <img src={logo4} alt="logo" />
            <div className="item_overlay">
              <p className="description">
                Mag's-trained professionals can test your car battery and
                replace it if necessary with a battery from leading brands.
              </p>
              <a href="./contacts" className="item_link">
                Book an Appointment
              </a>
            </div>

            <p className="title">Battery, Alternator, Starter Replacement</p>
          </div>

          <div className="item5 group">
            <img src={logo5} alt="logo" />
            <div className="item_overlay">
              <p className="description">
                Car AC systems have components that require love and attention
                to avoid drying out and cracking. The car heater also needs
                regular check-ups to make sure there are no leaky valves or
                blockages.
              </p>
              <a href="./contacts" className="item_link">
                Book an Appointment
              </a>
            </div>

            <p className="title">A/C Repairs</p>
          </div>

          <div className="item6 group">
            <img src={logo6} alt="logo" />
            <div className="item_overlay">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="./contacts" className="item_link">
                Book an Appointment
              </a>
            </div>

            <p className="title">Engine Work</p>
          </div>
        </div>

        <div className="moreServices">
          <h3 className="moreServicesTitle">MORE SERVICES</h3>
          <ul className="moreServicesList">
            <li>
              <p>Automotive Collision Repair</p>
            </li>
            <li>
              <p>Automotive Painting</p>
            </li>
            <li>
              <p>Automotive Diagnosis</p>
            </li>
            <li>
              <p>Rental Car Assistance</p>
            </li>
            <li>
              <p>Mechanical and Body Work</p>
            </li>
            <li>
              <p>24/7 Towing Service</p>
            </li>
            <li>
              <p>Wheel Alignment</p>
            </li>
            <li>
              <p>Brake Pads Replacement</p>
            </li>
            <li>
              <p>Exhaust and Muffler Repair</p>
            </li>
          </ul>
        </div>
        {/* <button className='btnAppointment'>Book your Car Appointment</button> */}
      </div>
    </div>
  );
};

export default Services;
