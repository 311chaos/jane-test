import React from 'react';
import { Route, Router, IndexRedirect, hashHistory } from 'react-router';

import App from '../App';
import Edit from '../components/Edit';
import View from '../components/View';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/view" />
      <Route path="view" component={View} />
      <Route path="edit" component={Edit} />

    </Route>
  </Router>
);

export default routes;