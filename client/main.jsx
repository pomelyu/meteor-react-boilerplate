import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from '../imports/ui/store/configStore';
import AppContainer from '../imports/ui/containers/AppContainer.js';

injectTapEventPlugin();

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('app'));
});
