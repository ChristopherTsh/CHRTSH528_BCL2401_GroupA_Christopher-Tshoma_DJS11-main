import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import genresMapping from '../Genre'; // Ensure the genre mapping is imported correctly
import './Sidebar.css';

const Sidebar = ({ toggleDarkMode, darkMode, selectedGenre, setSelectedGenre }) => {
  const [genres, setGenres] = useState([]);
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://podcast-api.netlify.app/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setShows(data);

          const uniqueGenres = Array.from(new Set(data.flatMap(show => show.genres)))
            .map(id => ({ id, name: genresMapping[id] || `Genre ${id}` }));

          setGenres(uniqueGenres);
          console.log('Fetched Genres:', uniqueGenres);
        } else {
          console.error('API did not return an array:', data);
          setError('API did not return an array');
        }
      })
      .catch(error => {
        console.error('Error fetching shows:', error);
        setError(error.message);
      });
  }, []);

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setSelectedGenre(selectedGenre);
    console.log('Selected Genre:', selectedGenre);
  };

  const memoizedGenres = useMemo(() => {
    return genres.map((genre) => (
      <option key={genre.id} value={genre.id}>{genre.name}</option>
    ));
  }, [genres]);

  const filteredShows = useMemo(() => {
    if (selectedGenre === 'All') {
      return shows;
    } else {
      return shows.filter(show => show.genres.includes(parseInt(selectedGenre)));
    }
  }, [shows, selectedGenre]);

  const memoizedShows = useMemo(() => {
    return filteredShows.map(show => (
      <li key={show.id}>{show.title}</li>
    ));
  }, [filteredShows]);

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
          {memoizedGenres}
        </select>
        <ul>
          {memoizedShows.length > 0 ? memoizedShows : <li>No podcasts available for the selected genre.</li>}
        </ul>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Sidebar;
