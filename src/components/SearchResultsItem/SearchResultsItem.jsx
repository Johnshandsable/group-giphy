/* Import Libraries */
import { useDispatch } from 'react-redux';

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
    <div className="search-result-image">
      <img src={image.images.original.url} alt="random gif" />
      <button onClick={addToFavorites}>Favorite</button>
    </div>
  );
}

export default SearchResultsItem;
