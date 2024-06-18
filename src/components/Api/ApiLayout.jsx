import React, { useState, useEffect } from "react";
import Api from "./Api";
import "./Api.css";

export default function ApiLayout({ addToFavorites, searchTerm, sortOrder  }) {
  const [podcasts,setPodcasts ] = useState([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((response) => response.json())
      .then((data) => {
        setPodcasts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = podcasts;
    if (searchTerm) {
      filtered = podcasts.filter(podcast =>
        podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sortOrder) {
      filtered = filtered.sort((a, b) => {
        if (sortOrder === 'A-Z') {
          return a.title.localeCompare(b.title);
        } else if (sortOrder === 'Z-A') {
          return b.title.localeCompare(a.title);
        }
        return 0;
      });
    }
    setFilteredPodcasts(filtered);
  }, [podcasts, searchTerm, sortOrder]);



  const showMore = () => {
    setVisibleCount(prevCount => prevCount + 4); 
  };

  return (
    <div className="main-content">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>Dive into the stories that move us.</h2>
          <div className="podcast-list">
            {filteredPodcasts.slice(0, visibleCount).map((podcast, index) => (
              <Api key={index} podcast={podcast} addToFavorites={addToFavorites}  />
            ))}
            </div>
          {visibleCount < filteredPodcasts.length && (
            <button className="show-more" onClick={showMore}>More</button>
          )}
        </>
      )}
    </div>
  );
}