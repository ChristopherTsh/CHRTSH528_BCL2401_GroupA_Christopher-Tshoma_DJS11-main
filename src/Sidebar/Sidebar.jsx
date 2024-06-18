import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    return (
      <div className="sidebar">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    );
  }
  
 