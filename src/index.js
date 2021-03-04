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

function* addToFavorites(action) {
  console.log('*** in addToFavorites() ***');
  console.log('\taction:', action);

  try {
    yield axios.post('/api/favorite', action.payload);

    // ToDo -> update favorites list
    yield put({
      type: '',
    });
  } catch (error) {
    alert('An ERROR occurred during query. Please try again later');
    console.log('ERROR in POST /:', error);
  }
}

function* rootSaga() {
  yield takeEvery('', addToFavorites);
}

const sagaMiddleware = createSagaMiddleware();

const giphyResults = (state = dragonList, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    giphyResults,
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
