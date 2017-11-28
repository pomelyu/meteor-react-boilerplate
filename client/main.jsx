import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from '../imports/ui/components/App';

injectTapEventPlugin();

Meteor.startup(() => {
  render(
    <App />,
    document.getElementById('app'));
});
