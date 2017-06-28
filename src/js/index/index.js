import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from '../reducers/reducer';
import {routes} from '../routes/route.js';
//注意reducer这里不能import引入的模板名为index
var loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
ReactDOM.render((
  <Provider store={store}>
    <Router routes={routes} history={hashHistory}/>
  </Provider>
), document.getElementById('root'));
