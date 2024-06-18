import React, { useState } from "react";
import "./Header.css";

export default function Header({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
      e.preventDefault();
      onSearch(searchTerm);
    };
  
    return (
      <header className="header">
        <div className="wrap">
          <form className="search" onSubmit={handleSearch}>
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <button onClick={() => onSearch('A-Z')}>Sort A-Z</button>
        <button onClick={() => onSearch('Z-A')}>Sort Z-A</button>
      </header>
    );
}
