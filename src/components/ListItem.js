import React, { Component } from 'react';

//Other Styles are cascaded, this is showing another way to style a component.
const ListItemStyle = {
  position: 'absolute',
  right: 25,
  cursor: 'pointer',
  padding: 5,
  color: '#f07558',
  fontSize: 20
};

class ListItem extends Component {
  render() {
    const { item } = this.props;
    const imageSrc = `https://dummyimage.com/300x200/fff/7cd8cb.png&text=${item}`;
    return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <a style={ListItemStyle} tabIndex="-1"  onClick={() => this.props.deleteItem(this.props.item)}>x</a>
          <img src={imageSrc} alt={item}/>
        </div>
      </div>
    );
  }
}

export default ListItem;