import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import UserState from '../../collections/user_state.js';
import TypeNavigator from '../components/TypeNavigator.jsx';

const mapTrackerToProps = withTracker(() => {
  const { currentType } = UserState.findOne({ _id: Meteor.userId }) || { currentType: 'history' };

  return {
    value: currentType,
    onTypeChange: (type) => Meteor.call('user_state.setType', type),
  }
});

const TypeNavigatorContainer = mapTrackerToProps(TypeNavigator)
export default TypeNavigatorContainer;
