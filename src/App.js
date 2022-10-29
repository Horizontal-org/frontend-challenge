import { useState, useEffect } from 'react'
import SearchBar from './components/SearchInput'
import Cards from './components/Cards';
import './App.css';
import SavedImagesGallery from './components/SavedImages';

const NASA_URL = 'https://images-api.nasa.gov/search?q='

function App() {
  const [ images, setImages ] = useState([])
  const [ searchInput, setSearchInput ] = useState('rings')
  const [ toggle, setToggle ] = useState(false)
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true)
      const res = await fetch(`${NASA_URL}${searchInput}&media_type=image`)
      const data = await res.json()

      setImages(data.collection.items.slice(0, 25))
      setLoading(false)
    }

    fetchData()
  }, [searchInput])

  return (
    <div className="App">
      <SearchBar handleSearchInput={setSearchInput}  />

      <div className='imageContainer'>
        <div
          className='toggle-container'
        >
          <div className='toggle' onClick={() => setToggle(!toggle)}>
            {toggle ? 'See Nasa Search Results' : 'See Saved Images'}
          </div>
        </div>
        {images.length === 0 && (
          <div className='toggle-container'>No images with that name. Try with some Keywords such as "Space", "Moon", "Earth"</div>
        )}
        {loading && <div className='toggle-container'>Loading...</div>}
        {(!toggle && !loading)  && <Cards images={images}/>}

        {toggle && <SavedImagesGallery />}
        
      </div>
    </div>
  );
}

export default App;
