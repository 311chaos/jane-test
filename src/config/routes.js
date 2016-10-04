import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import App from '../App';
import Edit from '../components/Edit';;

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Edit}/>

    </Route>
  </Router>
);

export default routes;