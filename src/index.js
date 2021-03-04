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

function* searchImages(action) {
  console.log('searchImages', action);
  try {
    let response = yield axios.post('/api/search', action.payload);
    console.log('response', response.data);
    yield put({
      type:'SET_IMAGES',
      payload: response.data
    })
  }
  catch(err) {
    console.log('error in search', err);
  }
}

function* rootSaga() {
  yield takeEvery('SEARCH_IMAGES', searchImages);
}

const sagaMiddleware = createSagaMiddleware();

const giphyResults = (state = [], action) => {
  switch (action.type) {
    case ('SET_IMAGES'):
      return [...state, ...action.payload]
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
