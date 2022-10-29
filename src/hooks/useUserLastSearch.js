import { useState } from 'react'

const useUserLastSearch = ({
  searchInput
}) => {
  const [userLastSearch, setUserLastSearch] = useState([])

  const handleUserLastSearch = () => {
    if(userLastSearch.length === 5) {
      // if array is equal than 5 remove the first element to insert the new one
      setUserLastSearch(userLastSearch => userLastSearch.filter((_, i) => i !== 0))
    }

    setUserLastSearch(userLastSearch => [...userLastSearch, searchInput])
  }

  return {
    handleUserLastSearch,
    userLastSearch
  }
}

export default useUserLastSearch