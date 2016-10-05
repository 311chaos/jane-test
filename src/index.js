import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import watchItems from './reducers';
import { createStore } from 'redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import routes from './config/routes';

const store = createStore(watchItems);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
