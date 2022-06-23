import React from "react";
import avatar from "../images/avatar.jpeg";
import github from "../images/icons/github.png";
import linkedin from "../images/icons/linkedin.webp";

export default function Home() {
  return (
    <div style={styles.div}>
      <img style={styles.img1} src={avatar} alt="Avatar" />
      <h1 style={styles.h1}>Brithnie Estime</h1>
      <h3 style={styles.h3}>Full Stack Web Developer</h3>
      <p style={styles.p}>U.S. Army veteran with a psychology background.</p>
      <a href="https://github.com/EstimeB" target="_blank" rel="noreferrer">
        <img style={styles.iconG} src={github} alt="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/brithnieestime/"
        target="_blank"
        rel="noreferrer"
      >
        <img style={styles.iconL} src={linkedin} alt="Linkedin" />
      </a>
    </div>
  );
}

const styles = {
  div: {
    textAlign: "center",
    textShadow: "15px 15px 35px rgb(151, 151, 143)",
  },
  img1: {
    marginTop: "130px",
    border: "solid",
    borderWidth: "1px",
    borderColor: "goldenrod",
    boxShadow: "15px 15px 35px rgb(151, 151, 143)",
    borderRadius: "35px",
  },
  h1: {
    fontSize: "45px",
  },
  h3: {
    marginTop: "-35px",
    fontSize: "22px",
  },
  p: {
    marginTop: "-15px",
    marginBottom: "50px",
  },
  iconG: {
    width: "40px",
    marginRight: "15px",
  },
  iconL: {
    width: "40px",
  },
};
