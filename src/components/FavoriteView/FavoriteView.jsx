import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FavoriteViewItem from '../FavoriteViewItem/FavoriteViewItem';

const FavoriteView = function () {

  const dispatch = useDispatch();

  // get the redux state to a local variable
  const favoriteList = useSelector(store => store.favoriteGiphy);

  useEffect(() => {
    getFavorites();
  }, []);

  console.log('favorite list is', favoriteList);

  const getFavorites = function () {
    dispatch({
      type: 'GET_FAVORITE'
    }); 
  }; // end getFavorites

  return (
    <div className='all_favorites'>
      <h2>Favorite GIFs</h2>
      {favoriteList.map(favorite => {
        return (
          <FavoriteViewItem key={favorite.id} favorite={favorite}/>
        )
      })}
    </div>
  )
}; // end favoriteView

export default FavoriteView;