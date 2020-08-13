import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Experience = (props) => {
  return (
    <div className={props.exPage}>
      <FontAwesomeIcon
        onClick={props.exBtn}
        className="closeBtn"
        icon={faWindowClose}
      />
      <h1 className="exHeader">Work Experience</h1>
      <h3>Microsoft</h3>
      <p className="exText">
        Contractor in Microsoft via HCL. My role is in Network Quality Service.
        Related to web development, I have created a web application in order to
        bring up the quality and productivity for the team I'm working with. In
        the Projects section you are able to see the application I have made.
      </p>
      <h3>Nucamp</h3>
      <p className="exText">
        Instructor in Nucamp. Teaching HTML, CSS, Bootstrap, JavaScript, and
        React{" "}
      </p>
    </div>
  );
};

export default Experience;
