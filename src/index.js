/* Import Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

/* Import App */
import App from './components/App/App';

const addFavorite = function* (action) {
  console.log('in addFavorite', action);

  try {
    // send to the server
    yield axios.post('/api/favorite', action.payload); 

    // get the favorite lists from db
    yield put ({
      type: 'GET_FAVORITE'
    })

  } 
  catch (err) {
    console.error(err);
  }; // end try catch

}; // end addFavorite

const getFavorite = function* (action) {
  try {
    // gets data from server
    const response = yield axios.get('/api/favorite');

    yield put ({
      type: 'SET_FAVORITE',
      payload: response.data
    })
  }
  catch (err) {
    console.error(err)
  }
}; // end getFavorite

function* rootSaga() {

    // listen for this and do function
    yield takeEvery('ADD_TO_FAVORITES', addFavorite)

    yield takeEvery('GET_FAVORITE', getFavorite)
  
}; // end rootSaga

const sagaMiddleware = createSagaMiddleware();

//  reducers
const favoriteGiphy = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return [...state, action.payload];
    default:
      return state;
  }
}

const giphyResults = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    giphyResults,
    favoriteGiphy
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
