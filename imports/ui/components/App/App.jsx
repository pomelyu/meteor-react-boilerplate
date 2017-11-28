import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };

    this.handleCounterOnClick = this.handleCounterOnClick.bind(this);
  }

  handleCounterOnClick() { this.setState({ counter: this.state.counter + 1 }) }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <div style={{ fontSize: 36 }}>Welcome to Meteor!</div>
        <div style={{ marginTop: 20 }}>
          <button onClick={this.handleCounterOnClick}>Click Me</button>
          <p>{`You've pressed the button ${counter} times.`}</p>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  // Data type of props
};

App.defaultProps = {
  // Default value of Props
};

export default App;
