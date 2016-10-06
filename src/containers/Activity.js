import { connect } from 'react-redux';
import ActionComp from '../components/Activity';
import actionTypes from '../actions/actionTypes';

const mapDispatchToProps = (dispatch) => {
  return {
    onActivity: (e) => {
      dispatch({type: actionTypes.onActivity, e});
    }
  }
};

const wrappedActionContainer = connect(
  null,
  mapDispatchToProps
)(ActionComp);

export default wrappedActionContainer;