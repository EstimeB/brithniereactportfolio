import React from "react";
import aboutI from "../images/about.gif";

export default function About() {
  return (
    <div style={styles.div}>
      <img style={styles.img1} src={aboutI} alt="Avatar" />
      <h1 style={styles.h1}>About me</h1>
      <p style={styles.p}>
        Hold a Bachelor of Science in Psychology, graduated and earned a
        developer certificate from the University of Arizona Coding BootCamp (in
        collaboration with Trilogy Education Services). Learned many
        technologies and skills throughout the journey, will soon be an expert
        in the ins and outs of the web. Am already very passionate with the
        field and expect to do my very best in becoming an outstanding full
        stack web developer/software engineer. I like cleanly written codes and
        when it comes to CSS/server side scripting, I like to focus on the
        details to ensure that all users get the best experience.
      </p>
    </div>
  );
}

const styles = {
  div: {
    textAlign: "center",
    textShadow: "15px 15px 35px rgb(151, 151, 143)",
    marginLeft: "50px",
    marginRight: "50px",
  },
  img1: {
    marginTop: "130px",
    border: "solid",
    borderWidth: "1px",
    borderColor: "goldenrod",
    boxShadow: "15px 15px 35px rgb(151, 151, 143)",
    height: "150px",
    width: "200px",
  },
  h1: {
    fontSize: "45px",
  },
  p: {
    marginTop: "-15px",
  },
};
