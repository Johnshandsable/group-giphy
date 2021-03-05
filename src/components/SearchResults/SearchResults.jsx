/* Import Libraries */
import { useSelector } from 'react-redux';

/* Import Child Component */
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem';

// MATERIAL UI
import { Grid } from '@material-ui/core';

/**
 * Function grabs giphy search results from the Redux store
 * and renders them to the DOM.
 */
function SearchResults() {
  /* Grab search results from Redux store reducer */
  const giphyResults = useSelector((store) => store.giphyResults);

  return (
    // Container for search results
    <>
      <div className="spacing"></div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {/* Loop through images to display each and add favorite button */}
        {giphyResults.map((image, i) => {
          return (
            // Individual containers for each search result image
            <SearchResultsItem key={i} image={image} />
          );
        })}
      </Grid>
    </>
  );
}

export default SearchResults;
