import actionTypes from '../actions/actionTypes';

export const removeWatchedItem = (text) => {
  return {
    type: actionTypes.watchItemRemove,
    value: text.item
  }
};

export const addWatchedItem = (text) => {
  return {
    type: actionTypes.watchItemAdd,
    value: text.item
  }
};
