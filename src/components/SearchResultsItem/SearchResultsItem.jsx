/* Import Libraries */
import { useDispatch } from 'react-redux';

// MATERIAL UI
import { Box, Grid, Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

/**
 *Function renders GIPHY image in search results list
 *
 * @param {string} image  url to giphy image
 */
function SearchResultsItem({ image }) {
  const dispatch = useDispatch();

  /* Function adds the image to the "favorites" table in 
     the database */
  const addToFavorites = () => {
    dispatch({
      type: 'ADD_TO_FAVORITES',
      payload: image.images.original.url,
    });
  };

  return (
    <Grid item xs={4}>
      <Button
        color="primary"
        variant="outlined"
        onClick={addToFavorites}
        endIcon={<FavoriteIcon></FavoriteIcon>}
      >
        Favorite
      </Button>

      <Box mb={2} />

      <img
        className="search-result-image"
        src={image.images.original.url}
        alt="random gif"
      />
    </Grid>
  );
}

export default SearchResultsItem;
