import React from 'react';
import AudioPlayer from './AudioPlayer';
import './SeasonDetails.css';

const SeasonDetails = ({ season, podcastImage }) => {
  return (
    <div className="season-details">
      <h2>Season Details</h2>
      {season.episodes.map((episode, idx) => (
        <AudioPlayer key={idx} episode={episode} image={podcastImage} />
      ))}
    </div>
  );
};

export default SeasonDetails;
