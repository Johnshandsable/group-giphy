import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI
import { Button, Grid, Typography } from '@material-ui/core';

const FavoriteView = function () {
  const dispatch = useDispatch();

  // get the redux state to a local variable
  const favoriteList = useSelector((store) => store.favoriteGiphy);

  useEffect(() => {
    getFavorites();
  }, []);

  console.log('favorite list is', favoriteList);

  const getFavorites = function () {
    dispatch({
      type: 'GET_FAVORITE',
    });
  }; // end getFavorites

  const unFavorite = function (e) {
    console.log(e.target.id);

    dispatch({
      type: 'DELETE_FAVORITE',
      payload: e.target.id,
    });
  };

  return (
    <>
      <div className="spacing"></div>
      <h2>Favorite GIFs</h2>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {favoriteList.map((favorite) => {
          return (
            <>
              <img
                className="search-result-image"
                key={favorite.id}
                src={favorite.image_url}
              />
              <button id={favorite.id} onClick={unFavorite}>
                Delete
              </button>
            </>
          );
        })}
      </Grid>
    </>
  );
}; // end favoriteView

export default FavoriteView;
