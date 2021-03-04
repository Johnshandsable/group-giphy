import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

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
        <div key={favorite.id}className="individ_favorite">
          <img src={favorite.image_url} />
        </div>
        )
      })}

    </div>
  )
}; // end favoriteView

export default FavoriteView;