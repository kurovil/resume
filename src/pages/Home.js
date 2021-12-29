import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Foto from "../assets/1.jpg";
import "../assets/style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg">
      <Header />
      <div className="body">
        <img src={Foto} className="foto" />

        <div className="about">
          <h1>Hello</h1>
          <h2>A bit about me</h2>
          <p>I'm a Video Editor and Also Graphic Designer . </p>
          <p>
            {" "}
            Motivated and highly productive with Video Editing and Graphic
            Design. Detail-oriented with strong skills in multi-tasking and
            efficient management of day-to-day office operations.
          </p>
          <div className="linkk">
            <Link to="/resume" className="linkbulat">
              <div className="merah">Resume</div>
            </Link>
            <Link to="/resume" className="linkbulat">
              <div className="ijo">Project</div>
            </Link>
            <Link to="/resume" className="linkbulat">
              <div className="kuning">Contact</div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
