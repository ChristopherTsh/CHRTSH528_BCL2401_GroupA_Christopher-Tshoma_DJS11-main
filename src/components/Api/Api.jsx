import React from "react";
import { Link } from "react-router-dom";
import "./Api.css";

const Api = ({ podcast, addToFavorites }) => {
  return (
    <div className="podcast-card">
      <img src={podcast.image} alt={podcast.title} className="podcast-image" />
      <h3>{podcast.title}</h3>
      <p>{podcast.description}</p>
      <Link to={`/podcast/${podcast.id}`}>View Details</Link>
      <button onClick={() => addToFavorites(podcast)}>Add to Favorites</button>
    </div>
  );
};

export default Api;
