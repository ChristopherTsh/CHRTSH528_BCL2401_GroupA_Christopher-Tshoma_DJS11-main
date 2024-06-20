import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ toggleDarkMode, darkMode, selectedGenre, setSelectedGenre }) => {
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div className="sidebar">
      <h1>Menu</h1>
      <div className="sidebar-menu">
        <Link to="/" className="sidebar-link">Home</Link>
        <Link to="/favorites" className="sidebar-link">Favorites</Link>
        <button onClick={toggleDarkMode} className="toggle-switch">
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <label htmlFor="genre-select">Sort by Genre:</label>
        <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
          <option value="All">All</option>
          <option value="Comedy">Comedy</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
