import {useSelector} from 'react-redux';

const FavoriteView = function () {

  // get the redux state to a local variable
  const favoriteList = useSelector(store => store.favoriteGiphy);

  return (
    <div className='all_favorites'>

      {favoriteList.map(favorite => {
        <div className="individ_favorite">
          <img src={favorite.url} />
        </div>
      })}

    </div>
  )
}; // end favoriteView

export default FavoriteView;