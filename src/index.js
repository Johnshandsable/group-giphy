/* Import Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

const dragonList = [
  'https://m.media-amazon.com/images/I/61Hj7h3wleL._AC_SL1024_.jpg',
  'https://media.istockphoto.com/illustrations/red-dragon-head-digital-painting-illustration-id1183916666?k=6&m=1183916666&s=170667a&w=0&h=r0j8_L08luju5A-2EbFsB6CUznw5m6nfkN-cIoUiwlk=',
  'https://i.ytimg.com/vi/gdNLiiaNOdk/maxresdefault.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Welsh_Dragon_%28Y_Ddraig_Goch%29.svg/1200px-Welsh_Dragon_%28Y_Ddraig_Goch%29.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/330px-Smaug_par_David_Demaret.jpg',
  'https://api.time.com/wp-content/uploads/2014/06/how-to-train-your-dragon-2-movie-still.jpg?quality=85&w=1200&h=628&crop=1',
];

/* Import App */
import App from './components/App/App';

function* searchImages(action) {
  console.log('searchImages', action);
  try {
    let response = yield axios.post('/api/search', action.payload);
    console.log('response', response.data);
    yield put({
      type: 'SET_IMAGES',
      payload: response.data,
    });
  } catch (err) {
    console.log('error in search', err);
  }
}

const addFavorite = function* (action) {
  console.log('in addFavorite', action);

  try {
    // send to the server
    yield axios.post('/api/favorite', { image_url: action.payload });

    // get the favorite lists from db
    yield put({
      type: 'GET_FAVORITE',
    });
  } catch (err) {
    console.error(err);
  } // end try catch
}; // end addFavorite

const getFavorite = function* (action) {
  try {
    // gets data from server
    const response = yield axios.get('/api/favorite');

    yield put({
      type: 'SET_FAVORITE',
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
  }
}; // end getFavorite

function* rootSaga() {
  // listen for this and do function
  yield takeEvery('ADD_TO_FAVORITES', addFavorite);

  yield takeEvery('GET_FAVORITE', getFavorite);

  yield takeEvery('SEARCH_IMAGES', searchImages);
} // end rootSaga

const sagaMiddleware = createSagaMiddleware();

//  reducers
const favoriteGiphy = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return [...state, action.payload];
    default:
      return state;
  }
};

const giphyResults = (state = dragonList, action) => {
  switch (action.type) {
    case 'SET_IMAGES':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    giphyResults,
    favoriteGiphy,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
