import React, { useState, useRef } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setFirstName("");
    setNumber("");
    setMessage("");
    setLocation("");
    setDate("");

    emailjs
      .sendForm(
        "service_qbnsjdd",
        "template_lv21t0j",
        form.current,
        "VGt8PiRU6p8KqQoeK"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container">
      <div className="booking-form">
        <div className="form-header">
          <h1>Book Schedule</h1>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <span class="form-label">Name</span>

                <input
                  className="form-control"
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  onChange={(event) => setFirstName(event.target.value)}
                  value={firstName}
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <span className="form-label">Phone</span>
                <input
                  className="form-control"
                  type="tel"
                  name="user_number"
                  placeholder="Enter your phone number"
                  onChange={(event) => setNumber(event.target.value)}
                  value={number}
                />
              </div>
            </div>
            <div className="col-sm-6"></div>
          </div>

          <div className="form-group">
            <span className="form-label">
              Location for home service (optional)
            </span>
            <input
              className="form-control"
              type="text"
              name="user_location"
              placeholder="Enter ZIP/Location"
              onChange={(event) => setLocation(event.target.value)}
              value={location}
            />
          </div>
          <div className="form-group">
            <span className="form-label">Message</span>
            <input
              className="form-control"
              type="text"
              placeholder="Your Message"
              name="message"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
          </div>

          <div class="row">
            <div class="col-sm-5">
              <div class="form-group">
                <span class="form-label">Preffered Date/Time</span>
                <input
                  class="form-control"
                  type="date"
                  name="user_date"
                  onChange={(event) => setDate(event.target.value)}
                  value={date}
                  required
                />
              </div>
            </div>
            <div className="col-sm-7">
              <div className="row">
                <div className="col-sm-4">
                  <div className="form-group">
                    <span className="form-label">Hour</span>
                    <select className="form-control">
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
                    <span className="select-arrow"></span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <span className="form-label">Min</span>
                    <select className="form-control">
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
                    <span className="select-arrow"></span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <span className="form-label">AM/PM</span>
                    <select className="form-control">
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                    <span className="select-arrow"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-btn">
            <button className="submit-btn">Book Now!</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
