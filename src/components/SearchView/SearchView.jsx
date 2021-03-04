import { useState } from 'react';
import { useDispatch } from 'react-redux';

import SearchResults from '../SearchResults/SearchResults';

function SearchView() {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('search clicked', searchQuery);
    dispatch({
      type: '',
      payload: searchQuery,
    });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <input type="submit" value="Search" />
      </form>

      <SearchResults />
    </div>
  );
}

export default SearchView;
