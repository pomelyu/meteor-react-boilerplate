import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import UserState from '../../collections/user_state.js';
import ScoreSheets from '../../collections/score_sheets.js';
import ScoreList from '../components/ScoreList.jsx';

const mapTrackerToProps = withTracker(() => {
  const { currentType } = UserState.findOne({ _id: Meteor.userId }) || { currentType: 'history' };
  Meteor.subscribe('score_sheets.sorted', currentType);

  const scoreSheets = ScoreSheets.find({}).fetch();
  scoreSheets.forEach(sheet => sheet.disabled = (sheet.recorder !== Meteor.userId()));

  return {
    scoreSheets,
    onIncrease: (id) => Meteor.call('score_sheets.increase', id),
    onDecrease: (id) => Meteor.call('score_sheets.decrease', id),
    onRemove: (id) => Meteor.call('score_sheets.remove', id),
    onCreate: (text) => Meteor.call('score_sheets.create', currentType, text),
  }
});

const ScoreListContainer = mapTrackerToProps(ScoreList)
export default ScoreListContainer;