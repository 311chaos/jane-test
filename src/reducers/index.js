import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import watchItems from './watchItems';
import idle from './idle';
import actionTypes from '../actions/actionTypes';


const testApp = combineReducers({
  watchItems,
  idle,
  form: formReducer.plugin({
    addWatchItem: (state, action) => {
      switch(action.type) {
        case actionTypes.reduxFormSubmitted:
          return undefined;
        default:
          return state;
      }
    }
  })
});

export default testApp;