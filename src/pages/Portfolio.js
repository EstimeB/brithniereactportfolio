import React from "react";
import animag from "../images/g-p-1.jpg";
import noteTaker from "../images/noteTaker.jpg";
import teamProf from "../images/TeamProfImg.jpeg";

export default function Home() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>Portfolio</h1>
      <ul style={styles.pUl}>
        <li>
          <a
            style={styles.p}
            href="https://supbake.github.io/group_project_one/"
          >
            AniMag (Project One)
            <br></br>
            <img
              style={styles.img1}
              src={animag}
              alt="group-project-one_page-img"
              class="p-img"
            />
            <br></br>
            <a
              style={styles.p}
              href="https://github.com/Supbake/group_project_one"
            >
              Project One GitHub
            </a>
          </a>
        </li>
        <li>
          <a
            style={styles.p}
            href="https://sheltered-meadow-95267.herokuapp.com/"
          >
            Note Taker
            <br></br>
            <img
              style={styles.img1}
              src={noteTaker}
              alt="group-project-one_page-img"
            />
            <br></br>
            <a
              style={styles.p}
              href="https://github.com/EstimeB/Notes-app_Note-Taker-Ass"
            >
              Note Taker GitHub
            </a>
          </a>
        </li>
        <li>
          <a
            style={styles.p}
            href="https://drive.google.com/file/d/19fyx7Giz8jT26uLo2obSjspr9DBaEfDh/view?usp=sharing"
          >
            <a
              style={styles.p}
              href="https://drive.google.com/file/d/1PAl39R2gNaiA_mwAVNewVupqwl2G6Wxl/view?usp=sharing"
            >
              Team Profile Generator
              <img
                style={styles.img1}
                src={teamProf}
                alt="password-generator_page-img"
              />
              <a
                style={styles.p}
                href="https://github.com/EstimeB/-teamProfile-Gen/"
              >
                Team Profile Generator GitHub
              </a>
            </a>
          </a>
        </li>
      </ul>
      <h3 style={styles.h3}>Projects</h3>
      <p style={styles.p}>Knowledgeable and proficient in many technologies.</p>
    </div>
  );
}

const styles = {
  div: {
    // textAlign: "center",
    textShadow: "15px 15px 35px rgb(151, 151, 143)",
  },
  img1: {
    boxShadow: "15px 15px 35px rgb(151, 151, 143)",
    width: "300px",
    height: "180px",
  },
  h1: {
    fontSize: "45px",
    textAlign: "center",
  },
  h3: {
    marginTop: "-17px",
    fontSize: "22px",
  },
  p: {
    marginTop: "-15px",
    textDecoration: "none",
    color: 'black',
  },
  pUl: {
    listStyleType: "none",
    display: "flex",
    gap: "15px",
    // overflowX: 'scroll',
    height: "260px",
    textAlign: "center",
    justifyContent: "center",
  },
};
