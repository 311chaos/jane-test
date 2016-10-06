import actionTypes from '../actions/actionTypes';

const idle = (state=false, action) => {
  switch(action.type) {
    case actionTypes.onIdle:
      return true;
    case actionTypes.onActive:
      return false;
    default:
      return false;
  }
};

export default idle;