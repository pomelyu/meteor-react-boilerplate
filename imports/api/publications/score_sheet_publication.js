import { Meteor } from 'meteor/meteor';
import { publishComposite } from 'meteor/reywood:publish-composite';

import ScoreSheet from '../../collections/score_sheets.js';
import UserState from '../../collections/user_state.js';

/* eslint-disable meteor/audit-argument-checks  */
Meteor.publish('score_sheets.all', (type) => {
  return ScoreSheet.find({ type });
});


publishComposite('score_sheets.all.currentType', {
  find() {
    return UserState.find({ _id: Meteor.userId() });
  },
  children: [{
    find(state) {
      const { currentType } = state;
      return ScoreSheet.find({ type: currentType });
    }
  }],
})
