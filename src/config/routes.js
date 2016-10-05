import React from 'react';
import { Route, Router, IndexRedirect, browserHistory } from 'react-router';

import App from '../App';
import EditView from '../components/EditView';
import View from '../components/View';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/view" />
      <Route path="view" component={View} />
      <Route path="edit" component={EditView} />
    </Route>
  </Router>
);

export default routes;