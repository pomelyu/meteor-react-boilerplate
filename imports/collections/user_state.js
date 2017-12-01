import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const UserState = new Mongo.Collection('user_state');

UserState.schema = new SimpleSchema({
  _id: { type: String },
  currentType: { type: String },
});

export const defaultSchema = {
  currentType: 'history',
};

export default UserState;
