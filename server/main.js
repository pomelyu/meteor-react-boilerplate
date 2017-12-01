import { Meteor } from 'meteor/meteor';

import '../imports/startup/server/accounts-server.js';
import '../imports/collections/score_sheets.js';
import '../imports/collections/user_state.js';
import '../imports/api/methods/score_sheets_method.js';
import '../imports/api/methods/user_state_method.js';
import '../imports/api/publications/score_sheet_publication.js';
import '../imports/api/publications/user_state_publication.js';

Meteor.startup(() => {
  // code to run on server at startup
});
