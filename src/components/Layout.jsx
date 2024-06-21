import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import genresMapping from '../Genre';
import './Sidebar.css';

const Sidebar = ({ toggleDarkMode, darkMode, selectedGenre, setSelectedGenre }) => {
  const [genres, setGenres] = useState([]);
  const [shows, setShows] = useState([]); // Add a state for shows

  useEffect(() => {
    fetch('(link unavailable)')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched genres:', data);
        if (Array.isArray(data)) {
          const formattedGenres = data.map(genre => ({
            id: (link unavailable),
            name: genresMapping[(link unavailable)] || genre.name,
          }));
          setGenres(formattedGenres);
        } else {
          console.error('API did not return an array:', data);
        }
      })
      .catch(error => console.error('Error fetching genres:', error));
  }, []);

  useEffect(() => {
    if (selectedGenre !== 'All') {
      fetch('https://podcast-api.netlify.app/')
        .then(response => response.json())
        .then(data => {
          console.log('Fetched shows:', data);
          setShows(data);
        })
        .catch(error => console.error('Error fetching shows:', error));
    }
  }, [selectedGenre]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    console.log('Selected Genre:', event.target.value);
  };

  return (
    <div className={`sidebar ${darkMode ? 'dark' : 'light'}`}>
      <h1>Menu</h1>
      <div className="sidebar-menu">
        <Link to="/" className="sidebar-link">
          Home
        </Link>
        <Link to="/favorites" className="sidebar-link">
          Favorites
        </Link>
        <button onClick={toggleDarkMode} className="toggle-switch">
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <label htmlFor="genre-select">Sort by Genre:</label>
        <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
          <option value="All">All</option>
          {genres.map((genre) => (
            <option key={(link unavailable)} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
        {selectedGenre !== 'All' && (
          <ul>
            {shows.map((show) => (
              <li key={'https://podcast-api.netlify.app/'}>{show.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
