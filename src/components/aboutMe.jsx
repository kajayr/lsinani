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
I have started Network Quality Service for Microsoft as contractor via HCL. Currently I'm coding instructor at Nucamp coding bootcamp.
I am a results-driven IT Application Development graduate with related education, practicum, and experience to contribute to long-range operational objectives in Web Developer and Software Developer role.
When not at work, you can find me with my wife enjoying activities related to health including proper diet, running and enjoying the great outdoors in the Pacific NW.
      </p>
    </div>
  );
};

export default AboutMe;
