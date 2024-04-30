import "./About.css";
import iconImage from "../../images/logo.jpg";

export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-left">
        <span className="purple-text">
          ✋REVAN R{" "}
          <span className="purple-smoke-text">- INTRODUCTION</span>{" "}
        </span>
        <p className="gray-text">
        Hey there, I'm Revan, an enthusiastic student with a passion for DevOps. I'm eager to learn about optimizing software development pipelines and collaborating effectively using GitHub. I love tackling challenges and exploring ways to make technology work smarter for us.{" "}
        </p>
        <span className="white-text">
          <a href="#projects">Portfolio</a>
        </span>
        <ul className="tech-stack">
          <li>Devops</li>
          <li>Ui/Ux Designer</li>
          <li>Full-stack Developer</li>
        </ul>
        <a className="about-see" href="#">{"->"} </a>
      </div>
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
    </section>
  );
};
