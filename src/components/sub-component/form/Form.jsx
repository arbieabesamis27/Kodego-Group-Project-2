import React from "react";
import "./Form.css";

export const Form = ({ onSubmit }) => {
  return (
    // <form onSubmit={onSubmit}>
    //   <div className="form-group">
    //     <label htmlFor="name">Name</label>
    //     <input className="form-control" id="name" />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="email">Email address</label>
    //     <input
    //       type="email"
    //       className="form-control"
    //       id="email"
    //       placeholder="name@example.com"
    //     />
    //   </div>
    //   <div className="form-group">
    //     <button className="form-control btn btn-primary" type="submit">
    //       Submit
    //     </button>
    //   </div>
    // </form>
    <div class="container">
      <div class="booking-form">
        <div class="form-header">
          <h1>Book Schedule</h1>
        </div>
        <form onSubmit={onSubmit}>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <span class="form-label">Name</span>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div class="form-group">
                <span class="form-label">Phone</span>
                <input
                  class="form-control"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="col-sm-6"></div>
          </div>

          <div class="form-group">
            <span class="form-label">Location for home service (optional)</span>
            <input
              class="form-control"
              type="text"
              placeholder="Enter ZIP/Location"
            />
          </div>
          <div class="form-group">
            <span class="form-label">Message</span>
            <input
              class="form-control"
              type="text"
              placeholder="Your Message"
            />
          </div>
          <div class="row">
            <div class="col-sm-5">
              <div class="form-group">
                <span class="form-label">Preffered Date/Time</span>
                <input class="form-control" type="date" required />
              </div>
            </div>
            <div class="col-sm-7">
              <div class="row">
                <div class="col-sm-4">
                  <div class="form-group">
                    <span class="form-label">Hour</span>
                    <select class="form-control">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                    <span class="select-arrow"></span>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <span class="form-label">Min</span>
                    <select class="form-control">
                      <option>05</option>
                      <option>10</option>
                      <option>15</option>
                      <option>20</option>
                      <option>25</option>
                      <option>30</option>
                      <option>35</option>
                      <option>40</option>
                      <option>45</option>
                      <option>50</option>
                      <option>55</option>
                    </select>
                    <span class="select-arrow"></span>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <span class="form-label">AM/PM</span>
                    <select class="form-control">
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                    <span class="select-arrow"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-btn">
            <button class="submit-btn">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
