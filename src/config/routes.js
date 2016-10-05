import React from 'react';
import { Route, Router, IndexRedirect, browserHistory } from 'react-router';

import App from '../App';
import View from '../containers/View';
import Edit from '../containers/Edit';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/view" />
      <Route path="view" component={View} />
      <Route path="edit" component={Edit} />
    </Route>
  </Router>
);

export default routes;