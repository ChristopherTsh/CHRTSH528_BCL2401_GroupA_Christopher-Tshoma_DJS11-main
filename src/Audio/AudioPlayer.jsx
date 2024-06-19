import React from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ episode, setPlayingEpisode }) => {
  const handlePlay = () => {
    setPlayingEpisode(episode);
  };

  return (
    <div className="audio-player">
      <img src={episode.image} alt={episode.title} className="audio-image" />
      <div className="audio-info">
        <h3>{episode.title}</h3>
        <button onClick={handlePlay}>Play</button>
      </div>
    </div>
  );
};

export default AudioPlayer;
