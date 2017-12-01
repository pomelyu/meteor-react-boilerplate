import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

/* eslint-disable react/jsx-no-bind, react/prop-types */
class TextSubmit extends React.Component {
  state = { text: '' }

  onTextChange(event, value) {
    this.setState({ text: value });
  }

  onTextSubmit() {
    const { text } = this.state;
    const { onTextSubmit } = this.props;
    onTextSubmit(text);
    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;
    const { style } = this.props;

    return (
      <div style={{ ...style, display: 'flex', flexDirection: 'row' }}>
        <div>
          <TextField id="new_score_text" value={text} onChange={this.onTextChange.bind(this)} />
        </div>
        <div style={{ marginLeft: 10 }}>
          <RaisedButton primary onClick={this.onTextSubmit.bind(this)} label="Add" />
        </div>
      </div>
    )
  }
}

export default TextSubmit;
