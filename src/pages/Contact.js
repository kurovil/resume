import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contactpage">
        <h1>Contact</h1>
        <p>Looking Forward to hearing from you</p>
        <div className="contactbody">
          <div className="mycontact">
            <div className="contact">
              <h3>Phone</h3>
              <p>0878-7462-9353</p>
            </div>
            <div className="contact">
              <h3>Email</h3>
              <p>rafligunawan000@gmail.com</p>
            </div>
          </div>
          <div className="send">
            <div className="inputname">
              <div className="form">
                <label>First Name</label>
                <input />
              </div>
              <div className="form">
                <label>Last Name</label>
                <input />
              </div>
            </div>
            <div className="inputsubject">
              <div className="form">
                <label>Email</label>
                <input />
              </div>
              <div className="form">
                <label>Subject</label>
                <input />
              </div>
            </div>
            <div className="inputmessage">
              <div className="form">
                <label>Message</label>
                <textarea />
              </div>
              <div className="submit">
                <Link to="/">Submit</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
