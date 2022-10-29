import { useState, useEffect } from 'react'
import './style.css';

function Cards({ images }) {
  return (
    <div>
        {images.map( i => (
          <div key={i.data[0].title}>
            <img src={i.links[0].href} alt={i.data[0].title}/>
            <div>
              <span>{i.data[0].title}</span>
              <button>Download</button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cards;
