/* Import Libraries */
import { useSelector } from 'react-redux';

/* Import Child Component */
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem';

/**
 * Function grabs giphy search results from the Redux store
 * and renders them to the DOM.
 */
function SearchResults() {
  /* Grab search results from Redux store reducer */
  const giphyResults = useSelector((store) => store.giphyResults);

  return (
    // Container for search results
    <div className="search-results-container">
      {/* Loop through images to display each and add favorite button */}
      {giphyResults.map((image, i) => {
        return (
          // Individual containers for each search result image
          <SearchResultsItem key={i} image={image} />
        );
      })}
    </div>
  );
}

export default SearchResults;
