import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import reducers from './reducers';
import App from './components/app';
import Signin from './components/auth/signin';
require('../style/scss/master.scss');

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin}>
        </Route>
      </Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));
