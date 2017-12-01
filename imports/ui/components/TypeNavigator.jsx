import React from 'react';
import PropTypes from 'prop-types';

import { Tabs, Tab } from 'material-ui/Tabs';

/* eslint-disable react/jsx-no-bind */
const TypeNavigator = ({ style, value, onTypeChange }) => (
  <div style={style}>
    <Tabs value={value} onChange={onTypeChange}>
      <Tab label="History" value="history" />
      <Tab label="Foods" value="foods" />
      <Tab label="News" value="news" />
    </Tabs>
  </div>
);

TypeNavigator.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  value: PropTypes.string,
  onTypeChange: PropTypes.func,
};

/* eslint-disable no-unused-vars */
TypeNavigator.defaultProps = {
  style: {},
  value: 'history',
  onTypeChange: (type) => {},
};

export default TypeNavigator;
