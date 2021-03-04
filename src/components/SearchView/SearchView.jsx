import { useState } from "react";
import { useDispatch } from 'react-redux';

function SearchView() {

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('search clicked', searchQuery);
    dispatch({
      type: '',
      payload: searchQuery
    })
  }

  return(
    <form onSubmit={handleSearch}>
      <input type='text' placeholder='Search...' value={searchQuery} onChange={setSearchQuery}></input>
      <input type='submit'>Search</input>
    </form>
  )
}

export default SearchView;