import React, { Component } from 'react';
import ListItem from './ListItem';
import _ from 'lodash';

const removeFromItems = (list, item) => {
  return _.filter(list, i => {
    return i.value !== item;
  })
};

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [
        { value: 'shirts'},
        { value: 'shoes'},
        { value: 'pants'},
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(item) {
    this.setState({items: removeFromItems(this.state.items, item)});
  }
  render() {
    const listItems = this.state.items.map(function(item) {
      return (
        <ListItem key={item.value} item={item.value} deleteItem={this.deleteItem} />
      )
    }, this);
    return (
      <div>
        <h3>You are watching {listItems.length} items!</h3>
        <div className="row">
          {listItems}
        </div>
      </div>
    );
  }
}

export default View;