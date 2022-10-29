import { useState, useEffect } from 'react'
import './style.css';

import useUserLastSearch from '../../hooks/useUserLastSearch';

function SearchBar({ handleSearchInput }) {
  const [ keyword, setKeyword ] = useState('')
  const { handleUserLastSearch, userLastSearch} = useUserLastSearch({ searchInput: keyword})

  console.log(userLastSearch)
  return (
    <div>
      <div className='search-container'>
        <div className='search'>
          <input 
            className='search-term'
            placeholder='Search a nasa related image'
            type='text'
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
          />
          <button 
            className='search-button'
            onClick={() => {
              handleSearchInput(keyword)
              handleUserLastSearch(keyword)
            }}
          >
            Search
          </button>
        </div>


        <div>
          {userLastSearch.map(lastSearch => (
            <div>
              <div>{lastSearch}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
