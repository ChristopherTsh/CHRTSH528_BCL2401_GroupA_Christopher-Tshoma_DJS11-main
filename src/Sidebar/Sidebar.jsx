import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import "./Sidebar.css";

const Sidebar = ({ favorites = [] }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem('isDarkMode')) || false
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="sidebar">
      <h2>Favorites</h2>
      <ul>
        {favorites.length > 0 ? (
          favorites.map(fav => (
            <li key={fav.id}>
              <Link to={`/podcast/${fav.id}`}>{fav.title}</Link>
            </li>
          ))
        ) : (
          <li>No favorites yet</li>
        )}
      </ul>
      <div className="toggle-container">
        <ToggleSwitch isOn={isDarkMode} handleToggle={handleToggle} />
        <label>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</label>
      </div>
    </div>
  );
};

export default Sidebar;
 