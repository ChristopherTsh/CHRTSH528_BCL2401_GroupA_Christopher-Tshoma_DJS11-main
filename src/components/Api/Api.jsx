import React from "react";
import { useNavigate } from "react-router-dom";
import './ApiLayout.css'


function PodcastCard({ podcast, addToFavorites }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/podcast/${podcast.id}`);
  };

  return (
    <div className="podcast-card">
      <img src={podcast.image} alt={podcast.title} onClick={handleDetailsClick} />
      <h3 onClick={handleDetailsClick}>{podcast.title}</h3>
      <button onClick={() => addToFavorites(podcast)}>Favorite</button>
    </div>
  );
}

export default PodcastCard;

  
  

