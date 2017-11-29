import { withTracker } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';

import App from '../components/App.jsx';
import { setCounterCount } from '../actions/counterActions.js';

// eslint-disable-next-line no-unused-vars
const mapTrackerToProps = withTracker(({ count }) => {
  // Do something
  return {};
});

const mapStateToProps = state => ({
  count: state.getIn(['counterReducer', 'count']),
});

const mapDispatchToProps = dispatch => ({
  setCounterCount: count => dispatch(setCounterCount(count)),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(mapTrackerToProps(App));
export default AppContainer;
