import { connect } from 'react-redux';
import { addWatchedItem } from '../actions'
import EditView  from '../components/Edit';

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.item
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (item) => {
      dispatch(addWatchedItem(item));
    }
  }
};

const wrappedEditView = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditView);

export default wrappedEditView;

