import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class EditView extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3>Enter a type of item to watch:</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Field name="item" component="input" type="text" placeholder="Enter to Submit" />
        </form>
      </div>
    );
  }
}

//Decorate the view with reduxForm
EditView = reduxForm({
  form: 'addWatchItem'
})(EditView);

export default EditView;