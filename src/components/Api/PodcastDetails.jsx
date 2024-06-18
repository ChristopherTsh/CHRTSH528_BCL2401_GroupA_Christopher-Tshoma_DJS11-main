import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PodcastDetails.css';

function PodcastDetails() {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then(response => response.json())
      .then(data => {
        setPodcast(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const seasons = (podcast?.seasons && Object.values(podcast.seasons)) || [];

  return (
    <div className="podcast-details">
      {loading ? (
        <div>Loading...</div>
      ) : (
        podcast && (
          <>
            <h1>{podcast.title}</h1>
            <img src={podcast.image} alt={podcast.title} />
            <p>{podcast.description}</p>
            <h2>Seasons</h2>
            {seasons.map((season, index) => (
              <div key={index} className="season">
                <h3>Season {index + 1}</h3>
                <ul>
                  {season.episodes.map((episode, idx) => (
                    <li key={idx}>{episode.title}</li>
                  ))}
                </ul>
              </div>
            ))}
          </>
        )
      )}
    </div>
  );
}

export default PodcastDetails;
