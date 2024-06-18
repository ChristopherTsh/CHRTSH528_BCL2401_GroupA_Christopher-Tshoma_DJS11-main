import React, { useState,useEffect } from "react";
import Api from "./Api"
import "./Api.css";

export default function ApiLayout(){

    const [images, setImages] = useState([]);
    const [titles, setTitles] = useState([]);
    const [loading, setLoading] = useState(true);

   
    useEffect(() => {
      fetch('https://podcast-api.netlify.app')
        .then(response => response.json())
        .then(data => {
          const images = data.map(item => item.image);
          const titles = data.map(item => item.title);
          setImages(images);
          setTitles(titles);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    }, []);
  
    return (
      <div className="main-content">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>Dive into the stories that move us.</h2>
          <div className="podcast-list">
            {images.map((image, index) => (
              <Api key={index} image={image} title={titles[index]} />
            ))}
          </div>
        </>
      )}
    </div>
  );
      
}