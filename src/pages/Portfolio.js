import React from "react";
// importing project card & data
// import Project from "../components/Project.js";
import projData from "../projectData.json";

// importing style sheet
import "../style/portfolio.css";

// importing demo pict
import snAPI from "../images/socialNetAPI.png";
import techBlogDemo from "../images/techBlog.jpg";
import eComBE from "../images/E_CommerceBE.png";

//
const demoPict = {
  snApi: snAPI,
  techBlog: techBlogDemo,
  ecBe: eComBE,
};

// Project card
function Project(props) {
  return (
    <div className="main">
      <div className="imgSect">
        <a href={props.project.appDemoUrl} target="_blank" rel="noreferrer">
          <img
            className="portPict"
            alt={`${props.project.name} project demo pict`}
            src={props.demoPict}
          />
        </a>
      </div>
      <div>
        <h2>{props.project.name}</h2>
        <p>{props.project.description}</p>
        <p>{props.project.tools}</p>
        <div className="links">
          <a href={props.project.appDemoUrl} target="_blank" rel="noreferrer">
            <p>Demo</p>
          </a>
          <a href={props.project.githubUrl} target="_blank" rel="noreferrer">
            <p>Github</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div>
      <h1 className="porth1">Projects</h1>
      {projData.projects.map((props) => (
        <Project
          key={props.name}
          project={props}
          demoPict={demoPict[props.demoPictTitle]}
        />
      ))}
    </div>
  );
}
