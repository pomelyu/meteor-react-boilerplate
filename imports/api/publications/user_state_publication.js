import { Meteor } from 'meteor/meteor';

import UserState from '../../collections/user_state.js';

Meteor.publish('user_state.me', () => {
  return UserState.find({ _id: Meteor.userId() });
})
