import React, { useState, useEffect } from "react";
import "./Favorite.css";

const Favorite = ({ favorites, removeFromFavorites }) => {
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);

  const handleRemoveFavorite = (episodeId) => {
    const isCurrentEpisode = currentEpisode?.id === episodeId;
    removeFromFavorites(episodeId);
    if (isCurrentEpisode) {
      setCurrentEpisode(null);
      if (currentAudio) {
        currentAudio.pause();
        setCurrentAudio(null);
      }
    }
  };

  const handlePlayEpisode = (episode) => {
    if (currentAudio) {
      currentAudio.pause();
    }

    const audio = new Audio();
  const source = document.createElement('source');
  source.src = episode.file;
  audio.appendChild(source);
  audio.play();

  setCurrentAudio(audio);
  setCurrentEpisode(episode);
};

  useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [currentAudio]);

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorite episodes added yet.</p>
      ) : (
        <ul>
          {favorites.map((episode) => (
            <li key={episode.id} className="favorite-episode">
              <img src={episode.image} alt={episode.title} className="episode-image" />
              <div className="episode-details">
                <h2>{episode.title}</h2>
                <p>{episode.description}</p>
                <button onClick={() => handlePlayEpisode(episode)}>Play</button>
                <button onClick={() => handleRemoveFavorite(episode.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {currentEpisode && (
        <div className="current-episode">
          <h2>Now Playing: {currentEpisode.title}</h2>
          <img src={currentEpisode.image} alt={currentEpisode.title} className="episode-image" />
        </div>
      )}
    </div>
  );
};

export default Favorite;
