import { useState, useEffect } from 'react'
import './style.css';


function SearchBar({ handleSearchInput }) {
  const [ keyword, setKeyword ] = useState('')
  return (
    <div className='searchInput'>
        <input 
          type='text'
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <button onClick={() => handleSearchInput(keyword)}>Search</button>
    </div>
  );
}

export default SearchBar;
