import { useState, useEffect } from 'react'
import './style.css';

import useUserLastSearch from '../../hooks/useUserLastSearch';

function SearchBar({ handleSearchInput }) {
  const [ keyword, setKeyword ] = useState('')
  const { handleUserLastSearch, userLastSearch} = useUserLastSearch({ searchInput: keyword})

  console.log(userLastSearch)
  return (
    <div className='searchInput'>
        <input 
          type='text'
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <div>
          {userLastSearch.map(lastSearch => (
            <div>
              <div>{lastSearch}</div>
            </div>
          ))}
        </div>
        <button onClick={() => {
          handleSearchInput(keyword)
          handleUserLastSearch(keyword)
        }}
        >
          Search
        </button>
    </div>
  );
}

export default SearchBar;
