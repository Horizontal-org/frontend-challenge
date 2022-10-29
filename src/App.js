import { useState, useEffect } from 'react'
import SearchBar from './components/SearchInput'
import Cards from './components/Cards';
import './App.css';
import SavedImagesGallery from './components/SavedImages';

const NASA_URL = 'https://images-api.nasa.gov/search?q='

function App() {
  const [ images, setImages ] = useState([])
  const [ searchInput, setSearchInput ] = useState('')
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch(`${NASA_URL}${searchInput}&media_type=image`)
      const data = await res.json()

      setImages(data.collection.items.slice(0, 25))
    }

    fetchData()
  }, [searchInput])

  return (
    <div className="App">
      <SearchBar handleSearchInput={setSearchInput}  />

      <div className='imageContainer'>
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? 'Downloaded images' : 'Nasa Search result'}
        </div>

        {!toggle && <Cards images={images}/>}

        {toggle && <SavedImagesGallery />}
        
      </div>
    </div>
  );
}

export default App;
