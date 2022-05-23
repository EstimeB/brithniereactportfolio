import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Checking the value of `currentPage` base on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passing in the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Calling the renderPage method to return a component  */}
      {renderPage()}
    </div>
  );
}

export default App;
