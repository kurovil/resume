import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/style.css";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div>
      <Header />
      <div className="resumepage">
        <h1>Resume</h1>
        <div className="resume">
          <div className="judulresume">
            <h2>
              Work <br />
              Experience
            </h2>
          </div>
          <div className="paragraf">
            <div className="isiresume">
              <p>2017 - 2021</p>
              <div className="pekerjaan">
                <h4>Design Graphic & Video Editing </h4>
                <p>
                  Freelancer of Trisakti University with Various Project, From
                  Making Company Profile, Managing Social Media Design, Part of
                  Event Creative Design Team.
                </p>
              </div>
            </div>
            <div className="isiresume">
              <p>2018 - 2021</p>
              <div className="pekerjaan">
                <h4>Video Maker</h4>
                <p>
                  Making Various Video, From Company Profile, Fashion Video
                  Editorial, Fashion Export Advertising, And Youtube Content.
                </p>
              </div>
            </div>{" "}
            <div className="isiresume">
              <p>2020 - 2021</p>
              <div className="pekerjaan">
                <h4>Content Creator</h4>
                <p>
                  Responsible for Design Content, Video Content, and Advertising
                  Video to lift up the traffic for the Social Media
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="resume">
          <div className="judulresume">
            <h2>Education</h2>
          </div>
          <div className="paragraf">
            <div className="isiresume">
              <p>2017 - 2019</p>
              <div className="pekerjaan6">
                <h4>Kosgoro Vocational High School</h4>
                <p>Student Of Multimedia Department.</p>
              </div>
            </div>
            <div className="isiresume">
              <p>2020 - Present</p>
              <div className="pekerjaan">
                <h4>Bina Sarana Informatika University</h4>
                <p>College Student of Information Systems Major</p>
              </div>
            </div>{" "}
          </div>
        </div>
        <hr />
        <div className="resume">
          <div className="judulresume">
            <h2>Skills</h2>
          </div>
          <div className="paragraf">
            <div className="isiresume">
              <div className="pekerjaan">
                <h4>Video Editing</h4>
                <ul>
                  <li>Adobe Premiere</li>
                  <li>Adobe After Effects</li>
                  <li>DaVinci</li>
                </ul>
                <h4>Graphic Design</h4>
                <ul>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe Indesign</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resume;
