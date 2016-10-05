import React, { Component } from 'react';
import Edit from './Edit'

class EditView extends Component {
  render() {
    return (
      <div>
        <Edit onSubmit={() => {console.log('HERE')}}/>
      </div>
    );
  }
}

export default EditView;