import { Meteor } from 'meteor/meteor';
import { publishComposite } from 'meteor/reywood:publish-composite';

import ScoreSheet from '../../collections/score_sheets.js';
import UserState from '../../collections/user_state.js';

/* eslint-disable meteor/audit-argument-checks  */
Meteor.publish('score_sheets.sorted', (type) => {
  return ScoreSheet.find({ type }, { sort: { score: -1 } });
});


publishComposite('score_sheets.sorted.currentType', {
  find() {
    return UserState.find({ _id: Meteor.userId() });
  },
  children: [{
    find(state) {
      const { currentType } = state;
      return ScoreSheet.find({ type: currentType }, { sort: { score: -1 } });
    }
  }],
})
