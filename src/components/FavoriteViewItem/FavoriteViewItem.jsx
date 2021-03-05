import { useState } from 'react';
import { useDispatch } from 'react-redux';

function FavoriteViewItem({favorite}) {

  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('');

  const setCategory = (event) => {
    event.preventDefault();
    console.log('category set', selectedCategory);
    dispatch({
      type: 'SET_CATEGORY',
      payload: {
        category: selectedCategory,
        id: favorite.id
      }
    })
  }

  const unFavorite = function () {
    console.log('favorite id:', favorite.id);

    dispatch({
      type: 'DELETE_FAVORITE',
      payload: favorite.id
    })
  }

  return (
    <div className="individ_favorite">
      <div className="img-container">
        <img src={favorite.image_url} />
      </div>
      <div className='dropdown-container'>
      <form onSubmit={setCategory}>
      {/* hard code values for basemode - refactor to generate options based on category list */}
      <select name="category" defaultValue="Choose a category" onChange={(event) => setSelectedCategory(event.target.value)}>
        <option value="Choose a category" disabled>Choose a category</option>
        <option value="1">Funny</option>
        <option value="2">Cohort</option>
        <option value="3">Cartoon</option>
        <option value="4">NSFW</option>
        <option value="5">Meme</option>
      </select>
        <input type="submit" value="Select Category" />
      </form>
      <button type="button" onClick={unFavorite}>Delete</button>
      </div>
    </div>
  )
}

export default FavoriteViewItem;