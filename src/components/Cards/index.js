import { useState, useEffect } from 'react'
import './style.css';

function Cards({ images }) {
  return (
    <div>
        {images.map( (image, index) => (
          <div key={index}>
            <img src={image.links[0].href} alt={image.data[0].title}/>
            <div>
              <span>{image.data[0].title}</span>
              <button>Download</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cards;
