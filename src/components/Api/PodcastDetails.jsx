import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PodcastDetails.css';

const PodcastDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then(response => response.json())
      .then(data => {
        setShow(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const seasons = (show?.seasons && Object.values(show.seasons)) || [];

  return (
    <div
      className="podcast-details"
      style={{ backgroundImage: `url(${show.image})` }}
    >
      <div className="podcast-content">
        <h1>{show.title}</h1>
        <p>{show.description}</p>
        <div className="seasons">
          {seasons.map((season, index) => (
            <div key={index} className="season">
              <h3>Season {index + 1}</h3>
              <ul>
                {season.episodes.map((episode, episodeIndex) => (
                  <li key={episodeIndex}>{episode.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastDetails;
