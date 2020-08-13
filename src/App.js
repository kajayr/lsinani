import React from "react";
import "./css/App.css";
import "./css/box1.css";
import "./css/aboutMe.css";
import "./css/box2.css";
import "./css/box3.css";
import "./css/box4.css";
import "./css/project.css";
import "./css/connect.css";
import "./css/experience.css";
import AboutMe from "./components/aboutMe.jsx";
import Projects from "./components/projects.jsx";
import Connect from "./components/connect.jsx";
import Experience from "./components/experience.jsx";

import "./css/clouds.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //about
      aboutBtnGate: true,
      box1content: "content",
      aboutPage: "openAboutMe",
      aboutMePageGate: false,
      //projects
      ProjectsBtnGate: true,
      box2content: "content2",
      ProjectsPage: "openProject",
      ProjectsPageGate: false,
      //connect
      connectBtnGate: true,
      box3content: "content3",
      connectPage: "openConnect",
      connectPageGate: false,
      //experience
      exBtnGate: true,
      box4content: "content4",
      exPage: "openEx",
      exPageGate: false,
    };
    this.aboutMe.bind(this);
  }
  //About Me
  aboutMe = () => {
    this.setState({
      box1content: "contentFade",
      aboutPage: "openAboutMe",
      box2content: "contentFade2",
      box3content: "contentFade3",
      box4content: "contentFade4",
    });

    setTimeout(
      function () {
        this.setState({
          aboutBtnGate: false,
          aboutMePageGate: true,
        });
      }.bind(this),
      2000
    );
  };
  close = () => {
    this.setState({
      aboutPage: "closeAboutPage",
      box1content: "content",
    });

    setTimeout(
      function () {
        this.setState({
          aboutBtnGate: true,
          aboutMePageGate: false,
          ProjectsBtnGate: true,
          connectBtnGate: true,
          exBtnGate: true,
          box2content: "content2",
          box3content: "content3",
          box4content: "content4",
        });
      }.bind(this),
      2000
    );
  };
  //Projects
  projects = () => {
    this.setState({
      ProjectsPage: "openProject",
      box2content: "contentFade2",
      box1content: "contentFade",
      box3content: "contentFade3",
      box4content: "contentFade4",
    });

    setTimeout(
      function () {
        this.setState({ ProjectsBtnGate: false, ProjectsPageGate: true });
      }.bind(this),
      2000
    );
  };
  close2 = () => {
    this.setState({
      ProjectsPage: "closeProject",
      box2content: "content2",
    });

    setTimeout(
      function () {
        this.setState({
          ProjectsBtnGate: true,
          aboutBtnGate: true,
          connectBtnGate: true,
          exBtnGate: true,
          ProjectsPageGate: false,
          box1content: "content",
          box3content: "content3",
          box4content: "content4",
        });
      }.bind(this),
      2000
    );
  };

  //Connect
  connect = () => {
    this.setState({
      box2content: "contentFade2",
      connectPage: "openConnect",
      box1content: "contentFade",
      box3content: "contentFade3",
      box4content: "contentFade4",
    });

    setTimeout(
      function () {
        this.setState({ connectBtnGate: false, connectPageGate: true });
      }.bind(this),
      2000
    );
  };
  close3 = () => {
    this.setState({
      connectPage: "closeConnect",
      box3content: "content3",
    });

    setTimeout(
      function () {
        this.setState({
          ProjectsBtnGate: true,
          aboutBtnGate: true,
          connectBtnGate: true,
          exBtnGate: true,
          connectPageGate: false,
          box1content: "content",
          box2content: "content2",
          box4content: "content4",
        });
      }.bind(this),
      2000
    );
  };
  //Experience
  experience = () => {
    this.setState({
      box2content: "contentFade2",
      exPage: "openEx",
      box1content: "contentFade",
      box3content: "contentFade3",
      box4content: "contentFade4",
    });

    setTimeout(
      function () {
        this.setState({ exBtnGate: false, exPageGate: true });
      }.bind(this),
      2000
    );
  };
  close4 = () => {
    this.setState({
      exPage: "closeEx",
      box4content: "content4",
    });

    setTimeout(
      function () {
        this.setState({
          ProjectsBtnGate: true,
          aboutBtnGate: true,
          connectBtnGate: true,
          exBtnGate: true,
          exPageGate: false,
          box1content: "content",
          box2content: "content2",
          box3content: "content3",
          box4content: "content4",
        });
      }.bind(this),
      2000
    );
  };
  render() {
    return (
      <div className="sky-background">
        <div className="main">
          <div className="box-1">
            {this.state.aboutBtnGate ? (
              <div onClick={this.aboutMe} className={this.state.box1content}>
                <div className="aboutMeBox1">
                  <h1>About Me</h1>
                </div>
              </div>
            ) : null}
          </div>
          <div className="box-2">
            {this.state.ProjectsBtnGate ? (
              <div onClick={this.projects} className={this.state.box2content}>
                <div className="ProjectsBox2">
                  <h1>Projects</h1>
                </div>
              </div>
            ) : null}
          </div>
          <div className="box-3">
            {this.state.connectBtnGate ? (
              <div onClick={this.connect} className={this.state.box3content}>
                <div className="connectBox3">
                  <h1>Connect Me</h1>
                </div>
              </div>
            ) : null}
          </div>
          <div className="box-4">
            {this.state.exBtnGate ? (
              <div onClick={this.experience} className={this.state.box4content}>
                <div className="exBox4">
                  <h1>Work Experience</h1>
                </div>
              </div>
            ) : null}
          </div>
          {this.state.aboutMePageGate ? (
            <AboutMe
              aboutPage={this.state.aboutPage}
              closeBtn={this.close.bind(this)}
            />
          ) : null}
          {this.state.ProjectsPageGate ? (
            <Projects
              ProjectsPage={this.state.ProjectsPage}
              ProjectsBtn={this.close2.bind(this)}
            />
          ) : null}
          {this.state.connectPageGate ? (
            <Connect
              connectPage={this.state.connectPage}
              connectBtn={this.close3.bind(this)}
            />
          ) : null}
          {this.state.exPageGate ? (
            <Experience
              exPage={this.state.exPage}
              exBtn={this.close4.bind(this)}
            />
          ) : null}
          <div className="section-bottom"></div>
        </div>

        {/* clouds here */}
        <div className="smallClouds">
          <img
            className="cloud1"
            src={require("./images/cloud1.png")}
            alt="cloud1"
          ></img>
          <img
            className="cloud2"
            src={require("./images/cloud2.png")}
            alt="cloud2"
          ></img>
          <img
            className="cloud3"
            src={require("./images/cloud3.png")}
            alt="cloud3"
          ></img>
          <img
            className="cloud4"
            src={require("./images/cloud4.png")}
            alt="cloud4"
          ></img>
          <img
            className="cloud5"
            src={require("./images/cloud5.png")}
            alt="cloud5"
          ></img>
        </div>
        {/* clouds ends here */}
        <div className="footer">
          <p className="footerText">Developed by Leo Sinani © 2020</p>
        </div>
      </div>
    );
  }
}

export default App;
