import React from "react";
import "./Project.css";
import Line from "../../images/line-purple.svg";
import ImageTemp from "../../images/prev-project-temp.png";
import FigmaIcon from "../../images/figma-icon.svg";

function Project() {
  return (
    <section id="projects" className="container container-project">
      <p className="purple-text">
        
        <span className="purple-smoke-text">Project 1 </span>{" "}
      </p>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text">GITHUB action for portfolio</span>
          <p className="gray-text text-box">
            Deploy a portfolio in S3 Bucket and make a GITHUB action for this portfolio and connect it to CloudFront
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>
      <div className="project-details">
        <img src={ImageTemp} alt="Automate a portfolio" />
        <div className="details-left">
          <p className="gray-text">
            portfolio designed in
            <img className="icon-figma" src={FigmaIcon} alt="" />
            <span className="text-figma">Figma</span>
          </p>
          <div className="details-stack">
            <span className="white-text">Tecnologias</span>
            <ul className="gray-text">
              <li>Reactjs</li>
              <li>AWS</li>
              <li>GitHub</li>
            </ul>
          </div>
          <p className="gray-text">
             <span className="white-text"></span>
            <span className="white-text"></span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Project;
