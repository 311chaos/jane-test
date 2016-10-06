import { connect } from 'react-redux';
import { removeWatchedItem } from '../actions'
import ViewComp  from '../components/View';

const mapStateToProps = (state) => {
  return {
    watchItems: state.watchItems || []
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => {
      dispatch(removeWatchedItem(item));
    }
  }
};

const wrappedViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewComp);

export default wrappedViewContainer;