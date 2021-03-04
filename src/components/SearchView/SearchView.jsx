import { useState } from "react";
import { useDispatch } from 'react-redux';

function SearchView() {

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('search clicked', searchQuery);
    dispatch({
      type: 'SEARCH_IMAGES',
      payload: searchQuery
    })
    setSearchQuery('');
  }

  return(
    <form onSubmit={handleSearch}>
      <input type='text' placeholder='Search...' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
      <input type='submit' value="Search"/> 
    </form>
  )
}

export default SearchView;