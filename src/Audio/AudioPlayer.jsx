import React, { useEffect, useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = ({ episode, image, setPlayingEpisode }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('play', () => setPlayingEpisode(episode));
      return () => {
        audio.removeEventListener('play', () => setPlayingEpisode(episode));
      };
    }
  }, [episode, setPlayingEpisode]);

  return (
    <div className="audio-player">
      <img src={image} alt={episode.title} />
      <div>
        <h3>{episode.title}</h3>
        <audio ref={audioRef} controls>
          <source src={episode.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;
