import React from 'react';
import PropTypes from 'prop-types';

const App = ({ count, setCounterCount }) => (
  <div>
    <div style={{ fontSize: 36 }}>Welcome to Meteor!</div>
    <div style={{ marginTop: 20 }}>
      <button onClick={() => setCounterCount(count + 1)}>Click Me</button>
      <p>{`You've pressed the button ${count} times.`}</p>
    </div>
  </div>
);

App.propTypes = {
  count: PropTypes.number.isRequired,
  setCounterCount: PropTypes.func.isRequired,
};

export default App;
