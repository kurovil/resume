import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.jpg";
import P3 from "../assets/p3.jpg";
import "../assets/style.css";

const Project = () => {
  return (
    <div>
      <Header />
      <div className="project">
        <h1>Projects</h1>
        <div className="pr1">
          <div className="pr2">
            <h2>3D Circle Blend</h2>
            <p>
              <br />
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <img src={P1} className="p1" />
        </div>
        <div className="pr1">
          <div className="pr2">
            <h2>3D Environtment</h2>
            <p>
              <br />
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <img src={P2} className="p1" />
        </div>
        <div className="pr1">
          <div className="pr2">
            <h2>3D Background</h2>
            <p>
              <br />
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <img src={P3} className="p1" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Project;
