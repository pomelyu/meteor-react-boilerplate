import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginRight: 10,
}

const scoreItem = ({ name, score, onIncrease, onDecrease, onRemove, disabled }) => (
  <ListItem 
    primaryText={name}
    secondaryText={String(score)}
    rightIconButton={
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={style}>
          <RaisedButton primary onClick={onIncrease} label="+" disabled={disabled} />
        </div>
        <div style={style}>
          <RaisedButton primary onClick={onDecrease} label="-" disabled={disabled} />
        </div>
        <div style={style}>
          <RaisedButton primary onClick={onRemove} label="x" disabled={disabled} />
        </div>
      </div>
    }
  />

  // </ListItem>
);

export default scoreItem;
