import { connect } from 'react-redux';
import { addWatchedItem } from '../actions'
import EditComp  from '../components/Edit';

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.item
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (input) => {
      if(input.item)
        dispatch(addWatchedItem(input.item));
    }
  }
};

const wrappedEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComp);

export default wrappedEditContainer;

