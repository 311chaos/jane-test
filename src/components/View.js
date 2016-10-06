import React, { Component } from 'react';
import ListItem from './ListItem';


class View extends Component {
  render() {
    const listItems = this.props.watchItems.map(function(item) {
      return (
        <ListItem key={item.value} item={item.value} deleteItem={this.props.deleteItem} />
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