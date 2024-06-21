import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import ApiLayout from "./components/Api/ApiLayout";
import Sidebar from "./Sidebar/Sidebar";
import Favorite from "./components/Favorite/Favorite";
import PodcastDetails from "./components/Api/PodcastDetails";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [playingEpisode, setPlayingEpisode] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (podcast) => {
    setFavorites((prevFavorites) => [...prevFavorites, podcast]);
  };

  const removeFromFavorites = (episodeId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== episodeId)
    );
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode"); // Toggle dark mode class on body
  };

  return (
    <Router>
      <div className={`app ${darkMode ? "dark-mode" : ""}`}>
        <Header
          onSearch={handleSearch}
          onSortOrderChange={handleSortOrderChange}
          toggleDarkMode={toggleDarkMode}
        />
        <Sidebar
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <ApiLayout
                  addToFavorites={addToFavorites}
                  searchTerm={searchTerm}
                  sortOrder={sortOrder}
                  selectedGenre={selectedGenre}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorite
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
            <Route
              path="/podcast/:id"
              element={
                <PodcastDetails
                  addToFavorites={addToFavorites}
                  setPlayingEpisode={setPlayingEpisode}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
