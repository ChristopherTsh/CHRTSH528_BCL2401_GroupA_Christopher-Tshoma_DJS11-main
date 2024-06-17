import React, { useState } from "react";
import Api from "./Api";

export default function ApiLayout(){

    const [images, setImages] = useState([]);
    const [titles, setTitles] = useState([]);
    const [loading, setLoading] = useState(null);

   
    return (
        <div>
        <Api setImages={setImages} setTitles={setTitles} setLoading={setLoading} />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className='root'>
              <h1 className='SHOWS'>Dive into the stories that move us. </h1>
            </div>
            <ul className='cards-grid'>
              {images.map((image, index) => (
                <dd key={index} className='card'>
                  <img className='card-image' src={image} alt={titles[index]} />
                  <h2 className='card-heading'>{titles[index]}</h2>
                </dd>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
}