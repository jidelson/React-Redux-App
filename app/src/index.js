import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {reducer} from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';

const middlewares = [thunk]

if (process.ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
