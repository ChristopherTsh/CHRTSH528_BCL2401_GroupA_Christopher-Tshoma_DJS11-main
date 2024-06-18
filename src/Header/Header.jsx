import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src="path/to/logo.png" alt="Logo" className="header-logo" />
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
}
