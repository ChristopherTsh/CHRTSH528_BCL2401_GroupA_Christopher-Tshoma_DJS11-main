import React from 'react';
import Api from "../Api/Api"
import './Favorite.css';

function Favorite({ favorites, removeFromFavorites }) {
  return (
    <div className="favorite-content">
      <h2>Your Favorite Podcasts</h2>
      {favorites.length === 0 ? (
        <p>You have no favorite podcasts yet.</p>
      ) : (
        <div className="podcast-list">
          {favorites.map((podcast, index) => (
            <Api key={index} podcast={podcast} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorite;
