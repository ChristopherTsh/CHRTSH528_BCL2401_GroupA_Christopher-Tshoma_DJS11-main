import React, { useState }  from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="sidebar">
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Link to="/" className="sidebar-link">Home</Link>
      <Link to="/favorites" className="sidebar-link">Favorites</Link>
    </div>
  );
};

export default Sidebar;
 