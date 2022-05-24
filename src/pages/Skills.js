import React from "react";

export default function Skills() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>Skills</h1>
      <p style={styles.p}>
        Posses strong creative ability, attention to detail, logical approach to
        work, excellent problem-solving skills. Proficient in programing
        languages and frameworks like JavaScript, HTML, CSS, SQL, jQuery,
        Bootstrap, Node.js, MySQL, MongoDB, React, Express.js, and more
        (Architectural patterns, techniques, paradigms, ...). Working on
        improving my communication skills and crucial skills like web literacy,
        my ability to explain technical matters clearly, and more.
      </p>
      <h3 style={styles.h3}>◆</h3>
      {/* <h3 style={styles.h3}>My technical Level</h3> */}
      {/* <div className="dropdown frontEnd">
        <p class="dropbtn" onclick="feFunction(this)">
          🖥 FrontEnd Developer
        </p>

        <ul
          style={styles.dropdownContent}
          className="dropdownContent"
          id="myDropdown"
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>React </li>
        </ul>
      </div>
      <div className="dropdown frontEnd">
        <p class="dropbtn" onclick="beFunction(this)">
          🗄 BackEnd Developer
        </p>

        <ul
          style={styles.dropdownCont}
          className="dropdownCont"
          id="myDropdown"
        >
          <li>Node JS</li>
          <li>SQL</li>
          <li>Express JS</li>
          <li>Python</li>
          <li>PHP</li>
        </ul>
      </div> */}
    </div>
  );
}

const styles = {
  div: {
    // textAlign: "center",
    textShadow: '15px 15px 35px rgb(151, 151, 143)',
  },
  h1: {
    marginTop: '130px',
    fontSize: "45px",
    textAlign: "center",
  },
  h3: {
    fontSize: "22px",
    textAlign: "center",
  },
  p: {
    marginTop: "-15px",
    textAlign: "center",
  },
  dropdownContent: {
    display: "none",
  },
  dropdownCont: {
    display: "none",
  },
  //   frontEnd p:hover {
  //       color: 'aqua',
  //   }
};
