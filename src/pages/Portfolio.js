import React from "react";
// importing project card & data
import Project from "../components/Project";
import projData from "../projectData.json";

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

export default function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
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
