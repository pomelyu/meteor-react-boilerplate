import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';

import TextSubmit from './TextSubmit.jsx';
import ScoreItem from './ScoreItem.jsx';

/* eslint-disable react/jsx-no-bind */
const ScoreList = ({ style, scoreSheets, onIncrease, onDecrease, onRemove, onCreate }) => (
  <div style={style}>
    <TextSubmit style={{ width: '100%' }} onTextSubmit={onCreate}  />
    <List style={{ marginTop: 10 }}>
      {
        scoreSheets.map(({ _id, score, name, disabled }) => (
          <ScoreItem
            key={_id}
            name={name}
            score={score}
            disabled={disabled}
            onIncrease={onIncrease.bind(this, _id)}
            onDecrease={onDecrease.bind(this, _id)}
            onRemove={onRemove.bind(this, _id)}
          />
        ))
      }
    </List>
  </div>
);

ScoreList.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  scoreSheets: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    type: PropTypes.string,
    score: PropTypes.number,
    name: PropTypes.string,
    disabled: PropTypes.bool,
  })),
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  onRemove: PropTypes.func,
  onCreate: PropTypes.func,
};

/* eslint-disable no-unused-vars */
ScoreList.defaultProps = {
  style: {},
  scoreSheets: [],
  onIncrease: (id) => {},
  onDecrease: (id) => {},
  onRemove: (id) => {},
  onCreate: (text) => {},
};

export default ScoreList;
