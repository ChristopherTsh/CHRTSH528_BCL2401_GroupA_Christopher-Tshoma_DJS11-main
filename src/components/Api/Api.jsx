import React from "react";
import { useNavigate } from "react-router-dom";
import './ApiLayout.css'


function PodcastCard({ podcast, addToFavorites }) {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/podcast/${podcast.id}`);
  };

  return (
    <div className="podcast-card" onClick={handleDetailsClick}>
      <img src={podcast.image} alt={podcast.title} />
      <h3>{podcast.title}</h3>
      <button onClick={(e) => { e.stopPropagation(); // Prevents navigating when clicking the button
        addToFavorites(podcast);
      }}>Favorite</button>
    </div>
  );
}

export default PodcastCard;

  
  

