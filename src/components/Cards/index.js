import './style.css'
function Cards({ images }) {

  // move this to a hook
  const handleSaveImage = (href, title) => {
    const imageToSave = {
      href,
      title
    }

    const storedImages = window.localStorage.getItem("saved_images")

    if(!storedImages) {
        return window.localStorage.setItem("saved_images", JSON.stringify([imageToSave]))
    }
    const parsedStoredImages = JSON.parse(storedImages)

    const objectToInsert = [
        ...parsedStoredImages,
        imageToSave
    ]
    
    window.localStorage.setItem("saved_images", JSON.stringify(objectToInsert))
  }
  return (
    <div className='post-list'>
        {images.map( (image, index) => (
          <div className='post' key={index}>
            <figure className='post-image'>
              <img src={image.links[0].href} alt={image.data[0].title}/>
            </figure>
            <div>
              <div className='download-button-container'>
                <div 
                  className='download-button'
                  onClick={() => handleSaveImage(
                    image.links[0].href,
                    image.data[0].title
                  )}
                >
                  Save Image
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Cards;
