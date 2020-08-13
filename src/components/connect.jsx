import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import linkedin from "../images/iconfinder_square-linkedin_317725.png";
import gitHub from "../images/iconfinder__github_1156638.png";

const Connect = (props) => {
  return (
    <div className={props.connectPage}>
      <FontAwesomeIcon
        onClick={props.connectBtn}
        className="closeBtn"
        icon={faWindowClose}
      />
      <h1 className="connectHeader">Contact Me</h1>
      <p className="connectText">contact@lsinani.com</p>
      <span className="linkedIn">
        <a
          href="https://www.linkedin.com/in/leo-sinani-7b753773/"
          target="_blank"
        >
          <img src={linkedin} alt="LinkedIn"></img>
        </a>
      </span>
      <span className="gitHub">
        <a href="https://github.com/" target="_blank">
          <img src={gitHub} alt="GitHub"></img>
        </a>
      </span>
    </div>
  );
};

export default Connect;
