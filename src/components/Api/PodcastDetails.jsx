import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import genresMapping from '../../Genre'; // Ensure the genre mapping is imported correctly
import './PodcastDetails.css';
import Sidebar from '../../Sidebar/Sidebar'; // Adjust the import path as necessary

const PodcastDetails = ({ addToFavorites, setPlayingEpisode }) => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Podcast Data:', data); // Debug log
        setPodcast(data);
        setLoading(false);
        if (data.seasons && data.seasons.length > 0) {
          setSelectedSeason(data.seasons[0]); // Set the first season as the default
        }
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const handleSeasonChange = (event) => {
    const seasonIndex = event.target.value;
    setSelectedSeason(podcast.seasons[seasonIndex]);
  };

  const filterPodcastsByGenre = (podcasts, genre) => {
    if (genre === 'All') return podcasts;
    return podcasts.filter(podcast => podcast.genres.includes(genre));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!podcast) {
    return <div>Podcast not found</div>;
  }

  const filteredPodcasts = filterPodcastsByGenre([podcast], selectedGenre); // Assuming you have a list of podcasts
  const seasons = podcast?.seasons || [];
  const podcastGenres = podcast?.genres || [];

  const getSeasonGenres = (season) => {
    if (season && season.genres) {
      return season.genres.map(genre => genresMapping[genre] || 'Unknown Genre').join(', ');
    }
    return 'Unknown';
  };

  return (
    <div className="main-container">
      <Sidebar 
        toggleDarkMode={() => {} /* Implement dark mode toggle */}
        darkMode={false /* Replace with actual dark mode state */}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      {filteredPodcasts.map((podcast) => (
        <div key={podcast.id} className="podcast-details" style={{ backgroundImage: `url(${podcast.image})` }}>
          <div className="podcast-content">
            <button onClick={() => navigate(-1)} className="back-button">Back</button>
            <img src={podcast.image} alt={podcast.title} className="podcast-image" />
            <h2>{podcast.title}</h2>
            <p>{podcast.description}</p>
            <p><strong>Last Updated:</strong> {podcast.updated}</p>
            <p><strong>Genre:</strong> {podcastGenres.map(genre => {
              const genreName = genresMapping[genre] || 'Unknown Genre';
              console.log(`Genre ID: ${genre}, Genre Name: ${genreName}`); // Debug log
              return genreName;
            }).join(', ')}</p>
            <p><strong>Seasons:</strong> {seasons.length}</p>

            <label htmlFor="season-select">Select Season:</label>
            <select id="season-select" onChange={handleSeasonChange}>
              {seasons.map((season, index) => (
                <option key={index} value={index}>Season {index + 1}</option>
              ))}
            </select>

            {selectedSeason && (
              <div className="season-details">
                <h3>Season {seasons.indexOf(selectedSeason) + 1}</h3>
                <p><strong>Genre:</strong> {getSeasonGenres(selectedSeason)}</p>
                <div className="season-card">
                  <img src={selectedSeason.image} alt={`Season ${seasons.indexOf(selectedSeason) + 1}`} className="season-image" />
                  <div className="season-info">
                    <p>{selectedSeason.description}</p>
                    <ul>
                      {selectedSeason.episodes.map((episode, index) => (
                        <li key={index}>
                          <button onClick={() => setPlayingEpisode(episode)}>
                            {episode.title}
                          </button>
                          <button onClick={() => addToFavorites(episode)}>Add to Favorites</button>
                          <p>{episode.description}</p>
                          <audio controls> <source src={episode.file} />
                            Your browser does not support the audio element.
                          </audio>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastDetails;
