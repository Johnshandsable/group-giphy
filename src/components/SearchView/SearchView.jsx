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

  /*
    <InputLabel htmlFor="my-input">Email address</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
  */

  return (
    <div>
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
    </div>
  );
}

export default SearchView;
