import React from "react";
// import style sheet
import "../style/header.css";

// Using object destructuring assignment to pluck off variables from the props object
function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <ul className="li">
        {/* <li style={styles.li}> */}
        <a
          style={styles.titleA}
          href="#home"
          onClick={() => handlePageChange("Home")}
          // Checks to see if Home is the current to set it to either active or not
          className={
            currentPage === "Home" ? "header-link active" : "header-link"
          }
        >
          Brithnie Estime
        </a>
        {/* </li> */}
        <li className="li">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            // Checks to see if About is the current to set it to either active or not
            className={
              currentPage === "About" ? "header-link active" : "header-link"
            }
          >
            About
          </a>
        </li>
        <li className="li">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // Checks to see if Portfolio is the current to set it to either active or not
            className={
              currentPage === "Portfolio" ? "header-link active" : "header-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="li">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Checks to see if Contact is the current to set it to either active or not
            className={
              currentPage === "Contact" ? "header-link active" : "header-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="li">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            // Checks to see if Home is the current to set it to either active or not
            className={
              currentPage === "Resume" ? "header-link active" : "header-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

const styles = {
  titleA: {
    textDecoration: "none",
    fontSize: "40px",
    color: "black",
    marginRight: "25px",
  },
};

export default Header;
