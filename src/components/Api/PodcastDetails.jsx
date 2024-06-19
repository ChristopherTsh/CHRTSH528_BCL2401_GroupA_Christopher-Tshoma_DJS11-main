import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AudioPlayer from '../../Audio/AudioPlayer';
import './PodcastDetails.css';

export default function PodcastDetails({ addToFavorites, setPlayingEpisode  }) {
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
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
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
        <button onClick={() => navigate(-1)}>Back</button>
        <img src={podcast.image} alt={podcast.title} className="podcast-image" />
        <h1>{podcast.title}</h1>
        <button onClick={() => addToFavorites(podcast)}>Add to Favorites</button>
        <p>{podcast.description}</p>
        <div className="seasons">
          {seasons.map((season, index) => (
            <div key={index} className="season-card" onClick={() => handleSeasonClick(season)}>
              <img src={podcast.image} alt={`Season ${index + 1}`} />
              <h3>Season {index + 1}</h3>
              <button onClick={(e) => {
                e.stopPropagation();
                addToFavorites(season);
              }}>Add Season to Favorites</button>
            </div>
          ))}
        </div>
        {selectedSeason && (
          <div className="season-details">
            <h2>Season {seasons.indexOf(selectedSeason) + 1} Details</h2>
            <p>Last updated: {new Date(selectedSeason.updated).toLocaleDateString()}</p>
            {selectedSeason.episodes.map((episode, idx) => (
              <AudioPlayer key={idx} episode={episode} image={podcast.image} setPlayingEpisode={setPlayingEpisode} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
