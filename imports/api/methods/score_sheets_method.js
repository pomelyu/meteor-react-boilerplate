import { Meteor } from 'meteor/meteor';

import ScoreSheet from '../../collections/score_sheets.js';

/* Schema
*  _id: { type: String },
*  type: { type: String },
*  score: { type: Number },
*  name: { type: String },
*  recorder: { type: String },
*/

/* eslint-disable meteor/audit-argument-checks  */
Meteor.methods({
  
  'score_sheets.create': function(type, name) {
    ScoreSheet.insert({ name, type, score: 0, recorder: Meteor.userId() });
  },

  'score_sheets.remove': function(sheetId) {
    ScoreSheet.remove({ _id: sheetId });
  },

  'score_sheets.increase': function(sheetId) {
    ScoreSheet.update({ _id: sheetId }, { $inc: { score: 1 } });

    // if (Meteor.isClient) {
    //   ScoreSheet.update({ _id: sheetId }, { $inc: { score: 1 } });
    // }

    // if (Meteor.isServer) {
    //   const delay2second = Meteor.wrapAsync((callback) => setTimeout(callback, 2000));
    //   delay2second();
    //   ScoreSheet.update({ _id: sheetId }, { $inc: { score: -1 } });
    // }
  },

  'score_sheets.decrease': function(sheetId) {
    ScoreSheet.update({ _id: sheetId }, { $inc: { score: -1 } })
  }
});
