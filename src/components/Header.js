import React from "react";
import { Link } from "react-router-dom";
import "../assets/style.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="home">
        <div className="lingkaran"></div>
        <Link to="/">
          <h2>Rafli Gunawan</h2>
        </Link>
        <p>Editor</p>
      </div>

      <div className="link">
        <Link to="/resume">Resume</Link> |<Link to="/project">Projects</Link> |
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
