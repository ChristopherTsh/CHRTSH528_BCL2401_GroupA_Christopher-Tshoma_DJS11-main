import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-link">Home</Link>
      <Link to="/favorites" className="sidebar-link">Favorites</Link>
      <button className="sidebar-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Sidebar;
