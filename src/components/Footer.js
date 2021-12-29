import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer1">
      <hr></hr>
      <div className="footer">
        <div className="f1">
          <h2>Phone</h2>
          <p>0878-7642-9353</p>
        </div>

        <div className="f2">
          <h2>Email</h2>
          <p>rafligunawan000@gmail.com</p>
        </div>

        <div className="f3">
          <h2>Follow Me</h2>
          <div className="ig">
            <p>in</p>
            <a href="https://www.instagram.com/ragunawn/">
              <AiFillInstagram size={20} />{" "}
            </a>
          </div>
        </div>

        <div className="f4">
          <p>©Rafli Gunawan</p>
          <p>Proudly Created with React JS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
