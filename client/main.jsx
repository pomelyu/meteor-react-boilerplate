import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import store from '../imports/ui/store/configStore';
import App from '../imports/ui/components/App.jsx';

import '../imports/startup/client/accounts-config.js';
import '../imports/collections/score_sheets.js';
import '../imports/collections/user_state.js';
import '../imports/api/methods/score_sheets_method.js';
import '../imports/api/methods/user_state_method.js';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  floatingActionButton: {
    iconColor: '#666',
  },
});

Meteor.subscribe('user_state.me');

Meteor.startup(() => {
  render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('app'));
});
