import React from "react";

// importing style sheet
import "../style/portfolio.css";

// Project card
export default function Project(props) {
  return (
    <div className="main">
      <div>
        <a href={props.project.appDemoUrl} target="_blank" rel="noreferrer">
          <img
            className="portPict"
            alt={`${props.project.name} project demo pict`}
            src={props.demoPict}
          />
        </a>
      </div>
      <div>
        <h3>{props.project.name}</h3>
        <p>{props.project.description}</p>
        <p>{props.project.tools}</p>
      </div>
    </div>
  );
}
