import { useState } from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI
import { Box, Button, Grid } from '@material-ui/core';
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
    <Grid item xs={4}>
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
        <select
          name="category"
          defaultValue="Choose a category"
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="Choose a category" disabled>
            Choose a category
          </option>
          <option value="1">Funny</option>
          <option value="2">Cohort</option>
          <option value="3">Cartoon</option>
          <option value="4">NSFW</option>
          <option value="5">Meme</option>
        </select>
        <input type="submit" value="Select Category" />
      </form>
      <Box mb={2} />
      <img className="search-result-image" src={favorite.image_url} />
    </Grid>
  );
}

export default FavoriteViewItem;
