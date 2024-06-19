import React from 'react';
import './Favorite.css';

export default function Favorite({ favorites, removeFromFavorites }) {
  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="favorite-list">
        {favorites.map((favorite, index) => (
          <div key={index} className="favorite-card">
            <img src={favorite.image} alt={favorite.title || `Season ${index + 1}`} className="favorite-image" />
            <div className="favorite-details">
              <h3>{favorite.title || `Season ${index + 1}`}</h3>
              <button onClick={() => removeFromFavorites(favorite)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
