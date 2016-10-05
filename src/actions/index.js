

export const deleteWatchedItem = (text) => {

};

export const addWatchedItem = (text) => {
  return {
    type: 'ADD',
    value: text.item
  }
};
