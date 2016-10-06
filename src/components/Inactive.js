import React, { Component } from 'react';

class Inactive extends Component {
  render() {
    if(this.props.idle) {
      return (
        <div className="idle">
          <h3>Are you still there?</h3>
        </div>
      );
    }
    return null;
  }
}

export default Inactive;
