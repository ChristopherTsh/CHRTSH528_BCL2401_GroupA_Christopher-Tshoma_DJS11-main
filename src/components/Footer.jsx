import React, { useEffect, useRef } from 'react';
import './FooterAudioPlayer.css';

const FooterAudioPlayer = ({ playingEpisode }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [playingEpisode]);

  if (!playingEpisode) return null;

  return (
    <div className="footer-audio-player">
      <img src={playingEpisode.image} alt={playingEpisode.title} className="footer-audio-image" />
      <div className="footer-audio-info">
        <h3>{playingEpisode.title}</h3>
        <audio controls ref={audioRef}>
          <source src={playingEpisode.audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default FooterAudioPlayer;
