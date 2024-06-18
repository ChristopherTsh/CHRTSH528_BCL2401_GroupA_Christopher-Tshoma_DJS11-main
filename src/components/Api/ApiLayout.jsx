import React, { useState, useEffect } from "react";
import Api from "./Api";
// import PodcastCard from './PodcastCard';
import "./Api.css";

export default function ApiLayout() {
  const [podcasts,setPodcasts ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

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
            {podcasts.slice(0, visibleCount).map((podcast, index) => (
              <Api key={index} image={podcast.image} title={podcast.titles} />
            ))}
            </div>
          {visibleCount < podcasts.length && (
            <button className="show-more" onClick={showMore}>More</button>
          )}
        </>
      )}
    </div>
  );
}