import React from 'react';
import './Favorite.css';

const Favorite = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="favorite-page">
      <h2>Your Favorites</h2>
      <div className="favorite-list">
        {favorites.map((fav, index) => (
          <div key={index} className="favorite-item">
            <img src={fav.image} alt={fav.title} className="favorite-image" />
            <div className="favorite-info">
              <h3>{fav.title}</h3>
              <button onClick={() => removeFromFavorites(fav)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
