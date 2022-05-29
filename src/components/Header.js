import React from "react";

// Using object destructuring assignment to pluck off variables from the props object
function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <a
        style={styles.a}
        href="#home"
        onClick={() => handlePageChange("Home")}
        // Checks to see if Home is the current to set it to either active or not
        className={
          currentPage === "Home" ? "header-link active" : "header-link"
        }
      >
        <h1 style={styles.tilteH1}>Brithnie Estime</h1>
      </a>
      <ul  style={styles.li}>
        <li>
          <a
            style={styles.a}
            href="#about"
            onClick={() => handlePageChange("About")}
            // Checks to see if Home is the current to set it to either active or not
            className={
              currentPage === "About" ? "header-link active" : "header-link"
            }
          >
            About
          </a>
        </li>
        <li>
          <a
            style={styles.a}
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // Checks to see if Home is the current to set it to either active or not
            className={
              currentPage === "Portfolio" ? "header-link active" : "header-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            style={styles.a}
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Checks to see if Home is the current to set it to either active or not
            className={
              currentPage === "Contact" ? "header-link active" : "header-link"
            }
          >
            Contact
          </a>
        </li>
        <li>
          <a
            style={styles.a}
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
  li: {
    listStyleType: "none",
    display: "flex",
    gap: "5px",
    marginLeft: "300px",
    marginRight: "30px",
  },
  a: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: "30px",
  },
  titleH1: {
    float: 'left',
  }
};

export default Header;
