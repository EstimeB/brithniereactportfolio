import React from 'react';

// Using object destructuring assignment to pluck off variables from the props object
function Footer({ currentPage, handlePageChange }) {
  return (
    <footer style={styles.rightReserved}>Brith E.&copy;</footer>
  )
    
}

const styles = {
    rightReserved: {
        textAlign: 'center',
        paddingTop: '70px'
    }
}

export default Footer;