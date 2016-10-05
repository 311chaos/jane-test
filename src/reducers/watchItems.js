import _ from 'lodash';
import actionTypes from '../actions/actionTypes';


const watchItems = (state=[], action) => {
  switch(action.type) {
    case actionTypes.watchItemAdd:
      if(!_.find(state, { value: action.value })) {
        return state.concat([{value: action.value}]);
      }
      return state;
    case actionTypes.watchItemRemove:
      return _.filter(state, tag => {
        return tag.value !== action.value;
      });
    default:
      return state;
  }
};


export default watchItems;