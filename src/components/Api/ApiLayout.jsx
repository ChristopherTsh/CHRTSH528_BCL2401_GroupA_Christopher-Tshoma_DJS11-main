import React, { useState, useEffect } from 'react';
import Api from './Api';
import './ApiLayout.css';

export default function ApiLayout({ addToFavorites, searchTerm, sortOrder, selectedGenre }) {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const podcastsPerPage = 4;

  useEffect(() => {
    setLoading(true);
    fetch('https://podcast-api.netlify.app/shows')
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setPodcasts(data);
      })
      .catch(error => {
        console.error('Error fetching podcasts:', error);
        setLoading(false);
      });
  }, []);

  const filteredPodcasts = podcasts
    .filter(podcast => 
      (selectedGenre === 'All' || podcast.genres.includes(selectedGenre)) &&
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'A-Z') {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === 'Z-A') {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  const indexOfLastPodcast = currentPage * podcastsPerPage;
  const indexOfFirstPodcast = indexOfLastPodcast - podcastsPerPage;
  const currentPodcasts = filteredPodcasts.slice(indexOfFirstPodcast, indexOfLastPodcast);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="api-layout">
      <div className="podcast-list">
        {currentPodcasts.map(podcast => (
          <Api key={podcast.id} podcast={podcast} addToFavorites={addToFavorites} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage} disabled={indexOfLastPodcast >= filteredPodcasts.length}>Next</button>
      </div>
    </div>
  );
}
