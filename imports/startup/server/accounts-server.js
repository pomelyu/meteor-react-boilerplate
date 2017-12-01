import { Accounts } from 'meteor/accounts-base';

import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser((options, user) => {
  const { _id: userId } = user;
  Meteor.call('user_state.create', userId);

  if (options.profile) {
    user.profile = options.profile;
  }
  return user;
});
