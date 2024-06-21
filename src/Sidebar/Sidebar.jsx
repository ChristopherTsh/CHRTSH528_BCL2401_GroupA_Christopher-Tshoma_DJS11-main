import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import genresMapping from '../Genre'; // Ensure the genre mapping is imported correctly
import './Sidebar.css';

const Sidebar = ({ toggleDarkMode, darkMode, selectedGenre, setSelectedGenre }) => {
  const genres = Object.entries(genresMapping).map(([id, name]) => ({ id, name }));

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    console.log('Selected Genre:', event.target.value); // Debug log
  };

  return (
    <div className={`sidebar ${darkMode ? 'dark' : 'light'}`}>
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
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>{genre.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
