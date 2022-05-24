import React from "react";

// Using object destructuring assignment to pluck off variables from the props object
function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <ul>
        <li style={styles.li}>
          <a
            style={styles.a}
            href="#home"
            onClick={() => handlePageChange("Home")}
            // Checks to see if Home is the current to set it to either active or not
            className={
              currentPage === "Home" ? "header-link active" : "header-link"
            }
          >
            Brithnie Estime
          </a>
          <a
            style={styles.a}
            href="#about"
            onClick={() => handlePageChange("About")}
            // Checks to see if Home is the current to set it to either active or not
            className={
              currentPage === "About" ? "header-link active" : "header-link"
            }
          >
            About me
          </a>
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
    gap: "45px",
  },
  a: {
    marginTop: "40px",
    marginBottom: "-40px",
    textDecoration: "none",
    color: "black",
    fontSize: "30px",
  },
};

export default Header;
