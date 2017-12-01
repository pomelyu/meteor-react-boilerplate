import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const ScoreSheets = new Mongo.Collection('score_sheets');

ScoreSheets.schema = new SimpleSchema({
  _id: { type: String },
  type: { type: String },
  score: { type: Number },
  name: { type: String },
  recorder: { type: String },
});

export default ScoreSheets;
