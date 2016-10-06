import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import createSagaMiddleware from 'redux-saga';

import routes from './config/routes';
import Activity from './containers/Activity';
import { trackActivity } from './sagas';


//TODO - Remove composeWithDevTools before going to prod.
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(trackActivity);

ReactDOM.render(
  <Provider store={store}>
    <Activity>
      {routes}
    </Activity>
  </Provider>,
  document.getElementById('root')
);
