import React from 'react';

// Using object destructuring assignment to pluck off variables from the props object
function Header({ currentPage, handlePageChange }) {
  return (
    <ul>
      <li style={styles.li}>
        <a
          style={styles.a}
          href="#home"
          onClick={() => handlePageChange('Home')}
          // Checks to see if Home is the current to set it to either active or not  
          className={currentPage === 'Home' ? 'header-link active' : 'header-link'}
        >
          Home
        </a>
        <a
          style={styles.a}
          href="#about"
          onClick={() => handlePageChange('About')}
          // Checks to see if Home is the current to set it to either active or not  
          className={currentPage === 'About' ? 'header-link active' : 'header-link'}
        >
          About
        </a>
        <a
          style={styles.a}
          href="#skills"
          onClick={() => handlePageChange('Skills')}
          // Checks to see if Home is the current to set it to either active or not  
          className={currentPage === 'Skills' ? 'header-link active' : 'header-link'}
        >
          Skills
        </a>
        <a
          style={styles.a}
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Checks to see if Home is the current to set it to either active or not  
          className={currentPage === 'Portfolio' ? 'header-link active' : 'header-link'}
        >
          Portfolio
        </a>
        <a
          style={styles.a}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Checks to see if Home is the current to set it to either active or not  
          className={currentPage === 'Contact' ? 'header-link active' : 'header-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const styles = {
  li: {
    listStyleType: 'none',
    display: 'flex',
    gap: '15px',
  },
  a: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '20px',
  }

}

export default Header;