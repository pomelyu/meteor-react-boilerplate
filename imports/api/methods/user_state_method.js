import { Meteor } from 'meteor/meteor';

import UserState, { defaultSchema } from '../../collections/user_state.js';

/* Schema
*  _id: { type: String },
*  currentType: { type: String },
*/

/* eslint-disable meteor/audit-argument-checks  */
Meteor.methods({

  'user_state.create': function(userId) {
    UserState.insert({ _id: userId, ...defaultSchema });
  },

  'user_state.setType': function(newType) {
    UserState.update({ _id: Meteor.userId() }, { $set: { currentType: newType } });
  },
})
