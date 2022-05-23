import React from 'react';

// Using object destructuring assignment to pluck off variables from the props object
function Header({ currentPage, handlePageChange }) {
  return (
    <ul>
      <li>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // Checks to see if Home is the current to set it to either active or not  
          className={currentPage === 'Home' ? 'header-link active' : 'header-link'}
        >
          Home
        </a>
      </li>
    </ul>
  );
}

export default Header;