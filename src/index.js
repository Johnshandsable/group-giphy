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

function* rootSaga() {}

const sagaMiddleware = createSagaMiddleware();

const giphyResults = (state = [], action) => {
  switch (action.type) {
    default:
      return;
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
