import React, { Component } from 'react';
import ListItem from './ListItem';


class View extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(item) {
    // this.setState({items: removeFromItems(this.props.watchItems, item)});
  }
  render() {
    const listItems = this.props.watchItems.map(function(item) {
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