import React, { useState } from "react";
import "./Header.css";

export default function Header({ onSearch, onSortOrderChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleSortOrderChange = (sortOrder) => {
    onSortOrderChange(sortOrder);
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
      <button className="sort-button" onClick={() => handleSortOrderChange('A-Z')}>Sort A-Z</button>
      <button className="sort-button" onClick={() => handleSortOrderChange('Z-A')}>Sort Z-A</button>
    </header>
  );
}
