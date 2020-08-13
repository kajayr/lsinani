import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import "../css/aboutMe.css";
import "../css/box1.css";

const AboutMe = (props) => {
  return (
    <div className={props.aboutPage}>
      <FontAwesomeIcon
        onClick={props.closeBtn}
        className="closeBtn"
        icon={faWindowClose}
      />
      <h1 className="aboutMeHeader">About Me</h1>
      <p className="aboutMeText">
        I have started Network Quality Service and Application Developer at
        Microsoft as contractor. I am a results-driven IT Application
        Development graduate with related education, practicum, and experience
        to contribute to long-range operational objectives in a Front-End Web
        Developer role. I have a long-standing passion for web development and
        building websites since the age of 16, extensive history of designing
        websites in order to gain experience, and proven success working with
        languages in HTML, CSS, JavaScript, React, Node.js, and developing
        user-friendly web pages and applications. I am an effective communicator
        and collaborator with multidisciplinary teams, including back-end
        developers and web designers. I am adept at incorporating user feedback
        into front-end designs, working with multiple teams, and delivering high
        quality results. When not at work, you can find me with my wife enjoying
        activities related to health including proper diet, running and enjoying
        the great outdoors in the Pacific NW.
      </p>
    </div>
  );
};

export default AboutMe;
