import React from "react";
import Container from "../sub-component/modal-container/Container";
import "./Services.css";

// Images
import logo1 from '../../assets/servicesLogo/nut.png'
import logo2 from '../../assets/servicesLogo/drop.png'
import logo3 from '../../assets/servicesLogo/inspection.png'
import logo4 from '../../assets/servicesLogo/lightning.png'
import logo5 from '../../assets/servicesLogo/AnC.png'
import logo6 from '../../assets/servicesLogo/engine.png'

const Services = () => {

  const onSubmit = (event) => {
    event.preventDefault(event);
  };

  return (
    <div id="services" className="servicesContainer">
      <div className="wrapper container d-flex flex-column justify-content-center align-items-center">
        <h1 className="servicesTitle">Services</h1>

        <div className="servicesItem container">
          <div className="item1 group">
            <img src={logo1} alt="logo" />
            <div className="item_overlay">
              <p className="description">
              Our general repair service team is always ready to attend to your needs, whether your car is in our dealerships, or it’s an emergency that happened on the road.
              </p>
            <div className="header-container_heading-book slide-in-bottom">
              <Container onSubmit={onSubmit} />
            </div>

            </div>
              <p className="title">General Repair</p>
          </div>

          <div className="item2 group">
            <img src={logo2} alt="logo" />
            <div className="item_overlay">
              <p className="description">
                Oil is the lifeblood of your engine. It reduces friction,
                lessens wear, forms a seal, rings and 
                cylinder walls while helping to cool engine parts.
              </p>

              <div className="header-container_heading-book slide-in-bottom">
                <Container onSubmit={onSubmit} />
              </div>

            </div>
              <p className="title">Oil Change</p>
          </div>

          <div className="item3 group">
            <img src={logo3} alt="logo" />
            <div className="item_overlay">
              <p className="description">
              Maintenance inspections can identify minor issues before they turn into costly repairs.
              </p>

            <div className="header-container_heading-book slide-in-bottom">
              <Container onSubmit={onSubmit} />
            </div>

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

            <div className="header-container_heading-book slide-in-bottom">
              <Container onSubmit={onSubmit} />
            </div>

            </div>
              <p className="title">Battery, Alternator, Starter Replacement</p>
          </div>

          <div className="item5 group">
            <img src={logo5} alt="logo" />
            <div className="item_overlay">
              <p className="description">
                Car AC systems have components that require love and attention
                to avoid drying out and cracking.
              </p>

              <div className="header-container_heading-book slide-in-bottom">
                <Container onSubmit={onSubmit} />
              </div>

            </div>
              <p className="title">A/C Repairs</p>
          </div>

          <div className="item6 group">
            <img src={logo6} alt="logo" />
            <div className="item_overlay">
              <p className="description">
              Checking lights, tyres, exhaust and operations of brakes and steering. Ensuring your engine is 'tuned' to run in its peak condition.
              </p>
              
              <div className="header-container_heading-book slide-in-bottom">
                <Container onSubmit={onSubmit} />
              </div>

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
