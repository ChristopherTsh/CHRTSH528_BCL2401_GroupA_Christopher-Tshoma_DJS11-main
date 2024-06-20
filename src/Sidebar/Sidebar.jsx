import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ onToggleDarkMode }) => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    onToggleDarkMode(!isDarkMode);
  }; 

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <div className="toggle-switch">
        <input
          type="checkbox"
          id="dark-mode-toggle"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        <label htmlFor="dark-mode-toggle">
          <span>Dark Mode</span>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
