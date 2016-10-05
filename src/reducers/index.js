import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import watchItems from './watchItems';


const testApp = combineReducers({
  watchItems,
  form: formReducer.plugin({
    addWatchItem: (state, action) => {
      switch(action.type) {
        case 'redux-form/SET_SUBMIT_SUCCEEDED': //should be a const
          return undefined;
        default:
          return state;
      }
    }
  })
});

export default testApp;