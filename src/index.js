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
  
}; // end addFavorite

function* rootSaga() {

  try {
    // listen for this and do function
    yield takeEvery('ADD_TO_FAVORITES', addFavorite)
  }
  catch (err) {
    console.error(err);
  }; // end try catch block

}; // end rootSaga

const sagaMiddleware = createSagaMiddleware();

const favoriteGiphy = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload];
    default:
      return state;
  }
}

const giphyResults = (state = [], action) => {
  switch (action.type) {
    default:
      return;
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
