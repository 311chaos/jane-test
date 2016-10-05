import _ from 'lodash';
import { combineReducers } from 'redux';

const watchItems = (state=[], action) => {
  switch(action.type) {
    case 'ADD':
      if(!_.find(state, { value: action.value })) {
        return state.concat([{value: action.value}]);
      }
      return [];
    case 'REMOVE':
      return _.filter(state, tag => {
        return tag.value !== action.value;
      });
    case 'RESET':
      return [];
    default:
      return state;
  }
};

const testApp = combineReducers({
  watchItems
});

export default testApp;