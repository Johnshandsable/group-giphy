import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// MATERIAL UI
import { Button, Grid, Typography } from '@material-ui/core';
import FavoriteViewItem from '../FavoriteViewItem/FavoriteViewItem';

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
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        {favoriteList.map((favorite) => {
          return <FavoriteViewItem key={favorite.id} favorite={favorite} />;
        })}
      </Grid>
    </>
  );
};

export default FavoriteView;
