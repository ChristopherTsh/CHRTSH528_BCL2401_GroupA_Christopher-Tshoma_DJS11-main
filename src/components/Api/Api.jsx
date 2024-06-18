import React from "react";
import './ApiLayout.css'

export default  function PodcastCard({  podcast, addToFavorites}) {
    return (
        <div className="podcast-card">
          <img className="podcast-image" src={podcast.image} alt={podcast.title} />
          <h2 className="podcast-title">{podcast.title}</h2>
          <button className="favorite-button" onClick={() => addToFavorites(podcast)}>
             favorite
          </button>
        </div>
      );
  }
  
  

