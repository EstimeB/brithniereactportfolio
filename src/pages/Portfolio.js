import React from "react";
import animag from "../images/g-p-1.jpg";
import noteTaker from "../images/noteTaker.jpg";
import teamProf from "../images/TeamProfImg.jpeg";
// import  from "../images/";
// import  from "../images/";
import emp from "../images/EmpTA.png";
import ebe from "../images/E_BE.png";
import techb from "../images/techBlog.jpg";
import codeQ from "../images/c-q.jpg";
import passgen from "../images/p-g.jpg";

export default function Home() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>Portfolio</h1>
      <ul style={styles.pUl}>
        {/* <li>
          <a style={styles.p} target="_blank" rel="noreferrer" href="">
          
            <br></br>
            <img src="" alt="" style={styles.img1} />
            <a style={styles.p} target="_blank" rel="noreferrer" href="">
             GitHub
            </a>
          </a>
        </li> */}

        <li>
          <a
            style={styles.p}
            target="_blank"
            rel="noreferrer"
            href="https://quiet-woodland-72863.herokuapp.com/"
          >
            Tech Blog
            <br></br>
            <img src={techb} alt="techBlog" style={styles.img1} />
            <br></br>
            <a
              style={styles.p}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EstimeB/The_Technological-Blog"
            >
              Tech Blog GitHub
            </a>
          </a>
        </li>

        <li>
          <a
            style={styles.p}
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1KHxGYg8mmpLpKTjp760WlWycuyUW6MnF/view?usp=sharing"
          >
            E-Commerce Back End
            <br></br>
            <img src={ebe} alt="e-commerce-back-end_img" style={styles.img1} />
            <br></br>
            <a
              style={styles.p}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EstimeB/ORM_E-COMM_B-End"
            >
              E-Commerce Back End GitHub
            </a>
          </a>
        </li>

        <li>
          <a
            style={styles.p}
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/18JSghIxWoSCRjXf4pT6bTtG-nZDbZJfI/view?usp=sharing"
          >
            Employee Management System
            <br></br>
            <img
              src={emp}
              alt="employee-management-system_img"
              style={styles.img1}
            />
            <br></br>
            <a
              style={styles.p}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EstimeB/The_Emp-Tracker_App"
            >
              Employee Management System GitHub
            </a>
          </a>
        </li>

        <li>
          <a
            style={styles.p}
            target="_blank"
            rel="noreferrer"
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
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EstimeB/Notes-app_Note-Taker-Ass"
            >
              Note Taker GitHub
            </a>
          </a>
        </li>

        <li>
          <a
            style={styles.p}
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/19fyx7Giz8jT26uLo2obSjspr9DBaEfDh/view?usp=sharing"
          >
            <a
              style={styles.p}
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/file/d/1PAl39R2gNaiA_mwAVNewVupqwl2G6Wxl/view?usp=sharing"
            >
              Team Profile Generator
              <br></br>
              <img
                style={styles.img1}
                src={teamProf}
                alt="password-generator_page-img"
              />
              <br></br>
              <a
                style={styles.p}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/EstimeB/-teamProfile-Gen/"
              >
                Team Profile Generator GitHub
              </a>
            </a>
          </a>
        </li>

        {/* <li>
          <a style={styles.p} target="_blank" rel="noreferrer" href="">
          Good README Generator
            <br></br>
            <img src="" alt="" style={styles.img1} />
            <a style={styles.p} target="_blank" rel="noreferrer" href="">
              Good README Generator GitHub
            </a>
          </a>
        </li> */}

        <li>
          <a
            style={styles.p}
            target="_blank"
            rel="noreferrer"
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
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Supbake/group_project_one"
            >
              Project One GitHub
            </a>
          </a>
        </li>

        {/* <li>
          <a style={styles.p} target="_blank" rel="noreferrer" href="">
          Weather Dashboard
            <br></br>
            <img src="" alt="" style={styles.img1} />
            <a style={styles.p} target="_blank" rel="noreferrer" href="">
             Weather Dashboard GitHub
            </a>
          </a>
        </li> */}

        {/* <li>
          <a style={styles.p} target="_blank" rel="noreferrer" href="">
          Day Planner
            <br></br>
            <img src="" alt="" style={styles.img1} />
            <a style={styles.p} target="_blank" rel="noreferrer" href="">
             Day Planner GitHub
            </a>
          </a>
        </li> */}

        {/* <li>
          <a style={styles.p} target="_blank" rel="noreferrer" href="">
            Regex Tutorial
            <br></br>
            <img src="" alt="regex-tutorial_img" style={styles.img1}/>
            <br></br>
            <a style={styles.p} target="_blank" rel="noreferrer" href="">Regex Tutorial GitHub</a>
          </a>
        </li> */}

        <li>
          <a
            style={styles.p}
            target="_blank"
            rel="noreferrer"
            href="https://estimeb.github.io/Code-Quiz-Project/"
          >
            Code Quiz
            <br></br>
            <img src={codeQ} alt="code-quiz_page-img" style={styles.img1} />
            <br></br>
            <a
              style={styles.p}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EstimeB/Code-Quiz-Project"
            >
              Code Quiz GitHub
            </a>
          </a>
        </li>

        <li>
          <a
            style={styles.p}
            target="_blank"
            rel="noreferrer"
            href="https://estimeb.github.io/JS-Project_Password-Generator/"
          >
            Password Generator
            <br></br>
            <img
              src={passgen}
              alt="password-generator_page-img"
              style={styles.img1}
            />
            <br></br>
            <a
              style={styles.p}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EstimeB/JS-Project_Password-Generator"
            >
              Password Generator GitHub
            </a>
          </a>
        </li>
      </ul>
      <h3 style={styles.h3}>Projects</h3>
      <p style={styles.p}>
        Web pages' fit most screen size. Scroll for more images and click on
        each for demonstration.
      </p>
    </div>
  );
}

const styles = {
  div: {
    textAlign: "center",
    textShadow: "15px 15px 35px rgb(151, 151, 143)",
  },
  img1: {
    boxShadow: "15px 15px 35px rgb(151, 151, 143)",
    width: "300px",
    height: "180px",
  },
  h1: {
    marginTop: "130px",
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
    color: "black",
  },
  pUl: {
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    overflowY: "scroll",
    height: "260px",
    textAlign: "center",
    justifyContent: "center",
  },
};
