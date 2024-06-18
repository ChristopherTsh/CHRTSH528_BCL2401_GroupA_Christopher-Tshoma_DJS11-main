import React from "react";
import './ApiLayout.css'

export default  function PodcastCard({ image, title }) {
    return (
      <div className="podcast-card">
        <img src={image} alt={title} className="podcast-image" />
        <h3>{title}</h3>
      </div>
    );
  }
  
  

