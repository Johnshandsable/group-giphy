import { useState } from 'react';
import { useDispatch } from 'react-redux';

function FavoriteViewItem({favorite}) {

  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('');

  const setCategory = () => {
    console.log('category set', selectedCategory);
    dispatch({
      type: 'SET_CATEGORY',
      payload: selectedCategory
    })
  }

  return (
    <div className="individ_favorite">
      <div className="img-container">
        <img src={favorite.image_url} />
      </div>
      <div className='dropdown-container'>
      <form onSubmit={setCategory}>
      <select name="category" defaultValue="Choose a category" onChange={(event) => setSelectedCategory(event.target.value)}>
        <option value="Choose a category" disabled>Choose a category</option>
        <option value="funny">Funny</option>
        <option value="cohort">Cohort</option>
        <option value="cartoon">Cartoon</option>
        <option value="nsfw">NSFW</option>
        <option value="meme">Meme</option>
      </select>
        <input type="submit" value="Select Category" />
      </form>
      </div>
    </div>
  )
}

export default FavoriteViewItem;