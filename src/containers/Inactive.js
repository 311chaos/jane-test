import { connect } from 'react-redux';
import InactiveComp from '../components/Inactive';

const mapStateToProps = (state) => {
  return {
    idle: state.idle || false
  }
};

const wrappedActionContainer = connect(
  mapStateToProps,
  null
)(InactiveComp);

export default wrappedActionContainer;