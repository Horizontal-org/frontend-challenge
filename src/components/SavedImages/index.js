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
    <div className='post-list'>
        {savedImages.map( (image, index) => (
          <div className='post' key={index}>
            <figure className='post-image'>
                <img src={image.href} alt={image.title}/>
            </figure>
            <div>
              <span>{image.title}</span>
              
            </div>
          </div>
        ))}
    </div>
  );
}

export default SavedImagesGallery;
