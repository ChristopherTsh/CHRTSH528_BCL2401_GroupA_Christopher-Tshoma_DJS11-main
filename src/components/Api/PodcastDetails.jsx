import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import AudioPlayer from '/src/Audio/AudioPlayer';
import './PodcastDetails.css';

export default function PodcastDetails({ addToFavorites, setPlayingEpisode }) {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then(response => response.json())
      .then(data => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!podcast) {
    return <div>Podcast not found</div>;
  }

  const seasons = podcast?.seasons || [];

  return (
    <div className="podcast-details" style={{ backgroundImage: `url(${podcast.image})` }}>
      <div className="podcast-content">
        <button onClick={() => navigate(-1)} className="back-button">Back</button>
        <img src={podcast.image} alt={podcast.title} className="podcast-image" />
        <h2>{podcast.title}</h2>
        <p>{podcast.description}</p>
        <p><strong>Last Updated:</strong> {podcast.updated}</p>
        <p><strong>Genre:</strong> {podcast.genres}</p>
        <p><strong>Seasons:</strong> {seasons.length}</p>

        <label htmlFor="season-select">Select Season:</label>
        <select id="season-select" onChange={handleSeasonChange}>
          {seasons.map(( index) => (
            <option key={index} value={index}>Season {index + 1}</option>
          ))}
        </select>

        {selectedSeason && (
          <div className="season-details">
            <h3>Season {seasons.indexOf(selectedSeason) + 1}</h3>
            <p>{selectedSeason.description}</p>
            <ul>
              {selectedSeason.episodes.map((episode, index) => (
                <li key={index}>
                  <button onClick={() => setPlayingEpisode(episode)}>
                    {episode.title}
                  </button>
                  <button onClick={() => addToFavorites(episode)}>Add to Favorites</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
