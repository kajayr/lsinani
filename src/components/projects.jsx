import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import "../css/project.css";
import "../css/box2.css";
import msProject from "../images/project1.jpg";
import sinanicoProject from "../images/sinanico.png";

const Projects = (props) => {
  return (
    <div className={props.ProjectsPage}>
      <FontAwesomeIcon
        onClick={props.ProjectsBtn}
        className="closeBtn"
        icon={faWindowClose}
      />
      <div className="projectPageDetails">
        <h1 className="projectHeader">Projects</h1>
        <a
          className="MSbtn"
          href="https://nqs-reporter.herokuapp.com/"
          target="_balnk"
          rel="noopener noreferrer"
        >
          <img className="msProjectPic" src={msProject} alt="MS Project"></img>
        </a>
        <p className="projectMSText">
          Technologies used: React, MongoDB, Node <br></br>
          <br></br>Purpose: Creating an Ad reporter for the team to add the
          important keys, save time, and save needed data to build a form.
          <br></br>
          Responsive for big screens and all laptops. This appslication is not
          designed for smartphone usage.
        </p>
        <a
          href="http://www.sinanico.com/"
          target="_balnk"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            className="sinanicoProjectPic"
            src={sinanicoProject}
            alt="Sinanico Project"
          ></img>
        </a>
        <p className="projectSinaniCoText">
          Technologies used: HTML, CSS, JavaScript <br></br>
          <br></br>Purpose: Creating a website which only represents the
          products and its details.
          <br></br>
          Responsive for all devices.
        </p>
      </div>
    </div>
  );
};

export default Projects;
