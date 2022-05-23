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