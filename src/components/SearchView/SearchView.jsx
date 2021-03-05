import { useState } from 'react';
import { useDispatch } from 'react-redux';

import SearchResults from '../SearchResults/SearchResults';

// MATERIAL UI
import {
  Button,
  Box,
  Input,
  InputLabel,
  FormHelperText,
} from '@material-ui/core';

function SearchView() {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('search clicked', searchQuery);
    dispatch({
      type: 'SEARCH_IMAGES',
      payload: searchQuery,
    });
    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <Box paddingTop={3} />
        <Input
          aria-describedby="helper-text"
          type="text"
          margin="dense"
          placeholder="Search..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <FormHelperText id="helper-text">
          Search for any Gif that comes to your mind
        </FormHelperText>
        <Box paddingTop={3} />
        <Button color="primary" variant="outlined" type="submit">
          Submit
        </Button>
      </form>

      <SearchResults />
    </>
  );
}

export default SearchView;
