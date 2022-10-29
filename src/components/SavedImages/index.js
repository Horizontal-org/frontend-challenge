import { useState, useEffect } from 'react'
import './style.css';

function SavedImagesGallery() {
  const [savedImages, setSavedImages] = useState([])

  useEffect(() => {
    const data = window.localStorage.getItem("saved_images")
    if(data) {
        setSavedImages(JSON.parse(data))
    }

  }, [])

  return (
    <div>
        {savedImages.map( (image, index) => (
          <div key={index}>
            <img src={image.href} alt={image.title}/>
            <div>
              <span>{image.title}</span>
              
            </div>
          </div>
        ))}
    </div>
  );
}

export default SavedImagesGallery;
