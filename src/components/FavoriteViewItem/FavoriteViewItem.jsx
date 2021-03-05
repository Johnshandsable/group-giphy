import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI
import {
  Box,
  Button,
  Grid,
  MenuItem,
  MenuList,
  Select,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function FavoriteViewItem({ favorite }) {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('');

  const setCategory = (event) => {
    event.preventDefault();
    console.log('category set', selectedCategory);
    dispatch({
      type: 'SET_CATEGORY',
      payload: {
        category: selectedCategory,
        id: favorite.id,
      },
    });
  };

  const unFavorite = function () {
    console.log('favorite id:', favorite.id);

    dispatch({
      type: 'DELETE_FAVORITE',
      payload: favorite.id,
    });
  };

  return (
    <Grid item xs={6}>
      <Box mt={4} />
      <Button
        color="secondary"
        variant="outlined"
        onClick={unFavorite}
        endIcon={<FavoriteBorderIcon></FavoriteBorderIcon>}
      >
        Unfavorite
      </Button>
      <form onSubmit={setCategory}>
        {/* hard code values for basemode - refactor to generate options based on category list */}
        <Box mb={2} />
        <Select
          name="category"
          defaultValue="Choose a category"
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <MenuList value="Choose a category" disabled>
            Choose a category
          </MenuList>
          <MenuItem value="1">Funny</MenuItem>
          <MenuItem value="2">Cohort</MenuItem>
          <MenuItem value="3">Cartoon</MenuItem>
          <MenuItem value="4">NSFW</MenuItem>
          <MenuItem value="5">Meme</MenuItem>
        </Select>
        <Box mb={2} />
        <Button color="primary" variant="outlined" value="Select Category">
          Submit
        </Button>
      </form>
      <Box mb={2} />
      <img className="search-result-image" src={favorite.image_url} />
    </Grid>
  );
}

export default FavoriteViewItem;
